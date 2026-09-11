import { z } from "zod/v4";
declare const EntityEnrichmentSchemaDefinition: z.ZodObject<{
    address: z.ZodArray<z.ZodObject<{
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
    classification: z.ZodType<{
        geoLocationExposure?: ({
            creatable: boolean;
            isCurrent?: boolean | null | undefined;
            isPrimary?: boolean | null | undefined;
            name: string;
            writable: boolean;
        } & {
            bucket?: string | null | undefined;
            classificationId?: number | null | undefined;
            creatable: boolean;
            createdAt?: string | null | undefined;
            id: number;
            isCurrent?: boolean | null | undefined;
            isPrimary?: boolean | null | undefined;
            name: string;
            slug?: string | null | undefined;
            type: string;
            updatedAt?: string | null | undefined;
            writable: boolean;
        })[] | undefined;
        industry?: ({
            creatable: boolean;
            isCurrent?: boolean | null | undefined;
            isPrimary?: boolean | null | undefined;
            name: string;
            writable: boolean;
        } & {
            bucket?: string | null | undefined;
            classificationId?: number | null | undefined;
            creatable: boolean;
            createdAt?: string | null | undefined;
            id: number;
            isCurrent?: boolean | null | undefined;
            isPrimary?: boolean | null | undefined;
            name: string;
            slug?: string | null | undefined;
            type: string;
            updatedAt?: string | null | undefined;
            writable: boolean;
        })[] | undefined;
        mainProduct?: ({
            creatable: boolean;
            isCurrent?: boolean | null | undefined;
            isPrimary?: boolean | null | undefined;
            name: string;
            writable: boolean;
        } & {
            bucket?: string | null | undefined;
            classificationId?: number | null | undefined;
            creatable: boolean;
            createdAt?: string | null | undefined;
            id: number;
            isCurrent?: boolean | null | undefined;
            isPrimary?: boolean | null | undefined;
            name: string;
            slug?: string | null | undefined;
            type: string;
            updatedAt?: string | null | undefined;
            writable: boolean;
        })[] | undefined;
        standardizedClassification?: ({
            creatable: boolean;
            isCurrent?: boolean | null | undefined;
            isPrimary?: boolean | null | undefined;
            name: string;
            writable: boolean;
        } & {
            category: string;
            code?: number | null | undefined;
            creatable: boolean;
            createdAt?: string | null | undefined;
            entityClassificationId?: number | null | undefined;
            id: number;
            isCurrent?: boolean | null | undefined;
            isPrimary?: boolean | null | undefined;
            level?: number | null | undefined;
            name: string;
            updatedAt?: string | null | undefined;
            writable: boolean;
        })[] | undefined;
        tag?: ({
            creatable: boolean;
            isCurrent?: boolean | null | undefined;
            isPrimary?: boolean | null | undefined;
            name: string;
            writable: boolean;
        } & {
            bucket?: string | null | undefined;
            classificationId?: number | null | undefined;
            creatable: boolean;
            createdAt?: string | null | undefined;
            id: number;
            isCurrent?: boolean | null | undefined;
            isPrimary?: boolean | null | undefined;
            name: string;
            slug?: string | null | undefined;
            type: string;
            updatedAt?: string | null | undefined;
            writable: boolean;
        })[] | undefined;
        typeCustomer?: ({
            creatable: boolean;
            isCurrent?: boolean | null | undefined;
            isPrimary?: boolean | null | undefined;
            name: string;
            writable: boolean;
        } & {
            bucket?: string | null | undefined;
            classificationId?: number | null | undefined;
            creatable: boolean;
            createdAt?: string | null | undefined;
            id: number;
            isCurrent?: boolean | null | undefined;
            isPrimary?: boolean | null | undefined;
            name: string;
            slug?: string | null | undefined;
            type: string;
            updatedAt?: string | null | undefined;
            writable: boolean;
        })[] | undefined;
        typeModel?: ({
            creatable: boolean;
            isCurrent?: boolean | null | undefined;
            isPrimary?: boolean | null | undefined;
            name: string;
            writable: boolean;
        } & {
            bucket?: string | null | undefined;
            classificationId?: number | null | undefined;
            creatable: boolean;
            createdAt?: string | null | undefined;
            id: number;
            isCurrent?: boolean | null | undefined;
            isPrimary?: boolean | null | undefined;
            name: string;
            slug?: string | null | undefined;
            type: string;
            updatedAt?: string | null | undefined;
            writable: boolean;
        })[] | undefined;
        typeOwnership?: ({
            creatable: boolean;
            isCurrent?: boolean | null | undefined;
            isPrimary?: boolean | null | undefined;
            name: string;
            writable: boolean;
        } & {
            bucket?: string | null | undefined;
            classificationId?: number | null | undefined;
            creatable: boolean;
            createdAt?: string | null | undefined;
            id: number;
            isCurrent?: boolean | null | undefined;
            isPrimary?: boolean | null | undefined;
            name: string;
            slug?: string | null | undefined;
            type: string;
            updatedAt?: string | null | undefined;
            writable: boolean;
        })[] | undefined;
        typeRevenue?: ({
            creatable: boolean;
            isCurrent?: boolean | null | undefined;
            isPrimary?: boolean | null | undefined;
            name: string;
            writable: boolean;
        } & {
            bucket?: string | null | undefined;
            classificationId?: number | null | undefined;
            creatable: boolean;
            createdAt?: string | null | undefined;
            id: number;
            isCurrent?: boolean | null | undefined;
            isPrimary?: boolean | null | undefined;
            name: string;
            slug?: string | null | undefined;
            type: string;
            updatedAt?: string | null | undefined;
            writable: boolean;
        })[] | undefined;
        typeTechnologyUsed?: ({
            creatable: boolean;
            isCurrent?: boolean | null | undefined;
            isPrimary?: boolean | null | undefined;
            name: string;
            writable: boolean;
        } & {
            bucket?: string | null | undefined;
            classificationId?: number | null | undefined;
            creatable: boolean;
            createdAt?: string | null | undefined;
            id: number;
            isCurrent?: boolean | null | undefined;
            isPrimary?: boolean | null | undefined;
            name: string;
            slug?: string | null | undefined;
            type: string;
            updatedAt?: string | null | undefined;
            writable: boolean;
        })[] | undefined;
    }, unknown, z.core.$ZodTypeInternals<{
        geoLocationExposure?: ({
            creatable: boolean;
            isCurrent?: boolean | null | undefined;
            isPrimary?: boolean | null | undefined;
            name: string;
            writable: boolean;
        } & {
            bucket?: string | null | undefined;
            classificationId?: number | null | undefined;
            creatable: boolean;
            createdAt?: string | null | undefined;
            id: number;
            isCurrent?: boolean | null | undefined;
            isPrimary?: boolean | null | undefined;
            name: string;
            slug?: string | null | undefined;
            type: string;
            updatedAt?: string | null | undefined;
            writable: boolean;
        })[] | undefined;
        industry?: ({
            creatable: boolean;
            isCurrent?: boolean | null | undefined;
            isPrimary?: boolean | null | undefined;
            name: string;
            writable: boolean;
        } & {
            bucket?: string | null | undefined;
            classificationId?: number | null | undefined;
            creatable: boolean;
            createdAt?: string | null | undefined;
            id: number;
            isCurrent?: boolean | null | undefined;
            isPrimary?: boolean | null | undefined;
            name: string;
            slug?: string | null | undefined;
            type: string;
            updatedAt?: string | null | undefined;
            writable: boolean;
        })[] | undefined;
        mainProduct?: ({
            creatable: boolean;
            isCurrent?: boolean | null | undefined;
            isPrimary?: boolean | null | undefined;
            name: string;
            writable: boolean;
        } & {
            bucket?: string | null | undefined;
            classificationId?: number | null | undefined;
            creatable: boolean;
            createdAt?: string | null | undefined;
            id: number;
            isCurrent?: boolean | null | undefined;
            isPrimary?: boolean | null | undefined;
            name: string;
            slug?: string | null | undefined;
            type: string;
            updatedAt?: string | null | undefined;
            writable: boolean;
        })[] | undefined;
        standardizedClassification?: ({
            creatable: boolean;
            isCurrent?: boolean | null | undefined;
            isPrimary?: boolean | null | undefined;
            name: string;
            writable: boolean;
        } & {
            category: string;
            code?: number | null | undefined;
            creatable: boolean;
            createdAt?: string | null | undefined;
            entityClassificationId?: number | null | undefined;
            id: number;
            isCurrent?: boolean | null | undefined;
            isPrimary?: boolean | null | undefined;
            level?: number | null | undefined;
            name: string;
            updatedAt?: string | null | undefined;
            writable: boolean;
        })[] | undefined;
        tag?: ({
            creatable: boolean;
            isCurrent?: boolean | null | undefined;
            isPrimary?: boolean | null | undefined;
            name: string;
            writable: boolean;
        } & {
            bucket?: string | null | undefined;
            classificationId?: number | null | undefined;
            creatable: boolean;
            createdAt?: string | null | undefined;
            id: number;
            isCurrent?: boolean | null | undefined;
            isPrimary?: boolean | null | undefined;
            name: string;
            slug?: string | null | undefined;
            type: string;
            updatedAt?: string | null | undefined;
            writable: boolean;
        })[] | undefined;
        typeCustomer?: ({
            creatable: boolean;
            isCurrent?: boolean | null | undefined;
            isPrimary?: boolean | null | undefined;
            name: string;
            writable: boolean;
        } & {
            bucket?: string | null | undefined;
            classificationId?: number | null | undefined;
            creatable: boolean;
            createdAt?: string | null | undefined;
            id: number;
            isCurrent?: boolean | null | undefined;
            isPrimary?: boolean | null | undefined;
            name: string;
            slug?: string | null | undefined;
            type: string;
            updatedAt?: string | null | undefined;
            writable: boolean;
        })[] | undefined;
        typeModel?: ({
            creatable: boolean;
            isCurrent?: boolean | null | undefined;
            isPrimary?: boolean | null | undefined;
            name: string;
            writable: boolean;
        } & {
            bucket?: string | null | undefined;
            classificationId?: number | null | undefined;
            creatable: boolean;
            createdAt?: string | null | undefined;
            id: number;
            isCurrent?: boolean | null | undefined;
            isPrimary?: boolean | null | undefined;
            name: string;
            slug?: string | null | undefined;
            type: string;
            updatedAt?: string | null | undefined;
            writable: boolean;
        })[] | undefined;
        typeOwnership?: ({
            creatable: boolean;
            isCurrent?: boolean | null | undefined;
            isPrimary?: boolean | null | undefined;
            name: string;
            writable: boolean;
        } & {
            bucket?: string | null | undefined;
            classificationId?: number | null | undefined;
            creatable: boolean;
            createdAt?: string | null | undefined;
            id: number;
            isCurrent?: boolean | null | undefined;
            isPrimary?: boolean | null | undefined;
            name: string;
            slug?: string | null | undefined;
            type: string;
            updatedAt?: string | null | undefined;
            writable: boolean;
        })[] | undefined;
        typeRevenue?: ({
            creatable: boolean;
            isCurrent?: boolean | null | undefined;
            isPrimary?: boolean | null | undefined;
            name: string;
            writable: boolean;
        } & {
            bucket?: string | null | undefined;
            classificationId?: number | null | undefined;
            creatable: boolean;
            createdAt?: string | null | undefined;
            id: number;
            isCurrent?: boolean | null | undefined;
            isPrimary?: boolean | null | undefined;
            name: string;
            slug?: string | null | undefined;
            type: string;
            updatedAt?: string | null | undefined;
            writable: boolean;
        })[] | undefined;
        typeTechnologyUsed?: ({
            creatable: boolean;
            isCurrent?: boolean | null | undefined;
            isPrimary?: boolean | null | undefined;
            name: string;
            writable: boolean;
        } & {
            bucket?: string | null | undefined;
            classificationId?: number | null | undefined;
            creatable: boolean;
            createdAt?: string | null | undefined;
            id: number;
            isCurrent?: boolean | null | undefined;
            isPrimary?: boolean | null | undefined;
            name: string;
            slug?: string | null | undefined;
            type: string;
            updatedAt?: string | null | undefined;
            writable: boolean;
        })[] | undefined;
    }, unknown>>;
    fundingDetail: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        fundingRoundCount: z.ZodInt;
        investorCount: z.ZodInt;
        latestValuation: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        mostRecentAmount: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        mostRecentDate: z.ZodOptional<z.ZodNullable<z.ZodISODate>>;
        stage: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
            Acquired: "Acquired";
            "Acquired Subsidiary": "Acquired Subsidiary";
            Angel: "Angel";
            Fund: "Fund";
            Government: "Government";
            "Investment Firm": "Investment Firm";
            Nonprofit: "Nonprofit";
            "Pre-Seed": "Pre-Seed";
            Public: "Public";
            Seed: "Seed";
            "Series A": "Series A";
            "Series B": "Series B";
            "Series C": "Series C";
            "Series D": "Series D";
            "Series E": "Series E";
            "Series F": "Series F";
            "Series G": "Series G";
            "Series H": "Series H";
            "Series I": "Series I";
            "Series J": "Series J";
            "Series K": "Series K";
            "Series L": "Series L";
            "Series M": "Series M";
            "Series N": "Series N";
            "Series O": "Series O";
            "Series P": "Series P";
            "Series Q": "Series Q";
            "Series R": "Series R";
            "Series S": "Series S";
            "Series T": "Series T";
            "Series U": "Series U";
            "Series V": "Series V";
            "Series W": "Series W";
            "Series X": "Series X";
            "Series Y": "Series Y";
            "Series Z": "Series Z";
        }>>>;
        totalRaised: z.ZodNumber;
    }, z.core.$strip>>>;
    text: z.ZodType<{
        expanded?: string | null | undefined;
        generatedDescription?: string | null | undefined;
        short?: string | null | undefined;
    }, unknown, z.core.$ZodTypeInternals<{
        expanded?: string | null | undefined;
        generatedDescription?: string | null | undefined;
        short?: string | null | undefined;
    }, unknown>>;
    urlLink: z.ZodArray<z.ZodType<{
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
}, z.core.$strip>;
type EntityEnrichmentDefinition = z.infer<typeof EntityEnrichmentSchemaDefinition>;
/**
 * Supplemental entity data — addresses, classification tags, funding, text content, and URL links
 *
 * @openapiSchema EntityEnrichment
 * @endpoint GET /v1/entities
 * @endpoint GET /v1/entities/detail
 * @endpoint GET /v1/entities/detail/similar
 * @endpoint GET /v1/entities/lookup
 * @endpoint GET /v1/search/link
 * @endpoint GET /v1/entities/{entityId}
 * @endpoint GET /v1/entities/{entityId}/investors
 * @endpoint GET /v1/entities/{entityId}/products/suggestions
 * @endpoint GET /v1/entities/{entityId}/relationships/suggestions
 * @endpoint POST /v1/entities/batch
 * @endpoint POST /v1/entities/detail/batch
 * @endpoint POST /v1/entities/detail/resolve
 * @endpoint POST /v1/entities/lookup/batch
 * @endpoint POST /v1/entities/natural-search
 * @endpoint POST /v1/entities/search
 * @endpoint POST /v1/search/all
 * @usedBySchema EntityDetailSchema
 * @usedBySchema EntityListSchema
 * @contractShape entity.enrichment
 * @contractRole canonical
 */
export declare const EntityEnrichmentSchema: z.ZodType<EntityEnrichmentDefinition>;
export type EntityEnrichment = z.infer<typeof EntityEnrichmentSchema>;
export {};
//# sourceMappingURL=enrichment.d.ts.map