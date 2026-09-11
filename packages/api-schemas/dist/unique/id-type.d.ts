import { z } from "zod/v4";
/**
 * External identifier type that maps an owner to a registry id: ein, secCik, ticker, lei, duns, isin, cusip, crd, or orcid.
 *
 * @openapiSchema UniqueIdType
 * @endpoint GET /v1/entities/detail
 * @endpoint GET /v1/entities/lookup
 * @endpoint GET /v1/unique-ids/lookup
 * @endpoint GET /v1/entities/{entityId}
 * @endpoint GET /v1/entities/{entityId}/investors
 * @endpoint GET /v1/entities/{entityId}/unique-ids
 * @endpoint GET /v1/entities/{entityId}/unique-ids/{uniqueIdId}
 * @endpoint GET /v1/people/{personId}/unique-ids
 * @endpoint GET /v1/people/{personId}/unique-ids/{uniqueIdId}
 * @endpoint POST /v1/entities/batch
 * @endpoint POST /v1/entities/detail/batch
 * @endpoint POST /v1/entities/detail/resolve
 * @endpoint POST /v1/entities/lookup/batch
 * @endpoint POST /v1/entities/lookup/matches
 * @usedBySchema UniqueIdSchema
 * @contractShape unique.id-type
 * @contractRole canonical
 */
export declare const UniqueIdTypeSchema: z.ZodEnum<{
    crd: "crd";
    cusip: "cusip";
    duns: "duns";
    ein: "ein";
    isin: "isin";
    lei: "lei";
    orcid: "orcid";
    secCik: "secCik";
    ticker: "ticker";
}>;
export type UniqueIdType = z.infer<typeof UniqueIdTypeSchema>;
//# sourceMappingURL=id-type.d.ts.map