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
export declare const AuthOperationMethodSchema: z.ZodEnum<{
    DELETE: "DELETE";
    GET: "GET";
    PATCH: "PATCH";
    POST: "POST";
    PUT: "PUT";
}>;
export type AuthOperationMethod = z.infer<typeof AuthOperationMethodSchema>;
//# sourceMappingURL=operation-method.d.ts.map