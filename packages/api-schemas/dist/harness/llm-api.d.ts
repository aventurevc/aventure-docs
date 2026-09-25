import { z } from "zod/v4";
/**
 * Gateway wire API for a run's LLM calls: Anthropic Messages, OpenAI Chat Completions, or OpenAI Responses
 *
 * @openapiSchema HarnessLlmApi
 * @endpoint POST /v1/entities/{entityId}/enrichments
 * @endpoint POST /v1/people/{personId}/enrichments
 * @usedBySchema HarnessRunSchema
 * @contractShape harness.llm-api
 * @contractRole canonical
 */
export declare const HarnessLlmApiSchema: z.ZodEnum<{
    anthropic: "anthropic";
    "openai-chat": "openai-chat";
    "openai-responses": "openai-responses";
}>;
export type HarnessLlmApi = z.infer<typeof HarnessLlmApiSchema>;
//# sourceMappingURL=llm-api.d.ts.map