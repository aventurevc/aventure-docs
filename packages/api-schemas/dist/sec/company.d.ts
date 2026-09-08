import { z } from "zod/v4";
declare const SecCompanySchemaDefinition: z.ZodObject<{
    cik: z.ZodString;
    ein: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    entityType: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    exchange: z.ZodArray<z.ZodString>;
    filerCategory: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    fiscalYearEnd: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    headquartersCity: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    headquartersCountry: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    headquartersPostalCode: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    headquartersState: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    headquartersStreet: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    isOperating: z.ZodBoolean;
    matchedVia: z.ZodEnum<{
        NAME: "NAME";
        TICKER: "TICKER";
    }>;
    nameAlias: z.ZodArray<z.ZodString>;
    nameLegal: z.ZodString;
    otherCandidate: z.ZodArray<z.ZodString>;
    phone: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    sicCode: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    sicDescription: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    stateOfIncorporation: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    ticker: z.ZodArray<z.ZodString>;
}, z.core.$strip>;
type SecCompanyDefinition = z.infer<typeof SecCompanySchemaDefinition>;
/**
 * Public-company identity facts from SEC EDGAR (legal name, former names, ticker, exchange, industry, incorporation, headquarters). SEC supplies no brand name, website, or summary text — those stay enrichment-owned and are not part of this shape.
 *
 * @openapiSchema SecCompany
 * @endpoint GET /v1/sec/company
 * @contractShape sec.company
 * @contractRole canonical
 */
export declare const SecCompanySchema: z.ZodType<SecCompanyDefinition>;
export type SecCompany = z.infer<typeof SecCompanySchema>;
export {};
//# sourceMappingURL=company.d.ts.map