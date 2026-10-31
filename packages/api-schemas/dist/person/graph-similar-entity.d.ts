import { z } from "zod/v4";
declare const PersonGraphSimilarEntitySchemaDefinition: z.ZodObject<{
    entity: z.ZodObject<{
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
            }, import("../entity/image.ts").EntityImageSchemaInput, z.core.$ZodTypeInternals<{
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
            }, import("../entity/image.ts").EntityImageSchemaInput>>;
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
    }, z.core.$strip>;
    keyPerson: z.ZodArray<z.ZodType<{
        isCurrent?: boolean | null | undefined;
        personId: string;
        personImage: {
            isMonogram: boolean;
            picture?: string | null | undefined;
            pictureVariant?: {
                contentType: string;
                height: number;
                path: string;
                width: number;
            }[] | null | undefined;
        };
        personName: string;
        personSlug: string;
        titleName?: string | null | undefined;
    }, import("./graph-member.ts").PersonGraphMemberSchemaInput, z.core.$ZodTypeInternals<{
        isCurrent?: boolean | null | undefined;
        personId: string;
        personImage: {
            isMonogram: boolean;
            picture?: string | null | undefined;
            pictureVariant?: {
                contentType: string;
                height: number;
                path: string;
                width: number;
            }[] | null | undefined;
        };
        personName: string;
        personSlug: string;
        titleName?: string | null | undefined;
    }, import("./graph-member.ts").PersonGraphMemberSchemaInput>>>;
}, z.core.$strip>;
type PersonGraphSimilarEntityDefinition = z.infer<typeof PersonGraphSimilarEntitySchemaDefinition>;
export interface PersonGraphSimilarEntitySchemaInput extends z.input<typeof PersonGraphSimilarEntitySchemaDefinition> {
}
/**
 * Similar-entity card with its key people
 *
 * @openapiSchema PersonGraphSimilarEntity
 * @endpoint GET /v1/entities/lookup-exact
 * @endpoint GET /v1/people/lookup-exact
 * @endpoint GET /v1/search/link
 * @endpoint GET /v1/entities/{entityId}
 * @endpoint GET /v1/entities/{entityId}/investors
 * @endpoint GET /v1/entities/{entityId}/investors/people
 * @endpoint GET /v1/entities/{entityId}/person-investors
 * @endpoint GET /v1/people/{personId}
 * @endpoint GET /v1/people/{personId}/graph
 * @endpoint GET /v1/search/link/jobs/{jobId}
 * @endpoint GET /v1/search/shared/{id}
 * @endpoint GET /v1/search/shared/slug/{slug}
 * @endpoint POST /v1/entities/lookup-batch
 * @endpoint POST /v1/entities/lookup-matches
 * @endpoint POST /v1/entities/search
 * @endpoint POST /v1/people/lookup-batch
 * @endpoint POST /v1/search
 * @endpoint POST /v1/search/shared
 * @usedBySchema PersonGraphCareerContextSchema
 * @contractShape person.graph-similar-entity
 * @contractRole canonical
 */
export declare const PersonGraphSimilarEntitySchema: z.ZodType<PersonGraphSimilarEntityDefinition, PersonGraphSimilarEntitySchemaInput>;
export type PersonGraphSimilarEntity = z.infer<typeof PersonGraphSimilarEntitySchema>;
export {};
//# sourceMappingURL=graph-similar-entity.d.ts.map