// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const LogoAccuracyMethodSchemaKnownMembers = z.enum([
    "PERCEPTUAL_HASH",
    "VISION",
    "OPERATOR_REVIEW",
    "REFERENCE_UNAVAILABLE",
]);
/**
 * How a logo-accuracy outcome was reached
 *
 * @openapiSchema LogoAccuracyMethod
 * @endpoint GET /v1/entities/{entityId}/logo
 * @endpoint GET /v1/news/{newsId}/thumbnail
 * @endpoint GET /v1/people/{personId}/photo
 * @usedBySchema LogoAccuracySchema
 * @contractShape logo.accuracy-method
 * @contractRole canonical
 */
export const LogoAccuracyMethodSchema = Object.assign(z.union([LogoAccuracyMethodSchemaKnownMembers, z.string()]), { enum: LogoAccuracyMethodSchemaKnownMembers.enum });
//# sourceMappingURL=accuracy-method.js.map