import { z } from "zod/v4";
declare const EntityListSchemaDefinition: z.ZodObject<{
    core: z.ZodObject<{
        defaultCurrency: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        foundedYear: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
        id: z.ZodUUID;
        image: z.ZodType<{
            isMonogram: boolean;
            logo?: string | null | undefined;
            logoSquare?: string | null | undefined;
            logoSquareVariant?: {
                contentType: string;
                height: number;
                path: string;
                width: number;
            }[] | null | undefined;
            logoVariant?: {
                contentType: string;
                height: number;
                path: string;
                width: number;
            }[] | null | undefined;
        }, import("./image.ts").EntityImageSchemaInput, z.core.$ZodTypeInternals<{
            isMonogram: boolean;
            logo?: string | null | undefined;
            logoSquare?: string | null | undefined;
            logoSquareVariant?: {
                contentType: string;
                height: number;
                path: string;
                width: number;
            }[] | null | undefined;
            logoVariant?: {
                contentType: string;
                height: number;
                path: string;
                width: number;
            }[] | null | undefined;
        }, import("./image.ts").EntityImageSchemaInput>>;
        lastModifiedAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
        nameAlias: z.ZodArray<z.ZodObject<{
            displayable: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
            name: z.ZodString;
            type: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
                alternativeDba: "alternativeDba";
                relatedLegal: "relatedLegal";
            }>>>;
        }, z.core.$strip>>;
        nameBrand: z.ZodString;
        nameLegal: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        operatingStatus: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        publicId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        publicUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        sitemap: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            hasAcquisitions: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
            hasAnalysis: z.ZodBoolean;
            hasEmployees: z.ZodBoolean;
            hasFundraising: z.ZodBoolean;
            hasNews: z.ZodBoolean;
            productServiceSlug: z.ZodArray<z.ZodString>;
        }, z.core.$strip>>>;
        slug: z.ZodString;
        typeRecord: z.ZodEnum<{
            "Business Line": "Business Line";
            Company: "Company";
            Fund: "Fund";
            Government: "Government";
            "Investment Firm": "Investment Firm";
            Nonprofit: "Nonprofit";
            Organization: "Organization";
            Product: "Product";
            Service: "Service";
        }>;
        updatedAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
    }, z.core.$strip>;
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
        classification: {
            geoLocationExposure?: ({
                isCurrent?: boolean | null | undefined;
                isPrimary?: boolean | null | undefined;
                name: string;
                registry: string;
            } & {
                bucket?: string | null | undefined;
                classificationId?: number | null | undefined;
                createdAt?: string | null | undefined;
                id: number;
                isCurrent?: boolean | null | undefined;
                isPrimary?: boolean | null | undefined;
                name: string;
                slug?: string | null | undefined;
                type: string;
                updatedAt?: string | null | undefined;
            })[] | undefined;
            industry?: ({
                isCurrent?: boolean | null | undefined;
                isPrimary?: boolean | null | undefined;
                name: string;
                registry: string;
            } & {
                bucket?: string | null | undefined;
                classificationId?: number | null | undefined;
                createdAt?: string | null | undefined;
                id: number;
                isCurrent?: boolean | null | undefined;
                isPrimary?: boolean | null | undefined;
                name: string;
                slug?: string | null | undefined;
                type: string;
                updatedAt?: string | null | undefined;
            })[] | undefined;
            mainProduct?: ({
                isCurrent?: boolean | null | undefined;
                isPrimary?: boolean | null | undefined;
                name: string;
                registry: string;
            } & {
                bucket?: string | null | undefined;
                classificationId?: number | null | undefined;
                createdAt?: string | null | undefined;
                id: number;
                isCurrent?: boolean | null | undefined;
                isPrimary?: boolean | null | undefined;
                name: string;
                slug?: string | null | undefined;
                type: string;
                updatedAt?: string | null | undefined;
            })[] | undefined;
            standardizedClassification?: {
                category: string;
                classificationId?: number | null | undefined;
                code?: number | null | undefined;
                createdAt?: string | null | undefined;
                id: number;
                isCurrent?: boolean | null | undefined;
                isPrimary?: boolean | null | undefined;
                level?: number | null | undefined;
                name: string;
                registry: string;
                updatedAt?: string | null | undefined;
            }[] | undefined;
            tag?: ({
                isCurrent?: boolean | null | undefined;
                isPrimary?: boolean | null | undefined;
                name: string;
                registry: string;
            } & {
                bucket?: string | null | undefined;
                classificationId?: number | null | undefined;
                createdAt?: string | null | undefined;
                id: number;
                isCurrent?: boolean | null | undefined;
                isPrimary?: boolean | null | undefined;
                name: string;
                slug?: string | null | undefined;
                type: string;
                updatedAt?: string | null | undefined;
            })[] | undefined;
            typeCustomer?: ({
                isCurrent?: boolean | null | undefined;
                isPrimary?: boolean | null | undefined;
                name: string;
                registry: string;
            } & {
                bucket?: string | null | undefined;
                classificationId?: number | null | undefined;
                createdAt?: string | null | undefined;
                id: number;
                isCurrent?: boolean | null | undefined;
                isPrimary?: boolean | null | undefined;
                name: string;
                slug?: string | null | undefined;
                type: string;
                updatedAt?: string | null | undefined;
            })[] | undefined;
            typeModel?: ({
                isCurrent?: boolean | null | undefined;
                isPrimary?: boolean | null | undefined;
                name: string;
                registry: string;
            } & {
                bucket?: string | null | undefined;
                classificationId?: number | null | undefined;
                createdAt?: string | null | undefined;
                id: number;
                isCurrent?: boolean | null | undefined;
                isPrimary?: boolean | null | undefined;
                name: string;
                slug?: string | null | undefined;
                type: string;
                updatedAt?: string | null | undefined;
            })[] | undefined;
            typeOwnership?: ({
                isCurrent?: boolean | null | undefined;
                isPrimary?: boolean | null | undefined;
                name: string;
                registry: string;
            } & {
                bucket?: string | null | undefined;
                classificationId?: number | null | undefined;
                createdAt?: string | null | undefined;
                id: number;
                isCurrent?: boolean | null | undefined;
                isPrimary?: boolean | null | undefined;
                name: string;
                slug?: string | null | undefined;
                type: string;
                updatedAt?: string | null | undefined;
            })[] | undefined;
            typeRevenue?: ({
                isCurrent?: boolean | null | undefined;
                isPrimary?: boolean | null | undefined;
                name: string;
                registry: string;
            } & {
                bucket?: string | null | undefined;
                classificationId?: number | null | undefined;
                createdAt?: string | null | undefined;
                id: number;
                isCurrent?: boolean | null | undefined;
                isPrimary?: boolean | null | undefined;
                name: string;
                slug?: string | null | undefined;
                type: string;
                updatedAt?: string | null | undefined;
            })[] | undefined;
            typeTechnologyUsed?: ({
                isCurrent?: boolean | null | undefined;
                isPrimary?: boolean | null | undefined;
                name: string;
                registry: string;
            } & {
                bucket?: string | null | undefined;
                classificationId?: number | null | undefined;
                createdAt?: string | null | undefined;
                id: number;
                isCurrent?: boolean | null | undefined;
                isPrimary?: boolean | null | undefined;
                name: string;
                slug?: string | null | undefined;
                type: string;
                updatedAt?: string | null | undefined;
            })[] | undefined;
        };
        fundingDetail?: {
            currency?: string | null | undefined;
            fundingRoundCount: number;
            investorCount: number;
            latestValuation?: number | null | undefined;
            mostRecentAmount?: number | null | undefined;
            mostRecentDate?: string | null | undefined;
            stage?: string | null | undefined;
            totalRaised: number;
            totalRaisedUsd?: number | null | undefined;
            unconvertedRoundCount: number;
        } | null | undefined;
        headquartersAddressId?: number | null | undefined;
        headquartersRemoteAsOf?: string | null | undefined;
        text: {
            expanded?: string | null | undefined;
            generatedDescription?: string | null | undefined;
            short?: string | null | undefined;
        };
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
            urlType: string;
        }[];
    }, import("./enrichment.ts").EntityEnrichmentSchemaInput, z.core.$ZodTypeInternals<{
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
        classification: {
            geoLocationExposure?: ({
                isCurrent?: boolean | null | undefined;
                isPrimary?: boolean | null | undefined;
                name: string;
                registry: string;
            } & {
                bucket?: string | null | undefined;
                classificationId?: number | null | undefined;
                createdAt?: string | null | undefined;
                id: number;
                isCurrent?: boolean | null | undefined;
                isPrimary?: boolean | null | undefined;
                name: string;
                slug?: string | null | undefined;
                type: string;
                updatedAt?: string | null | undefined;
            })[] | undefined;
            industry?: ({
                isCurrent?: boolean | null | undefined;
                isPrimary?: boolean | null | undefined;
                name: string;
                registry: string;
            } & {
                bucket?: string | null | undefined;
                classificationId?: number | null | undefined;
                createdAt?: string | null | undefined;
                id: number;
                isCurrent?: boolean | null | undefined;
                isPrimary?: boolean | null | undefined;
                name: string;
                slug?: string | null | undefined;
                type: string;
                updatedAt?: string | null | undefined;
            })[] | undefined;
            mainProduct?: ({
                isCurrent?: boolean | null | undefined;
                isPrimary?: boolean | null | undefined;
                name: string;
                registry: string;
            } & {
                bucket?: string | null | undefined;
                classificationId?: number | null | undefined;
                createdAt?: string | null | undefined;
                id: number;
                isCurrent?: boolean | null | undefined;
                isPrimary?: boolean | null | undefined;
                name: string;
                slug?: string | null | undefined;
                type: string;
                updatedAt?: string | null | undefined;
            })[] | undefined;
            standardizedClassification?: {
                category: string;
                classificationId?: number | null | undefined;
                code?: number | null | undefined;
                createdAt?: string | null | undefined;
                id: number;
                isCurrent?: boolean | null | undefined;
                isPrimary?: boolean | null | undefined;
                level?: number | null | undefined;
                name: string;
                registry: string;
                updatedAt?: string | null | undefined;
            }[] | undefined;
            tag?: ({
                isCurrent?: boolean | null | undefined;
                isPrimary?: boolean | null | undefined;
                name: string;
                registry: string;
            } & {
                bucket?: string | null | undefined;
                classificationId?: number | null | undefined;
                createdAt?: string | null | undefined;
                id: number;
                isCurrent?: boolean | null | undefined;
                isPrimary?: boolean | null | undefined;
                name: string;
                slug?: string | null | undefined;
                type: string;
                updatedAt?: string | null | undefined;
            })[] | undefined;
            typeCustomer?: ({
                isCurrent?: boolean | null | undefined;
                isPrimary?: boolean | null | undefined;
                name: string;
                registry: string;
            } & {
                bucket?: string | null | undefined;
                classificationId?: number | null | undefined;
                createdAt?: string | null | undefined;
                id: number;
                isCurrent?: boolean | null | undefined;
                isPrimary?: boolean | null | undefined;
                name: string;
                slug?: string | null | undefined;
                type: string;
                updatedAt?: string | null | undefined;
            })[] | undefined;
            typeModel?: ({
                isCurrent?: boolean | null | undefined;
                isPrimary?: boolean | null | undefined;
                name: string;
                registry: string;
            } & {
                bucket?: string | null | undefined;
                classificationId?: number | null | undefined;
                createdAt?: string | null | undefined;
                id: number;
                isCurrent?: boolean | null | undefined;
                isPrimary?: boolean | null | undefined;
                name: string;
                slug?: string | null | undefined;
                type: string;
                updatedAt?: string | null | undefined;
            })[] | undefined;
            typeOwnership?: ({
                isCurrent?: boolean | null | undefined;
                isPrimary?: boolean | null | undefined;
                name: string;
                registry: string;
            } & {
                bucket?: string | null | undefined;
                classificationId?: number | null | undefined;
                createdAt?: string | null | undefined;
                id: number;
                isCurrent?: boolean | null | undefined;
                isPrimary?: boolean | null | undefined;
                name: string;
                slug?: string | null | undefined;
                type: string;
                updatedAt?: string | null | undefined;
            })[] | undefined;
            typeRevenue?: ({
                isCurrent?: boolean | null | undefined;
                isPrimary?: boolean | null | undefined;
                name: string;
                registry: string;
            } & {
                bucket?: string | null | undefined;
                classificationId?: number | null | undefined;
                createdAt?: string | null | undefined;
                id: number;
                isCurrent?: boolean | null | undefined;
                isPrimary?: boolean | null | undefined;
                name: string;
                slug?: string | null | undefined;
                type: string;
                updatedAt?: string | null | undefined;
            })[] | undefined;
            typeTechnologyUsed?: ({
                isCurrent?: boolean | null | undefined;
                isPrimary?: boolean | null | undefined;
                name: string;
                registry: string;
            } & {
                bucket?: string | null | undefined;
                classificationId?: number | null | undefined;
                createdAt?: string | null | undefined;
                id: number;
                isCurrent?: boolean | null | undefined;
                isPrimary?: boolean | null | undefined;
                name: string;
                slug?: string | null | undefined;
                type: string;
                updatedAt?: string | null | undefined;
            })[] | undefined;
        };
        fundingDetail?: {
            currency?: string | null | undefined;
            fundingRoundCount: number;
            investorCount: number;
            latestValuation?: number | null | undefined;
            mostRecentAmount?: number | null | undefined;
            mostRecentDate?: string | null | undefined;
            stage?: string | null | undefined;
            totalRaised: number;
            totalRaisedUsd?: number | null | undefined;
            unconvertedRoundCount: number;
        } | null | undefined;
        headquartersAddressId?: number | null | undefined;
        headquartersRemoteAsOf?: string | null | undefined;
        text: {
            expanded?: string | null | undefined;
            generatedDescription?: string | null | undefined;
            short?: string | null | undefined;
        };
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
            urlType: string;
        }[];
    }, import("./enrichment.ts").EntityEnrichmentSchemaInput>>;
    fundraiseRound: z.ZodArray<z.ZodType<{
        amountRaised?: number | null | undefined;
        createdAt?: string | null | undefined;
        currency?: string | null | undefined;
        dataConfidence?: "High" | "Low" | "Medium" | "Verified" | null | undefined;
        dateAnnounced?: string | null | undefined;
        dateFundingComplete?: string | null | undefined;
        dateInvestorExit?: string | null | undefined;
        entity?: {
            core: {
                defaultCurrency?: string | null | undefined;
                foundedYear?: number | null | undefined;
                id: string;
                image: {
                    isMonogram: boolean;
                    logo?: string | null | undefined;
                    logoSquare?: string | null | undefined;
                    logoSquareVariant?: {
                        contentType: string;
                        height: number;
                        path: string;
                        width: number;
                    }[] | null | undefined;
                    logoVariant?: {
                        contentType: string;
                        height: number;
                        path: string;
                        width: number;
                    }[] | null | undefined;
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
                typeRecord: "Business Line" | "Company" | "Fund" | "Government" | "Investment Firm" | "Nonprofit" | "Organization" | "Product" | "Service";
                updatedAt?: string | null | undefined;
            };
            fundingDetail?: {
                currency?: string | null | undefined;
                fundingRoundCount: number;
                investorCount: number;
                latestValuation?: number | null | undefined;
                mostRecentAmount?: number | null | undefined;
                mostRecentDate?: string | null | undefined;
                stage?: string | null | undefined;
                totalRaised: number;
                totalRaisedUsd?: number | null | undefined;
                unconvertedRoundCount: number;
            } | null | undefined;
        } | null | undefined;
        financialInstrumentType?: "Bond" | "Common Stock" | "Convertible Note" | "Grant" | "Loan" | "Other Debt" | "Other Equity" | "Preferred Stock" | "SAFE" | "Token" | null | undefined;
        id: string;
        investor?: {
            amountInvested?: number | null | undefined;
            createdAt: string;
            financialInstrumentType?: "Bond" | "Common Stock" | "Convertible Note" | "Grant" | "Loan" | "Other Debt" | "Other Equity" | "Preferred Stock" | "SAFE" | "Token" | null | undefined;
            id: string;
            investor: {
                entityId?: string | null | undefined;
                personId?: string | null | undefined;
            };
            investorName?: string | null | undefined;
            investorSlug?: string | null | undefined;
            leadInvestor: boolean;
            transactionId: string;
            updatedAt: string;
        }[] | null | undefined;
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
        investorCount?: number | null | undefined;
        publicSource?: {
            lastFetchedAt?: string | null | undefined;
            publishedAt?: string | null | undefined;
            recordedAt: string;
            sourceDetail: string;
        } | null | undefined;
        round?: string | null | undefined;
        roundType?: string | null | undefined;
        sourceAttribution: {
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
        }[];
        unsupportedField?: ("amountRaised" | "currency" | "dateAnnounced" | "dateFundingComplete" | "dateInvestorExit" | "financialInstrumentType" | "investorCount" | "round" | "roundType" | "status" | "valuationPostMoney" | "valuationPreMoney")[] | undefined;
        updatedAt?: string | null | undefined;
        valuationPostMoney?: number | null | undefined;
        valuationPreMoney?: number | null | undefined;
    }, import("./fundraise-transaction.ts").EntityFundraiseTransactionSchemaInput, z.core.$ZodTypeInternals<{
        amountRaised?: number | null | undefined;
        createdAt?: string | null | undefined;
        currency?: string | null | undefined;
        dataConfidence?: "High" | "Low" | "Medium" | "Verified" | null | undefined;
        dateAnnounced?: string | null | undefined;
        dateFundingComplete?: string | null | undefined;
        dateInvestorExit?: string | null | undefined;
        entity?: {
            core: {
                defaultCurrency?: string | null | undefined;
                foundedYear?: number | null | undefined;
                id: string;
                image: {
                    isMonogram: boolean;
                    logo?: string | null | undefined;
                    logoSquare?: string | null | undefined;
                    logoSquareVariant?: {
                        contentType: string;
                        height: number;
                        path: string;
                        width: number;
                    }[] | null | undefined;
                    logoVariant?: {
                        contentType: string;
                        height: number;
                        path: string;
                        width: number;
                    }[] | null | undefined;
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
                typeRecord: "Business Line" | "Company" | "Fund" | "Government" | "Investment Firm" | "Nonprofit" | "Organization" | "Product" | "Service";
                updatedAt?: string | null | undefined;
            };
            fundingDetail?: {
                currency?: string | null | undefined;
                fundingRoundCount: number;
                investorCount: number;
                latestValuation?: number | null | undefined;
                mostRecentAmount?: number | null | undefined;
                mostRecentDate?: string | null | undefined;
                stage?: string | null | undefined;
                totalRaised: number;
                totalRaisedUsd?: number | null | undefined;
                unconvertedRoundCount: number;
            } | null | undefined;
        } | null | undefined;
        financialInstrumentType?: "Bond" | "Common Stock" | "Convertible Note" | "Grant" | "Loan" | "Other Debt" | "Other Equity" | "Preferred Stock" | "SAFE" | "Token" | null | undefined;
        id: string;
        investor?: {
            amountInvested?: number | null | undefined;
            createdAt: string;
            financialInstrumentType?: "Bond" | "Common Stock" | "Convertible Note" | "Grant" | "Loan" | "Other Debt" | "Other Equity" | "Preferred Stock" | "SAFE" | "Token" | null | undefined;
            id: string;
            investor: {
                entityId?: string | null | undefined;
                personId?: string | null | undefined;
            };
            investorName?: string | null | undefined;
            investorSlug?: string | null | undefined;
            leadInvestor: boolean;
            transactionId: string;
            updatedAt: string;
        }[] | null | undefined;
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
        investorCount?: number | null | undefined;
        publicSource?: {
            lastFetchedAt?: string | null | undefined;
            publishedAt?: string | null | undefined;
            recordedAt: string;
            sourceDetail: string;
        } | null | undefined;
        round?: string | null | undefined;
        roundType?: string | null | undefined;
        sourceAttribution: {
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
        }[];
        unsupportedField?: ("amountRaised" | "currency" | "dateAnnounced" | "dateFundingComplete" | "dateInvestorExit" | "financialInstrumentType" | "investorCount" | "round" | "roundType" | "status" | "valuationPostMoney" | "valuationPreMoney")[] | undefined;
        updatedAt?: string | null | undefined;
        valuationPostMoney?: number | null | undefined;
        valuationPreMoney?: number | null | undefined;
    }, import("./fundraise-transaction.ts").EntityFundraiseTransactionSchemaInput>>>;
    profileStatus: z.ZodOptional<z.ZodObject<{
        headline: z.ZodUnion<readonly [z.ZodEnum<{
            Acquired: "Acquired";
            "Acquired Subsidiary": "Acquired Subsidiary";
            "Business Line": "Business Line";
            Closed: "Closed";
            "Closed (Acquihire)": "Closed (Acquihire)";
            Company: "Company";
            Fund: "Fund";
            Government: "Government";
            Inactive: "Inactive";
            "Investment Firm": "Investment Firm";
            Nonprofit: "Nonprofit";
            "Private company": "Private company";
            Product: "Product";
            "Public company": "Public company";
            Service: "Service";
        }>, z.ZodString]> & {
            enum: {
                Acquired: "Acquired";
                "Acquired Subsidiary": "Acquired Subsidiary";
                "Business Line": "Business Line";
                Closed: "Closed";
                "Closed (Acquihire)": "Closed (Acquihire)";
                Company: "Company";
                Fund: "Fund";
                Government: "Government";
                Inactive: "Inactive";
                "Investment Firm": "Investment Firm";
                Nonprofit: "Nonprofit";
                "Private company": "Private company";
                Product: "Product";
                "Public company": "Public company";
                Service: "Service";
            };
        };
        isAcquired: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        isClosed: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        isTerminal: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    }, z.core.$strip>>;
    provider: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        entity: z.ZodObject<{
            defaultCurrency: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            foundedYear: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
            id: z.ZodUUID;
            image: z.ZodType<{
                isMonogram: boolean;
                logo?: string | null | undefined;
                logoSquare?: string | null | undefined;
                logoSquareVariant?: {
                    contentType: string;
                    height: number;
                    path: string;
                    width: number;
                }[] | null | undefined;
                logoVariant?: {
                    contentType: string;
                    height: number;
                    path: string;
                    width: number;
                }[] | null | undefined;
            }, import("./image.ts").EntityImageSchemaInput, z.core.$ZodTypeInternals<{
                isMonogram: boolean;
                logo?: string | null | undefined;
                logoSquare?: string | null | undefined;
                logoSquareVariant?: {
                    contentType: string;
                    height: number;
                    path: string;
                    width: number;
                }[] | null | undefined;
                logoVariant?: {
                    contentType: string;
                    height: number;
                    path: string;
                    width: number;
                }[] | null | undefined;
            }, import("./image.ts").EntityImageSchemaInput>>;
            lastModifiedAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
            nameAlias: z.ZodArray<z.ZodObject<{
                displayable: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
                name: z.ZodString;
                type: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
                    alternativeDba: "alternativeDba";
                    relatedLegal: "relatedLegal";
                }>>>;
            }, z.core.$strip>>;
            nameBrand: z.ZodString;
            nameLegal: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            operatingStatus: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            publicId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            publicUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            sitemap: z.ZodOptional<z.ZodNullable<z.ZodObject<{
                hasAcquisitions: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
                hasAnalysis: z.ZodBoolean;
                hasEmployees: z.ZodBoolean;
                hasFundraising: z.ZodBoolean;
                hasNews: z.ZodBoolean;
                productServiceSlug: z.ZodArray<z.ZodString>;
            }, z.core.$strip>>>;
            slug: z.ZodString;
            typeRecord: z.ZodEnum<{
                "Business Line": "Business Line";
                Company: "Company";
                Fund: "Fund";
                Government: "Government";
                "Investment Firm": "Investment Firm";
                Nonprofit: "Nonprofit";
                Organization: "Organization";
                Product: "Product";
                Service: "Service";
            }>;
            updatedAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
        }, z.core.$strip>;
        headquarters: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            address: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
            addressLine1: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            addressLine2: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            association: z.ZodOptional<z.ZodArray<z.ZodType<{
                endDate?: string | null | undefined;
                id: number;
                isCurrent: boolean;
                role?: "domicile" | "dominant" | "origin" | null | undefined;
                startDate?: string | null | undefined;
            }, import("../address/association.ts").AddressAssociationSchemaInput, z.core.$ZodTypeInternals<{
                endDate?: string | null | undefined;
                id: number;
                isCurrent: boolean;
                role?: "domicile" | "dominant" | "origin" | null | undefined;
                startDate?: string | null | undefined;
            }, import("../address/association.ts").AddressAssociationSchemaInput>>>>;
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
        }, z.core.$strip>>>;
        relationshipType: z.ZodEnum<{
            fundManagerFirm: "fundManagerFirm";
            productService: "productService";
        }>;
    }, z.core.$strip>>>;
    research: z.ZodType<{
        acceleratorParticipation: {
            accelerator: {
                defaultCurrency?: string | null | undefined;
                foundedYear?: number | null | undefined;
                id: string;
                image: {
                    isMonogram: boolean;
                    logo?: string | null | undefined;
                    logoSquare?: string | null | undefined;
                    logoSquareVariant?: {
                        contentType: string;
                        height: number;
                        path: string;
                        width: number;
                    }[] | null | undefined;
                    logoVariant?: {
                        contentType: string;
                        height: number;
                        path: string;
                        width: number;
                    }[] | null | undefined;
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
                typeRecord: "Business Line" | "Company" | "Fund" | "Government" | "Investment Firm" | "Nonprofit" | "Organization" | "Product" | "Service";
                updatedAt?: string | null | undefined;
            };
            acceleratorName: string;
            asOfDate: string;
            batch?: string | null | undefined;
            id: string;
            program?: string | null | undefined;
            status?: string | null | undefined;
        }[];
        detail: {
            asOfDate?: string | null | undefined;
            currentEligible?: boolean | null | undefined;
            derivedRange?: {
                asOfDate: string;
                bucket: "beyondTwoYears" | "pastDue" | "sixToTwelveMonths" | "threeToSixMonths" | "twelveToTwentyFourMonths" | "withinThreeMonths";
                monthsFromNow: number;
                targetDate: string;
            } | null | undefined;
            discreteValue?: number | null | undefined;
            entityId: string;
            id: number;
            publicSource?: {
                lastFetchedAt?: string | null | undefined;
                publishedAt?: string | null | undefined;
                recordedAt: string;
                sourceDetail: string;
            } | null | undefined;
            textValue?: string | null | undefined;
            typeResearchDetail: string;
            updatedAt?: string | null | undefined;
            valueResearchDetail?: string | null | undefined;
            valueType: "date" | "monetary" | "numeric" | "percentage" | "text";
        }[];
    }, import("./list-research.ts").EntityListResearchSchemaInput, z.core.$ZodTypeInternals<{
        acceleratorParticipation: {
            accelerator: {
                defaultCurrency?: string | null | undefined;
                foundedYear?: number | null | undefined;
                id: string;
                image: {
                    isMonogram: boolean;
                    logo?: string | null | undefined;
                    logoSquare?: string | null | undefined;
                    logoSquareVariant?: {
                        contentType: string;
                        height: number;
                        path: string;
                        width: number;
                    }[] | null | undefined;
                    logoVariant?: {
                        contentType: string;
                        height: number;
                        path: string;
                        width: number;
                    }[] | null | undefined;
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
                typeRecord: "Business Line" | "Company" | "Fund" | "Government" | "Investment Firm" | "Nonprofit" | "Organization" | "Product" | "Service";
                updatedAt?: string | null | undefined;
            };
            acceleratorName: string;
            asOfDate: string;
            batch?: string | null | undefined;
            id: string;
            program?: string | null | undefined;
            status?: string | null | undefined;
        }[];
        detail: {
            asOfDate?: string | null | undefined;
            currentEligible?: boolean | null | undefined;
            derivedRange?: {
                asOfDate: string;
                bucket: "beyondTwoYears" | "pastDue" | "sixToTwelveMonths" | "threeToSixMonths" | "twelveToTwentyFourMonths" | "withinThreeMonths";
                monthsFromNow: number;
                targetDate: string;
            } | null | undefined;
            discreteValue?: number | null | undefined;
            entityId: string;
            id: number;
            publicSource?: {
                lastFetchedAt?: string | null | undefined;
                publishedAt?: string | null | undefined;
                recordedAt: string;
                sourceDetail: string;
            } | null | undefined;
            textValue?: string | null | undefined;
            typeResearchDetail: string;
            updatedAt?: string | null | undefined;
            valueResearchDetail?: string | null | undefined;
            valueType: "date" | "monetary" | "numeric" | "percentage" | "text";
        }[];
    }, import("./list-research.ts").EntityListResearchSchemaInput>>;
    semanticMatch: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        computedAt: z.ZodISODateTime;
        cosineDistance: z.ZodNumber;
        cosineScore: z.ZodNumber;
        modelVersion: z.ZodString;
        rank: z.ZodInt;
        sourceHash: z.ZodString;
        sourceId: z.ZodString;
        sourceType: z.ZodUnion<readonly [z.ZodEnum<{
            agentHelpDoc: "agentHelpDoc";
            blogPost: "blogPost";
            classificationCode: "classificationCode";
            classificationTag: "classificationTag";
            entity: "entity";
            newsArticle: "newsArticle";
            person: "person";
            product: "product";
            researchSnippet: "researchSnippet";
            service: "service";
            sourceDocument: "sourceDocument";
            text: "text";
        }>, z.ZodString]> & {
            enum: {
                agentHelpDoc: "agentHelpDoc";
                blogPost: "blogPost";
                classificationCode: "classificationCode";
                classificationTag: "classificationTag";
                entity: "entity";
                newsArticle: "newsArticle";
                person: "person";
                product: "product";
                researchSnippet: "researchSnippet";
                service: "service";
                sourceDocument: "sourceDocument";
                text: "text";
            };
        };
    }, z.core.$strip>>>;
}, z.core.$strip>;
type EntityListDefinition = z.infer<typeof EntityListSchemaDefinition>;
export interface EntityListSchemaInput extends z.input<typeof EntityListSchemaDefinition> {
}
/**
 * Narrow entity row for list and batch-list reads. Keeps core identity, enrichment, governed research detail, accelerator participation, and fundraise rounds while omitting detail-only relationship, newsArticle, person, sitemap, and research snippet sections. Classification enrichment is current-only on list rows; use the entity classifications subresource with includeInactive=true to audit historical joins.
 *
 * @openapiSchema EntityList
 * @endpoint GET /v1/entities
 * @endpoint GET /v1/search/link
 * @endpoint GET /v1/entities/{entityId}/similar
 * @endpoint GET /v1/entities/search/jobs/{jobId}
 * @endpoint GET /v1/lookup-jobs/{jobId}
 * @endpoint GET /v1/lookup/jobs/{jobId}
 * @endpoint GET /v1/search/link/jobs/{jobId}
 * @endpoint GET /v1/search/shared/{id}
 * @endpoint GET /v1/search/shared/slug/{slug}
 * @endpoint POST /v1/entities/search
 * @endpoint POST /v1/lookup-mentions
 * @endpoint POST /v1/lookup/mentions
 * @endpoint POST /v1/search
 * @endpoint POST /v1/search/natural/entities
 * @endpoint POST /v1/search/shared
 * @usedBySchema EntitySimilarityResultSchema
 * @usedBySchema LookupJobMentionSchema
 * @usedBySchema NaturalSearchResultSchema
 * @usedBySchema PageEntityListSchema
 * @usedBySchema PageResultEntityListSchema
 * @contractShape entity.list
 * @contractRole canonical
 */
export declare const EntityListSchema: z.ZodType<EntityListDefinition, EntityListSchemaInput>;
export type EntityList = z.infer<typeof EntityListSchema>;
export {};
//# sourceMappingURL=list.d.ts.map