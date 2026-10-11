// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const SearchSportsTeamSchemaDefinition = z.object({
    /** Team name */
    name: z.string(),
    /** Tournament seeding when Google states one */
    seeding: z.int().nullish(),
});
/**
 * One team in a spotlighted game
 *
 * @openapiSchema SearchSportsTeam
 * @endpoint GET /v1/web/searches/jobs/{jobId}
 * @endpoint POST /v1/web/search
 * @usedBySchema SearchSportsResultSchema
 * @contractShape search.sports-team
 * @contractRole canonical
 */
export const SearchSportsTeamSchema = SearchSportsTeamSchemaDefinition;
//# sourceMappingURL=sports-team.js.map