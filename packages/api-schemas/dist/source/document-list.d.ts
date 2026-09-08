import { z } from "zod/v4";
declare const SourceDocumentListSchemaDefinition: z.ZodObject<{
    cacheHitCount: z.ZodInt;
    createdAt: z.ZodISODateTime;
    documentType: z.ZodString;
    expiresAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
    httpStatus: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
    id: z.ZodUUID;
    lastAccessedAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
    provider: z.ZodString;
    providerRequestId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    rawByteCount: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    rawCharset: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    rawMediaType: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    sourceKey: z.ZodString;
    upstreamContentEncoding: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
type SourceDocumentListDefinition = z.infer<typeof SourceDocumentListSchemaDefinition>;
/**
 * Metadata-only ledger row for source-document lists
 *
 * @openapiSchema SourceDocumentList
 * @endpoint POST /v1/search/web
 * @usedBySchema WebSearchSchema
 * @contractShape source.document-list
 * @contractRole canonical
 */
export declare const SourceDocumentListSchema: z.ZodType<SourceDocumentListDefinition>;
export type SourceDocumentList = z.infer<typeof SourceDocumentListSchema>;
export {};
//# sourceMappingURL=document-list.d.ts.map