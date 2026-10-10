import { z } from "zod/v4";
declare const FederatedNaturalSearchSchemaDefinition: z.ZodObject<{
    answerModel: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    cacheMode: z.ZodOptional<z.ZodDefault<z.ZodEnum<{
        bypass: "bypass";
        refresh: "refresh";
        use: "use";
    }>>>;
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
        }, import("../int/range.ts").IntRangeSchemaInput, z.core.$ZodTypeInternals<{
            max?: number | null | undefined;
            min?: number | null | undefined;
        }, import("../int/range.ts").IntRangeSchemaInput>>>>;
        entityId: z.ZodOptional<z.ZodArray<z.ZodUUID>>;
        entityName: z.ZodOptional<z.ZodArray<z.ZodString>>;
        featured: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        fundraiseActivity: z.ZodOptional<z.ZodObject<{
            amountInvestedRange: z.ZodOptional<z.ZodArray<z.ZodType<{
                max?: number | null | undefined;
                min?: number | null | undefined;
            }, import("../decimal/range.ts").DecimalRangeSchemaInput, z.core.$ZodTypeInternals<{
                max?: number | null | undefined;
                min?: number | null | undefined;
            }, import("../decimal/range.ts").DecimalRangeSchemaInput>>>>;
            amountRaisedRange: z.ZodOptional<z.ZodArray<z.ZodType<{
                max?: number | null | undefined;
                min?: number | null | undefined;
            }, import("../decimal/range.ts").DecimalRangeSchemaInput, z.core.$ZodTypeInternals<{
                max?: number | null | undefined;
                min?: number | null | undefined;
            }, import("../decimal/range.ts").DecimalRangeSchemaInput>>>>;
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
                }, import("../decimal/range.ts").DecimalRangeSchemaInput, z.core.$ZodTypeInternals<{
                    max?: number | null | undefined;
                    min?: number | null | undefined;
                }, import("../decimal/range.ts").DecimalRangeSchemaInput>>>>;
                largestAmountInvestedUsdRange: z.ZodOptional<z.ZodArray<z.ZodType<{
                    max?: number | null | undefined;
                    min?: number | null | undefined;
                }, import("../decimal/range.ts").DecimalRangeSchemaInput, z.core.$ZodTypeInternals<{
                    max?: number | null | undefined;
                    min?: number | null | undefined;
                }, import("../decimal/range.ts").DecimalRangeSchemaInput>>>>;
                smallestAmountInvestedUsdRange: z.ZodOptional<z.ZodArray<z.ZodType<{
                    max?: number | null | undefined;
                    min?: number | null | undefined;
                }, import("../decimal/range.ts").DecimalRangeSchemaInput, z.core.$ZodTypeInternals<{
                    max?: number | null | undefined;
                    min?: number | null | undefined;
                }, import("../decimal/range.ts").DecimalRangeSchemaInput>>>>;
                totalAmountInvestedUsdRange: z.ZodOptional<z.ZodArray<z.ZodType<{
                    max?: number | null | undefined;
                    min?: number | null | undefined;
                }, import("../decimal/range.ts").DecimalRangeSchemaInput, z.core.$ZodTypeInternals<{
                    max?: number | null | undefined;
                    min?: number | null | undefined;
                }, import("../decimal/range.ts").DecimalRangeSchemaInput>>>>;
                totalInvestmentRange: z.ZodOptional<z.ZodArray<z.ZodType<{
                    max?: number | null | undefined;
                    min?: number | null | undefined;
                }, import("../int/range.ts").IntRangeSchemaInput, z.core.$ZodTypeInternals<{
                    max?: number | null | undefined;
                    min?: number | null | undefined;
                }, import("../int/range.ts").IntRangeSchemaInput>>>>;
            }, z.core.$strip>>;
            investorName: z.ZodOptional<z.ZodArray<z.ZodString>>;
            lastRoundYearRange: z.ZodOptional<z.ZodArray<z.ZodType<{
                max?: number | null | undefined;
                min?: number | null | undefined;
            }, import("../int/range.ts").IntRangeSchemaInput, z.core.$ZodTypeInternals<{
                max?: number | null | undefined;
                min?: number | null | undefined;
            }, import("../int/range.ts").IntRangeSchemaInput>>>>;
            rankByInvestmentActivity: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
            round: z.ZodOptional<z.ZodArray<z.ZodString>>;
            totalRaisedRange: z.ZodOptional<z.ZodArray<z.ZodType<{
                max?: number | null | undefined;
                min?: number | null | undefined;
            }, import("../decimal/range.ts").DecimalRangeSchemaInput, z.core.$ZodTypeInternals<{
                max?: number | null | undefined;
                min?: number | null | undefined;
            }, import("../decimal/range.ts").DecimalRangeSchemaInput>>>>;
            valuationRange: z.ZodOptional<z.ZodArray<z.ZodType<{
                max?: number | null | undefined;
                min?: number | null | undefined;
            }, import("../decimal/range.ts").DecimalRangeSchemaInput, z.core.$ZodTypeInternals<{
                max?: number | null | undefined;
                min?: number | null | undefined;
            }, import("../decimal/range.ts").DecimalRangeSchemaInput>>>>;
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
        originCountry: z.ZodOptional<z.ZodArray<z.ZodString>>;
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
        suppressLateStage: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
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
        }, import("../int/range.ts").IntRangeSchemaInput, z.core.$ZodTypeInternals<{
            max?: number | null | undefined;
            min?: number | null | undefined;
        }, import("../int/range.ts").IntRangeSchemaInput>>>>;
    }, z.core.$strict>>;
    mode: z.ZodOptional<z.ZodDefault<z.ZodUnion<readonly [z.ZodEnum<{
        auto: "auto";
        exact: "exact";
        hybrid: "hybrid";
        keyword: "keyword";
        natural: "natural";
        semantic: "semantic";
    }>, z.ZodString]>>>;
    model: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    newsSize: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
    personSize: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
    query: z.ZodString;
    reasoningEffort: z.ZodOptional<z.ZodNullable<z.ZodUnion<readonly [z.ZodEnum<{
        high: "high";
        low: "low";
        max: "max";
        medium: "medium";
        minimal: "minimal";
        xhigh: "xhigh";
    }>, z.ZodString]>>>;
}, z.core.$strip>;
type FederatedNaturalSearchDefinition = z.infer<typeof FederatedNaturalSearchSchemaDefinition>;
export interface FederatedNaturalSearchSchemaInput extends z.input<typeof FederatedNaturalSearchSchemaDefinition> {
}
/**
 * Plain-English search across companies, people, and news, plus optional per-scope entity constraints and page sizes.
 *
 * @openapiSchema FederatedNaturalSearch
 * @endpoint POST /v1/search
 * @contractShape federated.natural-search
 * @contractRole canonical
 */
export declare const FederatedNaturalSearchSchema: z.ZodType<FederatedNaturalSearchDefinition, FederatedNaturalSearchSchemaInput>;
export type FederatedNaturalSearch = z.infer<typeof FederatedNaturalSearchSchema>;
export {};
//# sourceMappingURL=natural-search.d.ts.map