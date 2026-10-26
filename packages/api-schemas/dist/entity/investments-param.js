// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { PageParamSchema } from "../pagination/page-param.js";
export const ENTITY_INVESTMENTS_ENDPOINT = "/v1/entities/{entityId}/investments";
/**
 * Request-side query params for `GET /v1/entities/{entityId}/investments`.
 *
 * Generated from inline OpenAPI query parameters published by the backend controller.
 *
 * @endpoint GET /v1/entities/{entityId}/investments
 * @contractShape entity.investments-param
 * @contractRole canonical
 */
export const EntityInvestmentsParamSchema = PageParamSchema.extend({
    /** Opaque URL-safe cursor token from X-Next-Cursor. Reuse the same filters and sort. */
    cursor: z.string().optional(),
    /** Funding rounds only; requires roundExact. ResearchDate announcement-period overlap uses the canonical participation write selector: ISO year, year-month, day or offset timestamp, preserving supplied precision. Omission imposes no date constraint. Two timestamps match only at the same instant; calendar periods overlap and timestamp/calendar comparisons use the timestamp's UTC day. */
    dateAnnounced: z
        .string()
        .regex(/^(?!0000)[0-9]{4}(?:-(?:0[1-9]|1[0-2])(?:-(?:0[1-9]|[12][0-9]|3[01])(?:T(?:[01][0-9]|2[0-3]):[0-5][0-9](?::[0-5][0-9](?:\.[0-9]{1,9})?)?(?:Z|[+-](?:(?:0[0-9]|1[0-7]):[0-5][0-9]|18:00)))?)?)?$/)
        .optional(),
    /** Inclusive minimum announced date */
    dateFrom: z.iso.date().optional(),
    /** Inclusive maximum announced date */
    dateTo: z.iso.date().optional(),
    /** Return latest transaction per entity */
    latestPerEntity: z.boolean().optional(),
    /** Inclusive maximum amount raised in USD, using each round's USD-converted amount. Rounds with no recorded amount or no available USD conversion do not match. Use a plain whole-number amount such as 50000000; do not include currency signs, codes, comma grouping, decimals, or strings. */
    maxAmount: z.number().int().optional(),
    /** Inclusive minimum amount raised in USD, using each round's USD-converted amount. Rounds with no recorded amount or no available USD conversion do not match. Use a plain whole-number amount such as 500000; do not include currency signs, codes, comma grouping, decimals, or strings. */
    minAmount: z.number().int().optional(),
    /** Permit monogram fallback */
    permitMonogram: z.boolean().optional(),
    /** Round label contains filter */
    round: z.string().optional(),
    /** Funding rounds only, not outgoing investments: match the canonical participation write selector's exact stored round label, ignoring case and surrounding spaces. Cannot combine with round, dateFrom, dateTo, minAmount or maxAmount. Returns one bounded page of at most two raw ambiguity witnesses, without display deduplication: totalElements=2 means at least two matches, not an exhaustive count. Requires page=0, size>=2 and no cursor; no stable subset or export traversal is promised across requests. Omit dateAnnounced for no date constraint. */
    roundExact: z.string().optional(),
});
//# sourceMappingURL=investments-param.js.map