import { z } from "zod/v4";
declare const NewsSubscriptionEndpointSchemaDefinition: z.ZodObject<{
    url: z.ZodString;
}, z.core.$strip>;
type NewsSubscriptionEndpointDefinition = z.infer<typeof NewsSubscriptionEndpointSchemaDefinition>;
/**
 * Webhook delivery target.
 *
 * @openapiSchema NewsSubscriptionEndpoint
 * @endpoint DELETE /v1/news/subscriptions
 * @usedBySchema NewsSubscriptionKeySchema
 * @contractShape news.subscription-endpoint
 * @contractRole canonical
 */
export declare const NewsSubscriptionEndpointSchema: z.ZodType<NewsSubscriptionEndpointDefinition>;
export type NewsSubscriptionEndpoint = z.infer<typeof NewsSubscriptionEndpointSchema>;
export {};
//# sourceMappingURL=subscription-endpoint.d.ts.map