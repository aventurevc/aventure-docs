// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const AuthPermissionGrantSchemaDefinition = z.object({
    permission: z.array(z.string()),
    role: z.array(z.string()),
});
/**
 * Auth permission grant
 *
 * @openapiSchema AuthPermissionGrant
 * @endpoint GET /v1/auth/me/permissions
 * @contractShape auth.permission-grant
 * @contractRole canonical
 */
export const AuthPermissionGrantSchema = AuthPermissionGrantSchemaDefinition;
//# sourceMappingURL=permission-grant.js.map