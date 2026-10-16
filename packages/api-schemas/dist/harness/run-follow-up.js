// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { HarnessRunFollowUpAdmissionSchema } from "./run-follow-up-admission.js";
/**
 * Durable completion barrier and direct child run ids
 *
 * @openapiSchema HarnessRunFollowUp
 * @endpoint GET /v1/research-runs/{runId}
 * @usedBySchema HarnessRunDetailSchema
 * @contractShape harness.run-follow-up
 * @contractRole canonical
 */
export const HarnessRunFollowUpSchema = z.object({
    /** PENDING until every follow-up admission is durable; REJECTED when the bounded redo is exhausted */
    admission: HarnessRunFollowUpAdmissionSchema,
    /** More than the bounded child count exists; completion is unproven */
    hasMore: z.boolean(),
    /** Direct appointed run ids; read each run's detail recursively */
    runId: z.array(z.uuid()),
});
//# sourceMappingURL=run-follow-up.js.map