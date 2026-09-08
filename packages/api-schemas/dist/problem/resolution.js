// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
/**
 * Machine-readable next action for an aVenture ProblemDetail. For reviewCandidates, inspect ProblemDetail.details candidates and decide update, create-with-override, or block from those returned records.
 *
 * @openapiSchema ProblemResolution
 * @standardProblemResponse
 * @usedBySchema ProblemDetailSchema
 * @contractShape problem.resolution
 * @contractRole canonical
 */
export const ProblemResolutionSchema = z.object({
    /** Accepted values for the field or parameter, when enumerable. */
    acceptedValue: z.array(z.string()).nullish(),
    /** Next action category for the client or agent. */
    action: z.enum([
        "setField",
        "setParameter",
        "removeParameter",
        "useEndpoint",
        "reviewCandidates",
        "authenticate",
    ]),
    /** Endpoint to call for the next action, when applicable. */
    endpoint: z.string().nullish(),
    /** Request-body field path that needs attention, when applicable. */
    fieldPath: z.string().nullish(),
    /** Query parameter that needs attention, when applicable. */
    parameter: z.string().nullish(),
    /** Whether the same logical request can be retried after the next action. */
    retryable: z.boolean().nullish(),
});
//# sourceMappingURL=resolution.js.map