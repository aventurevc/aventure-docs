import { z } from "zod/v4";
declare const AuthPermissionGrantSchemaDefinition: z.ZodObject<{
    permission: z.ZodArray<z.ZodString>;
    role: z.ZodArray<z.ZodString>;
}, z.core.$strip>;
type AuthPermissionGrantDefinition = z.infer<typeof AuthPermissionGrantSchemaDefinition>;
/**
 * Auth permission grant
 *
 * @openapiSchema AuthPermissionGrant
 * @endpoint GET /v1/auth/me/permissions
 * @endpoint POST /v1/auth/me/permissions
 * @usedBySchema AuthOperationAuthorizationSchema
 * @contractShape auth.permission-grant
 * @contractRole canonical
 */
export declare const AuthPermissionGrantSchema: z.ZodType<AuthPermissionGrantDefinition>;
export type AuthPermissionGrant = z.infer<typeof AuthPermissionGrantSchema>;
export {};
//# sourceMappingURL=permission-grant.d.ts.map