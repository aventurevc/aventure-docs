import { z } from "zod/v4";
declare const SystemBuildSchemaDefinition: z.ZodObject<{
    build: z.ZodType<{
        artifact?: string | null | undefined;
        group?: string | null | undefined;
        name?: string | null | undefined;
        revision?: string | null | undefined;
        time?: string | null | undefined;
        version?: string | null | undefined;
    }, {
        artifact?: string | null | undefined;
        group?: string | null | undefined;
        name?: string | null | undefined;
        revision?: string | null | undefined;
        time?: string | null | undefined;
        version?: string | null | undefined;
    }, z.core.$ZodTypeInternals<{
        artifact?: string | null | undefined;
        group?: string | null | undefined;
        name?: string | null | undefined;
        revision?: string | null | undefined;
        time?: string | null | undefined;
        version?: string | null | undefined;
    }, {
        artifact?: string | null | undefined;
        group?: string | null | undefined;
        name?: string | null | undefined;
        revision?: string | null | undefined;
        time?: string | null | undefined;
        version?: string | null | undefined;
    }>>;
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
export declare const SystemBuildSchema: z.ZodType<SystemBuildDefinition, z.input<typeof SystemBuildSchemaDefinition>>;
export type SystemBuild = z.infer<typeof SystemBuildSchema>;
export {};
//# sourceMappingURL=system-build.d.ts.map