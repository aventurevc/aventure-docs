import { z } from "zod/v4";
/**
 * The final IPO prospectus a registrant filed on SEC EDGAR.
 *
 * @openapiSchema SecListingProspectus
 * @endpoint GET /v1/entities/sec
 * @usedBySchema SecCompanySchema
 * @contractShape sec.listing-prospectus
 * @contractRole canonical
 */
export declare const SecListingProspectusSchema: z.ZodObject<{
    accessionNumber: z.ZodString;
    documentUrl: z.ZodString;
    filingDate: z.ZodISODate;
    form: z.ZodString;
}, z.core.$strip>;
export type SecListingProspectus = z.infer<typeof SecListingProspectusSchema>;
//# sourceMappingURL=listing-prospectus.d.ts.map