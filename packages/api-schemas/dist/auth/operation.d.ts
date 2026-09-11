import { z } from "zod/v4";
declare const AuthOperationSchemaDefinition: z.ZodObject<{
    authorizationPath: z.ZodString;
    method: z.ZodEnum<{
        DELETE: "DELETE";
        GET: "GET";
        PATCH: "PATCH";
        POST: "POST";
        PUT: "PUT";
    }>;
    operationId: z.ZodString;
    path: z.ZodString;
}, z.core.$strip>;
type AuthOperationDefinition = z.infer<typeof AuthOperationSchemaDefinition>;
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
export declare const AuthOperationSchema: z.ZodType<AuthOperationDefinition>;
export type AuthOperation = z.infer<typeof AuthOperationSchema>;
export {};
//# sourceMappingURL=operation.d.ts.map