import { z } from "zod/v4";
/**
 * Acquisition stage/status values used by acquisition APIs and fundraise rollups. Acquisition is neutral before operating-status change; Acquired Subsidiary is completed and still operating; Acquired is terminal or folded, including Closed (Acquihire).
 *
 * @openapiSchema EntityAcquisitionStage
 * @endpoint GET /v1/entities/{entityId}/acquisitions
 * @endpoint GET /v1/entities/{entityId}/acquisitions/{relationshipId}
 * @usedBySchema EntityAcquisitionSchema
 * @contractShape entity.acquisition-stage
 * @contractRole canonical
 */
export declare const EntityAcquisitionStageSchema: z.ZodEnum<{
    Acquired: "Acquired";
    "Acquired Subsidiary": "Acquired Subsidiary";
    Acquisition: "Acquisition";
}>;
export type EntityAcquisitionStage = z.infer<typeof EntityAcquisitionStageSchema>;
//# sourceMappingURL=acquisition-stage.d.ts.map