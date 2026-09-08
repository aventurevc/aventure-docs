import { z } from "zod/v4";
declare const NewsFeedbackSchemaDefinition: z.ZodObject<{
    comment: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    newsId: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
    reaction: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    slug: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
type NewsFeedbackDefinition = z.infer<typeof NewsFeedbackSchemaDefinition>;
/**
 * Feedback submission for a news article
 *
 * @openapiSchema NewsFeedback
 * @endpoint POST /v1/news/feedback
 * @contractShape news.feedback
 * @contractRole canonical
 */
export declare const NewsFeedbackSchema: z.ZodType<NewsFeedbackDefinition>;
export type NewsFeedback = z.infer<typeof NewsFeedbackSchema>;
export {};
//# sourceMappingURL=feedback.d.ts.map