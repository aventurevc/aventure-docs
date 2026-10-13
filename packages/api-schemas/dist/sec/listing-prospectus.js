// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
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
export const SecListingProspectusSchema = z.object({
    /** SEC accession number. */
    accessionNumber: z.string(),
    /** SEC EDGAR Archives URL of the prospectus document. */
    documentUrl: z.string(),
    /** Date SEC received the prospectus. */
    filingDate: z.iso.date(),
    /** SEC form type of the prospectus. */
    form: z.string(),
});
//# sourceMappingURL=listing-prospectus.js.map