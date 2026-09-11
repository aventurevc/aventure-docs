// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
/**
 * HTTP method of a generated aVenture API operation.
 *
 * @openapiSchema AuthOperationMethod
 * @endpoint POST /v1/auth/me/permissions
 * @usedBySchema AuthOperationSchema
 * @contractShape auth.operation-method
 * @contractRole canonical
 */
export const AuthOperationMethodSchema = z.enum(["GET", "POST", "PUT", "PATCH", "DELETE"]);
//# sourceMappingURL=operation-method.js.map