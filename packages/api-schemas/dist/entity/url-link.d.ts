import { z } from "zod/v4";
declare const EntityUrlLinkSchemaDefinition: z.ZodObject<{
    crawlCdnProvider: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
        akamai: "akamai";
        awsCloudfront: "awsCloudfront";
        azureCdn: "azureCdn";
        bunny: "bunny";
        cdn77: "cdn77";
        cdnetworks: "cdnetworks";
        cloudflare: "cloudflare";
        digitalocean: "digitalocean";
        fastly: "fastly";
        gcore: "gcore";
        googlecloudCdn: "googlecloudCdn";
        incapsula: "incapsula";
        keycdn: "keycdn";
        leaseweb: "leaseweb";
        netlify: "netlify";
        none: "none";
        stackpath: "stackpath";
        sucuri: "sucuri";
        unknown: "unknown";
        vercel: "vercel";
    }>>>;
    crawlRenderMode: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
        jsEnhanced: "jsEnhanced";
        jsRequired: "jsRequired";
        static: "static";
    }>>>;
    createdAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
    id: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
    isCurrent: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    isPrimary: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    owner: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        entityId: z.ZodOptional<z.ZodNullable<z.ZodUUID>>;
        personId: z.ZodOptional<z.ZodNullable<z.ZodUUID>>;
    }, z.core.$strip>>>;
    sourceId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    status: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    statusChecked: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
    updatedAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
    url: z.ZodString;
    urlType: z.ZodString;
}, z.core.$strip>;
type EntityUrlLinkDefinition = z.infer<typeof EntityUrlLinkSchemaDefinition>;
/**
 * Canonical URL link resource with owner, status, crawl, and source metadata. Lifecycle state (current vs former, primary vs secondary) is encoded by `isCurrent` and `isPrimary` — `urlType` is the canonical platform role only and write values come from GET /v1/url-types. Readers accept new platform roles as deployments evolve. To record a rebrand or domain migration, retain the prior URL with the same `urlType` (typically `website`) and set `isCurrent=false, isPrimary=false`; never encode lifecycle in the platform role.
 *
 * @openapiSchema EntityUrlLink
 * @endpoint GET /v1/entities
 * @endpoint GET /v1/entities/brand
 * @endpoint GET /v1/entities/lookup-exact
 * @endpoint GET /v1/people/lookup-exact
 * @endpoint GET /v1/search/link
 * @endpoint GET /v1/entities/{entityId}
 * @endpoint GET /v1/entities/{entityId}/investors
 * @endpoint GET /v1/entities/{entityId}/people
 * @endpoint GET /v1/entities/{entityId}/people/{associationId}
 * @endpoint GET /v1/entities/{entityId}/person-investors
 * @endpoint GET /v1/entities/{entityId}/similar
 * @endpoint GET /v1/entities/{entityId}/similar/summary
 * @endpoint GET /v1/entities/{entityId}/urls
 * @endpoint GET /v1/entities/{entityId}/urls/{urlId}
 * @endpoint GET /v1/lookup-jobs/{jobId}
 * @endpoint GET /v1/people/{personId}
 * @endpoint GET /v1/people/{personId}/entities
 * @endpoint GET /v1/people/{personId}/entities/{associationId}
 * @endpoint GET /v1/people/{personId}/similar
 * @endpoint GET /v1/people/{personId}/urls
 * @endpoint GET /v1/people/{personId}/urls/{urlId}
 * @endpoint GET /v1/search/link/jobs/{jobId}
 * @endpoint POST /v1/entities/lookup-batch
 * @endpoint POST /v1/entities/lookup-matches
 * @endpoint POST /v1/entities/search
 * @endpoint POST /v1/lookup-mentions
 * @endpoint POST /v1/people/lookup-batch
 * @endpoint POST /v1/search
 * @endpoint POST /v1/search/natural/entities
 * @usedBySchema EntityBrandSchema
 * @usedBySchema EntityEnrichmentSchema
 * @usedBySchema EntityPersonAssociationSchema
 * @usedBySchema EntitySimilaritySummarySchema
 * @usedBySchema PageEntityUrlLinkSchema
 * @usedBySchema PersonEnrichmentSchema
 * @contractShape entity.url-link
 * @contractRole canonical
 */
export declare const EntityUrlLinkSchema: z.ZodType<EntityUrlLinkDefinition>;
export type EntityUrlLink = z.infer<typeof EntityUrlLinkSchema>;
export {};
//# sourceMappingURL=url-link.d.ts.map