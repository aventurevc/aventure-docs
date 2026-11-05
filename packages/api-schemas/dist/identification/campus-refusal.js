// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const IdentificationCampusRefusalSchemaKnownMembers = z.enum([
    "NAME_NOT_DECLARED",
    "REGISTRY_CONTACT_MISSING",
    "REGISTRY_CONTACT_NOT_STATED",
    "SITE_UNREADABLE",
]);
/**
 * The unmet campus identity proof; supply that evidence before retrying.
 *
 * @openapiSchema IdentificationCampusRefusal
 * @standardProblemResponse
 * @usedBySchema ProblemDetailSchema
 * @contractShape identification.campus-refusal
 * @contractRole canonical
 */
export const IdentificationCampusRefusalSchema = Object.assign(z.union([IdentificationCampusRefusalSchemaKnownMembers, z.string()]), { enum: IdentificationCampusRefusalSchemaKnownMembers.enum });
//# sourceMappingURL=campus-refusal.js.map