import { z } from "zod/v4";
/**
 * Public directory page whose filtered view is shared.
 *
 * @openapiSchema SharedDirectoryType
 * @endpoint GET /v1/directory/shared
 * @endpoint GET /v1/directory/shared/slug/{slug}
 * @endpoint POST /v1/directory/shared
 * @usedBySchema SharedDirectoryListSchema
 * @usedBySchema SharedDirectoryMutationSchema
 * @contractShape shared.directory-type
 * @contractRole canonical
 */
export declare const SharedDirectoryTypeSchema: z.ZodEnum<{
    companies: "companies";
    investors: "investors";
    people: "people";
}>;
export type SharedDirectoryType = z.infer<typeof SharedDirectoryTypeSchema>;
//# sourceMappingURL=directory-type.d.ts.map