# Database Schema

## Main Tables

### Complaint
Stores all reported civic complaints.

Fields:
- id
- title
- description
- locationText
- latitude
- longitude
- imageUrl
- imagePublicId
- imageMimeType
- issueType
- severity
- status
- department
- aiSummary
- aiConfidence
- aiRawJson
- reportedByName
- reportedByEmail
- createdAt
- updatedAt

### ComplaintVerification
Stores before/after verification results.

Key fields:
- complaintId (unique)
- beforeImageUrl
- afterImageUrl
- afterImagePublicId
- afterImageMimeType
- verificationStatus (RESOLVED | UNRESOLVED | UNCLEAR)
- verificationSummary
- verificationConfidence
- aiRawJson

### ComplaintAuditLog
Stores important complaint changes such as status updates.

Key fields:
- complaintId
- action
- oldValue (json)
- newValue (json)
- createdAt
