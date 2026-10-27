import { z } from "zod/v4";
/**
 * Metered allowance. `COMPANY` and `PERSON` meter research runs on company and person-profile targets; `ENTITY_VIEW`, `ENTITY_BRAND`, and `PERSON_VIEW` meter profile and brand reads. Directory exports share `ENTITY_VIEW` for company and investor rows and `PERSON_VIEW` for person rows, once per record per UTC month with detail views; `WEB_SEARCH` meters web searches.
 *
 * @openapiSchema ResearchAllowanceType
 * @standardProblemResponse
 * @usedBySchema BillingCatalogAllowanceSchema
 * @usedBySchema HarnessRunSchema
 * @usedBySchema ProblemDetailSchema
 * @contractShape research.allowance-type
 * @contractRole canonical
 */
export declare const ResearchAllowanceTypeSchema: z.ZodUnion<readonly [z.ZodEnum<{
    COMPANY: "COMPANY";
    ENTITY_BRAND: "ENTITY_BRAND";
    ENTITY_VIEW: "ENTITY_VIEW";
    PERSON: "PERSON";
    PERSON_VIEW: "PERSON_VIEW";
    WEB_SEARCH: "WEB_SEARCH";
}>, z.ZodString]> & {
    enum: {
        COMPANY: "COMPANY";
        ENTITY_BRAND: "ENTITY_BRAND";
        ENTITY_VIEW: "ENTITY_VIEW";
        PERSON: "PERSON";
        PERSON_VIEW: "PERSON_VIEW";
        WEB_SEARCH: "WEB_SEARCH";
    };
};
export type ResearchAllowanceType = z.infer<typeof ResearchAllowanceTypeSchema>;
//# sourceMappingURL=allowance-type.d.ts.map