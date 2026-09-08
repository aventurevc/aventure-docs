import { z } from "zod/v4";
declare const PersonGraphMemberSchemaDefinition: z.ZodObject<{
    isCurrent: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    personId: z.ZodUUID;
    personImage: z.ZodType<{
        isMonogram: boolean;
        picture?: string | null | undefined;
    }, unknown, z.core.$ZodTypeInternals<{
        isMonogram: boolean;
        picture?: string | null | undefined;
    }, unknown>>;
    personName: z.ZodString;
    personSlug: z.ZodString;
    titleName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
type PersonGraphMemberDefinition = z.infer<typeof PersonGraphMemberSchemaDefinition>;
/**
 * Lean person rail member with association title facts
 *
 * @openapiSchema PersonGraphMember
 * @endpoint GET /v1/people/{personId}/graph
 * @usedBySchema PersonGraphCareerContextSchema
 * @usedBySchema PersonGraphCoInvestorSchema
 * @usedBySchema PersonGraphRolePeerSchema
 * @usedBySchema PersonGraphSimilarEntitySchema
 * @contractShape person.graph-member
 * @contractRole canonical
 */
export declare const PersonGraphMemberSchema: z.ZodType<PersonGraphMemberDefinition>;
export type PersonGraphMember = z.infer<typeof PersonGraphMemberSchema>;
export {};
//# sourceMappingURL=graph-member.d.ts.map