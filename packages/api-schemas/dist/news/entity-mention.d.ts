import { z } from "zod/v4";
declare const NewsEntityMentionSchemaDefinition: z.ZodObject<{
    entity: z.ZodArray<z.ZodObject<{
        createdAt: z.ZodISODateTime;
        entityId: z.ZodUUID;
        href: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        internal: z.ZodBoolean;
        matchStatus: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
            approved: "approved";
            "auto-match": "auto-match";
            "needs-review": "needs-review";
            rejected: "rejected";
        }>>>;
        mention: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        slug: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        typeRecord: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
            "Business Line": "Business Line";
            Company: "Company";
            Fund: "Fund";
            Government: "Government";
            "Investment Firm": "Investment Firm";
            Nonprofit: "Nonprofit";
            Organization: "Organization";
            Product: "Product";
            Service: "Service";
        }>>>;
        updatedAt: z.ZodISODateTime;
    }, z.core.$strip>>;
    newsId: z.ZodInt;
}, z.core.$strip>;
type NewsEntityMentionDefinition = z.infer<typeof NewsEntityMentionSchemaDefinition>;
export interface NewsEntityMentionSchemaInput extends z.input<typeof NewsEntityMentionSchemaDefinition> {
}
/**
 * Public entities one news article links to, in link order.
 *
 * @openapiSchema NewsEntityMention
 * @endpoint GET /v1/search/link
 * @endpoint GET /v1/search/link/jobs/{jobId}
 * @endpoint GET /v1/search/shared/{id}
 * @endpoint GET /v1/search/shared/slug/{slug}
 * @endpoint POST /v1/search
 * @endpoint POST /v1/search/shared
 * @usedBySchema FederatedSearchSchema
 * @contractShape news.entity-mention
 * @contractRole canonical
 */
export declare const NewsEntityMentionSchema: z.ZodType<NewsEntityMentionDefinition, NewsEntityMentionSchemaInput>;
export type NewsEntityMention = z.infer<typeof NewsEntityMentionSchema>;
export {};
//# sourceMappingURL=entity-mention.d.ts.map