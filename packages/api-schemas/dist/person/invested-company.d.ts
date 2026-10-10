import { z } from "zod/v4";
declare const PersonInvestedCompanySchemaDefinition: z.ZodObject<{
    entity: z.ZodObject<{
        defaultCurrency: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        foundedYear: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
        id: z.ZodUUID;
        image: z.ZodType<{
            isMonogram: boolean;
            logo?: string | null | undefined;
            logoSquare?: string | null | undefined;
        }, import("../entity/image.ts").EntityImageSchemaInput, z.core.$ZodTypeInternals<{
            isMonogram: boolean;
            logo?: string | null | undefined;
            logoSquare?: string | null | undefined;
        }, import("../entity/image.ts").EntityImageSchemaInput>>;
        lastModifiedAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
        nameAlias: z.ZodArray<z.ZodType<{
            displayable?: boolean | null | undefined;
            name: string;
            type?: "alternativeDba" | "relatedLegal" | null | undefined;
        }, import("../entity/name-alias-entity-alias-type.ts").EntityNameAliasEntityAliasTypeSchemaInput, z.core.$ZodTypeInternals<{
            displayable?: boolean | null | undefined;
            name: string;
            type?: "alternativeDba" | "relatedLegal" | null | undefined;
        }, import("../entity/name-alias-entity-alias-type.ts").EntityNameAliasEntityAliasTypeSchemaInput>>>;
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
    headquartersCity: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    headquartersCountry: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    headquartersRegion: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    industry: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
type PersonInvestedCompanyDefinition = z.infer<typeof PersonInvestedCompanySchemaDefinition>;
export interface PersonInvestedCompanySchemaInput extends z.input<typeof PersonInvestedCompanySchemaDefinition> {
}
/**
 * Company metadata associated with a person investment
 *
 * @openapiSchema PersonInvestedCompany
 * @endpoint GET /v1/entities/lookup-exact
 * @endpoint GET /v1/people/lookup-exact
 * @endpoint GET /v1/search/link
 * @endpoint GET /v1/entities/{entityId}
 * @endpoint GET /v1/entities/{entityId}/investors
 * @endpoint GET /v1/entities/{entityId}/person-investors
 * @endpoint GET /v1/people/{personId}
 * @endpoint GET /v1/people/{personId}/investments
 * @endpoint GET /v1/search/link/jobs/{jobId}
 * @endpoint GET /v1/search/shared/{id}
 * @endpoint GET /v1/search/shared/slug/{slug}
 * @endpoint POST /v1/entities/lookup-batch
 * @endpoint POST /v1/entities/lookup-matches
 * @endpoint POST /v1/entities/search
 * @endpoint POST /v1/people/lookup-batch
 * @endpoint POST /v1/search
 * @endpoint POST /v1/search/shared
 * @usedBySchema PersonInvestmentSchema
 * @contractShape person.invested-company
 * @contractRole canonical
 */
export declare const PersonInvestedCompanySchema: z.ZodType<PersonInvestedCompanyDefinition, PersonInvestedCompanySchemaInput>;
export type PersonInvestedCompany = z.infer<typeof PersonInvestedCompanySchema>;
export {};
//# sourceMappingURL=invested-company.d.ts.map