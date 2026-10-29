// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { ResearchRunViewSchema } from "./run-view.js";
export const RESEARCH_RUNS_ENDPOINT = "/v1/research/runs";
/**
 * Request-side query params for `GET /v1/research/runs`.
 *
 * Generated from inline OpenAPI query parameters published by the backend controller.
 *
 * @endpoint GET /v1/research/runs
 * @contractShape research.runs-param
 * @contractRole canonical
 */
export const ResearchRunsParamSchema = z.object({
    /** Opaque URL-safe cursor token from X-Next-Cursor. Reuse the same filters and sort. */
    cursor: z.string().optional(),
    /** Entity slug the run targets; omit for all your runs. */
    entitySlug: z.string().optional(),
    /** Zero-based page index (0..N) */
    page: z.int().min(0).optional(),
    /** Runs per page; maximum 200. */
    size: z.int().min(1).optional(),
    /** Research presets to include (listResearchRunPresets keys); omit for all. */
    taskPresetKey: z.array(z.string()).optional(),
    /** FULL (default) pages full run rows; SUMMARY returns compact rows for polling */
    view: ResearchRunViewSchema.optional(),
});
//# sourceMappingURL=runs-param.js.map