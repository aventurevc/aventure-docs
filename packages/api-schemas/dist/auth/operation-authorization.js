// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { AuthOperationAccessSchema } from "./operation-access.js";
import { AuthOperationSchema } from "./operation.js";
import { AuthPermissionGrantSchema } from "./permission-grant.js";
const AuthOperationAuthorizationSchemaDefinition = z.object({
    /** Supplied operations admitted by the current session. */
    operation: z.array(AuthOperationSchema),
    /** Highest access class represented by the current session. */
    operationAccess: AuthOperationAccessSchema,
    /** Existing role and permission grant for the current session. */
    permissionGrant: AuthPermissionGrantSchema,
});
/**
 * Current permission grant, access class, and supplied API operations admitted by the live request authorization policy.
 *
 * @openapiSchema AuthOperationAuthorization
 * @endpoint POST /v1/auth/me/permissions
 * @contractShape auth.operation-authorization
 * @contractRole canonical
 */
export const AuthOperationAuthorizationSchema = AuthOperationAuthorizationSchemaDefinition;
//# sourceMappingURL=operation-authorization.js.map