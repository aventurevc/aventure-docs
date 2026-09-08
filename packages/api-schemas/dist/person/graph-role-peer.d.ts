import { z } from "zod/v4";
declare const PersonGraphRolePeerSchemaDefinition: z.ZodObject<{
    entity: z.ZodObject<{
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
    person: z.ZodType<{
        isCurrent?: boolean | null | undefined;
        personId: string;
        personImage: {
            isMonogram: boolean;
            picture?: string | null | undefined;
        };
        personName: string;
        personSlug: string;
        titleName?: string | null | undefined;
    }, unknown, z.core.$ZodTypeInternals<{
        isCurrent?: boolean | null | undefined;
        personId: string;
        personImage: {
            isMonogram: boolean;
            picture?: string | null | undefined;
        };
        personName: string;
        personSlug: string;
        titleName?: string | null | undefined;
    }, unknown>>;
}, z.core.$strip>;
type PersonGraphRolePeerDefinition = z.infer<typeof PersonGraphRolePeerSchemaDefinition>;
/**
 * Person holding the same title at a sector-comparable entity
 *
 * @openapiSchema PersonGraphRolePeer
 * @endpoint GET /v1/people/{personId}/graph
 * @usedBySchema PersonGraphSchema
 * @contractShape person.graph-role-peer
 * @contractRole canonical
 */
export declare const PersonGraphRolePeerSchema: z.ZodType<PersonGraphRolePeerDefinition>;
export type PersonGraphRolePeer = z.infer<typeof PersonGraphRolePeerSchema>;
export {};
//# sourceMappingURL=graph-role-peer.d.ts.map