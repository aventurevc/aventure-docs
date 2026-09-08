import { z } from "zod/v4";
declare const EntityAcquisitionEvidenceSchemaDefinition: z.ZodObject<{
    fundraiseInvestorJoin: z.ZodBoolean;
    fundraiseTransaction: z.ZodBoolean;
    operatingStatus: z.ZodBoolean;
    relationship: z.ZodBoolean;
}, z.core.$strip>;
type EntityAcquisitionEvidenceDefinition = z.infer<typeof EntityAcquisitionEvidenceSchemaDefinition>;
/**
 * Booleans confirming each managed row written by the acquisition endpoint.
 *
 * @openapiSchema EntityAcquisitionEvidence
 * @endpoint GET /v1/entities/{entityId}/acquisitions
 * @endpoint GET /v1/entities/{entityId}/acquisitions/{relationshipId}
 * @usedBySchema EntityAcquisitionSchema
 * @contractShape entity.acquisition-evidence
 * @contractRole canonical
 */
export declare const EntityAcquisitionEvidenceSchema: z.ZodType<EntityAcquisitionEvidenceDefinition>;
export type EntityAcquisitionEvidence = z.infer<typeof EntityAcquisitionEvidenceSchema>;
export {};
//# sourceMappingURL=acquisition-evidence.d.ts.map