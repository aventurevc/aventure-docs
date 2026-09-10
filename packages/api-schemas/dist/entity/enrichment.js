// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { AddressSchema } from "../address/address.js";
import { EntityClassificationSchema } from "./classification.js";
import { EntityFundingDetailSchema } from "./funding-detail.js";
import { EntityTextBundleSchema } from "./text-bundle.js";
import { EntityUrlLinkSchema } from "./url-link.js";
const EntityEnrichmentSchemaDefinition = z.object({
    address: z.array(AddressSchema),
    /** Entity classification join projection for this read surface. Single-detail and full-detail batch reads include full history; list, default batch, and similar-entity reads may filter to current joins. Use GET /v1/entities/{entityId}/classifications?includeInactive=true for authoritative join history. */
    classification: EntityClassificationSchema,
    fundingDetail: EntityFundingDetailSchema.nullish(),
    text: EntityTextBundleSchema,
    /** URL link filter values */
    urlLink: z.array(EntityUrlLinkSchema),
});
/**
 * Supplemental entity data — addresses, classification tags, funding, text content, and URL links
 *
 * @openapiSchema EntityEnrichment
 * @endpoint GET /v1/entities
 * @endpoint GET /v1/entities/detail
 * @endpoint GET /v1/entities/detail/investors
 * @endpoint GET /v1/entities/detail/similar
 * @endpoint GET /v1/entities/lookup
 * @endpoint GET /v1/search/link
 * @endpoint GET /v1/entities/{entityId}
 * @endpoint GET /v1/entities/{entityId}/products/suggestions
 * @endpoint GET /v1/entities/{entityId}/relationships/suggestions
 * @endpoint POST /v1/entities/batch
 * @endpoint POST /v1/entities/detail/batch
 * @endpoint POST /v1/entities/detail/resolve
 * @endpoint POST /v1/entities/lookup/batch
 * @endpoint POST /v1/entities/natural-search
 * @endpoint POST /v1/entities/search
 * @endpoint POST /v1/search/all
 * @usedBySchema EntityDetailSchema
 * @usedBySchema EntityListSchema
 * @contractShape entity.enrichment
 * @contractRole canonical
 */
export const EntityEnrichmentSchema = EntityEnrichmentSchemaDefinition;
//# sourceMappingURL=enrichment.js.map