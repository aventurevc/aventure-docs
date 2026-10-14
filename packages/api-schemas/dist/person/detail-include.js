// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
/**
 * Profile panel to embed in a person detail read: graph, investorActivity, similar, blogPost, or investment.
 *
 * @openapiSchema PersonDetailInclude
 * @endpoint GET /v1/people/lookup-exact
 * @endpoint GET /v1/people/{personId}
 * @contractShape person.detail-include
 * @contractRole canonical
 */
export const PersonDetailIncludeSchema = z.enum([
    "graph",
    "investorActivity",
    "similar",
    "blogPost",
    "investment",
]);
//# sourceMappingURL=detail-include.js.map