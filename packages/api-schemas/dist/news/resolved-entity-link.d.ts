import { z } from "zod/v4";
declare const NewsResolvedEntityLinkSchemaDefinition: z.ZodObject<{
    createdAt: z.ZodISODateTime;
    entityId: z.ZodUUID;
    href: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    internal: z.ZodBoolean;
    matchScore: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    matchType: z.ZodOptional<z.ZodNullable<z.ZodString>>;
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
}, z.core.$strip>;
type NewsResolvedEntityLinkDefinition = z.infer<typeof NewsResolvedEntityLinkSchemaDefinition>;
/**
 * Resolved entity mention in news content - hyperlink to an entity detected in article text - matchType: composite format "status:score|quote=evidence|user=email|at=timestamp" - m...
 *
 * @openapiSchema NewsResolvedEntityLink
 * @endpoint GET /v1/news/detail
 * @usedBySchema NewsDetailSchema
 * @contractShape news.resolved-entity-link
 * @contractRole canonical
 */
export declare const NewsResolvedEntityLinkSchema: z.ZodType<NewsResolvedEntityLinkDefinition>;
export type NewsResolvedEntityLink = z.infer<typeof NewsResolvedEntityLinkSchema>;
export {};
//# sourceMappingURL=resolved-entity-link.d.ts.map