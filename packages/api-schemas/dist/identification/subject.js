// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { EntityTypeSchema } from "../entity/type.js";
const IdentificationSubjectSchemaDefinition = z.object({
    /** Specific facts in plain words: product, industry, employer and title, or founder names. Generic words like startup add nothing. */
    context: z.string().max(2000).nullish(),
    /** Kind of record to identify when you know it; the kind-agnostic POST /v1/lookup then runs only that kind's ladder. typeRecord or providerId implies ENTITY. */
    kind: z.enum(["ENTITY", "PERSON"]).nullish(),
    /** City, region, or country, such as Austin, TX. Tells namesakes apart; not proof on its own. */
    location: z.string().max(2000).nullish(),
    /** Name exactly as the source writes it, such as Acme AI or Jane Doe. Required even when url is sent; to read a record from only a URL (an aVenture page, website, or domain) use the exact read instead: entities lookup-exact get --url, or people lookup-exact get --url for a person. */
    name: z.string().max(200),
    /** Provider entity id for a Product or Service lookup. Omit it when the provider is unknown. With no typeRecord, searches both Product and Service. Invalid for a company type or a person lookup. */
    providerId: z.uuid().nullish(),
    /** aVenture news id of the article that mentions the subject; an unknown id is a 400. */
    sourceNewsId: z.int().nullish(),
    /** URL of the article that mentions the subject; read from aVenture news when stored there, otherwise fetched. */
    sourceUrl: z.string().max(2000).nullish(),
    /** Entity type to identify. A Product or Service never matches its provider organization, but a record stored under a neighboring type of the same family (Product or Service; Fund, Investment Firm, or Company) still matches, and a Business Line lookup sees both families. Invalid for a person lookup. */
    typeRecord: EntityTypeSchema.nullish(),
    /** URLs the subject owns: its website, its LinkedIn company or person profile, or a registry page. At most 10. Put articles in sourceUrl. */
    url: z.array(z.string()).max(10).optional(),
});
/**
 * The company, Product, Service, or person to identify. Send the name plus every URL, location, and source you have; a website or profile URL usually settles the answer without any model call.
 *
 * @openapiSchema IdentificationSubject
 * @endpoint POST /v1/entities/lookup
 * @endpoint POST /v1/lookup
 * @endpoint POST /v1/people/lookup
 * @contractShape identification.subject
 * @contractRole canonical
 */
export const IdentificationSubjectSchema = IdentificationSubjectSchemaDefinition;
//# sourceMappingURL=subject.js.map