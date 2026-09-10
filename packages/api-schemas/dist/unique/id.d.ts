import { z } from "zod/v4";
declare const UniqueIdSchemaDefinition: z.ZodObject<{
    createdAt: z.ZodISODateTime;
    id: z.ZodInt;
    identifier: z.ZodString;
    idType: z.ZodEnum<{
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
    owner: z.ZodObject<{
        entityId: z.ZodOptional<z.ZodNullable<z.ZodUUID>>;
        personId: z.ZodOptional<z.ZodNullable<z.ZodUUID>>;
    }, z.core.$strip>;
    source: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    updatedAt: z.ZodISODateTime;
}, z.core.$strip>;
type UniqueIdDefinition = z.infer<typeof UniqueIdSchemaDefinition>;
/**
 * External identifier mapped to one owner (entity or person): for example a company's EIN, SEC CIK, or ticker symbol. Owner carries exactly one entityId or personId.
 *
 * @openapiSchema UniqueId
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
 * @usedBySchema EntityDetailSchema
 * @usedBySchema PageUniqueIdSchema
 * @contractShape unique.id
 * @contractRole canonical
 */
export declare const UniqueIdSchema: z.ZodType<UniqueIdDefinition>;
export type UniqueId = z.infer<typeof UniqueIdSchema>;
export {};
//# sourceMappingURL=id.d.ts.map