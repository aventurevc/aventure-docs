import { z } from "zod/v4";
declare const NewsSubscriptionEndpointSchemaDefinition: z.ZodObject<{
    url: z.ZodString;
}, z.core.$strip>;
type NewsSubscriptionEndpointDefinition = z.infer<typeof NewsSubscriptionEndpointSchemaDefinition>;
export interface NewsSubscriptionEndpointSchemaInput extends z.input<typeof NewsSubscriptionEndpointSchemaDefinition> {
}
/**
 * Webhook delivery target.
 *
 * @openapiSchema NewsSubscriptionEndpoint
 * @endpoint GET /v1/news/subscriptions
 * @endpoint DELETE /v1/news/subscriptions
 * @usedBySchema NewsSubscriptionKeySchema
 * @contractShape news.subscription-endpoint
 * @contractRole canonical
 */
export declare const NewsSubscriptionEndpointSchema: z.ZodType<NewsSubscriptionEndpointDefinition, NewsSubscriptionEndpointSchemaInput>;
export type NewsSubscriptionEndpoint = z.infer<typeof NewsSubscriptionEndpointSchema>;
export {};
//# sourceMappingURL=subscription-endpoint.d.ts.map