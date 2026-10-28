// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
/**
 * Shape of a research run listing: FULL pages full run rows; SUMMARY returns compact rows for polling
 *
 * @openapiSchema ResearchRunView
 * @endpoint GET /v1/research/runs
 * @contractShape research.run-view
 * @contractRole canonical
 */
export const ResearchRunViewSchema = z.enum(["FULL", "SUMMARY"]);
//# sourceMappingURL=run-view.js.map