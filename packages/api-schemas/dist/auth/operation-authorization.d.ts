import { z } from "zod/v4";
declare const AuthOperationAuthorizationSchemaDefinition: z.ZodObject<{
    operation: z.ZodArray<z.ZodType<{
        authorizationPath: string;
        method: "DELETE" | "GET" | "PATCH" | "POST" | "PUT";
        operationId: string;
        path: string;
    }, import("./operation.ts").AuthOperationSchemaInput, z.core.$ZodTypeInternals<{
        authorizationPath: string;
        method: "DELETE" | "GET" | "PATCH" | "POST" | "PUT";
        operationId: string;
        path: string;
    }, import("./operation.ts").AuthOperationSchemaInput>>>;
    operationAccess: z.ZodEnum<{
        ADMIN: "ADMIN";
        PERMISSION: "PERMISSION";
        READ: "READ";
    }>;
    permissionGrant: z.ZodType<{
        permission: string[];
        role: string[];
    }, import("./permission-grant.ts").AuthPermissionGrantSchemaInput, z.core.$ZodTypeInternals<{
        permission: string[];
        role: string[];
    }, import("./permission-grant.ts").AuthPermissionGrantSchemaInput>>;
}, z.core.$strip>;
type AuthOperationAuthorizationDefinition = z.infer<typeof AuthOperationAuthorizationSchemaDefinition>;
export interface AuthOperationAuthorizationSchemaInput extends z.input<typeof AuthOperationAuthorizationSchemaDefinition> {
}
/**
 * Current permission grant, access class, and supplied API operations admitted by the live request authorization policy.
 *
 * @openapiSchema AuthOperationAuthorization
 * @endpoint POST /v1/auth/me/permissions
 * @contractShape auth.operation-authorization
 * @contractRole canonical
 */
export declare const AuthOperationAuthorizationSchema: z.ZodType<AuthOperationAuthorizationDefinition, AuthOperationAuthorizationSchemaInput>;
export type AuthOperationAuthorization = z.infer<typeof AuthOperationAuthorizationSchema>;
export {};
//# sourceMappingURL=operation-authorization.d.ts.map