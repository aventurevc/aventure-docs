// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const SignalEvidenceClassSchemaKnownMembers = z.enum(["direct", "indirect", "inferred"]);
/**
 * Three-tier evidence hierarchy: direct statutory/verified filings, indirect operational signals, or inferred statistical priors.
 *
 * @openapiSchema SignalEvidenceClass
 * @endpoint GET /v1/entities/{entityId}/headcount-estimate
 * @endpoint GET /v1/entities/{entityId}/revenue-estimate
 * @usedBySchema EntityHeadcountEstimateSchema
 * @usedBySchema EntityRevenueEstimateSchema
 * @usedBySchema RevenueDriverContributionSchema
 * @usedBySchema SignalFamilyScoreSchema
 * @contractShape signal.evidence-class
 * @contractRole canonical
 */
export const SignalEvidenceClassSchema = Object.assign(z.union([SignalEvidenceClassSchemaKnownMembers, z.string()]), { enum: SignalEvidenceClassSchemaKnownMembers.enum });
//# sourceMappingURL=evidence-class.js.map