// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const EntityAcquisitionEvidenceSchemaDefinition = z.object({
    fundraiseInvestorJoin: z.boolean(),
    fundraiseTransaction: z.boolean(),
    operatingStatus: z.boolean(),
    relationship: z.boolean(),
});
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
export const EntityAcquisitionEvidenceSchema = EntityAcquisitionEvidenceSchemaDefinition;
//# sourceMappingURL=acquisition-evidence.js.map