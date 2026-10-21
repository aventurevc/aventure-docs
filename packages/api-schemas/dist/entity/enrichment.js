// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { AddressSchema } from "../address/address.js";
import { EntityClassificationSchema } from "./classification.js";
import { EntityFundingDetailSchema } from "./funding-detail.js";
import { EntityTextBundleSchema } from "./text-bundle.js";
import { EntityUrlLinkSchema } from "./url-link.js";
const EntityEnrichmentSchemaDefinition = z.object({
    /** Current addresses. Full-detail search carries only the headquarters row (headquartersAddressId); GET /v1/entities/{entityId}/addresses lists every row. */
    address: z.array(AddressSchema),
    /** Entity classifications. Single-detail and full-detail batch reads include history; list, default batch, and similar-entity reads may return only current classifications. Use GET /v1/entities/{entityId}/classifications?includeInactive=true for the full history. */
    classification: EntityClassificationSchema,
    /** Funding aggregate: enrichment.fundingDetail.totalRaisedUsd is the USD sum of recorded round amounts with available FX rates, not a complete lifetime total when round amounts or rates are missing. */
    fundingDetail: EntityFundingDetailSchema.nullish(),
    /** Operating headquarters address id: match enrichment.headquartersAddressId to enrichment.address[].id. Absent when no current dominant (operating) address is on record, even when a domicile (legal seat) exists. Deprecated isHq marks the legal seat, not the operating HQ. */
    headquartersAddressId: z.int().nullish(),
    /** When aVenture last verified that this entity runs no operating headquarters (a remote company); absent while a current operating headquarters is on record or no unexpired verification exists. */
    headquartersRemoteAsOf: z.iso.datetime({ offset: true }).nullish(),
    text: EntityTextBundleSchema,
    /** URL link filter values */
    urlLink: z.array(EntityUrlLinkSchema),
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
 * @endpoint GET /v1/entities/search/jobs/{jobId}
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