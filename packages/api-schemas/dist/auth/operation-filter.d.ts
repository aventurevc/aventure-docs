import { z } from "zod/v4";
declare const AuthOperationFilterSchemaDefinition: z.ZodObject<{
    operation: z.ZodArray<z.ZodType<{
        authorizationPath: string;
        method: "DELETE" | "GET" | "PATCH" | "POST" | "PUT";
        operationId: string;
        path: string;
    }, unknown, z.core.$ZodTypeInternals<{
        authorizationPath: string;
        method: "DELETE" | "GET" | "PATCH" | "POST" | "PUT";
        operationId: string;
        path: string;
    }, unknown>>>;
}, z.core.$strip>;
type AuthOperationFilterDefinition = z.infer<typeof AuthOperationFilterSchemaDefinition>;
/**
 * Bounded generated API operations to authorize for the current session.
 *
 * @openapiSchema AuthOperationFilter
 * @endpoint POST /v1/auth/me/permissions
 * @contractShape auth.operation-filter
 * @contractRole canonical
 */
export declare const AuthOperationFilterSchema: z.ZodType<AuthOperationFilterDefinition>;
export type AuthOperationFilter = z.infer<typeof AuthOperationFilterSchema>;
export {};
//# sourceMappingURL=operation-filter.d.ts.map