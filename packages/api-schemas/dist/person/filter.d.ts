import { z } from "zod/v4";
/**
 * Canonical person criteria contract for GET/POST/batch endpoints
 *
 * @openapiSchema PersonFilter
 * @endpoint GET /v1/search/link
 * @endpoint GET /v1/search/link/jobs/{jobId}
 * @endpoint GET /v1/search/shared/{id}
 * @endpoint GET /v1/search/shared/slug/{slug}
 * @endpoint POST /v1/people/search
 * @endpoint POST /v1/search
 * @endpoint POST /v1/search/natural/people
 * @endpoint POST /v1/search/shared
 * @usedBySchema PersonNaturalSearchSchema
 * @usedBySchema PersonSearchInterpretationSchema
 * @contractShape person.filter
 * @contractRole canonical
 */
export declare const PersonFilterSchema: z.ZodObject<{
    arrayFilter: z.ZodOptional<z.ZodObject<{
        amountInvestedRange: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodType<{
            max?: number | null | undefined;
            min?: number | null | undefined;
        }, unknown, z.core.$ZodTypeInternals<{
            max?: number | null | undefined;
            min?: number | null | undefined;
        }, unknown>>>>>;
        amountRaisedRange: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodType<{
            max?: number | null | undefined;
            min?: number | null | undefined;
        }, unknown, z.core.$ZodTypeInternals<{
            max?: number | null | undefined;
            min?: number | null | undefined;
        }, unknown>>>>>;
        entityName: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodString>>>;
        investedCompany: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodString>>>;
        personTitle: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodString>>>;
        round: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodString>>>;
        totalInvestmentCount: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodType<{
            max?: number | null | undefined;
            min?: number | null | undefined;
        }, unknown, z.core.$ZodTypeInternals<{
            max?: number | null | undefined;
            min?: number | null | undefined;
        }, unknown>>>>>;
        typeRecord: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodEnum<{
            "Business Line": "Business Line";
            Company: "Company";
            Fund: "Fund";
            Government: "Government";
            "Investment Firm": "Investment Firm";
            Nonprofit: "Nonprofit";
            Organization: "Organization";
            Product: "Product";
            Service: "Service";
        }>>>>;
    }, z.core.$strip>>;
    entityFilter: z.ZodOptional<z.ZodObject<{
        acceleratorBrand: z.ZodOptional<z.ZodArray<z.ZodString>>;
        acceleratorCohort: z.ZodOptional<z.ZodArray<z.ZodString>>;
        acceleratorName: z.ZodOptional<z.ZodArray<z.ZodString>>;
        acceleratorStatus: z.ZodOptional<z.ZodArray<z.ZodString>>;
        affinity: z.ZodOptional<z.ZodArray<z.ZodString>>;
        closedLast: z.ZodOptional<z.ZodBoolean>;
        employeeCountRange: z.ZodOptional<z.ZodArray<z.ZodType<{
            max?: number | null | undefined;
            min?: number | null | undefined;
        }, unknown, z.core.$ZodTypeInternals<{
            max?: number | null | undefined;
            min?: number | null | undefined;
        }, unknown>>>>;
        entityId: z.ZodOptional<z.ZodArray<z.ZodUUID>>;
        entityName: z.ZodOptional<z.ZodArray<z.ZodString>>;
        featured: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        fundraiseActivity: z.ZodOptional<z.ZodObject<{
            amountInvestedRange: z.ZodOptional<z.ZodArray<z.ZodType<{
                max?: number | null | undefined;
                min?: number | null | undefined;
            }, unknown, z.core.$ZodTypeInternals<{
                max?: number | null | undefined;
                min?: number | null | undefined;
            }, unknown>>>>;
            amountRaisedRange: z.ZodOptional<z.ZodArray<z.ZodType<{
                max?: number | null | undefined;
                min?: number | null | undefined;
            }, unknown, z.core.$ZodTypeInternals<{
                max?: number | null | undefined;
                min?: number | null | undefined;
            }, unknown>>>>;
            dateAnnouncedRange: z.ZodOptional<z.ZodNullable<z.ZodObject<{
                max: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
                min: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
            }, z.core.$strip>>>;
            investedCompanyName: z.ZodOptional<z.ZodArray<z.ZodString>>;
            investedCountry: z.ZodOptional<z.ZodArray<z.ZodString>>;
            investedIndustry: z.ZodOptional<z.ZodArray<z.ZodString>>;
            investedRound: z.ZodOptional<z.ZodArray<z.ZodString>>;
            investorActivity: z.ZodOptional<z.ZodObject<{
                averageAmountInvestedUsdRange: z.ZodOptional<z.ZodArray<z.ZodType<{
                    max?: number | null | undefined;
                    min?: number | null | undefined;
                }, unknown, z.core.$ZodTypeInternals<{
                    max?: number | null | undefined;
                    min?: number | null | undefined;
                }, unknown>>>>;
                largestAmountInvestedUsdRange: z.ZodOptional<z.ZodArray<z.ZodType<{
                    max?: number | null | undefined;
                    min?: number | null | undefined;
                }, unknown, z.core.$ZodTypeInternals<{
                    max?: number | null | undefined;
                    min?: number | null | undefined;
                }, unknown>>>>;
                smallestAmountInvestedUsdRange: z.ZodOptional<z.ZodArray<z.ZodType<{
                    max?: number | null | undefined;
                    min?: number | null | undefined;
                }, unknown, z.core.$ZodTypeInternals<{
                    max?: number | null | undefined;
                    min?: number | null | undefined;
                }, unknown>>>>;
                totalAmountInvestedUsdRange: z.ZodOptional<z.ZodArray<z.ZodType<{
                    max?: number | null | undefined;
                    min?: number | null | undefined;
                }, unknown, z.core.$ZodTypeInternals<{
                    max?: number | null | undefined;
                    min?: number | null | undefined;
                }, unknown>>>>;
                totalInvestmentRange: z.ZodOptional<z.ZodArray<z.ZodType<{
                    max?: number | null | undefined;
                    min?: number | null | undefined;
                }, unknown, z.core.$ZodTypeInternals<{
                    max?: number | null | undefined;
                    min?: number | null | undefined;
                }, unknown>>>>;
            }, z.core.$strip>>;
            investorName: z.ZodOptional<z.ZodArray<z.ZodString>>;
            lastRoundYearRange: z.ZodOptional<z.ZodArray<z.ZodType<{
                max?: number | null | undefined;
                min?: number | null | undefined;
            }, unknown, z.core.$ZodTypeInternals<{
                max?: number | null | undefined;
                min?: number | null | undefined;
            }, unknown>>>>;
            rankByInvestmentActivity: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
            round: z.ZodOptional<z.ZodArray<z.ZodString>>;
            totalRaisedRange: z.ZodOptional<z.ZodArray<z.ZodType<{
                max?: number | null | undefined;
                min?: number | null | undefined;
            }, unknown, z.core.$ZodTypeInternals<{
                max?: number | null | undefined;
                min?: number | null | undefined;
            }, unknown>>>>;
            valuationRange: z.ZodOptional<z.ZodArray<z.ZodType<{
                max?: number | null | undefined;
                min?: number | null | undefined;
            }, unknown, z.core.$ZodTypeInternals<{
                max?: number | null | undefined;
                min?: number | null | undefined;
            }, unknown>>>>;
        }, z.core.$strip>>;
        hasFundraising: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        headquartersCity: z.ZodOptional<z.ZodArray<z.ZodString>>;
        headquartersCountry: z.ZodOptional<z.ZodArray<z.ZodString>>;
        headquartersState: z.ZodOptional<z.ZodArray<z.ZodString>>;
        industry: z.ZodOptional<z.ZodArray<z.ZodString>>;
        letter: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        location: z.ZodOptional<z.ZodArray<z.ZodString>>;
        logoOption: z.ZodOptional<z.ZodObject<{
            sortPriority: z.ZodOptional<z.ZodEnum<{
                ANY_LOGO_FIRST: "ANY_LOGO_FIRST";
                NONE: "NONE";
                REAL_LOGO_FIRST: "REAL_LOGO_FIRST";
            }>>;
        }, z.core.$strip>>;
        mainProduct: z.ZodOptional<z.ZodArray<z.ZodString>>;
        operatingStatus: z.ZodOptional<z.ZodArray<z.ZodEnum<{
            Acquired: "Acquired";
            "Acquired Subsidiary": "Acquired Subsidiary";
            Closed: "Closed";
            "Closed (Acquihire)": "Closed (Acquihire)";
            Inactive: "Inactive";
            Operating: "Operating";
        }>>>;
        person: z.ZodOptional<z.ZodArray<z.ZodString>>;
        portfolioHeadquartersCity: z.ZodOptional<z.ZodArray<z.ZodString>>;
        portfolioHeadquartersCountry: z.ZodOptional<z.ZodArray<z.ZodString>>;
        portfolioHeadquartersState: z.ZodOptional<z.ZodArray<z.ZodString>>;
        qualityGate: z.ZodOptional<z.ZodEnum<{
            COMPANY_LISTING_READY: "COMPANY_LISTING_READY";
            NONE: "NONE";
        }>>;
        rankByProminence: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        slug: z.ZodOptional<z.ZodArray<z.ZodString>>;
        stage: z.ZodOptional<z.ZodArray<z.ZodString>>;
        suppressNonOperating: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        suppressZeroTotalRaised: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        tag: z.ZodOptional<z.ZodArray<z.ZodString>>;
        textSearch: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        typeCustomer: z.ZodOptional<z.ZodArray<z.ZodString>>;
        typeModel: z.ZodOptional<z.ZodArray<z.ZodString>>;
        typeOwnership: z.ZodOptional<z.ZodArray<z.ZodString>>;
        typeRecord: z.ZodOptional<z.ZodArray<z.ZodEnum<{
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
        typeRevenue: z.ZodOptional<z.ZodArray<z.ZodString>>;
        typeTechnologyUsed: z.ZodOptional<z.ZodArray<z.ZodString>>;
        url: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        urlDomain: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        urlMatchMode: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
            domain: "domain";
            hostPath: "hostPath";
        }>>>;
        urlType: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        yearFoundedRange: z.ZodOptional<z.ZodArray<z.ZodType<{
            max?: number | null | undefined;
            min?: number | null | undefined;
        }, unknown, z.core.$ZodTypeInternals<{
            max?: number | null | undefined;
            min?: number | null | undefined;
        }, unknown>>>>;
    }, z.core.$strict>>;
    entityId: z.ZodOptional<z.ZodNullable<z.ZodUUID>>;
    entitySlug: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    firstName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    includeAddress: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    includeUrl: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    investorActivity: z.ZodOptional<z.ZodObject<{
        averageAmountInvestedUsdRange: z.ZodOptional<z.ZodArray<z.ZodType<{
            max?: number | null | undefined;
            min?: number | null | undefined;
        }, unknown, z.core.$ZodTypeInternals<{
            max?: number | null | undefined;
            min?: number | null | undefined;
        }, unknown>>>>;
        largestAmountInvestedUsdRange: z.ZodOptional<z.ZodArray<z.ZodType<{
            max?: number | null | undefined;
            min?: number | null | undefined;
        }, unknown, z.core.$ZodTypeInternals<{
            max?: number | null | undefined;
            min?: number | null | undefined;
        }, unknown>>>>;
        smallestAmountInvestedUsdRange: z.ZodOptional<z.ZodArray<z.ZodType<{
            max?: number | null | undefined;
            min?: number | null | undefined;
        }, unknown, z.core.$ZodTypeInternals<{
            max?: number | null | undefined;
            min?: number | null | undefined;
        }, unknown>>>>;
        totalAmountInvestedUsdRange: z.ZodOptional<z.ZodArray<z.ZodType<{
            max?: number | null | undefined;
            min?: number | null | undefined;
        }, unknown, z.core.$ZodTypeInternals<{
            max?: number | null | undefined;
            min?: number | null | undefined;
        }, unknown>>>>;
        totalInvestmentRange: z.ZodOptional<z.ZodArray<z.ZodType<{
            max?: number | null | undefined;
            min?: number | null | undefined;
        }, unknown, z.core.$ZodTypeInternals<{
            max?: number | null | undefined;
            min?: number | null | undefined;
        }, unknown>>>>;
    }, z.core.$strip>>;
    isCurrent: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    lastName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    letter: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    personId: z.ZodOptional<z.ZodArray<z.ZodUUID>>;
    personName: z.ZodOptional<z.ZodArray<z.ZodString>>;
    role: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    search: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    semanticQuery: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    status: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
export type PersonFilter = z.infer<typeof PersonFilterSchema>;
//# sourceMappingURL=filter.d.ts.map