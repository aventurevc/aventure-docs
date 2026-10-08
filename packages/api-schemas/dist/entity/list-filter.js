// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { EntityFilterLogoOptionSchema } from "./filter-logo-option.js";
import { EntityFundraiseFilterCriteriaSchema } from "./fundraise-filter-criteria.js";
import { EntityListQualityGateSchema } from "./list-quality-gate.js";
import { EntityOperatingStatusSchema } from "./operating-status.js";
import { EntityTypeSchema } from "./type.js";
import { EntityUrlTypeSchema } from "./url-type.js";
import { IntRangeSchema } from "../int/range.js";
import { UrlMatchModeSchema } from "../url/match-mode.js";
const EntityListFilterSchemaDefinition = z.strictObject({
    /** Accelerator brand or operator name. */
    acceleratorBrand: z.array(z.string()).optional(),
    /** Accelerator batch or cohort label. */
    acceleratorCohort: z.array(z.string()).optional(),
    /** Specific accelerator program name. */
    acceleratorName: z.array(z.string()).optional(),
    /** Accelerator participation status. */
    acceleratorStatus: z.array(z.string()).optional(),
    /** Affinity provider organization names accepted by the companies list filter. Affinity rows are member -> provider; use provider names here, not member names. */
    affinity: z.array(z.string()).optional(),
    /** Rank closed entities (Closed, Closed (Acquihire), Inactive) after every other textSearch or semanticQuery match, ahead of relevance and sort; omitted means true. false ranks them by relevance alone. Filter them out with operatingStatus or suppressNonOperating. */
    closedLast: z.boolean().optional(),
    /** Inclusive reported employee-count ranges, in employees. */
    employeeCountRange: z.array(IntRangeSchema).optional(),
    /** Restrict results to specific entity IDs. */
    entityId: z.array(z.uuid()).optional(),
    /** Exact normalized match against entity brand or legal names. */
    entityName: z.array(z.string()).optional(),
    /** Filter by featured status. */
    featured: z.boolean().nullish(),
    /** Fundraise activity */
    fundraiseActivity: EntityFundraiseFilterCriteriaSchema.optional(),
    /** Filter to entities with fundraise activity. */
    hasFundraising: z.boolean().nullish(),
    /** Headquarters city values. */
    headquartersCity: z.array(z.string()).optional(),
    /** Headquarters country values. */
    headquartersCountry: z.array(z.string()).optional(),
    /** Headquarters state or region values. */
    headquartersState: z.array(z.string()).optional(),
    /** Industry classification values. */
    industry: z.array(z.string()).optional(),
    /** First letter of the display name. */
    letter: z.string().nullish(),
    /** Geographic classification values. */
    location: z.array(z.string()).optional(),
    /** Logo sort priority. */
    logoOption: EntityFilterLogoOptionSchema.optional(),
    /** Main product classification values. */
    mainProduct: z.array(z.string()).optional(),
    /** Operating states to include; omit to include every state. */
    operatingStatus: z.array(EntityOperatingStatusSchema).optional(),
    /** Associated person, matched by name. */
    person: z.array(z.string()).optional(),
    /** Portfolio-company headquarters city values. */
    portfolioHeadquartersCity: z.array(z.string()).optional(),
    /** Portfolio-company headquarters country values. */
    portfolioHeadquartersCountry: z.array(z.string()).optional(),
    /** Portfolio-company headquarters state or region values. */
    portfolioHeadquartersState: z.array(z.string()).optional(),
    /** Named server-owned list quality gate. */
    qualityGate: EntityListQualityGateSchema.optional(),
    /** Rank most prominent first (funding, stage, headcount, momentum, recent news, investor breadth), ahead of sort: what best, top, or most promising mean. */
    rankByProminence: z.boolean().nullish(),
    /** Semantic entity search phrase. Executable on POST /v1/entities/search; saved views persist it for replay. A semantic page ranks a bounded nearest-neighbor window: totalElements counts the ranked candidates reachable through continuation, not every matching entity. */
    semanticQuery: z.string().nullish(),
    /** Restrict results to entity slugs. */
    slug: z
        .array(z
        .string()
        .regex(/^[a-z0-9_-]+$/)
        .max(255))
        .optional(),
    /** Investment stage classification values. */
    stage: z.array(z.string()).optional(),
    /** Exclude public companies, companies at Series D or later, and acquired companies (including acquired subsidiaries); what startup means. Companies without a recorded stage or operating status stay. */
    suppressLateStage: z.boolean().nullish(),
    /** Suppress entities with terminal operating status. */
    suppressNonOperating: z.boolean().nullish(),
    /** Suppress entities whose total raised is zero. */
    suppressZeroTotalRaised: z.boolean().nullish(),
    /** General classification tag values. */
    tag: z.array(z.string()).optional(),
    /** Non-blank keyword/full-text search term. Use natural-search for plain-English or multi-constraint company requests. */
    textSearch: z.string().nullish(),
    /** Customer-type classification values. */
    typeCustomer: z.array(z.string()).optional(),
    /** Business-model classification values. */
    typeModel: z.array(z.string()).optional(),
    /** Ownership-model classification values. */
    typeOwnership: z.array(z.string()).optional(),
    /** Entity type filter. Organization expands to Company, Investment Firm, Nonprofit, and Government; omit to include every entity type. */
    typeRecord: z.array(EntityTypeSchema).optional(),
    /** Revenue-model classification values. */
    typeRevenue: z.array(z.string()).optional(),
    /** Technology-used classification values. */
    typeTechnologyUsed: z.array(z.string()).optional(),
    /** Current URL to match by normalized host and path. */
    url: z.string().nullish(),
    /** Current root domain to match when urlMatchMode=domain. */
    urlDomain: z.string().nullish(),
    /** URL matching mode: hostPath uses host and path; domain uses the root domain. Omitted, it is domain when urlDomain is set, else hostPath. */
    urlMatchMode: UrlMatchModeSchema.nullish(),
    /** Restrict URL matching to one URL type. */
    urlType: EntityUrlTypeSchema.nullish(),
    /** Inclusive founding-year ranges, in calendar years. */
    yearFoundedRange: z.array(IntRangeSchema).optional(),
});
/**
 * Entity list filters and saved-view query state including semantic entity search. semanticQuery executes on GET /v1/entities and POST /v1/entities/search; saved views persist it for replay. Every other reused EntityFilter surface accepts the base EntityFilter, which omits semanticQuery.
 *
 * @openapiSchema EntityListFilter
 * @endpoint GET /v1/search/link
 * @endpoint GET /v1/search/link/jobs/{jobId}
 * @endpoint GET /v1/search/shared/{id}
 * @endpoint GET /v1/search/shared/slug/{slug}
 * @endpoint POST /v1/entities/search
 * @endpoint POST /v1/search
 * @endpoint POST /v1/search/natural/entities
 * @endpoint POST /v1/search/shared
 * @usedBySchema SearchInterpretationSchema
 * @contractShape entity.list-filter
 * @contractRole canonical
 */
export const EntityListFilterSchema = EntityListFilterSchemaDefinition;
//# sourceMappingURL=list-filter.js.map