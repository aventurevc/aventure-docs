// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const EntityProfileHeadlineSchemaKnownMembers = z.enum([
    "Company",
    "Private company",
    "Public company",
    "Public",
    "Investment Firm",
    "Fund",
    "Nonprofit",
    "Government",
    "Business Line",
    "Product",
    "Service",
    "Acquired Subsidiary",
    "Acquired",
    "Closed",
    "Closed (Acquihire)",
    "Inactive",
]);
/**
 * Profile headline derived from record kind, current market-standing ownership (Public or Private only), a Business Line's proven public controlling parent, and operating status. Never a funding stage. Render an unrecognized value verbatim.
 *
 * @openapiSchema EntityProfileHeadline
 * @endpoint GET /v1/entities
 * @endpoint GET /v1/entities/lookup-exact
 * @endpoint GET /v1/search/link
 * @endpoint GET /v1/entities/{entityId}
 * @endpoint GET /v1/entities/{entityId}/investors
 * @endpoint GET /v1/entities/{entityId}/relationships
 * @endpoint GET /v1/entities/{entityId}/similar
 * @endpoint GET /v1/entities/relationships/{relationshipId}
 * @endpoint GET /v1/entities/search/jobs/{jobId}
 * @endpoint GET /v1/lookup-jobs/{jobId}
 * @endpoint GET /v1/lookup/jobs/{jobId}
 * @endpoint GET /v1/search/link/jobs/{jobId}
 * @endpoint GET /v1/search/shared/{id}
 * @endpoint GET /v1/search/shared/slug/{slug}
 * @endpoint POST /v1/entities/lookup-batch
 * @endpoint POST /v1/entities/lookup-matches
 * @endpoint POST /v1/entities/search
 * @endpoint POST /v1/lookup-mentions
 * @endpoint POST /v1/lookup/mentions
 * @endpoint POST /v1/search
 * @endpoint POST /v1/search/natural/entities
 * @endpoint POST /v1/search/shared
 * @usedBySchema EntityProfileStatusSchema
 * @contractShape entity.profile-headline
 * @contractRole canonical
 */
export const EntityProfileHeadlineSchema = Object.assign(z.union([EntityProfileHeadlineSchemaKnownMembers, z.string()]), { enum: EntityProfileHeadlineSchemaKnownMembers.enum });
//# sourceMappingURL=profile-headline.js.map