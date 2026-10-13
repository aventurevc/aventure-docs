import { z } from "zod/v4";
declare const NewsSubscriptionArgumentsSchemaDefinition: z.ZodObject<{
    entityId: z.ZodUUID;
}, z.core.$strip>;
type NewsSubscriptionArgumentsDefinition = z.infer<typeof NewsSubscriptionArgumentsSchemaDefinition>;
export interface NewsSubscriptionArgumentsSchemaInput extends z.input<typeof NewsSubscriptionArgumentsSchemaDefinition> {
}
/**
 * Arguments of the entity.news.published event.
 *
 * @openapiSchema NewsSubscriptionArguments
 * @endpoint GET /v1/news/subscriptions
 * @endpoint PUT /v1/news/subscriptions
 * @endpoint DELETE /v1/news/subscriptions
 * @usedBySchema NewsSubscriptionKeySchema
 * @usedBySchema NewsSubscriptionSchema
 * @contractShape news.subscription-arguments
 * @contractRole canonical
 */
export declare const NewsSubscriptionArgumentsSchema: z.ZodType<NewsSubscriptionArgumentsDefinition, NewsSubscriptionArgumentsSchemaInput>;
export type NewsSubscriptionArguments = z.infer<typeof NewsSubscriptionArgumentsSchema>;
export {};
//# sourceMappingURL=subscription-arguments.d.ts.map