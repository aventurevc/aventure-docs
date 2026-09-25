import { z } from "zod/v4";
/**
 * CDN or hosting provider fronting a web URL.
 *
 * @openapiSchema EntityUrlCrawlCdnProvider
 * @endpoint GET /v1/entities
 * @endpoint GET /v1/entities/lookup-exact
 * @endpoint GET /v1/people/lookup-exact
 * @endpoint GET /v1/search/link
 * @endpoint GET /v1/entities/{entityId}
 * @endpoint GET /v1/entities/{entityId}/investors
 * @endpoint GET /v1/entities/{entityId}/people
 * @endpoint GET /v1/entities/{entityId}/people/{associationId}
 * @endpoint GET /v1/entities/{entityId}/person-investors
 * @endpoint GET /v1/entities/{entityId}/similar
 * @endpoint GET /v1/entities/{entityId}/urls
 * @endpoint GET /v1/entities/{entityId}/urls/{urlId}
 * @endpoint GET /v1/people/{personId}
 * @endpoint GET /v1/people/{personId}/entities
 * @endpoint GET /v1/people/{personId}/entities/{associationId}
 * @endpoint GET /v1/people/{personId}/similar
 * @endpoint GET /v1/people/{personId}/urls
 * @endpoint GET /v1/people/{personId}/urls/{urlId}
 * @endpoint POST /v1/entities/lookup-batch
 * @endpoint POST /v1/entities/lookup-matches
 * @endpoint POST /v1/entities/natural-search
 * @endpoint POST /v1/entities/search
 * @endpoint POST /v1/people/lookup-batch
 * @endpoint POST /v1/search
 * @endpoint POST /v1/search/all
 * @endpoint POST /v1/search/natural/entities
 * @usedBySchema EntityUrlLinkSchema
 * @contractShape entity.url-crawl-cdn-provider
 * @contractRole canonical
 */
export declare const EntityUrlCrawlCdnProviderSchema: z.ZodEnum<{
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
}>;
export type EntityUrlCrawlCdnProvider = z.infer<typeof EntityUrlCrawlCdnProviderSchema>;
//# sourceMappingURL=url-crawl-cdn-provider.d.ts.map