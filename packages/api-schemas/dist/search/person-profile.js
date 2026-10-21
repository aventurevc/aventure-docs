// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const SearchPersonProfileSchemaDefinition = z.object({
    /** Current company named by aVenture's stored LinkedIn capture; null until one is stored. */
    currentCompany: z.string().nullish(),
    /** Profile headline as the web search index holds it; null when it has none. */
    headline: z.string().nullish(),
    /** Profile location as the web search index holds it. */
    location: z.string().nullish(),
    /** Name on the profile. */
    name: z.string(),
    /** The person's name as the query wrote it; profiles group under it. */
    named: z.string(),
    /** Where the profile names the organization the query paired with the person: in its headline, elsewhere in the profile text, or not at all; null when the query named no organization. */
    organizationEvidence: z.enum(["headline", "profile", "none"]).nullish(),
    /** Headshot URL from aVenture's stored LinkedIn capture; null until one is stored or when the capture holds no usable headshot. */
    photoUrl: z.string().nullish(),
    /** Canonical public LinkedIn profile URL. */
    profileUrl: z.string(),
});
/**
 * Public LinkedIn profile a search found for a person the query names who has no directory record. It shows the profile's own header; it does not assert current employment.
 *
 * @openapiSchema SearchPersonProfile
 * @endpoint GET /v1/search/link
 * @endpoint GET /v1/search/link/jobs/{jobId}
 * @endpoint GET /v1/search/shared/{id}
 * @endpoint GET /v1/search/shared/slug/{slug}
 * @endpoint POST /v1/search
 * @endpoint POST /v1/search/natural/people
 * @endpoint POST /v1/search/shared
 * @usedBySchema PersonNaturalSearchResultSchema
 * @contractShape search.person-profile
 * @contractRole canonical
 */
export const SearchPersonProfileSchema = SearchPersonProfileSchemaDefinition;
//# sourceMappingURL=person-profile.js.map