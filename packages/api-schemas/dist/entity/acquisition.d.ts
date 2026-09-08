import { z } from "zod/v4";
declare const EntityAcquisitionSchemaDefinition: z.ZodObject<{
    acquiredEntity: z.ZodObject<{
        createdAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
        defaultCurrency: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        foundedYear: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
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
        lastModifiedAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
        nameAlias: z.ZodArray<z.ZodType<{
            displayable?: boolean | null | undefined;
            name: string;
            type?: "alternativeDba" | "relatedLegal" | null | undefined;
        }, unknown, z.core.$ZodTypeInternals<{
            displayable?: boolean | null | undefined;
            name: string;
            type?: "alternativeDba" | "relatedLegal" | null | undefined;
        }, unknown>>>;
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
        typeRecord: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
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
        updatedAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
    }, z.core.$strip>;
    acquirerEntity: z.ZodObject<{
        createdAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
        defaultCurrency: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        foundedYear: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
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
        lastModifiedAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
        nameAlias: z.ZodArray<z.ZodType<{
            displayable?: boolean | null | undefined;
            name: string;
            type?: "alternativeDba" | "relatedLegal" | null | undefined;
        }, unknown, z.core.$ZodTypeInternals<{
            displayable?: boolean | null | undefined;
            name: string;
            type?: "alternativeDba" | "relatedLegal" | null | undefined;
        }, unknown>>>;
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
        typeRecord: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
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
        updatedAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
    }, z.core.$strip>;
    amount: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    announcedAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
    asOf: z.ZodOptional<z.ZodNullable<z.ZodISODate>>;
    completedAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
    createdAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
    currency: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    dataConfidence: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
        High: "High";
        Low: "Low";
        Medium: "Medium";
        Verified: "Verified";
    }>>>;
    evidence: z.ZodType<{
        fundraiseInvestorJoin: boolean;
        fundraiseTransaction: boolean;
        operatingStatus: boolean;
        relationship: boolean;
    }, unknown, z.core.$ZodTypeInternals<{
        fundraiseInvestorJoin: boolean;
        fundraiseTransaction: boolean;
        operatingStatus: boolean;
        relationship: boolean;
    }, unknown>>;
    fundraiseTransactionId: z.ZodOptional<z.ZodNullable<z.ZodUUID>>;
    investorJoinId: z.ZodOptional<z.ZodNullable<z.ZodUUID>>;
    relationshipId: z.ZodInt;
    source: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    status: z.ZodEnum<{
        Acquired: "Acquired";
        "Acquired Subsidiary": "Acquired Subsidiary";
        Acquisition: "Acquisition";
    }>;
    transactionStatus: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
        Active: "Active";
        Announced: "Announced";
        "Announced; subject to approvals and closing conditions": "Announced; subject to approvals and closing conditions";
        Closed: "Closed";
        Completed: "Completed";
        "In Progress": "In Progress";
        Open: "Open";
    }>>>;
    updatedAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
}, z.core.$strip>;
type EntityAcquisitionDefinition = z.infer<typeof EntityAcquisitionSchemaDefinition>;
/**
 * Canonical acquisition event: scoped entity is acquired, acquirerEntity is buyer, and status is read stage -- Acquisition before operating-status change, Acquired Subsidiary for active completed brands, Acquired for terminal/folded/closed (including Closed (Acquihire)).
 *
 * @openapiSchema EntityAcquisition
 * @endpoint GET /v1/entities/{entityId}/acquisitions
 * @endpoint GET /v1/entities/{entityId}/acquisitions/{relationshipId}
 * @usedBySchema PageEntityAcquisitionSchema
 * @contractShape entity.acquisition
 * @contractRole canonical
 */
export declare const EntityAcquisitionSchema: z.ZodType<EntityAcquisitionDefinition>;
export type EntityAcquisition = z.infer<typeof EntityAcquisitionSchema>;
export {};
//# sourceMappingURL=acquisition.d.ts.map