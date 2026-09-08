import { z } from "zod/v4";
declare const NewsFeedbackAcknowledgementSchemaDefinition: z.ZodObject<{
    acknowledged: z.ZodBoolean;
    at: z.ZodISODateTime;
    comment: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    newsId: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
    reaction: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    slug: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
type NewsFeedbackAcknowledgementDefinition = z.infer<typeof NewsFeedbackAcknowledgementSchemaDefinition>;
/**
 * Feedback acknowledgment for news articles - non-mutating response
 *
 * @openapiSchema NewsFeedbackAcknowledgement
 * @endpoint POST /v1/news/feedback
 * @contractShape news.feedback-acknowledgement
 * @contractRole canonical
 */
export declare const NewsFeedbackAcknowledgementSchema: z.ZodType<NewsFeedbackAcknowledgementDefinition>;
export type NewsFeedbackAcknowledgement = z.infer<typeof NewsFeedbackAcknowledgementSchema>;
export {};
//# sourceMappingURL=feedback-acknowledgement.d.ts.map