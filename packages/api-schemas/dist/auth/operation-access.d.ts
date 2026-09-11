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
export declare const AuthOperationAccessSchema: z.ZodEnum<{
    ADMIN: "ADMIN";
    PERMISSION: "PERMISSION";
    READ: "READ";
}>;
export type AuthOperationAccess = z.infer<typeof AuthOperationAccessSchema>;
//# sourceMappingURL=operation-access.d.ts.map