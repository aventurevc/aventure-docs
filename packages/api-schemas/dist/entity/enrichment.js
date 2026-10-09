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
    /** Address id of the current headquarters: the current dominant (operating) address, else the current domicile (legal seat); absent when neither is on record. Read this instead of the deprecated isHq flag, which marks the legal seat. */
    headquartersAddressId: z.int().nullish(),
    text: EntityTextBundleSchema,
    /** URL link filter values */
    urlLink: z.array(EntityUrlLinkSchema),
    /** Persisted URL link rows omitted from urlLink because they are not both isCurrent=true and isPrimary=true. Read the full list via GET /v1/entities/{entityId}/urls?includeInactive=true. */
    urlLinkSuppressedCount: z.int(),
});
/**
 * Supplemental entity data — addresses, classification tags, funding, text content, and URL links
 *
 * @openapiSchema EntityEnrichment
 * @endpoint GET /v1/entities
 * @endpoint GET /v1/entities/lookup-exact
 * @endpoint GET /v1/search/link
 * @endpoint GET /v1/entities/{entityId}
 * @endpoint GET /v1/entities/{entityId}/investors
 * @endpoint GET /v1/entities/{entityId}/similar
 * @endpoint GET /v1/lookup-jobs/{jobId}
 * @endpoint GET /v1/search/link/jobs/{jobId}
 * @endpoint GET /v1/search/shared/{id}
 * @endpoint GET /v1/search/shared/slug/{slug}
 * @endpoint POST /v1/entities/lookup-batch
 * @endpoint POST /v1/entities/lookup-matches
 * @endpoint POST /v1/entities/search
 * @endpoint POST /v1/lookup-mentions
 * @endpoint POST /v1/search
 * @endpoint POST /v1/search/natural/entities
 * @endpoint POST /v1/search/shared
 * @usedBySchema EntityDetailSchema
 * @usedBySchema EntityListSchema
 * @contractShape entity.enrichment
 * @contractRole canonical
 */
export const EntityEnrichmentSchema = EntityEnrichmentSchemaDefinition;
//# sourceMappingURL=enrichment.js.map