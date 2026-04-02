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

### ComplaintAuditLog
Stores important complaint changes such as status updates.