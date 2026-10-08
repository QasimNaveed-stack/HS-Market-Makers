import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore, doc, getDocFromServer } from 'firebase/firestore';
import firebaseConfig from '../../firebase-applet-config.json';

// Initialize Firebase App
export const app = initializeApp(firebaseConfig);

// Initialize Firestore with the provisioned database ID (CRITICAL: Required for enterprise/named database)
export const db = getFirestore(app, firebaseConfig.firestoreDatabaseId);

// Initialize Firebase Authentication
export const auth = getAuth(app);

// Google Auth Provider for popup login
export const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: 'select_account',
});

// Test connection on boot as mandated
export async function testFirestoreConnection(): Promise<void> {
  try {
    await getDocFromServer(doc(db, 'test', 'connection'));
  } catch (error) {
    if (error instanceof Error && error.message.includes('the client is offline')) {
      console.error('Please check your Firebase configuration.');
    }
  }
}

// Run connection test
testFirestoreConnection().catch(() => {});
