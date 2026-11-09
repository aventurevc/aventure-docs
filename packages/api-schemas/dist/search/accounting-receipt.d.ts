import { z } from "zod/v4";
/**
 * @openapiSchema SearchAccountingReceipt
 * @endpoint GET /v1/web/searches/jobs/{jobId}
 * @endpoint POST /v1/web/search
 * @usedBySchema WebSearchSchema
 * @contractShape search.accounting-receipt
 * @contractRole canonical
 */
export declare const SearchAccountingReceiptSchema: z.ZodObject<{
    executionId: z.ZodUUID;
    workId: z.ZodUUID;
}, z.core.$strip>;
export type SearchAccountingReceipt = z.infer<typeof SearchAccountingReceiptSchema>;
//# sourceMappingURL=accounting-receipt.d.ts.map