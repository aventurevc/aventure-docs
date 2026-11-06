// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
// oxlint-disable import/no-cycle -- Generated recursive module references are deferred with z.lazy.
import { z } from "zod/v4";
import { InvestorPortfolioOutcomeSchema } from "./portfolio-outcome.js";
import { PageInvestorPortfolioRecipientSchema, PageInvestorPortfolioSectorSchema, } from "../pagination/schemas.js";
/**
 * Current public-detail-visible recipients of this investor's direct and current primary managed-fund participations, excluding bankruptcy proceedings and funds without public-detail visibility. Counts are distinct recipients in the selected current-status cohort, not investor holdings, dated exits, realized returns or losses. Both pages use the requested page and size independently; their totals and coverage describe the complete cohort.
 *
 * @openapiSchema InvestorPortfolio
 * @endpoint GET /v1/entities/lookup-exact
 * @endpoint GET /v1/people/lookup-exact
 * @endpoint GET /v1/search/link
 * @endpoint GET /v1/entities/{entityId}
 * @endpoint GET /v1/entities/{entityId}/investor-activity
 * @endpoint GET /v1/entities/{entityId}/investors
 * @endpoint GET /v1/entities/{entityId}/investors/people
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
 * @usedBySchema EntityFundraiseInvestorActivitySchema
 * @contractShape investor.portfolio
 * @contractRole canonical
 */
export const InvestorPortfolioSchema = z.object({
    /** Recipients with more than one distinct current primary industry. */
    ambiguousSectorCount: z.int(),
    /** Recipients with exactly one current primary editorial industry. */
    classifiedRecipientCount: z.int(),
    /** Database snapshot read time; not the date of an exit, closure or investment. */
    observedAt: z.iso.datetime({ offset: true }),
    outcome: InvestorPortfolioOutcomeSchema,
    /** Recipients with a recorded USD capital-raised aggregate. Its round/amount/FX coverage remains on each recipient's funding object. Not a count of known returns. */
    rankableRecipientCount: z.int(),
    /** Complete selected recipient population, paged in descending recorded funding.totalRaisedUsd order (unknown last), then entity id. Capital raised is only a declared ordering proxy, not exit consideration or investor success. Funding coverage and missing values must remain visible. Closed/inactive recipients do not establish a realized loss, cause of failure or historical rate. */
    recipient: z.lazy(() => PageInvestorPortfolioRecipientSchema),
    recipientCount: z.int(),
    /** Exclusive single-primary editorial industry groups, ordered by recipient count descending then canonical industry id. Missing and ambiguous industries are counted separately, never assigned the first tag. Page totalElements counts groups. */
    sector: z.lazy(() => PageInvestorPortfolioSectorSchema),
    /** Recipients with no current primary editorial industry. */
    unknownSectorCount: z.int(),
});
//# sourceMappingURL=portfolio.js.map