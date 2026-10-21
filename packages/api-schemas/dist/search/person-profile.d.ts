import { z } from "zod/v4";
declare const SearchPersonProfileSchemaDefinition: z.ZodObject<{
    currentCompany: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    headline: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    location: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    name: z.ZodString;
    named: z.ZodString;
    organizationEvidence: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
        headline: "headline";
        none: "none";
        profile: "profile";
    }>>>;
    photoUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    profileUrl: z.ZodString;
}, z.core.$strip>;
type SearchPersonProfileDefinition = z.infer<typeof SearchPersonProfileSchemaDefinition>;
export interface SearchPersonProfileSchemaInput extends z.input<typeof SearchPersonProfileSchemaDefinition> {
}
/**
 * Public LinkedIn profile a search found for a person the query names who has no directory record. It shows the profile's own header; it does not assert current employment.
 *
 * @openapiSchema SearchPersonProfile
 * @endpoint GET /v1/search/link
 * @endpoint GET /v1/search/link/jobs/{jobId}
 * @endpoint GET /v1/search/shared/{id}
 * @endpoint GET /v1/search/shared/slug/{slug}
 * @endpoint POST /v1/search
 * @endpoint POST /v1/search/natural/people
 * @endpoint POST /v1/search/shared
 * @usedBySchema PersonNaturalSearchResultSchema
 * @contractShape search.person-profile
 * @contractRole canonical
 */
export declare const SearchPersonProfileSchema: z.ZodType<SearchPersonProfileDefinition, SearchPersonProfileSchemaInput>;
export type SearchPersonProfile = z.infer<typeof SearchPersonProfileSchema>;
export {};
//# sourceMappingURL=person-profile.d.ts.map