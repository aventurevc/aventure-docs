// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
/**
 * Gateway wire API for a run's LLM calls: Anthropic Messages, OpenAI Chat Completions, or OpenAI Responses
 *
 * @openapiSchema HarnessLlmApi
 * @endpoint GET /v1/harness/runs/{runId}
 * @endpoint POST /v1/enrichments
 * @endpoint POST /v1/entities/{entityId}/enrichments
 * @endpoint POST /v1/people/{personId}/enrichments
 * @usedBySchema HarnessRunSchema
 * @contractShape harness.llm-api
 * @contractRole canonical
 */
export const HarnessLlmApiSchema = z.enum(["anthropic", "openai-chat", "openai-responses"]);
//# sourceMappingURL=llm-api.js.map