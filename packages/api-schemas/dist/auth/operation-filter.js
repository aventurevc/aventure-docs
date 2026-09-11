// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { AuthOperationSchema } from "./operation.js";
const AuthOperationFilterSchemaDefinition = z.object({
    /** Generated API operation candidates to authorize. */
    operation: z.array(AuthOperationSchema).max(1000),
});
/**
 * Bounded generated API operations to authorize for the current session.
 *
 * @openapiSchema AuthOperationFilter
 * @endpoint POST /v1/auth/me/permissions
 * @contractShape auth.operation-filter
 * @contractRole canonical
 */
export const AuthOperationFilterSchema = AuthOperationFilterSchemaDefinition;
//# sourceMappingURL=operation-filter.js.map