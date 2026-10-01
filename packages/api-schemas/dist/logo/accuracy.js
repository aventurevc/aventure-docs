// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { ConfidenceSchema } from "../confidence/confidence.js";
import { LogoAccuracyReferenceSchema } from "./accuracy-reference.js";
/**
 * Read-only assessment of whether a stored logo/photo depicts the target's own brand, decided from visible features of the stored mark versus the target's own reference marks
 *
 * @openapiSchema LogoAccuracy
 * @endpoint GET /v1/entities/{entityId}/logo
 * @endpoint GET /v1/news/{newsId}/thumbnail
 * @endpoint GET /v1/people/{personId}/photo
 * @usedBySchema MediaUploadSchema
 * @contractShape logo.accuracy
 * @contractRole canonical
 */
export const LogoAccuracySchema = z.object({
    /** Literal visible description of the candidate mark, when assessed by vision */
    candidateObserved: z.string().nullish(),
    /** Confidence in the outcome */
    confidence: ConfidenceSchema,
    /** How the outcome was reached */
    method: z.enum(["PERCEPTUAL_HASH", "VISION", "OPERATOR_REVIEW", "REFERENCE_UNAVAILABLE"]),
    /** Whether the candidate mark matches the target's own brand */
    outcome: z.enum(["MATCH", "MISMATCH", "INSUFFICIENT"]),
    /** Reference marks fetched from the target's own surfaces, each with its perceptual-hash distance to the candidate. The deciding deterministic distance is the smallest entry */
    reference: z.array(LogoAccuracyReferenceSchema),
    /** Literal visible description of the reference mark, when assessed by vision */
    referenceObserved: z.string().nullish(),
    /** The specific visible feature shared by candidate and reference that supports a match (shared name text, symbol, or distinctive palette); null when not a match */
    sharedFeature: z.string().nullish(),
});
//# sourceMappingURL=accuracy.js.map