// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const NewsFeedbackSchemaDefinition = z.object({
    /** Free-form feedback text */
    comment: z.string().max(4000).nullish(),
    /** News article ID */
    newsId: z.int().nullish(),
    /** Short reaction (like, dislike, etc.) */
    reaction: z.string().max(64).nullish(),
    /** News article slug */
    slug: z
        .string()
        .regex(/^[a-z0-9_-]+$/)
        .max(255)
        .nullish(),
});
/**
 * Feedback submission for a news article
 *
 * @openapiSchema NewsFeedback
 * @endpoint POST /v1/news/feedback
 * @contractShape news.feedback
 * @contractRole canonical
 */
export const NewsFeedbackSchema = NewsFeedbackSchemaDefinition;
//# sourceMappingURL=feedback.js.map