// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { ContentSearchInterpretationSchema } from "./search-interpretation.js";
import { PageResultContentSchema } from "../pagination/schemas.js";
const ContentSearchResultSchemaDefinition = z.object({
    /** Structured interpretation used to run the content query. */
    interpretation: ContentSearchInterpretationSchema,
    /** Content page. */
    result: PageResultContentSchema,
});
/**
 * Natural-language content search result: planner interpretation plus page.
 *
 * @openapiSchema ContentSearchResult
 * @endpoint POST /v1/content/search
 * @endpoint POST /v1/entities/{entityId}/content/search
 * @endpoint POST /v1/people/{personId}/content/search
 * @contractShape content.search-result
 * @contractRole canonical
 */
export const ContentSearchResultSchema = ContentSearchResultSchemaDefinition;
//# sourceMappingURL=search-result.js.map