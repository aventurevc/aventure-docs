import { z } from "zod/v4";
/**
 * Associations to match.
 *
 * @openapiSchema PersonAssociationTenure
 * @endpoint GET /v1/people
 * @endpoint GET /v1/search/link
 * @endpoint GET /v1/directory/shared/slug/{slug}
 * @endpoint GET /v1/search/link/jobs/{jobId}
 * @endpoint GET /v1/search/shared/{id}
 * @endpoint GET /v1/search/shared/slug/{slug}
 * @endpoint POST /v1/directory/exports
 * @endpoint POST /v1/directory/shared
 * @endpoint POST /v1/people/search
 * @endpoint POST /v1/search
 * @endpoint POST /v1/search/natural/entities
 * @endpoint POST /v1/search/natural/people
 * @endpoint POST /v1/search/shared
 * @usedBySchema PersonFilterSchema
 * @contractShape person.association-tenure
 * @contractRole canonical
 */
export declare const PersonAssociationTenureSchema: z.ZodEnum<{
    ANY: "ANY";
    CURRENT: "CURRENT";
    PAST: "PAST";
}>;
export type PersonAssociationTenure = z.infer<typeof PersonAssociationTenureSchema>;
//# sourceMappingURL=association-tenure.d.ts.map