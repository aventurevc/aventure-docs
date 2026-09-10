import { z } from "zod/v4";
declare const PersonInvestmentSchemaDefinition: z.ZodObject<{
    amount: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    company: z.ZodType<{
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
    }, unknown, z.core.$ZodTypeInternals<{
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
    }, unknown>>;
    date: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
    fundraiseTransaction: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        amountRaised: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        dateAnnounced: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
        id: z.ZodUUID;
        image: z.ZodType<{
            isMonogram: boolean;
            logo?: string | null | undefined;
            logoSquare?: string | null | undefined;
        }, unknown, z.core.$ZodTypeInternals<{
            isMonogram: boolean;
            logo?: string | null | undefined;
            logoSquare?: string | null | undefined;
        }, unknown>>;
        investorCount: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
        nameBrand: z.ZodString;
        round: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        status: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        valuationPostMoney: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    }, z.core.$strip>>>;
    fundraiseTransactionId: z.ZodUUID;
    id: z.ZodString;
    investmentDate: z.ZodISODateTime;
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
    round: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
type PersonInvestmentDefinition = z.infer<typeof PersonInvestmentSchemaDefinition>;
/**
 * Domain model for a person's investment in an entity (fundraise transaction)
 *
 * @openapiSchema PersonInvestment
 * @endpoint GET /v1/entities/detail
 * @endpoint GET /v1/entities/detail/investors
 * @endpoint GET /v1/entities/detail/person-investors
 * @endpoint GET /v1/entities/lookup
 * @endpoint GET /v1/people/detail
 * @endpoint GET /v1/people/detail/investments
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
 * @usedBySchema PagePersonInvestmentSchema
 * @usedBySchema PersonDetailSchema
 * @contractShape person.investment
 * @contractRole canonical
 */
export declare const PersonInvestmentSchema: z.ZodType<PersonInvestmentDefinition>;
export type PersonInvestment = z.infer<typeof PersonInvestmentSchema>;
export {};
//# sourceMappingURL=investment.d.ts.map