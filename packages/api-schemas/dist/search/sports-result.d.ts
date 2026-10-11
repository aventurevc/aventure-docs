import { z } from "zod/v4";
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
export declare const SearchSportsResultSchema: z.ZodObject<{
    date: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    league: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    stage: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    team: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodType<{
        name: string;
        seeding?: number | null | undefined;
    }, import("./sports-team.ts").SearchSportsTeamSchemaInput, z.core.$ZodTypeInternals<{
        name: string;
        seeding?: number | null | undefined;
    }, import("./sports-team.ts").SearchSportsTeamSchemaInput>>>>>;
    venue: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
export type SearchSportsResult = z.infer<typeof SearchSportsResultSchema>;
//# sourceMappingURL=sports-result.d.ts.map