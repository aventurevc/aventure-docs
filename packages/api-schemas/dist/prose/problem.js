// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
/**
 * Why a sentence or paragraph of entity text or a research snippet was rejected.
 *
 * @openapiSchema ProseProblem
 * @standardProblemResponse
 * @usedBySchema ProseViolationSchema
 * @contractShape prose.problem
 * @contractRole canonical
 */
export const ProseProblemSchema = z.union([
    z.enum([
        "source",
        "record",
        "disclaimer",
        "voice",
        "structured",
        "temporal",
        "factList",
        "mojibake",
        "legalSource",
        "textContract",
    ]),
    z.string(),
]);
//# sourceMappingURL=problem.js.map