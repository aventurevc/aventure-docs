import { z } from "zod/v4";
/**
 * One entity↔person association, naming both sides
 *
 * @openapiSchema EntityPersonAssociation
 * @endpoint GET /v1/entities/detail
 * @endpoint GET /v1/entities/detail/investors
 * @endpoint GET /v1/entities/detail/person-investors
 * @endpoint GET /v1/entities/lookup
 * @endpoint GET /v1/people/detail
 * @endpoint GET /v1/people/detail/similar
 * @endpoint GET /v1/entities/{entityId}/people
 * @endpoint GET /v1/entities/{entityId}/people/{associationId}
 * @endpoint GET /v1/people/{personId}/entities
 * @endpoint GET /v1/people/{personId}/entities/{associationId}
 * @endpoint POST /v1/entities/batch
 * @endpoint POST /v1/entities/detail/batch
 * @endpoint POST /v1/entities/detail/resolve
 * @endpoint POST /v1/people/batch
 * @endpoint POST /v1/people/detail/batch
 * @usedBySchema PageEntityPersonAssociationSchema
 * @usedBySchema PersonDetailSchema
 * @usedBySchema PersonSimilarityResultSchema
 * @contractShape entity.person-association
 * @contractRole canonical
 */
export declare const EntityPersonAssociationSchema: z.ZodObject<{
    associationId: z.ZodInt;
    createdAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
    creator: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    endDate: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
    entityAddress: z.ZodArray<z.ZodObject<{
        address: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
        addressLine1: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        addressLine2: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        association: z.ZodOptional<z.ZodArray<z.ZodType<{
            endDate?: string | null | undefined;
            id: number;
            isCurrent: boolean;
            role?: "domicile" | "dominant" | "origin" | null | undefined;
            startDate?: string | null | undefined;
        }, unknown, z.core.$ZodTypeInternals<{
            endDate?: string | null | undefined;
            id: number;
            isCurrent: boolean;
            role?: "domicile" | "dominant" | "origin" | null | undefined;
            startDate?: string | null | undefined;
        }, unknown>>>>;
        city: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            id: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
            name: z.ZodString;
        }, z.core.$strip>>>;
        country: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            countryCodeChar2: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            countryCodeChar3: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            id: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
            name: z.ZodString;
            unRegion: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            unSubregion: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, z.core.$strip>>>;
        countryAbbrev: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        createdAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
        fullAddress: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        id: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
        isCurrent: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        isHq: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        isPrimary: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        latitude: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        longitude: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        postalCode: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        state: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            id: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
            name: z.ZodString;
            stateAbbrev: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, z.core.$strip>>>;
        stateAbbrev: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        street: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        updatedAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
    }, z.core.$strip>>;
    entityId: z.ZodUUID;
    entityLogo: z.ZodType<{
        isMonogram: boolean;
        logo?: string | null | undefined;
        logoSquare?: string | null | undefined;
    }, unknown, z.core.$ZodTypeInternals<{
        isMonogram: boolean;
        logo?: string | null | undefined;
        logoSquare?: string | null | undefined;
    }, unknown>>;
    entityName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    entityOperatingStatus: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    entitySlug: z.ZodString;
    entityType: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
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
    entityUrlLink: z.ZodArray<z.ZodType<{
        crawlCdnProvider?: "akamai" | "awsCloudfront" | "azureCdn" | "bunny" | "cdn77" | "cdnetworks" | "cloudflare" | "digitalocean" | "fastly" | "gcore" | "googlecloudCdn" | "incapsula" | "keycdn" | "leaseweb" | "netlify" | "none" | "stackpath" | "sucuri" | "unknown" | "vercel" | null | undefined;
        crawlRenderMode?: "jsEnhanced" | "jsRequired" | "static" | null | undefined;
        createdAt?: string | null | undefined;
        id?: number | null | undefined;
        isCurrent?: boolean | null | undefined;
        isPrimary?: boolean | null | undefined;
        owner?: {
            entityId?: string | null | undefined;
            personId?: string | null | undefined;
        } | null | undefined;
        sourceId?: string | null | undefined;
        status?: string | null | undefined;
        statusChecked?: string | null | undefined;
        updatedAt?: string | null | undefined;
        url: string;
        urlType: "alternativeto" | "angellist" | "appstore" | "awsmarketplace" | "bloomberg" | "capterra" | "changelog" | "chromewebstore" | "crates" | "crunchbase" | "discord" | "dockerhub" | "documentation" | "facebook" | "forum" | "g2" | "gartnerpeerinsights" | "getapp" | "github" | "glassdoor" | "googleplay" | "homebrew" | "hubspotmarketplace" | "instagram" | "linkedin" | "maven" | "morningstar" | "nasdaq" | "npm" | "nyse" | "pitchbook" | "producthunt" | "pypi" | "roadmap" | "salesforceappexchange" | "slackappdirectory" | "sourceforge" | "statuspage" | "subreddit" | "support" | "theorg" | "tiktok" | "trustpilot" | "trustradius" | "twitter" | "vscodemarketplace" | "website" | "wellfound" | "wikipedia" | "ycombinator" | "youtube";
    }, unknown, z.core.$ZodTypeInternals<{
        crawlCdnProvider?: "akamai" | "awsCloudfront" | "azureCdn" | "bunny" | "cdn77" | "cdnetworks" | "cloudflare" | "digitalocean" | "fastly" | "gcore" | "googlecloudCdn" | "incapsula" | "keycdn" | "leaseweb" | "netlify" | "none" | "stackpath" | "sucuri" | "unknown" | "vercel" | null | undefined;
        crawlRenderMode?: "jsEnhanced" | "jsRequired" | "static" | null | undefined;
        createdAt?: string | null | undefined;
        id?: number | null | undefined;
        isCurrent?: boolean | null | undefined;
        isPrimary?: boolean | null | undefined;
        owner?: {
            entityId?: string | null | undefined;
            personId?: string | null | undefined;
        } | null | undefined;
        sourceId?: string | null | undefined;
        status?: string | null | undefined;
        statusChecked?: string | null | undefined;
        updatedAt?: string | null | undefined;
        url: string;
        urlType: "alternativeto" | "angellist" | "appstore" | "awsmarketplace" | "bloomberg" | "capterra" | "changelog" | "chromewebstore" | "crates" | "crunchbase" | "discord" | "dockerhub" | "documentation" | "facebook" | "forum" | "g2" | "gartnerpeerinsights" | "getapp" | "github" | "glassdoor" | "googleplay" | "homebrew" | "hubspotmarketplace" | "instagram" | "linkedin" | "maven" | "morningstar" | "nasdaq" | "npm" | "nyse" | "pitchbook" | "producthunt" | "pypi" | "roadmap" | "salesforceappexchange" | "slackappdirectory" | "sourceforge" | "statuspage" | "subreddit" | "support" | "theorg" | "tiktok" | "trustpilot" | "trustradius" | "twitter" | "vscodemarketplace" | "website" | "wellfound" | "wikipedia" | "ycombinator" | "youtube";
    }, unknown>>>;
    isCurrent: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    personAddress: z.ZodArray<z.ZodObject<{
        address: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
        addressLine1: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        addressLine2: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        association: z.ZodOptional<z.ZodArray<z.ZodType<{
            endDate?: string | null | undefined;
            id: number;
            isCurrent: boolean;
            role?: "domicile" | "dominant" | "origin" | null | undefined;
            startDate?: string | null | undefined;
        }, unknown, z.core.$ZodTypeInternals<{
            endDate?: string | null | undefined;
            id: number;
            isCurrent: boolean;
            role?: "domicile" | "dominant" | "origin" | null | undefined;
            startDate?: string | null | undefined;
        }, unknown>>>>;
        city: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            id: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
            name: z.ZodString;
        }, z.core.$strip>>>;
        country: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            countryCodeChar2: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            countryCodeChar3: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            id: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
            name: z.ZodString;
            unRegion: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            unSubregion: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, z.core.$strip>>>;
        countryAbbrev: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        createdAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
        fullAddress: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        id: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
        isCurrent: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        isHq: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        isPrimary: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        latitude: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        longitude: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        postalCode: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        state: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            id: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
            name: z.ZodString;
            stateAbbrev: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, z.core.$strip>>>;
        stateAbbrev: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        street: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        updatedAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
    }, z.core.$strip>>;
    personId: z.ZodUUID;
    personImage: z.ZodType<{
        isMonogram: boolean;
        picture?: string | null | undefined;
    }, unknown, z.core.$ZodTypeInternals<{
        isMonogram: boolean;
        picture?: string | null | undefined;
    }, unknown>>;
    personName: z.ZodString;
    personSlug: z.ZodString;
    personUrlLink: z.ZodArray<z.ZodType<{
        crawlCdnProvider?: "akamai" | "awsCloudfront" | "azureCdn" | "bunny" | "cdn77" | "cdnetworks" | "cloudflare" | "digitalocean" | "fastly" | "gcore" | "googlecloudCdn" | "incapsula" | "keycdn" | "leaseweb" | "netlify" | "none" | "stackpath" | "sucuri" | "unknown" | "vercel" | null | undefined;
        crawlRenderMode?: "jsEnhanced" | "jsRequired" | "static" | null | undefined;
        createdAt?: string | null | undefined;
        id?: number | null | undefined;
        isCurrent?: boolean | null | undefined;
        isPrimary?: boolean | null | undefined;
        owner?: {
            entityId?: string | null | undefined;
            personId?: string | null | undefined;
        } | null | undefined;
        sourceId?: string | null | undefined;
        status?: string | null | undefined;
        statusChecked?: string | null | undefined;
        updatedAt?: string | null | undefined;
        url: string;
        urlType: "alternativeto" | "angellist" | "appstore" | "awsmarketplace" | "bloomberg" | "capterra" | "changelog" | "chromewebstore" | "crates" | "crunchbase" | "discord" | "dockerhub" | "documentation" | "facebook" | "forum" | "g2" | "gartnerpeerinsights" | "getapp" | "github" | "glassdoor" | "googleplay" | "homebrew" | "hubspotmarketplace" | "instagram" | "linkedin" | "maven" | "morningstar" | "nasdaq" | "npm" | "nyse" | "pitchbook" | "producthunt" | "pypi" | "roadmap" | "salesforceappexchange" | "slackappdirectory" | "sourceforge" | "statuspage" | "subreddit" | "support" | "theorg" | "tiktok" | "trustpilot" | "trustradius" | "twitter" | "vscodemarketplace" | "website" | "wellfound" | "wikipedia" | "ycombinator" | "youtube";
    }, unknown, z.core.$ZodTypeInternals<{
        crawlCdnProvider?: "akamai" | "awsCloudfront" | "azureCdn" | "bunny" | "cdn77" | "cdnetworks" | "cloudflare" | "digitalocean" | "fastly" | "gcore" | "googlecloudCdn" | "incapsula" | "keycdn" | "leaseweb" | "netlify" | "none" | "stackpath" | "sucuri" | "unknown" | "vercel" | null | undefined;
        crawlRenderMode?: "jsEnhanced" | "jsRequired" | "static" | null | undefined;
        createdAt?: string | null | undefined;
        id?: number | null | undefined;
        isCurrent?: boolean | null | undefined;
        isPrimary?: boolean | null | undefined;
        owner?: {
            entityId?: string | null | undefined;
            personId?: string | null | undefined;
        } | null | undefined;
        sourceId?: string | null | undefined;
        status?: string | null | undefined;
        statusChecked?: string | null | undefined;
        updatedAt?: string | null | undefined;
        url: string;
        urlType: "alternativeto" | "angellist" | "appstore" | "awsmarketplace" | "bloomberg" | "capterra" | "changelog" | "chromewebstore" | "crates" | "crunchbase" | "discord" | "dockerhub" | "documentation" | "facebook" | "forum" | "g2" | "gartnerpeerinsights" | "getapp" | "github" | "glassdoor" | "googleplay" | "homebrew" | "hubspotmarketplace" | "instagram" | "linkedin" | "maven" | "morningstar" | "nasdaq" | "npm" | "nyse" | "pitchbook" | "producthunt" | "pypi" | "roadmap" | "salesforceappexchange" | "slackappdirectory" | "sourceforge" | "statuspage" | "subreddit" | "support" | "theorg" | "tiktok" | "trustpilot" | "trustradius" | "twitter" | "vscodemarketplace" | "website" | "wellfound" | "wikipedia" | "ycombinator" | "youtube";
    }, unknown>>>;
    score: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
    startDate: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
    titleFunction: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    titleId: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
    titleLevel: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    titleName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    updatedAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
}, z.core.$strip>;
export type EntityPersonAssociation = z.infer<typeof EntityPersonAssociationSchema>;
//# sourceMappingURL=person-association.d.ts.map