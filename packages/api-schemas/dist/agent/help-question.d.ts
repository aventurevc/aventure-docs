import { z } from "zod/v4";
declare const AgentHelpQuestionSchemaDefinition: z.ZodObject<{
    includePrivate: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    model: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    question: z.ZodString;
    resolve: z.ZodOptional<z.ZodBoolean>;
    scope: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
        ALL: "ALL";
        READ: "READ";
        WRITE: "WRITE";
    }>>>;
}, z.core.$strip>;
type AgentHelpQuestionDefinition = z.infer<typeof AgentHelpQuestionSchemaDefinition>;
export interface AgentHelpQuestionSchemaInput extends z.input<typeof AgentHelpQuestionSchemaDefinition> {
}
/**
 * A plain-English question about how to use aVenture, answered with references to the operations that do it.
 *
 * @openapiSchema AgentHelpQuestion
 * @endpoint POST /v1/agents/help
 * @endpoint POST /v1/help
 * @contractShape agent.help-question
 * @contractRole canonical
 */
export declare const AgentHelpQuestionSchema: z.ZodType<AgentHelpQuestionDefinition, AgentHelpQuestionSchemaInput>;
export type AgentHelpQuestion = z.infer<typeof AgentHelpQuestionSchema>;
export {};
//# sourceMappingURL=help-question.d.ts.map