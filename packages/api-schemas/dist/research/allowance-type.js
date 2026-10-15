// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const ResearchAllowanceTypeSchemaKnownMembers = z.enum([
    "COMPANY",
    "PERSON",
    "ENTITY_VIEW",
    "ENTITY_BRAND",
    "PERSON_VIEW",
    "WEB_SEARCH",
]);
/**
 * Metered allowance. `COMPANY` and `PERSON` meter research runs on company and person-profile targets; `ENTITY_VIEW`, `ENTITY_BRAND`, and `PERSON_VIEW` meter profile and brand reads; `WEB_SEARCH` meters web searches.
 *
 * @openapiSchema ResearchAllowanceType
 * @standardProblemResponse
 * @usedBySchema BillingCatalogAllowanceSchema
 * @usedBySchema HarnessRunSchema
 * @usedBySchema ProblemDetailSchema
 * @contractShape research.allowance-type
 * @contractRole canonical
 */
export const ResearchAllowanceTypeSchema = Object.assign(z.union([ResearchAllowanceTypeSchemaKnownMembers, z.string()]), { enum: ResearchAllowanceTypeSchemaKnownMembers.enum });
//# sourceMappingURL=allowance-type.js.map