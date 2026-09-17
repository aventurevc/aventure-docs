// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { PageResultPublicationSchema } from "../pagination/schemas.js";
import { PublicationSearchInterpretationSchema } from "./search-interpretation.js";
const PublicationSearchResultSchemaDefinition = z.object({
    /** Structured interpretation used to run the content query. */
    interpretation: PublicationSearchInterpretationSchema,
    /** Publication page. */
    result: PageResultPublicationSchema,
});
/**
 * Natural-language content search result: planner interpretation plus page.
 *
 * @openapiSchema PublicationSearchResult
 * @endpoint POST /v1/content/search
 * @endpoint POST /v1/entities/{entityId}/content/search
 * @endpoint POST /v1/people/{personId}/content/search
 * @contractShape publication.search-result
 * @contractRole canonical
 */
export const PublicationSearchResultSchema = PublicationSearchResultSchemaDefinition;
//# sourceMappingURL=search-result.js.map