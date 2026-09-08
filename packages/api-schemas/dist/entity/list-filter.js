// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { EntityFilterLogoOptionSchema } from "./filter-logo-option.js";
import { EntityFundraiseFilterCriteriaSchema } from "./fundraise-filter-criteria.js";
import { EntityListQualityGateSchema } from "./list-quality-gate.js";
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
    /** Operating status values. */
    operatingStatus: z.array(z.string()).optional(),
    /** Portfolio-company headquarters city values. */
    portfolioHeadquartersCity: z.array(z.string()).optional(),
    /** Portfolio-company headquarters country values. */
    portfolioHeadquartersCountry: z.array(z.string()).optional(),
    /** Portfolio-company headquarters state or region values. */
    portfolioHeadquartersState: z.array(z.string()).optional(),
    /** Named server-owned list quality gate. */
    qualityGate: EntityListQualityGateSchema.optional(),
    /** Semantic entity search phrase. Supported by GET /v1/entities and POST /v1/entities/search. */
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
    /** URL matching mode: hostPath uses host and path; domain uses the root domain. */
    urlMatchMode: UrlMatchModeSchema.optional(),
    /** Restrict URL matching to one URL type. */
    urlType: EntityUrlTypeSchema.nullish(),
    /** Inclusive founding-year ranges, in calendar years. */
    yearFoundedRange: z.array(IntRangeSchema).optional(),
});
/**
 * Entity list and search filters including semantic entity search. Supported by GET /v1/entities and POST /v1/entities/search; every other reused EntityFilter surface accepts the base EntityFilter, which omits semanticQuery.
 *
 * @openapiSchema EntityListFilter
 * @endpoint GET /v1/search/link
 * @endpoint POST /v1/entities/natural-search
 * @endpoint POST /v1/entities/search
 * @endpoint POST /v1/search/all
 * @usedBySchema SearchInterpretationSchema
 * @contractShape entity.list-filter
 * @contractRole canonical
 */
export const EntityListFilterSchema = EntityListFilterSchemaDefinition;
//# sourceMappingURL=list-filter.js.map