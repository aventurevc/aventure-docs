import { z } from "zod/v4";
declare const NewsSubscriptionDetailSchemaDefinition: z.ZodObject<{
    consecutiveFailureCount: z.ZodInt;
    createdAt: z.ZodISODateTime;
    cursor: z.ZodString;
    id: z.ZodString;
    lastError: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    nextAttemptAt: z.ZodISODateTime;
    refreshBefore: z.ZodISODateTime;
    status: z.ZodEnum<{
        active: "active";
        expired: "expired";
        paused: "paused";
        retrying: "retrying";
    }>;
    subscription: z.ZodType<{
        arguments: {
            entityId: string;
        };
        delivery: {
            url: string;
        };
        name: "entity.news.published";
    }, import("./subscription-key.ts").NewsSubscriptionKeySchemaInput, z.core.$ZodTypeInternals<{
        arguments: {
            entityId: string;
        };
        delivery: {
            url: string;
        };
        name: "entity.news.published";
    }, import("./subscription-key.ts").NewsSubscriptionKeySchemaInput>>;
    updatedAt: z.ZodISODateTime;
    verifiedAt: z.ZodISODateTime;
}, z.core.$strip>;
type NewsSubscriptionDetailDefinition = z.infer<typeof NewsSubscriptionDetailSchemaDefinition>;
export interface NewsSubscriptionDetailSchemaInput extends z.input<typeof NewsSubscriptionDetailSchemaDefinition> {
}
/**
 * One of the caller's news subscriptions and its delivery state.
 *
 * @openapiSchema NewsSubscriptionDetail
 * @endpoint GET /v1/news/subscriptions
 * @contractShape news.subscription-detail
 * @contractRole canonical
 */
export declare const NewsSubscriptionDetailSchema: z.ZodType<NewsSubscriptionDetailDefinition, NewsSubscriptionDetailSchemaInput>;
export type NewsSubscriptionDetail = z.infer<typeof NewsSubscriptionDetailSchema>;
export {};
//# sourceMappingURL=subscription-detail.d.ts.map