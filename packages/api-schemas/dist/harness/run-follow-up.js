// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { HarnessRunFollowUpAdmissionSchema } from "./run-follow-up-admission.js";
/**
 * Follow-up runs this run started, and whether all of them have been filed
 *
 * @openapiSchema HarnessRunFollowUp
 * @endpoint GET /v1/research/runs/{runId}
 * @usedBySchema HarnessRunDetailSchema
 * @contractShape harness.run-follow-up
 * @contractRole canonical
 */
export const HarnessRunFollowUpSchema = z.object({
    /** PENDING until every follow-up run has been filed; REJECTED when the allowed redo attempts are used up */
    admission: HarnessRunFollowUpAdmissionSchema,
    /** True when this run started more follow-up runs than this list shows, so the list cannot prove the run is complete */
    hasMore: z.boolean(),
    /** Ids of follow-up runs this run started directly; read each one's detail to find its own follow-ups */
    runId: z.array(z.uuid()),
});
//# sourceMappingURL=run-follow-up.js.map