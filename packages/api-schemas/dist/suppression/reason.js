// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const SuppressionReasonSchemaKnownMembers = z.enum(["placeholderContent", "deceptive"]);
/**
 * Why this record is suppressed: it stays hidden for good, and its stored facts (names, URLs, addresses, entity-person joins) block creating or showing the same subject again. placeholderContent: sample or boilerplate content, often AI-written template copy, presented as a real organization or person. deceptive: a profile built to mislead. A request to be removed is never a reason: aVenture does not delete or hide accurate research profiles.
 *
 * @openapiSchema SuppressionReason
 * @endpoint GET /v1/people
 * @contractShape suppression.reason
 * @contractRole canonical
 */
export const SuppressionReasonSchema = Object.assign(z.union([SuppressionReasonSchemaKnownMembers, z.string()]), { enum: SuppressionReasonSchemaKnownMembers.enum });
//# sourceMappingURL=reason.js.map