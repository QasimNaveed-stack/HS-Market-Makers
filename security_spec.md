# Security Specification: HS Market Makers Firestore

## 1. Data Invariants

1. **Identity & Ownership**: A review must be created only by an authenticated user whose `request.auth.uid` matches the document's `userId`.
2. **Review Data Privacy (Zero-PII Leak)**: Review documents do NOT contain user email addresses (`authorEmail`). Email is isolated to private `/users/{userId}` documents that only the authenticated user can access.
3. **Review Integrity**: The `rating` field must be an integer between 1 and 5. The `content` field must be a string between 5 and 1000 characters.
4. **Temporal Integrity**: `createdAt` must strictly match `request.time` upon creation (server timestamp).
5. **Immutability**: Once published, reviews cannot be modified (`allow update: if false;`).
6. **Owner-Only Deletion**: Only the original author (`request.auth.uid == existing().userId`) can delete their review.
7. **No Shadow Fields**: Keys created on review documents must strictly belong to the allowed set: `['userId', 'authorName', 'authorPhoto', 'rating', 'profit', 'pair', 'content', 'color', 'createdAt']`.
8. **Path Variable Hardening**: Document IDs must be valid alphanumeric strings up to 128 characters conforming to `^[a-zA-Z0-9_-]+$`.
9. **Public Visibility**: Reviews are publicly visible (`allow get, list: if true;`) to all visitors on the landing page.
10. **Moderation Reports**: Reports are stored in `/reports/{reportId}`. Authenticated users can submit a report, but reports cannot be read, updated, or deleted by client users, shielding moderation data from public exposure.

---

## 2. The "Dirty Dozen" Payloads

The following 12 attack vectors are designed to break identity, integrity, privacy, and state, and must return `PERMISSION_DENIED`:

### Payload 1: Unauthenticated Create
- **Target**: `POST /reviews/rev_1`
- **Auth**: `null`
- **Data**: `{"userId": "anon123", "authorName": "Hacker", "rating": 5, "content": "Fake review", "createdAt": request.time}`
- **Expected**: `PERMISSION_DENIED`

### Payload 2: Spoofed Author UID
- **Target**: `POST /reviews/rev_2`
- **Auth**: `uid: "user_alice"`
- **Data**: `{"userId": "user_bob", "authorName": "Bob Impersonator", "rating": 5, "content": "Great!", "createdAt": request.time}`
- **Expected**: `PERMISSION_DENIED`

### Payload 3: Shadow / PII Field Injection (`authorEmail`)
- **Target**: `POST /reviews/rev_3`
- **Auth**: `uid: "user_alice"`
- **Data**: `{"userId": "user_alice", "authorName": "Alice", "rating": 5, "content": "Nice!", "createdAt": request.time, "authorEmail": "alice@gmail.com"}`
- **Expected**: `PERMISSION_DENIED` (Rejected by strict `hasOnly` key schema)

### Payload 4: Invalid Out-of-Bounds Rating (> 5)
- **Target**: `POST /reviews/rev_4`
- **Auth**: `uid: "user_alice"`
- **Data**: `{"userId": "user_alice", "authorName": "Alice", "rating": 99, "content": "Super!", "createdAt": request.time}`
- **Expected**: `PERMISSION_DENIED`

### Payload 5: Zero or Negative Rating (< 1)
- **Target**: `POST /reviews/rev_5`
- **Auth**: `uid: "user_alice"`
- **Data**: `{"userId": "user_alice", "authorName": "Alice", "rating": 0, "content": "Terrible!", "createdAt": request.time}`
- **Expected**: `PERMISSION_DENIED`

### Payload 6: Content Too Short (< 5 chars)
- **Target**: `POST /reviews/rev_6`
- **Auth**: `uid: "user_alice"`
- **Data**: `{"userId": "user_alice", "authorName": "Alice", "rating": 5, "content": "Ok", "createdAt": request.time}`
- **Expected**: `PERMISSION_DENIED`

### Payload 7: Content Too Long (> 1000 chars - Denial of Wallet Attack)
- **Target**: `POST /reviews/rev_7`
- **Auth**: `uid: "user_alice"`
- **Data**: `{"userId": "user_alice", "authorName": "Alice", "rating": 5, "content": ("A" * 1005), "createdAt": request.time}`
- **Expected**: `PERMISSION_DENIED`

### Payload 8: Client-Fabricated Timestamp (Temporal Violation)
- **Target**: `POST /reviews/rev_8`
- **Auth**: `uid: "user_alice"`
- **Data**: `{"userId": "user_alice", "authorName": "Alice", "rating": 5, "content": "Legit review", "createdAt": "2020-01-01T00:00:00Z"}`
- **Expected**: `PERMISSION_DENIED`

### Payload 9: Unauthorized Deletion of Another User's Review
- **Target**: `DELETE /reviews/rev_alice` (where `resource.data.userId == 'user_alice'`)
- **Auth**: `uid: "user_mallory"`
- **Expected**: `PERMISSION_DENIED`

### Payload 10: Unauthorized Read of Another User's Private Profile
- **Target**: `GET /users/user_alice`
- **Auth**: `uid: "user_mallory"`
- **Expected**: `PERMISSION_DENIED`

### Payload 11: Attempt to Read Moderation Reports
- **Target**: `GET /reports/report_1`
- **Auth**: `uid: "user_alice"`
- **Expected**: `PERMISSION_DENIED`

### Payload 12: Modifying an Existing Review (Immutable Violation)
- **Target**: `UPDATE /reviews/rev_alice`
- **Auth**: `uid: "user_alice"`
- **Data**: `{"content": "Tampered review", "updatedAt": request.time}`
- **Expected**: `PERMISSION_DENIED`
