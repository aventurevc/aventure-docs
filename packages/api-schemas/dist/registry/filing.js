// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { RegistryFilingAddressSchema } from "./filing-address.js";
import { RegistryFilingPersonSchema } from "./filing-person.js";
import { UniqueIdMutationSchema } from "../unique/id-mutation.js";
/**
 * Facts a government registry filing (SEC Form D, IRS, HRSA, NPPES) states about the organization. A lookup weighs each stored record's former names, addresses, team, registry ids, and founded year against them and matches without any model call only at about 220:1 odds. Invalid for a person lookup.
 *
 * @openapiSchema RegistryFiling
 * @endpoint GET /v1/lookup-jobs/{jobId}
 * @endpoint GET /v1/lookup/jobs/{jobId}
 * @endpoint POST /v1/entities/lookup
 * @endpoint POST /v1/lookup
 * @endpoint POST /v1/lookup-jobs
 * @endpoint POST /v1/lookup-mentions
 * @endpoint POST /v1/lookup/mentions
 * @endpoint POST /v1/people/lookup
 * @usedBySchema IdentificationSubjectSchema
 * @contractShape registry.filing
 * @contractRole canonical
 */
export const RegistryFilingSchema = z.object({
    /** Addresses the filing states: principal office, business, mailing. */
    address: z.array(RegistryFilingAddressSchema).max(10).optional(),
    /** Year of incorporation the filing states. */
    incorporatedYear: z.int().nullish(),
    /** Earlier names the filing or registry states for this organization; the subject name is its current filed name. */
    nameFormer: z.array(z.string()).max(10).optional(),
    /** People the filing names: executive officers, directors, promoters. */
    person: z.array(RegistryFilingPersonSchema).max(100).optional(),
    /** Registry ids the filing states, such as secCik, ein, or npi. A record holding the same id is strong evidence; a record holding a different id of the same type is a different filer and never matches. */
    uniqueId: z.array(UniqueIdMutationSchema).max(5).optional(),
});
//# sourceMappingURL=filing.js.map