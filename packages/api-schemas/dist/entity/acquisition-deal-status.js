// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const EntityAcquisitionDealStatusSchemaKnownMembers = z.enum(["Pending", "Completed", "Canceled"]);
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
export const EntityAcquisitionDealStatusSchema = Object.assign(z.union([EntityAcquisitionDealStatusSchemaKnownMembers, z.string()]), { enum: EntityAcquisitionDealStatusSchemaKnownMembers.enum });
//# sourceMappingURL=acquisition-deal-status.js.map