// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const EntityFinancialSchemaDefinition = z.object({
    /** Stored revenue currency, when known */
    currency: z.string().nullable(),
    /** Entity that owns this financial row */
    entityId: z.uuid(),
    /** Stored functional currency, independent of revenue currency */
    functionalCurrency: z.string().nullable(),
    /** Financial row ID for the existing private provenance read */
    id: z.int(),
    /** Exact stored period token */
    period: z.string().max(6),
    /** Exact stored integer revenue as text; no FX or scale adjustment */
    revenue: z.string().nullable(),
    /** Stored reporting year */
    year: z.int(),
});
/**
 * Stored financial facts for one exact year and period
 *
 * @openapiSchema EntityFinancial
 * @endpoint GET /v1/entities/lookup-exact
 * @endpoint GET /v1/search/link
 * @endpoint GET /v1/entities/{entityId}
 * @endpoint GET /v1/entities/{entityId}/investors
 * @endpoint GET /v1/entities/{entityId}/research
 * @endpoint GET /v1/search/link/jobs/{jobId}
 * @endpoint GET /v1/search/shared/{id}
 * @endpoint GET /v1/search/shared/slug/{slug}
 * @endpoint POST /v1/entities/lookup-batch
 * @endpoint POST /v1/entities/lookup-matches
 * @endpoint POST /v1/entities/search
 * @endpoint POST /v1/search
 * @endpoint POST /v1/search/shared
 * @usedBySchema EntityResearchSchema
 * @contractShape entity.financial
 * @contractRole canonical
 */
export const EntityFinancialSchema = EntityFinancialSchemaDefinition;
//# sourceMappingURL=financial.js.map