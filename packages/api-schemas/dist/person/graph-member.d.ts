import { z } from "zod/v4";
declare const PersonGraphMemberSchemaDefinition: z.ZodObject<{
    isCurrent: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    personId: z.ZodUUID;
    personImage: z.ZodType<{
        isMonogram: boolean;
        picture?: string | null | undefined;
    }, import("./image.ts").PersonImageSchemaInput, z.core.$ZodTypeInternals<{
        isMonogram: boolean;
        picture?: string | null | undefined;
    }, import("./image.ts").PersonImageSchemaInput>>;
    personName: z.ZodString;
    personSlug: z.ZodString;
    titleName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
type PersonGraphMemberDefinition = z.infer<typeof PersonGraphMemberSchemaDefinition>;
export interface PersonGraphMemberSchemaInput extends z.input<typeof PersonGraphMemberSchemaDefinition> {
}
/**
 * Lean person rail member with association title facts
 *
 * @openapiSchema PersonGraphMember
 * @endpoint GET /v1/entities/lookup-exact
 * @endpoint GET /v1/people/lookup-exact
 * @endpoint GET /v1/search/link
 * @endpoint GET /v1/entities/{entityId}
 * @endpoint GET /v1/entities/{entityId}/investors
 * @endpoint GET /v1/entities/{entityId}/person-investors
 * @endpoint GET /v1/people/{personId}
 * @endpoint GET /v1/people/{personId}/graph
 * @endpoint GET /v1/search/link/jobs/{jobId}
 * @endpoint GET /v1/search/shared/{id}
 * @endpoint GET /v1/search/shared/slug/{slug}
 * @endpoint POST /v1/entities/lookup-batch
 * @endpoint POST /v1/entities/lookup-matches
 * @endpoint POST /v1/entities/search
 * @endpoint POST /v1/people/lookup-batch
 * @endpoint POST /v1/search
 * @endpoint POST /v1/search/shared
 * @usedBySchema PersonGraphCareerContextSchema
 * @usedBySchema PersonGraphCoInvestorSchema
 * @usedBySchema PersonGraphSimilarEntitySchema
 * @contractShape person.graph-member
 * @contractRole canonical
 */
export declare const PersonGraphMemberSchema: z.ZodType<PersonGraphMemberDefinition, PersonGraphMemberSchemaInput>;
export type PersonGraphMember = z.infer<typeof PersonGraphMemberSchema>;
export {};
//# sourceMappingURL=graph-member.d.ts.map