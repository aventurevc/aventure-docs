// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
/**
 * External identifier type that maps an owner to a registry id: ein, secCik, ticker, lei, duns, isin, cusip, crd, or orcid.
 *
 * @openapiSchema UniqueIdType
 * @endpoint GET /v1/entities/detail
 * @endpoint GET /v1/entities/detail/investors
 * @endpoint GET /v1/entities/lookup
 * @endpoint GET /v1/unique-ids/lookup
 * @endpoint GET /v1/entities/{entityId}
 * @endpoint GET /v1/entities/{entityId}/unique-ids
 * @endpoint GET /v1/entities/{entityId}/unique-ids/{uniqueIdId}
 * @endpoint GET /v1/people/{personId}/unique-ids
 * @endpoint GET /v1/people/{personId}/unique-ids/{uniqueIdId}
 * @endpoint POST /v1/entities/batch
 * @endpoint POST /v1/entities/detail/batch
 * @endpoint POST /v1/entities/detail/resolve
 * @endpoint POST /v1/entities/lookup/batch
 * @usedBySchema UniqueIdSchema
 * @contractShape unique.id-type
 * @contractRole canonical
 */
export const UniqueIdTypeSchema = z.enum([
    "ein",
    "secCik",
    "ticker",
    "lei",
    "duns",
    "isin",
    "cusip",
    "crd",
    "orcid",
]);
//# sourceMappingURL=id-type.js.map