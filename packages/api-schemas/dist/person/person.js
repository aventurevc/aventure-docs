// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { ContentEmbeddingMatchSchema } from "../content/embedding-match.js";
import { EntityNameAliasPersonAliasTypeSchema } from "../entity/name-alias-person-alias-type.js";
import { EntityTextBundleSchema } from "../entity/text-bundle.js";
import { PersonImageSchema } from "./image.js";
const PersonSchemaDefinition = z.object({
    /** Record creation timestamp */
    createdAt: z.iso.datetime({ offset: true }).nullish(),
    gender: z.string().nullish(),
    /** Person id (UUID) */
    id: z.uuid(),
    image: PersonImageSchema,
    /** Provenance-grounded last-modified watermark (schema.org dateModified): the latest effective time across all writes attributed to this person. */
    lastModifiedAt: z.iso.datetime({ offset: true }).nullish(),
    /** Display and search aliases for this person */
    nameAlias: z.array(EntityNameAliasPersonAliasTypeSchema),
    /** Name to display: nameFull with the nickname in parentheses after the given name (`William (Bill) Alan Callahan`). Equals nameFull when the person has no nickname or nameFull already shows it; match and search on nameFull, never on this. */
    nameDisplay: z.string(),
    nameFirst: z.string().nullish(),
    nameFull: z.string(),
    nameLast: z.string().nullish(),
    /** Middle name as stored after name normalization */
    nameMiddle: z.string().nullish(),
    nickname: z.string().nullish(),
    /** Stable, immutable public handle (e.g. `pV1StGXR8Z5ab`). Never changes once assigned, unlike the slug. Null on responses that do not include it and on older records not yet given a handle. */
    publicId: z
        .string()
        .regex(/^p[0-9A-Za-z]{12}$/)
        .nullish(),
    /** Why this person matched a meaning-based (semantic) search; set only on semantic searches. */
    semanticMatch: ContentEmbeddingMatchSchema.nullish(),
    /** Lowercase URL slug that identifies the record. */
    slug: z
        .string()
        .regex(/^[a-z0-9_-]+$/)
        .max(255),
    suffix: z.string().nullish(),
    /** Always empty: people carry no biography text. */
    text: EntityTextBundleSchema,
    /** Last modification timestamp */
    updatedAt: z.iso.datetime({ offset: true }).nullish(),
});
/**
 * A person's core profile fields.
 *
 * @openapiSchema Person
 * @endpoint GET /v1/entities/lookup-exact
 * @endpoint GET /v1/people/lookup-exact
 * @endpoint GET /v1/search/link
 * @endpoint GET /v1/entities/{entityId}
 * @endpoint GET /v1/entities/{entityId}/investors
 * @endpoint GET /v1/entities/{entityId}/investors/people
 * @endpoint GET /v1/lookup/jobs/{jobId}
 * @endpoint GET /v1/people/{personId}
 * @endpoint GET /v1/people/{personId}/similar
 * @endpoint GET /v1/search/link/jobs/{jobId}
 * @endpoint GET /v1/search/shared/{id}
 * @endpoint GET /v1/search/shared/slug/{slug}
 * @endpoint POST /v1/entities/lookup-batch
 * @endpoint POST /v1/entities/lookup-matches
 * @endpoint POST /v1/entities/search
 * @endpoint POST /v1/lookup/mentions
 * @endpoint POST /v1/people/lookup-batch
 * @endpoint POST /v1/people/search
 * @endpoint POST /v1/search
 * @endpoint POST /v1/search/natural/people
 * @endpoint POST /v1/search/shared
 * @usedBySchema LookupJobMentionSchema
 * @usedBySchema PagePersonSchema
 * @usedBySchema PageResultPersonSchema
 * @usedBySchema PersonDetailSchema
 * @usedBySchema PersonSimilarityResultSchema
 * @contractShape person.person
 * @contractRole canonical
 */
export const PersonSchema = PersonSchemaDefinition;
//# sourceMappingURL=person.js.map