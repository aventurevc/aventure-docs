import { z } from "zod/v4";
declare const UrlHostFormResolutionSchemaDefinition: z.ZodObject<{
    concluded: z.ZodBoolean;
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
    landingHost: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    outcome: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
        noResponse: "noResponse";
        refusal: "refusal";
        rejection: "rejection";
        success: "success";
        transient: "transient";
    }>>>;
    status: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    submittedUrl: z.ZodString;
    url: z.ZodString;
}, z.core.$strip>;
type UrlHostFormResolutionDefinition = z.infer<typeof UrlHostFormResolutionSchemaDefinition>;
export interface UrlHostFormResolutionSchemaInput extends z.input<typeof UrlHostFormResolutionSchemaDefinition> {
}
/**
 * Verified preferred host form of a submitted URL and any fresh HTTP evidence.
 *
 * @openapiSchema UrlHostFormResolution
 * @endpoint GET /v1/lookup
 * @endpoint GET /v1/lookup-jobs/{jobId}
 * @endpoint GET /v1/lookup/jobs/{jobId}
 * @endpoint POST /v1/entities/lookup
 * @endpoint POST /v1/lookup
 * @endpoint POST /v1/lookup-mentions
 * @endpoint POST /v1/lookup/mentions
 * @endpoint POST /v1/people/lookup
 * @usedBySchema IdentificationSchema
 * @contractShape url.host-form-resolution
 * @contractRole canonical
 */
export declare const UrlHostFormResolutionSchema: z.ZodType<UrlHostFormResolutionDefinition, UrlHostFormResolutionSchemaInput>;
export type UrlHostFormResolution = z.infer<typeof UrlHostFormResolutionSchema>;
export {};
//# sourceMappingURL=host-form-resolution.d.ts.map