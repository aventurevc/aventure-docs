import { z } from "zod/v4";
declare const DirectoryExportMutationSchemaDefinition: z.ZodObject<{
    column: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodUnion<readonly [z.ZodEnum<{
        ACCELERATOR: "ACCELERATOR";
        AVENTURE_URL: "AVENTURE_URL";
        BATCH: "BATCH";
        CURRENT_COMPANY: "CURRENT_COMPANY";
        CUSTOMER_TYPE: "CUSTOMER_TYPE";
        DISCLOSED_FUNDING: "DISCLOSED_FUNDING";
        EMPLOYEES: "EMPLOYEES";
        FOUNDED: "FOUNDED";
        HQ: "HQ";
        INVESTOR_TYPE: "INVESTOR_TYPE";
        LAST_ROUND: "LAST_ROUND";
        LAST_UPDATE: "LAST_UPDATE";
        LOCATION: "LOCATION";
        MAIN_PRODUCTS: "MAIN_PRODUCTS";
        MODEL_TYPE: "MODEL_TYPE";
        NAME: "NAME";
        OPERATING_STATUS: "OPERATING_STATUS";
        OWNERSHIP_TYPE: "OWNERSHIP_TYPE";
        REVENUE_TYPE: "REVENUE_TYPE";
        SECTOR: "SECTOR";
        STAGE: "STAGE";
        SUMMARY: "SUMMARY";
        TAGS: "TAGS";
        TECHNOLOGY_USED: "TECHNOLOGY_USED";
        TITLE: "TITLE";
    }>, z.ZodString]> & {
        enum: {
            ACCELERATOR: "ACCELERATOR";
            AVENTURE_URL: "AVENTURE_URL";
            BATCH: "BATCH";
            CURRENT_COMPANY: "CURRENT_COMPANY";
            CUSTOMER_TYPE: "CUSTOMER_TYPE";
            DISCLOSED_FUNDING: "DISCLOSED_FUNDING";
            EMPLOYEES: "EMPLOYEES";
            FOUNDED: "FOUNDED";
            HQ: "HQ";
            INVESTOR_TYPE: "INVESTOR_TYPE";
            LAST_ROUND: "LAST_ROUND";
            LAST_UPDATE: "LAST_UPDATE";
            LOCATION: "LOCATION";
            MAIN_PRODUCTS: "MAIN_PRODUCTS";
            MODEL_TYPE: "MODEL_TYPE";
            NAME: "NAME";
            OPERATING_STATUS: "OPERATING_STATUS";
            OWNERSHIP_TYPE: "OWNERSHIP_TYPE";
            REVENUE_TYPE: "REVENUE_TYPE";
            SECTOR: "SECTOR";
            STAGE: "STAGE";
            SUMMARY: "SUMMARY";
            TAGS: "TAGS";
            TECHNOLOGY_USED: "TECHNOLOGY_USED";
            TITLE: "TITLE";
        };
    }>>>;
    directory: z.ZodEnum<{
        companies: "companies";
        investors: "investors";
        people: "people";
    }>;
    entityFilter: z.ZodOptional<z.ZodNullable<z.ZodObject<{
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
        semanticQuery: z.ZodOptional<z.ZodNullable<z.ZodString>>;
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
    }, z.core.$strict>>>;
    id: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodUUID>>>;
    page: z.ZodInt;
    personFilter: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        additionalAssociation: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            entityFilter: z.ZodOptional<z.ZodNullable<z.ZodObject<{
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
            }, z.core.$strict>>>;
            isCurrent: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
            personTitle: z.ZodOptional<z.ZodArray<z.ZodString>>;
        }, z.core.$strip>>>;
        arrayFilter: z.ZodOptional<z.ZodObject<{
            amountInvestedRange: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodType<{
                max?: number | null | undefined;
                min?: number | null | undefined;
            }, import("../decimal/range.ts").DecimalRangeSchemaInput, z.core.$ZodTypeInternals<{
                max?: number | null | undefined;
                min?: number | null | undefined;
            }, import("../decimal/range.ts").DecimalRangeSchemaInput>>>>>;
            amountRaisedRange: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodType<{
                max?: number | null | undefined;
                min?: number | null | undefined;
            }, import("../decimal/range.ts").DecimalRangeSchemaInput, z.core.$ZodTypeInternals<{
                max?: number | null | undefined;
                min?: number | null | undefined;
            }, import("../decimal/range.ts").DecimalRangeSchemaInput>>>>>;
            entityName: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodString>>>;
            investedCompany: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodString>>>;
            personTitle: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodString>>>;
            round: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodString>>>;
            totalInvestmentCount: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodType<{
                max?: number | null | undefined;
                min?: number | null | undefined;
            }, import("../int/range.ts").IntRangeSchemaInput, z.core.$ZodTypeInternals<{
                max?: number | null | undefined;
                min?: number | null | undefined;
            }, import("../int/range.ts").IntRangeSchemaInput>>>>>;
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
        entityId: z.ZodOptional<z.ZodNullable<z.ZodUUID>>;
        entitySlug: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        firstName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        includeAddress: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        includeUrl: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
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
        isCurrent: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        lastName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        letter: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        personId: z.ZodOptional<z.ZodArray<z.ZodUUID>>;
        personName: z.ZodOptional<z.ZodArray<z.ZodString>>;
        rankByEmployer: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        role: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        search: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        semanticQuery: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        status: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.core.$strip>>>;
    size: z.ZodInt;
    sort: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    urlType: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodString>>>;
}, z.core.$strip>;
type DirectoryExportMutationDefinition = z.infer<typeof DirectoryExportMutationSchemaDefinition>;
export interface DirectoryExportMutationSchemaInput extends z.input<typeof DirectoryExportMutationSchemaDefinition> {
}
/**
 * Export a directory page or an ordered selection of at most 100 records.
 *
 * @openapiSchema DirectoryExportMutation
 * @endpoint POST /v1/directory/exports
 * @contractShape directory.export-mutation
 * @contractRole canonical
 */
export declare const DirectoryExportMutationSchema: z.ZodType<DirectoryExportMutationDefinition, DirectoryExportMutationSchemaInput>;
export type DirectoryExportMutation = z.infer<typeof DirectoryExportMutationSchema>;
export {};
//# sourceMappingURL=export-mutation.d.ts.map