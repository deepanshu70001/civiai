/*
  Warnings:

  - Changed the type of `verificationStatus` on the `ComplaintVerification` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "VerificationStatus" AS ENUM ('RESOLVED', 'UNRESOLVED', 'UNCLEAR');

-- AlterTable
ALTER TABLE "Complaint" ADD COLUMN     "imageMimeType" TEXT;

-- AlterTable
ALTER TABLE "ComplaintVerification" ADD COLUMN     "afterImageMimeType" TEXT,
DROP COLUMN "verificationStatus",
ADD COLUMN     "verificationStatus" "VerificationStatus" NOT NULL;
