// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { EntityClassificationSchema } from "./classification.js";
import { EntitySchema } from "./entity.js";
import { EntityUrlLinkSchema } from "./url-link.js";
const EntityBrandSchemaDefinition = z.object({
    /** Current classification tags, industries, and standardized classifications. */
    classification: EntityClassificationSchema,
    /** Core identity: id, slug, nameBrand, nameLegal, nameAlias, type, status, and image (logo, logoSquare, isMonogram). */
    core: EntitySchema,
    /** Absolute canonical aVenture page URL, when the entity has one. */
    publicUrl: z.string().nullish(),
    /** Current URL links: websites first, the primary one leading, then social and other profiles. */
    urlLink: z.array(EntityUrlLinkSchema),
});
/**
 * Thin company brand read: names and logos under core, current website and social URLs, and current classification tags.
 *
 * @openapiSchema EntityBrand
 * @endpoint GET /v1/entities/brand
 * @contractShape entity.brand
 * @contractRole canonical
 */
export const EntityBrandSchema = EntityBrandSchemaDefinition;
//# sourceMappingURL=brand.js.map