// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
/**
 * Role of the path entity in the acquisition. Defaults to acquired (the company that was bought). Pass acquirer to list acquisitions made by the path entity, or all to list both sides in one page.
 *
 * @openapiSchema EntityAcquisitionRole
 * @endpoint GET /v1/entities/{entityId}/acquisitions
 * @endpoint GET /v1/entities/{entityId}/acquisitions/{relationshipId}
 * @contractShape entity.acquisition-role
 * @contractRole canonical
 */
export const EntityAcquisitionRoleSchema = z.enum(["acquired", "acquirer", "all"]);
//# sourceMappingURL=acquisition-role.js.map