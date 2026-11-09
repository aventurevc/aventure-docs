import { z } from "zod/v4";
/**
 * Result section a search page renders: people; companies (operating companies, business lines, nonprofits, and governments); products and services; or investors (investment firms and funds).
 *
 * @openapiSchema FederatedSearchSection
 * @endpoint GET /v1/search/link
 * @endpoint GET /v1/search/link/jobs/{jobId}
 * @endpoint GET /v1/search/shared/{id}
 * @endpoint GET /v1/search/shared/slug/{slug}
 * @endpoint POST /v1/search
 * @endpoint POST /v1/search/shared
 * @usedBySchema FederatedSearchSchema
 * @contractShape federated.search-section
 * @contractRole canonical
 */
export declare const FederatedSearchSectionSchema: z.ZodUnion<readonly [z.ZodEnum<{
    company: "company";
    investor: "investor";
    person: "person";
    productService: "productService";
}>, z.ZodString]> & {
    enum: {
        company: "company";
        investor: "investor";
        person: "person";
        productService: "productService";
    };
};
export type FederatedSearchSection = z.infer<typeof FederatedSearchSectionSchema>;
//# sourceMappingURL=search-section.d.ts.map