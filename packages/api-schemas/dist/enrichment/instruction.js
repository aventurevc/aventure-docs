// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { EntityPersonOwnerSchema } from "../entity/person-owner.js";
const EnrichmentInstructionSchemaDefinition = z.object({
    /** Selected company or person these instructions apply to */
    record: EntityPersonOwnerSchema,
    /** Additional instructions for this record only; shared and additional instructions together, separated by a blank line, must fit the run's userPrompt limit */
    userPrompt: z.string().max(2000).nullish(),
});
/**
 * Instructions appended to the shared userPrompt for exactly one selected record
 *
 * @openapiSchema EnrichmentInstruction
 * @endpoint POST /v1/enrichments
 * @usedBySchema EnrichmentBatchSchema
 * @contractShape enrichment.instruction
 * @contractRole canonical
 */
export const EnrichmentInstructionSchema = EnrichmentInstructionSchemaDefinition;
//# sourceMappingURL=instruction.js.map