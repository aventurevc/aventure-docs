// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const FederatedSearchSectionSchemaKnownMembers = z.enum([
    "person",
    "company",
    "productService",
    "investor",
]);
/**
 * Result section a search page renders: people; companies (operating companies, business lines, nonprofits, and governments); products and services; or investors (investment firms and funds).
 *
 * @openapiSchema FederatedSearchSection
 * @endpoint GET /v1/search/link
 * @endpoint GET /v1/search/link/jobs/{jobId}
 * @endpoint GET /v1/search/shared/{id}
 * @endpoint GET /v1/search/shared/slug/{slug}
 * @endpoint POST /v1/search
 * @endpoint POST /v1/search/shared
 * @usedBySchema FederatedSearchSchema
 * @contractShape federated.search-section
 * @contractRole canonical
 */
export const FederatedSearchSectionSchema = Object.assign(z.union([FederatedSearchSectionSchemaKnownMembers, z.string()]), { enum: FederatedSearchSectionSchemaKnownMembers.enum });
//# sourceMappingURL=search-section.js.map