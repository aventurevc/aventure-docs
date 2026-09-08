// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
/**
 * Fundraise transaction status label
 *
 * @openapiSchema FundraiseTransactionStatus
 * @endpoint GET /v1/entities/{entityId}/acquisitions
 * @endpoint GET /v1/entities/{entityId}/acquisitions/{relationshipId}
 * @usedBySchema EntityAcquisitionSchema
 * @contractShape fundraise.transaction-status
 * @contractRole canonical
 */
export const FundraiseTransactionStatusSchema = z.enum([
    "Announced",
    "Announced; subject to approvals and closing conditions",
    "Active",
    "Closed",
    "Completed",
    "In Progress",
    "Open",
]);
//# sourceMappingURL=transaction-status.js.map