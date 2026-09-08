// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
/**
 * Coverage verdict for one completion gate on the assembled entity detail. NOT_EVALUABLE is not a failure and is not closed by evidence: the detail does not carry this gate at all, so only the gate's owningRead can grade it.
 *
 * @openapiSchema CompletionGateCoverage
 * @endpoint GET /v1/entities/{entityId}/products/suggestions
 * @endpoint GET /v1/entities/{entityId}/relationships/suggestions
 * @usedBySchema EntityDetailCoverageSlotSchema
 * @contractShape completion.gate-coverage
 * @contractRole canonical
 */
export const CompletionGateCoverageSchema = z.enum(["PRESENT", "ABSENT", "NOT_EVALUABLE"]);
//# sourceMappingURL=gate-coverage.js.map