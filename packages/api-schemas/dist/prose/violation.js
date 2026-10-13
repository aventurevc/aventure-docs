// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { ProseProblemSchema } from "./problem.js";
const ProseViolationSchemaDefinition = z.object({
    /** Whether proseOverrideReason can accept this problem; ProblemDetail.hint says when an override is allowed. */
    overridable: z.boolean(),
    /** The rejected sentence, the whole text for a text-contract violation, or the source URL for a legal-page source. */
    passage: z.string(),
    /** The problem this passage shows. */
    problem: ProseProblemSchema,
    /** Why the passage was rejected and how to fix it. */
    reason: z.string(),
});
/**
 * One rejected passage and one problem it shows; a passage with several problems appears once per problem.
 *
 * @openapiSchema ProseViolation
 * @standardProblemResponse
 * @usedBySchema ProblemDetailSchema
 * @contractShape prose.violation
 * @contractRole canonical
 */
export const ProseViolationSchema = ProseViolationSchemaDefinition;
//# sourceMappingURL=violation.js.map