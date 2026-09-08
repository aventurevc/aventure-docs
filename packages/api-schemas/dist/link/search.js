// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { FederatedSearchSchema } from "../federated/search.js";
const LinkSearchSchemaDefinition = z.object({
    /** Search query synthesized from the page content. */
    query: z.string(),
    /** Federated entity, person, and news results for the synthesized query. */
    related: FederatedSearchSchema,
    /** The fetched page URL after validation. */
    url: z.string(),
});
/**
 * Search results related to a shared article or page URL: the fetched URL, the search query synthesized from the page content, and the federated entity, person, and news results for that query.
 *
 * @openapiSchema LinkSearch
 * @endpoint GET /v1/search/link
 * @contractShape link.search
 * @contractRole canonical
 */
export const LinkSearchSchema = LinkSearchSchemaDefinition;
//# sourceMappingURL=search.js.map