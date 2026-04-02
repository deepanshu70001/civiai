-- CreateEnum
CREATE TYPE "ComplaintStatus" AS ENUM ('PENDING', 'IN_REVIEW', 'ASSIGNED', 'RESOLVED', 'REJECTED');

-- CreateEnum
CREATE TYPE "SeverityLevel" AS ENUM ('LOW', 'MEDIUM', 'HIGH', 'CRITICAL');

-- CreateEnum
CREATE TYPE "IssueType" AS ENUM ('GARBAGE', 'POTHOLE', 'WATER_LEAK', 'STREETLIGHT', 'DRAINAGE', 'ROAD_DAMAGE', 'UNKNOWN');

-- CreateTable
CREATE TABLE "Complaint" (
    "id" TEXT NOT NULL,
    "title" TEXT,
    "description" TEXT,
    "locationText" TEXT NOT NULL,
    "latitude" DOUBLE PRECISION,
    "longitude" DOUBLE PRECISION,
    "imageUrl" TEXT NOT NULL,
    "imagePublicId" TEXT,
    "issueType" "IssueType" NOT NULL,
    "severity" "SeverityLevel" NOT NULL,
    "status" "ComplaintStatus" NOT NULL DEFAULT 'PENDING',
    "department" TEXT,
    "aiSummary" TEXT,
    "aiConfidence" DOUBLE PRECISION,
    "aiRawJson" JSONB,
    "reportedByName" TEXT,
    "reportedByEmail" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Complaint_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ComplaintVerification" (
    "id" TEXT NOT NULL,
    "complaintId" TEXT NOT NULL,
    "beforeImageUrl" TEXT NOT NULL,
    "afterImageUrl" TEXT NOT NULL,
    "afterImagePublicId" TEXT,
    "verificationStatus" TEXT NOT NULL,
    "verificationSummary" TEXT,
    "verificationConfidence" DOUBLE PRECISION,
    "aiRawJson" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ComplaintVerification_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ComplaintAuditLog" (
    "id" TEXT NOT NULL,
    "complaintId" TEXT NOT NULL,
    "action" TEXT NOT NULL,
    "oldValue" JSONB,
    "newValue" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ComplaintAuditLog_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Complaint_status_idx" ON "Complaint"("status");

-- CreateIndex
CREATE INDEX "Complaint_severity_idx" ON "Complaint"("severity");

-- CreateIndex
CREATE INDEX "Complaint_issueType_idx" ON "Complaint"("issueType");

-- CreateIndex
CREATE INDEX "Complaint_createdAt_idx" ON "Complaint"("createdAt");

-- CreateIndex
CREATE UNIQUE INDEX "ComplaintVerification_complaintId_key" ON "ComplaintVerification"("complaintId");

-- CreateIndex
CREATE INDEX "ComplaintAuditLog_complaintId_idx" ON "ComplaintAuditLog"("complaintId");

-- AddForeignKey
ALTER TABLE "ComplaintVerification" ADD CONSTRAINT "ComplaintVerification_complaintId_fkey" FOREIGN KEY ("complaintId") REFERENCES "Complaint"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ComplaintAuditLog" ADD CONSTRAINT "ComplaintAuditLog_complaintId_fkey" FOREIGN KEY ("complaintId") REFERENCES "Complaint"("id") ON DELETE CASCADE ON UPDATE CASCADE;
