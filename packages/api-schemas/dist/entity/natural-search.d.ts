import { z } from "zod/v4";
declare const EntityNaturalSearchSchemaDefinition: z.ZodObject<{
    filter: z.ZodOptional<z.ZodObject<{
        acceleratorBrand: z.ZodOptional<z.ZodArray<z.ZodString>>;
        acceleratorCohort: z.ZodOptional<z.ZodArray<z.ZodString>>;
        acceleratorName: z.ZodOptional<z.ZodArray<z.ZodString>>;
        acceleratorStatus: z.ZodOptional<z.ZodArray<z.ZodString>>;
        affinity: z.ZodOptional<z.ZodArray<z.ZodString>>;
        closedLast: z.ZodOptional<z.ZodBoolean>;
        employeeCountRange: z.ZodOptional<z.ZodArray<z.ZodType<{
            matchMode?: string | null | undefined;
            max?: number | null | undefined;
            min?: number | null | undefined;
        }, import("../employee/count-range.ts").EmployeeCountRangeSchemaInput, z.core.$ZodTypeInternals<{
            matchMode?: string | null | undefined;
            max?: number | null | undefined;
            min?: number | null | undefined;
        }, import("../employee/count-range.ts").EmployeeCountRangeSchemaInput>>>>;
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
            investedAmountRaisedRange: z.ZodOptional<z.ZodArray<z.ZodType<{
                max?: number | null | undefined;
                min?: number | null | undefined;
            }, import("../decimal/range.ts").DecimalRangeSchemaInput, z.core.$ZodTypeInternals<{
                max?: number | null | undefined;
                min?: number | null | undefined;
            }, import("../decimal/range.ts").DecimalRangeSchemaInput>>>>;
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
            investorNameMatch: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
                any: "any";
                every: "every";
            }>>>;
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
        investorPopulation: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
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
        noteworthyOnly: z.ZodOptional<z.ZodBoolean>;
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
        researchDetailRange: z.ZodOptional<z.ZodArray<z.ZodType<{
            max?: string | null | undefined;
            measurementBasis?: string | null | undefined;
            min?: string | null | undefined;
            reportingScope?: string | null | undefined;
            targetPath: string;
            valueResearchDetail: string;
        }, import("../research/detail-range.ts").ResearchDetailRangeSchemaInput, z.core.$ZodTypeInternals<{
            max?: string | null | undefined;
            measurementBasis?: string | null | undefined;
            min?: string | null | undefined;
            reportingScope?: string | null | undefined;
            targetPath: string;
            valueResearchDetail: string;
        }, import("../research/detail-range.ts").ResearchDetailRangeSchemaInput>>>>;
        slug: z.ZodOptional<z.ZodArray<z.ZodString>>;
        stage: z.ZodOptional<z.ZodArray<z.ZodString>>;
        standardizedClassification: z.ZodOptional<z.ZodArray<z.ZodType<{
            category: string;
            code?: number | null | undefined;
            codeText?: string | null | undefined;
            edition?: string | null | undefined;
            hasEdition?: boolean | null | undefined;
        }, import("../standardized/classification-filter.ts").StandardizedClassificationFilterSchemaInput, z.core.$ZodTypeInternals<{
            category: string;
            code?: number | null | undefined;
            codeText?: string | null | undefined;
            edition?: string | null | undefined;
            hasEdition?: boolean | null | undefined;
        }, import("../standardized/classification-filter.ts").StandardizedClassificationFilterSchemaInput>>>>;
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
    search: z.ZodType<{
        answerModel?: string | null | undefined;
        cacheMode?: "bypass" | "refresh" | "use" | undefined;
        mode?: string | undefined;
        model?: string | null | undefined;
        modelCatalogRevision?: number | null | undefined;
        query: string;
        reasoningEffort?: string | null | undefined;
        searchCatalogRevision?: number | null | undefined;
        tenantPolicyRevision?: number | null | undefined;
    }, import("../natural/search.ts").NaturalSearchSchemaInput, z.core.$ZodTypeInternals<{
        answerModel?: string | null | undefined;
        cacheMode?: "bypass" | "refresh" | "use" | undefined;
        mode?: string | undefined;
        model?: string | null | undefined;
        modelCatalogRevision?: number | null | undefined;
        query: string;
        reasoningEffort?: string | null | undefined;
        searchCatalogRevision?: number | null | undefined;
        tenantPolicyRevision?: number | null | undefined;
    }, import("../natural/search.ts").NaturalSearchSchemaInput>>;
    sourceNewsId: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
}, z.core.$strip>;
type EntityNaturalSearchDefinition = z.infer<typeof EntityNaturalSearchSchemaDefinition>;
export interface EntityNaturalSearchSchemaInput extends z.input<typeof EntityNaturalSearchSchemaDefinition> {
}
/**
 * Plain-English entity search plus explicit hard constraints. The planner may fill only filter fields the caller leaves unset.
 *
 * @openapiSchema EntityNaturalSearch
 * @endpoint POST /v1/search/natural/entities
 * @contractShape entity.natural-search
 * @contractRole canonical
 */
export declare const EntityNaturalSearchSchema: z.ZodType<EntityNaturalSearchDefinition, EntityNaturalSearchSchemaInput>;
export type EntityNaturalSearch = z.infer<typeof EntityNaturalSearchSchema>;
export {};
//# sourceMappingURL=natural-search.d.ts.map