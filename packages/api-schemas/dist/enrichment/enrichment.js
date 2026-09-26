// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { EnrichmentRefusalTypeSchema } from "./refusal-type.js";
import { EntityPersonOwnerSchema } from "../entity/person-owner.js";
import { HarnessRunSchema } from "../harness/run.js";
const EnrichmentSchemaDefinition = z.object({
    /** The requested entity or person */
    record: EntityPersonOwnerSchema,
    /** Why no run was filed; absent when run is set */
    refusal: EnrichmentRefusalTypeSchema.nullish(),
    /** The queued or reused run; absent when refusal is set */
    run: HarnessRunSchema.nullish(),
});
/**
 * One requested record's batch enrichment outcome: the filed run or the refusal
 *
 * @openapiSchema Enrichment
 * @endpoint POST /v1/enrichments
 * @contractShape enrichment.enrichment
 * @contractRole canonical
 */
export const EnrichmentSchema = EnrichmentSchemaDefinition;
//# sourceMappingURL=enrichment.js.map