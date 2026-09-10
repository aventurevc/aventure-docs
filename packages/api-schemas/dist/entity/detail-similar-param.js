// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
export const ENTITY_DETAIL_SIMILAR_ENDPOINT = "/v1/entities/detail/similar";
/**
 * Request-side query params for `GET /v1/entities/detail/similar`.
 *
 * Generated from inline OpenAPI query parameters published by the backend controller.
 *
 * @endpoint GET /v1/entities/detail/similar
 * @contractShape entity.detail-similar-param
 * @contractRole canonical
 */
export const EntityDetailSimilarParamSchema = z.object({
    /** Entity unique identifier (UUID) — at least one of id or slug required */
    id: z.uuid().optional(),
    /** Zero-based page index (0..N) */
    page: z.int().min(0).default(0).optional(),
    /** Permit monogram fallback */
    permitMonogram: z.boolean().optional(),
    /** Filter by stored relationship type, one of: acceleratorParticipant, acquirer, affinity, calculated, competingProductService, competitor, customer, fundManagerFirm, parent, productService, serviceProvider, similarCompany, spinOffFrom, successor. */
    relationshipType: z.string().optional(),
    /** The size of the page to be returned */
    size: z.int().min(1).default(10).optional(),
    /** Entity URL-friendly identifier (slug) — at least one of id or slug required */
    slug: z
        .string()
        .regex(/^[a-z0-9_-]+$/)
        .max(255)
        .optional(),
    /** Optional entity typeRecord filter. Repeat to allow multiple entity types. */
    typeRecord: z.array(z.string()).optional(),
});
//# sourceMappingURL=detail-similar-param.js.map