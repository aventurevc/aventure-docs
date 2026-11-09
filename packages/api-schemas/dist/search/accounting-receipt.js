// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
/**
 * @openapiSchema SearchAccountingReceipt
 * @endpoint GET /v1/web/searches/jobs/{jobId}
 * @endpoint POST /v1/web/search
 * @usedBySchema WebSearchSchema
 * @contractShape search.accounting-receipt
 * @contractRole canonical
 */
export const SearchAccountingReceiptSchema = z.object({
    /** Search execution that admitted this caller's work */
    executionId: z.uuid(),
    /** Work admitted for this caller, not a shared document's earlier cost owner */
    workId: z.uuid(),
});
//# sourceMappingURL=accounting-receipt.js.map