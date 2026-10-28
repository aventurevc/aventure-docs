// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { EntityTagSchema } from "./tag.js";
import { StandardizedClassificationSchema } from "../standardized/classification.js";
const EntityClassificationSchemaDefinition = z.object({
    /** Geographic markets where the entity earns revenue and serves customers (e.g. North America, EMEA, APAC). This is the sales/market footprint classification — NOT the HQ or office location. HQ and office locations belong on the address record (enrichment.address), not this bucket. A London-headquartered company selling globally should have North America and EMEA here, not United Kingdom. */
    geoLocationExposure: z.array(EntityTagSchema).default([]).optional(),
    /** Industry filter values */
    industry: z.array(EntityTagSchema).default([]).optional(),
    /** Main product filter values */
    mainProduct: z.array(EntityTagSchema).default([]).optional(),
    /** Standardized taxonomy classifications such as NAICS, SIC, or ISIC codes, with category and code metadata. */
    standardizedClassification: z.array(StandardizedClassificationSchema).default([]).optional(),
    /** Tag filter values */
    tag: z.array(EntityTagSchema).default([]).optional(),
    /** Type customer filter values */
    typeCustomer: z.array(EntityTagSchema).default([]).optional(),
    /** Type model filter values */
    typeModel: z.array(EntityTagSchema).default([]).optional(),
    /** Type ownership filter values */
    typeOwnership: z.array(EntityTagSchema).default([]).optional(),
    /** Type revenue filter values */
    typeRevenue: z.array(EntityTagSchema).default([]).optional(),
    /** Type technology used filter values */
    typeTechnologyUsed: z.array(EntityTagSchema).default([]).optional(),
});
/**
 * Entity classifications grouped by bucket. Reads return current classifications by default; includeInactive=true adds inactive and historical ones.
 *
 * @openapiSchema EntityClassification
 * @endpoint GET /v1/entities
 * @endpoint GET /v1/entities/brand
 * @endpoint GET /v1/entities/lookup-exact
 * @endpoint GET /v1/search/link
 * @endpoint GET /v1/entities/{entityId}
 * @endpoint GET /v1/entities/{entityId}/classifications
 * @endpoint GET /v1/entities/{entityId}/investors
 * @endpoint GET /v1/entities/{entityId}/similar
 * @endpoint GET /v1/entities/search/jobs/{jobId}
 * @endpoint GET /v1/lookup-jobs/{jobId}
 * @endpoint GET /v1/lookup/jobs/{jobId}
 * @endpoint GET /v1/search/link/jobs/{jobId}
 * @endpoint GET /v1/search/shared/{id}
 * @endpoint GET /v1/search/shared/slug/{slug}
 * @endpoint POST /v1/entities/lookup-batch
 * @endpoint POST /v1/entities/lookup-matches
 * @endpoint POST /v1/entities/search
 * @endpoint POST /v1/lookup-mentions
 * @endpoint POST /v1/lookup/mentions
 * @endpoint POST /v1/search
 * @endpoint POST /v1/search/natural/entities
 * @endpoint POST /v1/search/shared
 * @usedBySchema EntityBrandSchema
 * @usedBySchema EntityEnrichmentSchema
 * @contractShape entity.classification
 * @contractRole canonical
 */
export const EntityClassificationSchema = EntityClassificationSchemaDefinition;
//# sourceMappingURL=classification.js.map