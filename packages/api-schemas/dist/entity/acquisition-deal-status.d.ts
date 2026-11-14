import { z } from "zod/v4";
/**
 * Deal status of an acquisition: Pending is announced and not yet closed, Completed has closed, Canceled was terminated before closing.
 *
 * @openapiSchema EntityAcquisitionDealStatus
 * @endpoint GET /v1/entities/{entityId}/acquisitions
 * @endpoint GET /v1/entities/{entityId}/acquisitions/{relationshipId}
 * @usedBySchema EntityAcquisitionSchema
 * @contractShape entity.acquisition-deal-status
 * @contractRole canonical
 */
export declare const EntityAcquisitionDealStatusSchema: z.ZodUnion<readonly [z.ZodEnum<{
    Canceled: "Canceled";
    Completed: "Completed";
    Pending: "Pending";
}>, z.ZodString]> & {
    enum: {
        Canceled: "Canceled";
        Completed: "Completed";
        Pending: "Pending";
    };
};
export type EntityAcquisitionDealStatus = z.infer<typeof EntityAcquisitionDealStatusSchema>;
//# sourceMappingURL=acquisition-deal-status.d.ts.map