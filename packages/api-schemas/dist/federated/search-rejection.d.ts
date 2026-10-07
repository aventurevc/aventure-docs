import { z } from "zod/v4";
declare const FederatedSearchRejectionSchemaDefinition: z.ZodObject<{
    detail: z.ZodString;
    field: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    scope: z.ZodEnum<{
        entity: "entity";
        news: "news";
        person: "person";
    }>;
}, z.core.$strip>;
type FederatedSearchRejectionDefinition = z.infer<typeof FederatedSearchRejectionSchemaDefinition>;
/**
 * One federated scope that rejected the query instead of searching.
 *
 * @openapiSchema FederatedSearchRejection
 * @endpoint GET /v1/search/link
 * @endpoint GET /v1/search/link/jobs/{jobId}
 * @endpoint GET /v1/search/shared/{id}
 * @endpoint GET /v1/search/shared/slug/{slug}
 * @endpoint POST /v1/search
 * @endpoint POST /v1/search/shared
 * @usedBySchema FederatedSearchProvenanceSchema
 * @contractShape federated.search-rejection
 * @contractRole canonical
 */
export declare const FederatedSearchRejectionSchema: z.ZodType<FederatedSearchRejectionDefinition>;
export type FederatedSearchRejection = z.infer<typeof FederatedSearchRejectionSchema>;
export {};
//# sourceMappingURL=search-rejection.d.ts.map