// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const IdentificationSubjectSchemaDefinition = z.object({
    /** Specific facts in plain words: product, industry, employer and title, or founder names. Generic words like startup add nothing. */
    context: z.string().max(2000).nullish(),
    /** City, region, or country, such as Austin, TX. Tells namesakes apart; not proof on its own. */
    location: z.string().max(2000).nullish(),
    /** Name exactly as the source writes it, such as Acme AI or Jane Doe. */
    name: z.string().max(200),
    /** aVenture news id of the article that mentions the subject; an unknown id is a 400. */
    sourceNewsId: z.int().nullish(),
    /** URL of the article that mentions the subject; read from aVenture news when stored there, otherwise fetched. */
    sourceUrl: z.string().max(2000).nullish(),
    /** URLs the subject owns: its website, its LinkedIn company or person profile, or a registry page. At most 10. Put articles in sourceUrl. */
    url: z.array(z.string()).max(10).optional(),
});
/**
 * The company or person to identify. Send the name plus every URL, location, and source you have; a website or profile URL usually settles the answer without any model call.
 *
 * @openapiSchema IdentificationSubject
 * @endpoint POST /v1/entities/lookup
 * @endpoint POST /v1/people/lookup
 * @contractShape identification.subject
 * @contractRole canonical
 */
export const IdentificationSubjectSchema = IdentificationSubjectSchemaDefinition;
//# sourceMappingURL=subject.js.map