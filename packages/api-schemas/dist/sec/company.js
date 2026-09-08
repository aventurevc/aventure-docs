// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const SecCompanySchemaDefinition = z.object({
    /** SEC Central Index Key, 10-digit zero-padded. The stable cross-sync join key. */
    cik: z.string(),
    /** Employer Identification Number (tax id), when SEC supplies one. */
    ein: z.string().nullish(),
    /** SEC entity type. `operating` marks a real operating company; `other` marks a SPAC, trust, holding, or shell filing vehicle. */
    entityType: z.string().nullish(),
    /** Listing exchange(s). */
    exchange: z.array(z.string()),
    /** SEC filer size category. */
    filerCategory: z.string().nullish(),
    /** Fiscal year-end as MMDD. */
    fiscalYearEnd: z.string().nullish(),
    /** Headquarters city from the SEC business address. */
    headquartersCity: z.string().nullish(),
    /** Headquarters country code; often null for US filers. */
    headquartersCountry: z.string().nullish(),
    /** Headquarters postal/ZIP code. */
    headquartersPostalCode: z.string().nullish(),
    /** Headquarters state or country from the SEC business address. */
    headquartersState: z.string().nullish(),
    /** Headquarters street address from the SEC business address. */
    headquartersStreet: z.string().nullish(),
    /** True when SEC classifies this registrant as an operating company, false for a SPAC/trust/holding/shell vehicle. */
    isOperating: z.boolean(),
    /** How the query resolved to this registrant. */
    matchedVia: z.enum(["TICKER", "NAME"]),
    /** Former registered legal names from SEC `formerNames`, most recent first. */
    nameAlias: z.array(z.string()),
    /** Registered legal name from SEC filings. */
    nameLegal: z.string(),
    /** Other registrants whose name also matched the query (legal names). Empty for an exact ticker resolution; non-empty signals an ambiguous name query. */
    otherCandidate: z.array(z.string()),
    /** Business phone from SEC filings. */
    phone: z.string().nullish(),
    /** SIC industry code. */
    sicCode: z.string().nullish(),
    /** SIC industry description. */
    sicDescription: z.string().nullish(),
    /** State or country of incorporation (SEC code). */
    stateOfIncorporation: z.string().nullish(),
    /** Trading ticker symbol(s). */
    ticker: z.array(z.string()),
});
/**
 * Public-company identity facts from SEC EDGAR (legal name, former names, ticker, exchange, industry, incorporation, headquarters). SEC supplies no brand name, website, or summary text — those stay enrichment-owned and are not part of this shape.
 *
 * @openapiSchema SecCompany
 * @endpoint GET /v1/sec/company
 * @contractShape sec.company
 * @contractRole canonical
 */
export const SecCompanySchema = SecCompanySchemaDefinition;
//# sourceMappingURL=company.js.map