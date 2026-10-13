// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { FederatedSearchSchema } from "../federated/search.js";
const SharedSearchSchemaDefinition = z.object({
    createdAt: z.iso.datetime({ offset: true }),
    /** Stable shared-search UUID */
    id: z.uuid(),
    query: z.string(),
    result: FederatedSearchSchema,
    /** Canonical lowercase URL slug for the resource */
    slug: z
        .string()
        .regex(/^[a-z0-9_-]+$/)
        .max(255),
});
/**
 * A saved public search query and answer.
 *
 * @openapiSchema SharedSearch
 * @endpoint GET /v1/search/shared/{id}
 * @endpoint GET /v1/search/shared/slug/{slug}
 * @endpoint POST /v1/search/shared
 * @contractShape shared.search
 * @contractRole canonical
 */
export const SharedSearchSchema = SharedSearchSchemaDefinition;
//# sourceMappingURL=search.js.map