// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { SearchSportsTeamSchema } from "./sports-team.js";
/**
 * Google's spotlight for one game the query names
 *
 * @openapiSchema SearchSportsResult
 * @endpoint GET /v1/web/searches/jobs/{jobId}
 * @endpoint POST /v1/web/search
 * @usedBySchema WebSearchSchema
 * @contractShape search.sports-result
 * @contractRole canonical
 */
export const SearchSportsResultSchema = z.object({
    /** Game date as Google states it */
    date: z.string().nullish(),
    /** League or tournament */
    league: z.string().nullish(),
    /** Stage of the competition */
    stage: z.string().nullish(),
    /** Teams in the game */
    team: z.array(SearchSportsTeamSchema).nullish(),
    /** Venue or stadium */
    venue: z.string().nullish(),
});
//# sourceMappingURL=sports-result.js.map