// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { FederatedSearchSchema } from "../federated/search.js";
import { SharedSearchListSchema } from "./search-list.js";
const SharedSearchSchemaDefinition = z.object({
    /** Slug of the earliest share of the same query, compared case-insensitively. Pages name it as their canonical URL; equals publication.slug on that earliest share. */
    canonicalSlug: z
        .string()
        .regex(/^[a-z0-9_-]+$/)
        .max(255),
    publication: SharedSearchListSchema,
    result: FederatedSearchSchema,
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