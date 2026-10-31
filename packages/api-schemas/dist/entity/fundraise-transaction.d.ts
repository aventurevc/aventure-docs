import { z } from "zod/v4";
declare const EntityFundraiseTransactionSchemaDefinition: z.ZodObject<{
    amountRaised: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    createdAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
    currency: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    dataConfidence: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
        High: "High";
        Low: "Low";
        Medium: "Medium";
        Verified: "Verified";
    }>>>;
    dateAnnounced: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    dateFundingComplete: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    dateInvestorExit: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
    entity: z.ZodOptional<z.ZodNullable<z.ZodObject<{
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
        fundingDetail: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            applicability: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
                NOT_APPLICABLE: "NOT_APPLICABLE";
                RECORDED: "RECORDED";
                UNKNOWN: "UNKNOWN";
            }>>>;
            currency: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            currentValuation: z.ZodOptional<z.ZodNullable<z.ZodObject<{
                amount: z.ZodString;
                asOfDate: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                basis: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
                    postMoney: "postMoney";
                    preMoney: "preMoney";
                    reported: "reported";
                }>>>;
                currency: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                postMoneyUsd: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                referenceValue: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                source: z.ZodEnum<{
                    fundraiseRound: "fundraiseRound";
                    researchDetail: "researchDetail";
                }>;
                sourceRef: z.ZodString;
            }, z.core.$strip>>>;
            disclosedStage: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            disclosedStageTransactionId: z.ZodOptional<z.ZodNullable<z.ZodUUID>>;
            fundingRoundCount: z.ZodInt;
            investorCount: z.ZodInt;
            latestValuation: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            mostRecentAmount: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            mostRecentDate: z.ZodOptional<z.ZodNullable<z.ZodISODate>>;
            stage: z.ZodOptional<z.ZodNullable<z.ZodUnion<readonly [z.ZodEnum<{
                Acquired: "Acquired";
                "Acquired Subsidiary": "Acquired Subsidiary";
                Angel: "Angel";
                Bankrupt: "Bankrupt";
                Fund: "Fund";
                Government: "Government";
                "Investment Firm": "Investment Firm";
                "Late Stage Private": "Late Stage Private";
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
            }>, z.ZodString]> & {
                enum: {
                    Acquired: "Acquired";
                    "Acquired Subsidiary": "Acquired Subsidiary";
                    Angel: "Angel";
                    Bankrupt: "Bankrupt";
                    Fund: "Fund";
                    Government: "Government";
                    "Investment Firm": "Investment Firm";
                    "Late Stage Private": "Late Stage Private";
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
                };
            }>>;
            totalRaised: z.ZodNumber;
            totalRaisedAmountRoundCount: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
            totalRaisedRoundCount: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
            totalRaisedUsd: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            totalRaisedUsdRoundCount: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
            unconvertedRoundCount: z.ZodInt;
        }, z.core.$strip>>>;
    }, z.core.$strip>>>;
    financialInstrumentType: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
        Bond: "Bond";
        "Common Stock": "Common Stock";
        "Convertible Note": "Convertible Note";
        Grant: "Grant";
        Loan: "Loan";
        "Other Debt": "Other Debt";
        "Other Equity": "Other Equity";
        "Preferred Stock": "Preferred Stock";
        SAFE: "SAFE";
        Token: "Token";
    }>>>;
    id: z.ZodUUID;
    investor: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodType<{
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
    }, import("./fundraise-investor-join.ts").EntityFundraiseInvestorJoinSchemaInput, z.core.$ZodTypeInternals<{
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
    }, import("./fundraise-investor-join.ts").EntityFundraiseInvestorJoinSchemaInput>>>>>;
    investorAttribution: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        amountInvested: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        attributionType: z.ZodEnum<{
            direct: "direct";
            managedFund: "managedFund";
        }>;
        beneficialEntityId: z.ZodOptional<z.ZodNullable<z.ZodUUID>>;
        fundManagerRelationshipId: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
        joinId: z.ZodUUID;
        leadInvestor: z.ZodBoolean;
        recordedEntityId: z.ZodOptional<z.ZodNullable<z.ZodUUID>>;
        round: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            round: z.ZodString;
        }, z.core.$strip>>>;
        transactionId: z.ZodUUID;
    }, z.core.$strip>>>;
    investorCount: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
    publicSource: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        lastFetchedAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
        publishedAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
        recordedAt: z.ZodISODateTime;
        sourceDetail: z.ZodString;
    }, z.core.$strip>>>;
    rawRoundLabel: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    round: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    roundType: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    sourceAttribution: z.ZodArray<z.ZodObject<{
        amountInvested: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        attributionType: z.ZodEnum<{
            direct: "direct";
            managedFund: "managedFund";
        }>;
        beneficialEntityId: z.ZodOptional<z.ZodNullable<z.ZodUUID>>;
        fundManagerRelationshipId: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
        joinId: z.ZodUUID;
        leadInvestor: z.ZodBoolean;
        recordedEntityId: z.ZodOptional<z.ZodNullable<z.ZodUUID>>;
        round: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            round: z.ZodString;
        }, z.core.$strip>>>;
        transactionId: z.ZodUUID;
    }, z.core.$strip>>;
    unsupportedField: z.ZodOptional<z.ZodArray<z.ZodEnum<{
        amountRaised: "amountRaised";
        currency: "currency";
        dateAnnounced: "dateAnnounced";
        dateFundingComplete: "dateFundingComplete";
        dateInvestorExit: "dateInvestorExit";
        financialInstrumentType: "financialInstrumentType";
        investorCount: "investorCount";
        round: "round";
        roundType: "roundType";
        status: "status";
        valuationPostMoney: "valuationPostMoney";
        valuationPreMoney: "valuationPreMoney";
    }>>>;
    updatedAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
    valuationPostMoney: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    valuationPreMoney: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
}, z.core.$strip>;
type EntityFundraiseTransactionDefinition = z.infer<typeof EntityFundraiseTransactionSchemaDefinition>;
export interface EntityFundraiseTransactionSchemaInput extends z.input<typeof EntityFundraiseTransactionSchemaDefinition> {
}
/**
 * Canonical fundraise transaction view. ONE row per discrete round. An entity that raised pre-seed, seed, and Series A is THREE rows. Combined or rolled-up totals are never modeled here — total raised is a sum across rows.
 *
 * @openapiSchema EntityFundraiseTransaction
 * @endpoint GET /v1/entities
 * @endpoint GET /v1/entities/lookup-exact
 * @endpoint GET /v1/search/link
 * @endpoint GET /v1/entities/{entityId}
 * @endpoint GET /v1/entities/{entityId}/fundraise-rounds
 * @endpoint GET /v1/entities/{entityId}/fundraise-rounds/{fundraiseRoundId}
 * @endpoint GET /v1/entities/{entityId}/investments
 * @endpoint GET /v1/entities/{entityId}/investors
 * @endpoint GET /v1/entities/{entityId}/similar
 * @endpoint GET /v1/entities/search/jobs/{jobId}
 * @endpoint GET /v1/lookup-jobs/{jobId}
 * @endpoint GET /v1/lookup/jobs/{jobId}
 * @endpoint GET /v1/search/link/jobs/{jobId}
 * @endpoint GET /v1/search/shared/{id}
 * @endpoint GET /v1/search/shared/slug/{slug}
 * @endpoint POST /v1/entities/lookup-batch
 * @endpoint POST /v1/entities/lookup-matches
 * @endpoint POST /v1/entities/search
 * @endpoint POST /v1/lookup-mentions
 * @endpoint POST /v1/lookup/mentions
 * @endpoint POST /v1/search
 * @endpoint POST /v1/search/natural/entities
 * @endpoint POST /v1/search/natural/people
 * @endpoint POST /v1/search/shared
 * @usedBySchema EntityDetailSchema
 * @usedBySchema EntityListSchema
 * @usedBySchema FundraiseInvestmentEvidenceSchema
 * @usedBySchema PageEntityFundraiseTransactionSchema
 * @contractShape entity.fundraise-transaction
 * @contractRole canonical
 */
export declare const EntityFundraiseTransactionSchema: z.ZodType<EntityFundraiseTransactionDefinition, EntityFundraiseTransactionSchemaInput>;
export type EntityFundraiseTransaction = z.infer<typeof EntityFundraiseTransactionSchema>;
export {};
//# sourceMappingURL=fundraise-transaction.d.ts.map