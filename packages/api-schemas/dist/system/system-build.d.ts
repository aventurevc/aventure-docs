import { z } from "zod/v4";
declare const SystemBuildSchemaDefinition: z.ZodObject<{
    build: z.ZodType<{
        artifact?: string | null | undefined;
        group?: string | null | undefined;
        name?: string | null | undefined;
        revision?: string | null | undefined;
        time?: string | null | undefined;
        version?: string | null | undefined;
    }, unknown, z.core.$ZodTypeInternals<{
        artifact?: string | null | undefined;
        group?: string | null | undefined;
        name?: string | null | undefined;
        revision?: string | null | undefined;
        time?: string | null | undefined;
        version?: string | null | undefined;
    }, unknown>>;
}, z.core.$strip>;
type SystemBuildDefinition = z.infer<typeof SystemBuildSchemaDefinition>;
/**
 * Build metadata exposed by the public info alias
 *
 * @openapiSchema SystemBuild
 * @endpoint GET /info
 * @contractShape system.system-build
 * @contractRole canonical
 */
export declare const SystemBuildSchema: z.ZodType<SystemBuildDefinition>;
export type SystemBuild = z.infer<typeof SystemBuildSchema>;
export {};
//# sourceMappingURL=system-build.d.ts.map