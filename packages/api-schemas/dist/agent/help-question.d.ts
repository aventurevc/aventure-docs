import { z } from "zod/v4";
declare const AgentHelpQuestionSchemaDefinition: z.ZodObject<{
    model: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    question: z.ZodString;
    scope: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
        ALL: "ALL";
        READ: "READ";
        WRITE: "WRITE";
    }>>>;
}, z.core.$strip>;
type AgentHelpQuestionDefinition = z.infer<typeof AgentHelpQuestionSchemaDefinition>;
/**
 * A natural-language question about how to operate the platform, answered from the operation catalog, agent skills, and completion gates.
 *
 * @openapiSchema AgentHelpQuestion
 * @endpoint POST /v1/agents/help
 * @contractShape agent.help-question
 * @contractRole canonical
 */
export declare const AgentHelpQuestionSchema: z.ZodType<AgentHelpQuestionDefinition>;
export type AgentHelpQuestion = z.infer<typeof AgentHelpQuestionSchema>;
export {};
//# sourceMappingURL=help-question.d.ts.map