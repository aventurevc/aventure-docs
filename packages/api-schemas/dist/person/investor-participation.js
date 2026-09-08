// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { FundraiseInvestmentAttributionSchema } from "../fundraise/investment-attribution.js";
import { PersonDetailSchema } from "./detail.js";
import { RoundLabelSchema } from "../round/label.js";
const PersonInvestorParticipationSchemaDefinition = z.object({
    investorAttribution: z.array(FundraiseInvestmentAttributionSchema),
    person: PersonDetailSchema,
    round: z.array(RoundLabelSchema),
    roundCount: z.int(),
});
/**
 * Person investor with round participation labels and count
 *
 * @openapiSchema PersonInvestorParticipation
 * @endpoint GET /v1/entities/detail/person-investors
 * @usedBySchema PagePersonInvestorParticipationSchema
 * @contractShape person.investor-participation
 * @contractRole canonical
 */
export const PersonInvestorParticipationSchema = PersonInvestorParticipationSchemaDefinition;
//# sourceMappingURL=investor-participation.js.map