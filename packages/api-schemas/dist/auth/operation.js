// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { AuthOperationMethodSchema } from "./operation-method.js";
const AuthOperationSchemaDefinition = z.object({
    /** Concrete path for authorization. Preserve the path template's literal segments and substitute its parameters with values matching their generated schema. No request is executed against this path. */
    authorizationPath: z.string().max(2048),
    /** HTTP method of the operation. */
    method: AuthOperationMethodSchema,
    /** Generated OpenAPI operation id. */
    operationId: z.string().max(128),
    /** Absolute API path. A whole path segment may be an OpenAPI placeholder such as {entityId}. */
    path: z.string().max(2048),
});
/**
 * Generated API operation candidate identified by operation id, method, and path.
 *
 * @openapiSchema AuthOperation
 * @endpoint POST /v1/auth/me/permissions
 * @usedBySchema AuthOperationAuthorizationSchema
 * @usedBySchema AuthOperationFilterSchema
 * @contractShape auth.operation
 * @contractRole canonical
 */
export const AuthOperationSchema = AuthOperationSchemaDefinition;
//# sourceMappingURL=operation.js.map