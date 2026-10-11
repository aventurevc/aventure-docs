import { z } from "zod/v4";
declare const SearchSportsTeamSchemaDefinition: z.ZodObject<{
    name: z.ZodString;
    seeding: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
}, z.core.$strip>;
type SearchSportsTeamDefinition = z.infer<typeof SearchSportsTeamSchemaDefinition>;
export interface SearchSportsTeamSchemaInput extends z.input<typeof SearchSportsTeamSchemaDefinition> {
}
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
export declare const SearchSportsTeamSchema: z.ZodType<SearchSportsTeamDefinition, SearchSportsTeamSchemaInput>;
export type SearchSportsTeam = z.infer<typeof SearchSportsTeamSchema>;
export {};
//# sourceMappingURL=sports-team.d.ts.map