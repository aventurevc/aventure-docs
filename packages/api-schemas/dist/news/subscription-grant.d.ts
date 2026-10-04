import { z } from "zod/v4";
declare const NewsSubscriptionGrantSchemaDefinition: z.ZodObject<{
    cursor: z.ZodString;
    id: z.ZodString;
    refreshBefore: z.ZodISODateTime;
    truncated: z.ZodBoolean;
}, z.core.$strip>;
type NewsSubscriptionGrantDefinition = z.infer<typeof NewsSubscriptionGrantSchemaDefinition>;
/**
 * Granted news subscription.
 *
 * @openapiSchema NewsSubscriptionGrant
 * @endpoint PUT /v1/news/subscriptions
 * @contractShape news.subscription-grant
 * @contractRole canonical
 */
export declare const NewsSubscriptionGrantSchema: z.ZodType<NewsSubscriptionGrantDefinition>;
export type NewsSubscriptionGrant = z.infer<typeof NewsSubscriptionGrantSchema>;
export {};
//# sourceMappingURL=subscription-grant.d.ts.map