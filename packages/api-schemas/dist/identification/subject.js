// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { EntityTypeSchema } from "../entity/type.js";
import { RegistryFilingSchema } from "../registry/filing.js";
import { UniqueIdMutationSchema } from "../unique/id-mutation.js";
/**
 * The company, Product, Service, or person to identify. Send the name, a URL it owns, or both, plus every location and source you have; a website or profile URL usually settles the answer without any model call.
 *
 * @openapiSchema IdentificationSubject
 * @endpoint GET /v1/lookup/jobs/{jobId}
 * @endpoint POST /v1/lookup
 * @endpoint POST /v1/lookup/mentions
 * @usedBySchema LookupJobMutationSchema
 * @contractShape identification.subject
 * @contractRole canonical
 */
export const IdentificationSubjectSchema = z.object({
    /** Specific facts in plain words: product, industry, employer and title, or founder names. Generic words like startup add nothing. */
    context: z.string().max(2000).nullish(),
    /** Exact email address the record holds as a contact detail. Requires private visibility; when exactly one record of the requested kind holds it, that record matches before names or URLs. */
    email: z.string().nullish(),
    /** Companies the subject is known to work at; a person filing accepts a LinkedIn profile only when one of them appears in the profile's employer fields. */
    employer: z.array(z.string()).max(10).optional(),
    filing: RegistryFilingSchema.nullish(),
    /** Kind of record to identify when you know it: ENTITY for companies, funds, and firms (and their products or services); PERSON for people. Only that kind is looked up; typeRecord or productServiceProviderId implies ENTITY. */
    kind: z.enum(["ENTITY", "PERSON"]).nullish(),
    /** City, region, or country, such as Austin, TX. Tells namesakes apart; not proof on its own. */
    location: z.string().max(2000).nullish(),
    /** Name exactly as the source writes it, such as Acme AI or Jane Doe. Send name, url, or both; a name that is an absolute http(s) URL is read as url. */
    name: z.string().max(200).nullish(),
    /** Provider entity id for a Product or Service lookup. Omit it when the provider is unknown. With no typeRecord, searches both Product and Service. Invalid for a company type or a person lookup. */
    productServiceProviderId: z.uuid().nullish(),
    /** Deprecated: send productServiceProviderId, the name the entity duplicate-check and create routes use. Still read as productServiceProviderId; a request that sends it answers with Deprecation and Sunset headers. */
    providerId: z.uuid().nullish(),
    /** Part the subject plays in the source: INVESTOR when the source lists it as an investor. Unlike typeRecord it keeps every record type a candidate, so a Company or Nonprofit that invests can still match. With it, a lookup with no url, filing, or sourceIdentifier binds a same-named Investment Firm or Fund over a record that does not invest; without a sourceNewsId it also answers NEEDS_REVIEW when the bound record shares its name with another live firm, or a visible record of its type family, unless the location's place names only the bound record's address and every namesake stores one. Without it, an Investment Firm or Fund typeRecord applies the firm preference alone. Omit it otherwise. */
    role: z.enum(["INVESTOR"]).nullish(),
    /** Exact stored capture of sourceUrl, never an owned website. Requires capture-read authority and a matching successful evidence body; cannot accompany sourceNewsId. Private CSV rows require private body-read authority and their matching canonical relative body#row locator in sourceUrl. Bound lookups remain synchronous. */
    sourceDocumentId: z.uuid().nullish(),
    /** Permanent source identity with idType and identifier for a catalog source-binding type. Legacy source may be omitted or null; non-null labels are rejected. Requires private visibility and resolves before names or URLs. */
    sourceIdentifier: UniqueIdMutationSchema.nullish(),
    /** aVenture news id of the article that mentions the subject; an unknown id is a 400. */
    sourceNewsId: z.int().nullish(),
    /** URL of the article that mentions the subject; read from aVenture news when stored there, otherwise fetched. Private CSV evidence uses the canonical relative body#row locator with its matching sourceDocumentId, never an owned website. */
    sourceUrl: z.string().max(2000).nullish(),
    /** Entity type to identify. A Product or Service never matches its provider organization, but a record stored under a neighboring type of the same family (Product or Service; Fund, Investment Firm, or Company) still matches, and a Business Line lookup sees both families. Invalid for a person lookup. */
    typeRecord: EntityTypeSchema.nullish(),
    /** URLs the subject owns: its website, its LinkedIn company or person profile, an aVenture page, or a registry page. At most 10. Required when name is omitted. Put articles in sourceUrl. */
    url: z.array(z.string()).max(10).optional(),
});
//# sourceMappingURL=subject.js.map