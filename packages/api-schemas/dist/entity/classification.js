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
    /** Standardized classification joins from res_classification_ref. Rows are join-existing-only and carry category/code metadata. */
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
 * Entity classification join rows grouped by bucket; default reads include only current joins, and includeInactive=true adds inactive/historical joins.
 *
 * @openapiSchema EntityClassification
 * @endpoint GET /v1/entities
 * @endpoint GET /v1/entities/detail
 * @endpoint GET /v1/entities/detail/investors
 * @endpoint GET /v1/entities/detail/similar
 * @endpoint GET /v1/entities/lookup
 * @endpoint GET /v1/search/link
 * @endpoint GET /v1/entities/{entityId}/classifications
 * @endpoint GET /v1/entities/{entityId}/products/suggestions
 * @endpoint GET /v1/entities/{entityId}/relationships/suggestions
 * @endpoint POST /v1/entities/batch
 * @endpoint POST /v1/entities/detail/batch
 * @endpoint POST /v1/entities/detail/resolve
 * @endpoint POST /v1/entities/natural-search
 * @endpoint POST /v1/entities/search
 * @endpoint POST /v1/search/all
 * @usedBySchema EntityEnrichmentSchema
 * @contractShape entity.classification
 * @contractRole canonical
 */
export const EntityClassificationSchema = EntityClassificationSchemaDefinition;
//# sourceMappingURL=classification.js.map