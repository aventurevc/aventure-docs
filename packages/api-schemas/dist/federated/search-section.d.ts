import { z } from "zod/v4";
/**
 * Result section a search page renders: people; operating companies and business lines; other organizations (nonprofits and governments); products and services; investment firms; or funds. Legacy company aggregates operating companies, business lines, nonprofits, and governments; legacy investor aggregates investment firms and funds. Neither legacy aggregate is emitted in section order.
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
    fund: "fund";
    investmentFirm: "investmentFirm";
    investor: "investor";
    operatingCompany: "operatingCompany";
    otherOrganization: "otherOrganization";
    person: "person";
    productService: "productService";
}>, z.ZodString]> & {
    enum: {
        company: "company";
        fund: "fund";
        investmentFirm: "investmentFirm";
        investor: "investor";
        operatingCompany: "operatingCompany";
        otherOrganization: "otherOrganization";
        person: "person";
        productService: "productService";
    };
};
export type FederatedSearchSection = z.infer<typeof FederatedSearchSectionSchema>;
//# sourceMappingURL=search-section.d.ts.map