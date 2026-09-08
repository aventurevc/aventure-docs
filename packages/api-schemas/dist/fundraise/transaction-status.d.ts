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
export declare const FundraiseTransactionStatusSchema: z.ZodEnum<{
    Active: "Active";
    Announced: "Announced";
    "Announced; subject to approvals and closing conditions": "Announced; subject to approvals and closing conditions";
    Closed: "Closed";
    Completed: "Completed";
    "In Progress": "In Progress";
    Open: "Open";
}>;
export type FundraiseTransactionStatus = z.infer<typeof FundraiseTransactionStatusSchema>;
//# sourceMappingURL=transaction-status.d.ts.map