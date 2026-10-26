import { z } from "zod/v4";
declare const HarnessRunTurnSchemaDefinition: z.ZodObject<{
    figure: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    invocation: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        instruction: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        sectionKey: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        tool: z.ZodEnum<{
            LIST_SECTION: "LIST_SECTION";
            RENDER_SECTION: "RENDER_SECTION";
        }>;
    }, z.core.$strip>>>;
    text: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
type HarnessRunTurnDefinition = z.infer<typeof HarnessRunTurnSchemaDefinition>;
export interface HarnessRunTurnSchemaInput extends z.input<typeof HarnessRunTurnSchemaDefinition> {
}
/**
 * One conversation turn; set exactly one of text or invocation
 *
 * @openapiSchema HarnessRunTurn
 * @endpoint POST /v1/research-runs/{runId}/turns
 * @contractShape harness.run-turn
 * @contractRole canonical
 */
export declare const HarnessRunTurnSchema: z.ZodType<HarnessRunTurnDefinition, HarnessRunTurnSchemaInput>;
export type HarnessRunTurn = z.infer<typeof HarnessRunTurnSchema>;
export {};
//# sourceMappingURL=run-turn.d.ts.map