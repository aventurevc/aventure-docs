import { z } from "zod/v4";
declare const UrlSlugRedirectSchemaDefinition: z.ZodObject<{
    createdAt: z.ZodISODateTime;
    newUrl: z.ZodString;
    oldUrl: z.ZodString;
    redirectId: z.ZodInt;
    redirectType: z.ZodInt;
    updatedAt: z.ZodISODateTime;
}, z.core.$strip>;
type UrlSlugRedirectDefinition = z.infer<typeof UrlSlugRedirectSchemaDefinition>;
/**
 * URL slug redirect row
 *
 * @openapiSchema UrlSlugRedirect
 * @endpoint GET /v1/entities/{entityId}/slug/redirects
 * @endpoint GET /v1/news/{newsId}/slug/redirects
 * @endpoint GET /v1/people/{personId}/slug/redirects
 * @usedBySchema PageUrlSlugRedirectSchema
 * @contractShape url.slug-redirect
 * @contractRole canonical
 */
export declare const UrlSlugRedirectSchema: z.ZodType<UrlSlugRedirectDefinition>;
export type UrlSlugRedirect = z.infer<typeof UrlSlugRedirectSchema>;
export {};
//# sourceMappingURL=slug-redirect.d.ts.map