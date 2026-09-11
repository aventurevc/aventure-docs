// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { ContentEmbeddingMatchSchema } from "../content/embedding-match.js";
import { DatasourceSourceMetadataSchema } from "../datasource/source-metadata.js";
import { EntityNameAliasPersonAliasTypeSchema } from "../entity/name-alias-person-alias-type.js";
import { EntityTextBundleSchema } from "../entity/text-bundle.js";
import { PersonImageSchema } from "./image.js";
const PersonSchemaDefinition = z.object({
    /** Record creation timestamp */
    createdAt: z.iso.datetime({ offset: true }).nullish(),
    gender: z.string().nullish(),
    /** Canonical person UUID */
    id: z.uuid(),
    image: PersonImageSchema,
    /** Provenance-grounded last-modified watermark (schema.org dateModified): the latest effective time across all writes attributed to this person. */
    lastModifiedAt: z.iso.datetime({ offset: true }).nullish(),
    /** Display and search aliases for this person */
    nameAlias: z.array(EntityNameAliasPersonAliasTypeSchema),
    nameFirst: z.string().nullish(),
    nameFull: z.string(),
    nameLast: z.string().nullish(),
    nameMiddle: z.string().nullish(),
    nickname: z.string().nullish(),
    /** Stable, immutable public handle (e.g. `pV1StGXR8Z5ab`). Never changes once assigned, unlike the slug. Null on projections that do not select it and on rows still awaiting handle backfill. */
    publicId: z
        .string()
        .regex(/^p[0-9A-Za-z]{12}$/)
        .nullish(),
    /** Semantic embedding match evidence populated only for semantic people reads. */
    semanticMatch: ContentEmbeddingMatchSchema.nullish(),
    /** Canonical lowercase URL slug for the resource */
    slug: z
        .string()
        .regex(/^[a-z0-9_-]+$/)
        .max(255),
    source: DatasourceSourceMetadataSchema,
    suffix: z.string().nullish(),
    /** Grouped person text content */
    text: EntityTextBundleSchema,
    /** Last modification timestamp */
    updatedAt: z.iso.datetime({ offset: true }).nullish(),
});
/**
 * Canonical person core record
 *
 * @openapiSchema Person
 * @endpoint GET /v1/entities/detail
 * @endpoint GET /v1/entities/lookup
 * @endpoint GET /v1/people
 * @endpoint GET /v1/people/detail
 * @endpoint GET /v1/people/lookup
 * @endpoint GET /v1/search/link
 * @endpoint GET /v1/entities/{entityId}
 * @endpoint GET /v1/entities/{entityId}/investors
 * @endpoint GET /v1/entities/{entityId}/person-investors
 * @endpoint GET /v1/people/{personId}
 * @endpoint GET /v1/people/{personId}/similar
 * @endpoint POST /v1/entities/batch
 * @endpoint POST /v1/entities/detail/batch
 * @endpoint POST /v1/entities/detail/resolve
 * @endpoint POST /v1/entities/lookup/batch
 * @endpoint POST /v1/people/batch
 * @endpoint POST /v1/people/detail/batch
 * @endpoint POST /v1/people/lookup/batch
 * @endpoint POST /v1/people/natural-search
 * @endpoint POST /v1/people/search
 * @endpoint POST /v1/search/all
 * @usedBySchema PagePersonSchema
 * @usedBySchema PageResultPersonSchema
 * @usedBySchema PersonDetailSchema
 * @usedBySchema PersonSimilarityResultSchema
 * @contractShape person.person
 * @contractRole canonical
 */
export const PersonSchema = PersonSchemaDefinition;
//# sourceMappingURL=person.js.map