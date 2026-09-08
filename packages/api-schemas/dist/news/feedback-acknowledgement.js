// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const NewsFeedbackAcknowledgementSchemaDefinition = z.object({
    acknowledged: z.boolean(),
    at: z.iso.datetime({ offset: true }),
    comment: z.string().nullish(),
    newsId: z.int().nullish(),
    reaction: z.string().nullish(),
    slug: z.string().nullish(),
});
/**
 * Feedback acknowledgment for news articles - non-mutating response
 *
 * @openapiSchema NewsFeedbackAcknowledgement
 * @endpoint POST /v1/news/feedback
 * @contractShape news.feedback-acknowledgement
 * @contractRole canonical
 */
export const NewsFeedbackAcknowledgementSchema = NewsFeedbackAcknowledgementSchemaDefinition;
//# sourceMappingURL=feedback-acknowledgement.js.map