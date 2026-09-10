import { z } from "zod/v4";
declare const PersonDetailSchemaDefinition: z.ZodObject<{
    articleCount: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
    association: z.ZodArray<z.ZodObject<{
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
    }, z.core.$strip>>;
    core: z.ZodType<{
        createdAt?: string | null | undefined;
        gender?: string | null | undefined;
        id: string;
        image: {
            isMonogram: boolean;
            picture?: string | null | undefined;
        };
        lastModifiedAt?: string | null | undefined;
        nameAlias: {
            displayable?: boolean | null | undefined;
            name: string;
            type?: "formerName" | "maidenName" | "nickname" | "stageName" | null | undefined;
        }[];
        nameFirst?: string | null | undefined;
        nameFull: string;
        nameLast?: string | null | undefined;
        nameMiddle?: string | null | undefined;
        nickname?: string | null | undefined;
        publicId?: string | null | undefined;
        semanticMatch?: {
            computedAt: string;
            cosineDistance: number;
            cosineScore: number;
            modelVersion: string;
            rank: number;
            sourceHash: string;
            sourceId: string;
            sourceJson: string;
            sourceText: string;
            sourceType: "agentHelpDoc" | "blogPost" | "classificationCode" | "classificationTag" | "entity" | "newsArticle" | "person" | "product" | "service" | "text";
        } | null | undefined;
        slug: string;
        source: {
            changedAt?: string | null | undefined;
            dataSourceUpdatedAt?: string | null | undefined;
            detail?: string | null | undefined;
            kind?: string | null | undefined;
            pendingApproval?: number | null | undefined;
            sourceId?: string | null | undefined;
            status?: string | null | undefined;
        };
        suffix?: string | null | undefined;
        text: {
            expanded?: string | null | undefined;
            generatedDescription?: string | null | undefined;
            short?: string | null | undefined;
        };
        updatedAt?: string | null | undefined;
    }, unknown, z.core.$ZodTypeInternals<{
        createdAt?: string | null | undefined;
        gender?: string | null | undefined;
        id: string;
        image: {
            isMonogram: boolean;
            picture?: string | null | undefined;
        };
        lastModifiedAt?: string | null | undefined;
        nameAlias: {
            displayable?: boolean | null | undefined;
            name: string;
            type?: "formerName" | "maidenName" | "nickname" | "stageName" | null | undefined;
        }[];
        nameFirst?: string | null | undefined;
        nameFull: string;
        nameLast?: string | null | undefined;
        nameMiddle?: string | null | undefined;
        nickname?: string | null | undefined;
        publicId?: string | null | undefined;
        semanticMatch?: {
            computedAt: string;
            cosineDistance: number;
            cosineScore: number;
            modelVersion: string;
            rank: number;
            sourceHash: string;
            sourceId: string;
            sourceJson: string;
            sourceText: string;
            sourceType: "agentHelpDoc" | "blogPost" | "classificationCode" | "classificationTag" | "entity" | "newsArticle" | "person" | "product" | "service" | "text";
        } | null | undefined;
        slug: string;
        source: {
            changedAt?: string | null | undefined;
            dataSourceUpdatedAt?: string | null | undefined;
            detail?: string | null | undefined;
            kind?: string | null | undefined;
            pendingApproval?: number | null | undefined;
            sourceId?: string | null | undefined;
            status?: string | null | undefined;
        };
        suffix?: string | null | undefined;
        text: {
            expanded?: string | null | undefined;
            generatedDescription?: string | null | undefined;
            short?: string | null | undefined;
        };
        updatedAt?: string | null | undefined;
    }, unknown>>;
    enrichment: z.ZodType<{
        address: {
            address?: number | null | undefined;
            addressLine1?: string | null | undefined;
            addressLine2?: string | null | undefined;
            association?: {
                endDate?: string | null | undefined;
                id: number;
                isCurrent: boolean;
                role?: "domicile" | "dominant" | "origin" | null | undefined;
                startDate?: string | null | undefined;
            }[] | undefined;
            city?: {
                id?: number | null | undefined;
                name: string;
            } | null | undefined;
            country?: {
                countryCodeChar2?: string | null | undefined;
                countryCodeChar3?: string | null | undefined;
                id?: number | null | undefined;
                name: string;
                unRegion?: string | null | undefined;
                unSubregion?: string | null | undefined;
            } | null | undefined;
            countryAbbrev?: string | null | undefined;
            createdAt?: string | null | undefined;
            fullAddress?: string | null | undefined;
            id?: number | null | undefined;
            isCurrent?: boolean | null | undefined;
            isHq?: boolean | null | undefined;
            isPrimary?: boolean | null | undefined;
            latitude?: number | null | undefined;
            longitude?: number | null | undefined;
            postalCode?: string | null | undefined;
            state?: {
                id?: number | null | undefined;
                name: string;
                stateAbbrev?: string | null | undefined;
            } | null | undefined;
            stateAbbrev?: string | null | undefined;
            street?: string | null | undefined;
            updatedAt?: string | null | undefined;
        }[];
        urlLink: {
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
        }[];
    }, unknown, z.core.$ZodTypeInternals<{
        address: {
            address?: number | null | undefined;
            addressLine1?: string | null | undefined;
            addressLine2?: string | null | undefined;
            association?: {
                endDate?: string | null | undefined;
                id: number;
                isCurrent: boolean;
                role?: "domicile" | "dominant" | "origin" | null | undefined;
                startDate?: string | null | undefined;
            }[] | undefined;
            city?: {
                id?: number | null | undefined;
                name: string;
            } | null | undefined;
            country?: {
                countryCodeChar2?: string | null | undefined;
                countryCodeChar3?: string | null | undefined;
                id?: number | null | undefined;
                name: string;
                unRegion?: string | null | undefined;
                unSubregion?: string | null | undefined;
            } | null | undefined;
            countryAbbrev?: string | null | undefined;
            createdAt?: string | null | undefined;
            fullAddress?: string | null | undefined;
            id?: number | null | undefined;
            isCurrent?: boolean | null | undefined;
            isHq?: boolean | null | undefined;
            isPrimary?: boolean | null | undefined;
            latitude?: number | null | undefined;
            longitude?: number | null | undefined;
            postalCode?: string | null | undefined;
            state?: {
                id?: number | null | undefined;
                name: string;
                stateAbbrev?: string | null | undefined;
            } | null | undefined;
            stateAbbrev?: string | null | undefined;
            street?: string | null | undefined;
            updatedAt?: string | null | undefined;
        }[];
        urlLink: {
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
        }[];
    }, unknown>>;
    investment: z.ZodArray<z.ZodType<{
        amount?: number | null | undefined;
        company: {
            entity: {
                createdAt?: string | null | undefined;
                defaultCurrency?: string | null | undefined;
                foundedYear?: number | null | undefined;
                id: string;
                image: {
                    isMonogram: boolean;
                    logo?: string | null | undefined;
                    logoSquare?: string | null | undefined;
                };
                lastModifiedAt?: string | null | undefined;
                nameAlias: {
                    displayable?: boolean | null | undefined;
                    name: string;
                    type?: "alternativeDba" | "relatedLegal" | null | undefined;
                }[];
                nameBrand: string;
                nameLegal?: string | null | undefined;
                operatingStatus?: string | null | undefined;
                publicId?: string | null | undefined;
                publicUrl?: string | null | undefined;
                sitemap?: {
                    hasAcquisitions?: boolean | undefined;
                    hasAnalysis: boolean;
                    hasEmployees: boolean;
                    hasFundraising: boolean;
                    hasNews: boolean;
                    productServiceSlug: string[];
                } | null | undefined;
                slug: string;
                typeRecord?: "Business Line" | "Company" | "Fund" | "Government" | "Investment Firm" | "Nonprofit" | "Organization" | "Product" | "Service" | null | undefined;
                updatedAt?: string | null | undefined;
            };
        };
        date?: string | null | undefined;
        fundraiseTransaction?: {
            amountRaised?: number | null | undefined;
            dateAnnounced?: string | null | undefined;
            id: string;
            image: {
                isMonogram: boolean;
                logo?: string | null | undefined;
                logoSquare?: string | null | undefined;
            };
            investorCount?: number | null | undefined;
            nameBrand: string;
            round?: string | null | undefined;
            status?: string | null | undefined;
            valuationPostMoney?: number | null | undefined;
        } | null | undefined;
        fundraiseTransactionId: string;
        id: string;
        investmentDate: string;
        investorAttribution?: {
            amountInvested?: number | null | undefined;
            attributionType: "direct" | "managedFund";
            beneficialEntityId?: string | null | undefined;
            fundManagerRelationshipId?: number | null | undefined;
            joinId: string;
            leadInvestor: boolean;
            recordedEntityId?: string | null | undefined;
            round?: {
                round: string;
            } | null | undefined;
            transactionId: string;
        } | null | undefined;
        round?: string | null | undefined;
    }, unknown, z.core.$ZodTypeInternals<{
        amount?: number | null | undefined;
        company: {
            entity: {
                createdAt?: string | null | undefined;
                defaultCurrency?: string | null | undefined;
                foundedYear?: number | null | undefined;
                id: string;
                image: {
                    isMonogram: boolean;
                    logo?: string | null | undefined;
                    logoSquare?: string | null | undefined;
                };
                lastModifiedAt?: string | null | undefined;
                nameAlias: {
                    displayable?: boolean | null | undefined;
                    name: string;
                    type?: "alternativeDba" | "relatedLegal" | null | undefined;
                }[];
                nameBrand: string;
                nameLegal?: string | null | undefined;
                operatingStatus?: string | null | undefined;
                publicId?: string | null | undefined;
                publicUrl?: string | null | undefined;
                sitemap?: {
                    hasAcquisitions?: boolean | undefined;
                    hasAnalysis: boolean;
                    hasEmployees: boolean;
                    hasFundraising: boolean;
                    hasNews: boolean;
                    productServiceSlug: string[];
                } | null | undefined;
                slug: string;
                typeRecord?: "Business Line" | "Company" | "Fund" | "Government" | "Investment Firm" | "Nonprofit" | "Organization" | "Product" | "Service" | null | undefined;
                updatedAt?: string | null | undefined;
            };
        };
        date?: string | null | undefined;
        fundraiseTransaction?: {
            amountRaised?: number | null | undefined;
            dateAnnounced?: string | null | undefined;
            id: string;
            image: {
                isMonogram: boolean;
                logo?: string | null | undefined;
                logoSquare?: string | null | undefined;
            };
            investorCount?: number | null | undefined;
            nameBrand: string;
            round?: string | null | undefined;
            status?: string | null | undefined;
            valuationPostMoney?: number | null | undefined;
        } | null | undefined;
        fundraiseTransactionId: string;
        id: string;
        investmentDate: string;
        investorAttribution?: {
            amountInvested?: number | null | undefined;
            attributionType: "direct" | "managedFund";
            beneficialEntityId?: string | null | undefined;
            fundManagerRelationshipId?: number | null | undefined;
            joinId: string;
            leadInvestor: boolean;
            recordedEntityId?: string | null | undefined;
            round?: {
                round: string;
            } | null | undefined;
            transactionId: string;
        } | null | undefined;
        round?: string | null | undefined;
    }, unknown>>>;
    nameAlias: z.ZodArray<z.ZodType<{
        displayable?: boolean | null | undefined;
        name: string;
        type?: "formerName" | "maidenName" | "nickname" | "stageName" | null | undefined;
    }, unknown, z.core.$ZodTypeInternals<{
        displayable?: boolean | null | undefined;
        name: string;
        type?: "formerName" | "maidenName" | "nickname" | "stageName" | null | undefined;
    }, unknown>>>;
    pendingApproval: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
}, z.core.$strip>;
type PersonDetailDefinition = z.infer<typeof PersonDetailSchemaDefinition>;
/**
 * Composed person wrapper: core identity + enrichment + associations + investments. Access core fields via .core (for example .core.slug or .core.nameFull).
 *
 * @openapiSchema PersonDetail
 * @endpoint GET /v1/entities/detail
 * @endpoint GET /v1/entities/detail/investors
 * @endpoint GET /v1/entities/detail/person-investors
 * @endpoint GET /v1/entities/lookup
 * @endpoint GET /v1/people/detail
 * @endpoint GET /v1/people/lookup
 * @endpoint GET /v1/entities/{entityId}
 * @endpoint GET /v1/people/{personId}
 * @endpoint POST /v1/entities/batch
 * @endpoint POST /v1/entities/detail/batch
 * @endpoint POST /v1/entities/detail/resolve
 * @endpoint POST /v1/entities/lookup/batch
 * @endpoint POST /v1/people/batch
 * @endpoint POST /v1/people/detail/batch
 * @endpoint POST /v1/people/lookup/batch
 * @usedBySchema EntityDetailSchema
 * @usedBySchema PagePersonDetailSchema
 * @usedBySchema PersonInvestorParticipationSchema
 * @contractShape person.detail
 * @contractRole canonical
 */
export declare const PersonDetailSchema: z.ZodType<PersonDetailDefinition>;
export type PersonDetail = z.infer<typeof PersonDetailSchema>;
export {};
//# sourceMappingURL=detail.d.ts.map