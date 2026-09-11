// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
export const ENTITY_SIMILAR_ENDPOINT = "/v1/entities/{entityId}/similar";
/**
 * Request-side query params for `GET /v1/entities/{entityId}/similar`.
 *
 * Generated from inline OpenAPI query parameters published by the backend controller.
 *
 * @endpoint GET /v1/entities/{entityId}/similar
 * @contractShape entity.similar-param
 * @contractRole canonical
 */
export const EntitySimilarParamSchema = z.object({
    /** Zero-based page index (0..N) */
    page: z.int().min(0).default(0).optional(),
    /** Permit monogram fallback */
    permitMonogram: z.boolean().optional(),
    /** Filter by stored relationship type, one of: acceleratorParticipant, acquirer, affinity, calculated, competingProductService, competitor, customer, fundManagerFirm, parent, productService, serviceProvider, similarCompany, spinOffFrom, successor. */
    relationshipType: z.string().optional(),
    /** The size of the page to be returned */
    size: z.int().min(1).default(10).optional(),
    /** Optional entity typeRecord filter. Repeat to allow multiple entity types. */
    typeRecord: z.array(z.string()).optional(),
});
//# sourceMappingURL=similar-param.js.map