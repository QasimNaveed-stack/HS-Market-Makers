import {
  collection,
  doc,
  setDoc,
  deleteDoc,
  onSnapshot,
  query,
  orderBy,
  limit,
  serverTimestamp,
  Timestamp,
} from 'firebase/firestore';
import { db } from './config';
import { handleFirestoreError, OperationType } from './errors';

export interface FirestoreReview {
  id: string;
  userId: string;
  authorName: string;
  authorPhoto?: string;
  rating: number;
  profit?: string;
  pair?: string;
  content: string;
  color?: string;
  createdAt?: Timestamp | null;
}

export interface CreateReviewPayload {
  userId: string;
  authorName: string;
  authorPhoto?: string;
  userEmail?: string; // Private; saved strictly to protected /users/{userId} document
  rating: number;
  profit?: string;
  pair?: string;
  content: string;
  color?: string;
}

export interface SubmitReportPayload {
  reviewId: string;
  reporterId: string;
  reason: string;
}

/**
 * Subscribes to live public reviews from Firestore ordered by creation date descending.
 * Notice: Reviews documents contain NO PII (no authorEmail).
 */
export function subscribeToReviews(
  callback: (reviews: FirestoreReview[]) => void,
  errorCallback?: (error: unknown) => void
): () => void {
  const reviewsCollection = collection(db, 'reviews');
  const reviewsQuery = query(
    reviewsCollection,
    orderBy('createdAt', 'desc'),
    limit(60)
  );

  return onSnapshot(
    reviewsQuery,
    (snapshot) => {
      const items: FirestoreReview[] = snapshot.docs.map((docSnap) => {
        const data = docSnap.data();
        return {
          id: docSnap.id,
          userId: data.userId,
          authorName: data.authorName,
          authorPhoto: data.authorPhoto,
          rating: Number(data.rating) || 5,
          profit: data.profit || '',
          pair: data.pair || 'XAU/USD',
          content: data.content || '',
          color: data.color || '#D4AF37',
          createdAt: data.createdAt,
        };
      });
      callback(items);
    },
    (error) => {
      if (errorCallback) {
        errorCallback(error);
      }
      handleFirestoreError(error, OperationType.LIST, 'reviews');
    }
  );
}

/**
 * Writes a newly authored review to Firestore without any PII.
 * If userEmail is provided, stores it in a private user document at /users/{userId}.
 */
export async function createReview(payload: CreateReviewPayload): Promise<string> {
  const newDocRef = doc(collection(db, 'reviews'));
  const reviewDocPath = `reviews/${newDocRef.id}`;

  try {
    // 1. Write the public review document (zero-PII)
    const publicReviewData: Record<string, unknown> = {
      userId: payload.userId,
      authorName: payload.authorName.slice(0, 100),
      rating: Math.max(1, Math.min(5, Math.floor(payload.rating))),
      content: payload.content.trim().slice(0, 1000),
      createdAt: serverTimestamp(),
    };

    if (payload.authorPhoto) {
      publicReviewData.authorPhoto = payload.authorPhoto.slice(0, 500);
    }
    if (payload.profit) {
      publicReviewData.profit = payload.profit.slice(0, 60);
    }
    if (payload.pair) {
      publicReviewData.pair = payload.pair.slice(0, 40);
    }
    if (payload.color) {
      publicReviewData.color = payload.color.slice(0, 20);
    }

    await setDoc(newDocRef, publicReviewData);

    // 2. If email provided, record it in private user document for administrative/account records
    if (payload.userEmail) {
      try {
        const userDocRef = doc(db, 'users', payload.userId);
        await setDoc(
          userDocRef,
          {
            email: payload.userEmail.slice(0, 150),
            displayName: payload.authorName.slice(0, 100),
            updatedAt: serverTimestamp(),
          },
          { merge: true }
        );
      } catch (userErr) {
        // Non-blocking for the review write
        console.warn('Private user profile sync skipped:', userErr);
      }
    }

    return newDocRef.id;
  } catch (error) {
    handleFirestoreError(error, OperationType.CREATE, reviewDocPath);
  }
}

/**
 * Deletes a review owned by the authenticated user.
 */
export async function deleteReview(reviewId: string): Promise<void> {
  const reviewDocPath = `reviews/${reviewId}`;
  try {
    await deleteDoc(doc(db, 'reviews', reviewId));
  } catch (error) {
    handleFirestoreError(error, OperationType.DELETE, reviewDocPath);
  }
}

/**
 * Submits a moderation report for a review to /reports/{reportId}.
 * Only authenticated users can file reports; reports cannot be read by clients.
 */
export async function submitReviewReport(payload: SubmitReportPayload): Promise<string> {
  const reportDocRef = doc(collection(db, 'reports'));
  const reportPath = `reports/${reportDocRef.id}`;
  try {
    await setDoc(reportDocRef, {
      reviewId: payload.reviewId,
      reporterId: payload.reporterId,
      reason: payload.reason.trim().slice(0, 500),
      createdAt: serverTimestamp(),
    });
    return reportDocRef.id;
  } catch (error) {
    handleFirestoreError(error, OperationType.CREATE, reportPath);
  }
}
