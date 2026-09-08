// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { EntityFundraiseTransactionEntitySchema } from "./fundraise-transaction-entity.js";
import { EntityFundraiseTransactionSchema } from "./fundraise-transaction.js";
const EntityListSummarySchemaDefinition = z.object({
    /** Entity card projection with core identity and aggregate funding rollup */
    entity: EntityFundraiseTransactionEntitySchema,
    /** Most-recent fundraise rounds associated with this entity */
    fundraiseRound: z.array(EntityFundraiseTransactionSchema),
});
/**
 * Lean entity row for catalog-list and rail reads. Keeps core identity plus funding rollup and the most-recent fundraise rounds, and omits the classification, text, address, URL, and research sections carried by EntityList. Use GET /v1/entities/summary when only card surfaces render; use EntityList for full-row consumers.
 *
 * @openapiSchema EntityListSummary
 * @endpoint GET /v1/entities/summary
 * @usedBySchema PageEntityListSummarySchema
 * @contractShape entity.list-summary
 * @contractRole canonical
 */
export const EntityListSummarySchema = EntityListSummarySchemaDefinition;
//# sourceMappingURL=list-summary.js.map