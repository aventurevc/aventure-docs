import { z } from "zod/v4";
/**
 * How investorName names combine: any (default) returns companies backed by any named investor; every returns companies backed by every named investor, across fundraises.
 *
 * @openapiSchema InvestorNameMatchMode
 * @endpoint GET /v1/entities
 * @endpoint GET /v1/people
 * @endpoint GET /v1/search/link
 * @endpoint GET /v1/directory/shared/slug/{slug}
 * @endpoint GET /v1/search/link/jobs/{jobId}
 * @endpoint GET /v1/search/shared/{id}
 * @endpoint GET /v1/search/shared/slug/{slug}
 * @endpoint POST /v1/directory/shared
 * @endpoint POST /v1/entities/filters/refine
 * @endpoint POST /v1/entities/filters/search
 * @endpoint POST /v1/entities/search
 * @endpoint POST /v1/people/search
 * @endpoint POST /v1/search
 * @endpoint POST /v1/search/natural/entities
 * @endpoint POST /v1/search/natural/people
 * @endpoint POST /v1/search/shared
 * @usedBySchema EntityFundraiseFilterCriteriaSchema
 * @contractShape investor.name-match-mode
 * @contractRole canonical
 */
export declare const InvestorNameMatchModeSchema: z.ZodEnum<{
    any: "any";
    every: "every";
}>;
export type InvestorNameMatchMode = z.infer<typeof InvestorNameMatchModeSchema>;
//# sourceMappingURL=name-match-mode.d.ts.map