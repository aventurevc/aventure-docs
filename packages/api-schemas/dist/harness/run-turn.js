// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { EntityAnalysisInvocationSchema } from "../entity/analysis-invocation.js";
const HarnessRunTurnSchemaDefinition = z.object({
    /** True asks the analyst to also illustrate the section with figures */
    figure: z.boolean().nullish(),
    /** Analysis tool invocation instead of a text message */
    invocation: EntityAnalysisInvocationSchema.nullish(),
    /** Nonblank user message within the conversation turn character limit */
    text: z.string().nullish(),
});
/**
 * One conversation turn; set exactly one of text or invocation
 *
 * @openapiSchema HarnessRunTurn
 * @endpoint POST /v1/research-runs/{runId}/turns
 * @endpoint POST /v1/research/runs/{runId}/turns
 * @contractShape harness.run-turn
 * @contractRole canonical
 */
export const HarnessRunTurnSchema = HarnessRunTurnSchemaDefinition;
//# sourceMappingURL=run-turn.js.map