import { z } from "zod/v4";
declare const UniqueIdSchemaDefinition: z.ZodObject<{
    createdAt: z.ZodISODateTime;
    effectiveFrom: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    effectiveTo: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    id: z.ZodInt;
    identifier: z.ZodString;
    idType: z.ZodUnion<readonly [z.ZodEnum<{
        crd: "crd";
        cusip: "cusip";
        duns: "duns";
        ein: "ein";
        fdicCert: "fdicCert";
        firmCrd: "firmCrd";
        folk: "folk";
        holdingCompanyRssd: "holdingCompanyRssd";
        ipedsUnitId: "ipedsUnitId";
        isin: "isin";
        lei: "lei";
        ncesLeaId: "ncesLeaId";
        ncesPssId: "ncesPssId";
        ncesSchoolId: "ncesSchoolId";
        ncuaCharter: "ncuaCharter";
        npi: "npi";
        orcid: "orcid";
        rssd: "rssd";
        secCik: "secCik";
        secPrivateFundId: "secPrivateFundId";
        signalNfxCompany: "signalNfxCompany";
        signalNfxFirm: "signalNfxFirm";
        signalNfxPerson: "signalNfxPerson";
        ticker: "ticker";
    }>, z.ZodString]> & {
        enum: {
            crd: "crd";
            cusip: "cusip";
            duns: "duns";
            ein: "ein";
            fdicCert: "fdicCert";
            firmCrd: "firmCrd";
            folk: "folk";
            holdingCompanyRssd: "holdingCompanyRssd";
            ipedsUnitId: "ipedsUnitId";
            isin: "isin";
            lei: "lei";
            ncesLeaId: "ncesLeaId";
            ncesPssId: "ncesPssId";
            ncesSchoolId: "ncesSchoolId";
            ncuaCharter: "ncuaCharter";
            npi: "npi";
            orcid: "orcid";
            rssd: "rssd";
            secCik: "secCik";
            secPrivateFundId: "secPrivateFundId";
            signalNfxCompany: "signalNfxCompany";
            signalNfxFirm: "signalNfxFirm";
            signalNfxPerson: "signalNfxPerson";
            ticker: "ticker";
        };
    };
    listingStanding: z.ZodOptional<z.ZodNullable<z.ZodUnion<readonly [z.ZodEnum<{
        delisted: "delisted";
        listed: "listed";
        suspended: "suspended";
    }>, z.ZodString]> & {
        enum: {
            delisted: "delisted";
            listed: "listed";
            suspended: "suspended";
        };
    }>>;
    owner: z.ZodObject<{
        entityId: z.ZodOptional<z.ZodNullable<z.ZodUUID>>;
        personId: z.ZodOptional<z.ZodNullable<z.ZodUUID>>;
    }, z.core.$strip>;
    shareClass: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    source: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    standingAsOf: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    updatedAt: z.ZodISODateTime;
    venue: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
type UniqueIdDefinition = z.infer<typeof UniqueIdSchemaDefinition>;
export interface UniqueIdSchemaInput extends z.input<typeof UniqueIdSchemaDefinition> {
}
/**
 * External identifier mapped to one owner (entity or person): for example a company's EIN, SEC CIK, or ticker symbol. Owner carries exactly one entityId or personId.
 *
 * @openapiSchema UniqueId
 * @endpoint GET /v1/entities/lookup-exact
 * @endpoint GET /v1/search/link
 * @endpoint GET /v1/unique-ids/lookup
 * @endpoint GET /v1/entities/{entityId}
 * @endpoint GET /v1/entities/{entityId}/investors
 * @endpoint GET /v1/entities/{entityId}/unique-ids
 * @endpoint GET /v1/entities/{entityId}/unique-ids/{uniqueIdId}
 * @endpoint GET /v1/people/{personId}/unique-ids
 * @endpoint GET /v1/people/{personId}/unique-ids/{uniqueIdId}
 * @endpoint GET /v1/search/link/jobs/{jobId}
 * @endpoint GET /v1/search/shared/{id}
 * @endpoint GET /v1/search/shared/slug/{slug}
 * @endpoint POST /v1/entities/lookup-batch
 * @endpoint POST /v1/entities/lookup-matches
 * @endpoint POST /v1/entities/search
 * @endpoint POST /v1/search
 * @endpoint POST /v1/search/shared
 * @usedBySchema EntityDetailSchema
 * @usedBySchema PageUniqueIdSchema
 * @contractShape unique.id
 * @contractRole canonical
 */
export declare const UniqueIdSchema: z.ZodType<UniqueIdDefinition, UniqueIdSchemaInput>;
export type UniqueId = z.infer<typeof UniqueIdSchema>;
export {};
//# sourceMappingURL=id.d.ts.map