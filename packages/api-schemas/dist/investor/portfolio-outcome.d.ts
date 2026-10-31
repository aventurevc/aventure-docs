import { z } from "zod/v4";
/**
 * Observed recipient status, with closed taking precedence over acquired, then public, then operating. UNKNOWN means no supported current-status bucket. Acquired and public are not dated exits; closed is not a proved investor write-off.
 *
 * @openapiSchema InvestorPortfolioOutcome
 * @endpoint GET /v1/entities/lookup-exact
 * @endpoint GET /v1/people/lookup-exact
 * @endpoint GET /v1/search/link
 * @endpoint GET /v1/entities/{entityId}
 * @endpoint GET /v1/entities/{entityId}/investor-activity
 * @endpoint GET /v1/entities/{entityId}/investors
 * @endpoint GET /v1/entities/{entityId}/investors/people
 * @endpoint GET /v1/entities/{entityId}/person-investors
 * @endpoint GET /v1/people/{personId}
 * @endpoint GET /v1/people/{personId}/investor-activity
 * @endpoint GET /v1/search/link/jobs/{jobId}
 * @endpoint GET /v1/search/shared/{id}
 * @endpoint GET /v1/search/shared/slug/{slug}
 * @endpoint POST /v1/entities/lookup-batch
 * @endpoint POST /v1/entities/lookup-matches
 * @endpoint POST /v1/entities/search
 * @endpoint POST /v1/people/lookup-batch
 * @endpoint POST /v1/search
 * @endpoint POST /v1/search/shared
 * @usedBySchema InvestorPortfolioSchema
 * @contractShape investor.portfolio-outcome
 * @contractRole canonical
 */
export declare const InvestorPortfolioOutcomeSchema: z.ZodUnion<readonly [z.ZodEnum<{
    ACQUIRED: "ACQUIRED";
    CLOSED: "CLOSED";
    OPERATING: "OPERATING";
    PUBLIC: "PUBLIC";
    UNKNOWN: "UNKNOWN";
}>, z.ZodString]> & {
    enum: {
        ACQUIRED: "ACQUIRED";
        CLOSED: "CLOSED";
        OPERATING: "OPERATING";
        PUBLIC: "PUBLIC";
        UNKNOWN: "UNKNOWN";
    };
};
export type InvestorPortfolioOutcome = z.infer<typeof InvestorPortfolioOutcomeSchema>;
//# sourceMappingURL=portfolio-outcome.d.ts.map