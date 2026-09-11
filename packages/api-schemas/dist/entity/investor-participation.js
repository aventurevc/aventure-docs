// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { EntityDetailSchema } from "./detail.js";
import { FundraiseInvestmentAttributionSchema } from "../fundraise/investment-attribution.js";
import { RoundLabelSchema } from "../round/label.js";
const EntityInvestorParticipationSchemaDefinition = z.object({
    entity: EntityDetailSchema,
    investorAttribution: z.array(FundraiseInvestmentAttributionSchema),
    round: z.array(RoundLabelSchema),
    roundCount: z.int(),
});
/**
 * Entity investor with round participation and enrichment data (addresses, URLs)
 *
 * @openapiSchema EntityInvestorParticipation
 * @endpoint GET /v1/entities/{entityId}/investors
 * @usedBySchema PageEntityInvestorParticipationSchema
 * @contractShape entity.investor-participation
 * @contractRole canonical
 */
export const EntityInvestorParticipationSchema = EntityInvestorParticipationSchemaDefinition;
//# sourceMappingURL=investor-participation.js.map