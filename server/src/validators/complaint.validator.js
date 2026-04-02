import { z } from "zod";

export const createComplaintSchema = z.object({
  imageUrl: z.string().url(),
  imagePublicId: z.string().optional(),
  imageMimeType: z.string().optional(),
  locationText: z.string().min(2),
  latitude: z.number().optional(),
  longitude: z.number().optional(),
  description: z.string().optional(),
  reportedByName: z.string().optional(),
  reportedByEmail: z.string().email().optional()
});

export const updateStatusSchema = z.object({
  status: z.enum(["PENDING", "IN_REVIEW", "ASSIGNED", "RESOLVED", "REJECTED"])
});