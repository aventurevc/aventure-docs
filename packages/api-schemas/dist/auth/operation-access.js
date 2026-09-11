// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
/**
 * Current session access class: ordinary reads, explicit permissions, or admin.
 *
 * @openapiSchema AuthOperationAccess
 * @endpoint POST /v1/auth/me/permissions
 * @usedBySchema AuthOperationAuthorizationSchema
 * @contractShape auth.operation-access
 * @contractRole canonical
 */
export const AuthOperationAccessSchema = z.enum(["READ", "PERMISSION", "ADMIN"]);
//# sourceMappingURL=operation-access.js.map