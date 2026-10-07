import { z } from "zod/v4";
declare const NewsEntityMentionSchemaDefinition: z.ZodObject<{
    entity: z.ZodArray<z.ZodType<{
        createdAt: string;
        entityId: string;
        href?: string | null | undefined;
        internal: boolean;
        matchStatus?: "approved" | "auto-match" | "needs-review" | "rejected" | null | undefined;
        mention?: string | null | undefined;
        slug?: string | null | undefined;
        typeRecord?: "Business Line" | "Company" | "Fund" | "Government" | "Investment Firm" | "Nonprofit" | "Organization" | "Product" | "Service" | null | undefined;
        updatedAt: string;
    }, unknown, z.core.$ZodTypeInternals<{
        createdAt: string;
        entityId: string;
        href?: string | null | undefined;
        internal: boolean;
        matchStatus?: "approved" | "auto-match" | "needs-review" | "rejected" | null | undefined;
        mention?: string | null | undefined;
        slug?: string | null | undefined;
        typeRecord?: "Business Line" | "Company" | "Fund" | "Government" | "Investment Firm" | "Nonprofit" | "Organization" | "Product" | "Service" | null | undefined;
        updatedAt: string;
    }, unknown>>>;
    newsId: z.ZodInt;
}, z.core.$strip>;
type NewsEntityMentionDefinition = z.infer<typeof NewsEntityMentionSchemaDefinition>;
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
export declare const NewsEntityMentionSchema: z.ZodType<NewsEntityMentionDefinition>;
export type NewsEntityMention = z.infer<typeof NewsEntityMentionSchema>;
export {};
//# sourceMappingURL=entity-mention.d.ts.map