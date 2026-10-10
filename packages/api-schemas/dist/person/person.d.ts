import { z } from "zod/v4";
declare const PersonSchemaDefinition: z.ZodObject<{
    createdAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
    gender: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    id: z.ZodUUID;
    image: z.ZodType<{
        isMonogram: boolean;
        picture?: string | null | undefined;
    }, import("./image.ts").PersonImageSchemaInput, z.core.$ZodTypeInternals<{
        isMonogram: boolean;
        picture?: string | null | undefined;
    }, import("./image.ts").PersonImageSchemaInput>>;
    lastModifiedAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
    nameAlias: z.ZodArray<z.ZodType<{
        displayable?: boolean | null | undefined;
        name: string;
        type?: "formerName" | "maidenName" | "nickname" | "stageName" | null | undefined;
    }, import("../entity/name-alias-person-alias-type.ts").EntityNameAliasPersonAliasTypeSchemaInput, z.core.$ZodTypeInternals<{
        displayable?: boolean | null | undefined;
        name: string;
        type?: "formerName" | "maidenName" | "nickname" | "stageName" | null | undefined;
    }, import("../entity/name-alias-person-alias-type.ts").EntityNameAliasPersonAliasTypeSchemaInput>>>;
    nameFirst: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    nameFull: z.ZodString;
    nameLast: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    nameMiddle: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    nickname: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    publicId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    semanticMatch: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        computedAt: z.ZodISODateTime;
        cosineDistance: z.ZodNumber;
        cosineScore: z.ZodNumber;
        modelVersion: z.ZodString;
        rank: z.ZodInt;
        sourceHash: z.ZodString;
        sourceId: z.ZodString;
        sourceType: z.ZodUnion<readonly [z.ZodEnum<{
            agentHelpDoc: "agentHelpDoc";
            blogPost: "blogPost";
            classificationCode: "classificationCode";
            classificationTag: "classificationTag";
            entity: "entity";
            newsArticle: "newsArticle";
            person: "person";
            product: "product";
            researchSnippet: "researchSnippet";
            service: "service";
            sourceDocument: "sourceDocument";
            text: "text";
        }>, z.ZodString]>;
    }, z.core.$strip>>>;
    slug: z.ZodString;
    suffix: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    text: z.ZodType<{
        expanded?: string | null | undefined;
        generatedDescription?: string | null | undefined;
        short?: string | null | undefined;
    }, import("../entity/text-bundle.ts").EntityTextBundleSchemaInput, z.core.$ZodTypeInternals<{
        expanded?: string | null | undefined;
        generatedDescription?: string | null | undefined;
        short?: string | null | undefined;
    }, import("../entity/text-bundle.ts").EntityTextBundleSchemaInput>>;
    updatedAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
}, z.core.$strip>;
type PersonDefinition = z.infer<typeof PersonSchemaDefinition>;
export interface PersonSchemaInput extends z.input<typeof PersonSchemaDefinition> {
}
/**
 * Canonical person core record
 *
 * @openapiSchema Person
 * @endpoint GET /v1/entities/lookup-exact
 * @endpoint GET /v1/people
 * @endpoint GET /v1/people/lookup-exact
 * @endpoint GET /v1/search/link
 * @endpoint GET /v1/entities/{entityId}
 * @endpoint GET /v1/entities/{entityId}/investors
 * @endpoint GET /v1/entities/{entityId}/person-investors
 * @endpoint GET /v1/lookup-jobs/{jobId}
 * @endpoint GET /v1/people/{personId}
 * @endpoint GET /v1/people/{personId}/similar
 * @endpoint GET /v1/search/link/jobs/{jobId}
 * @endpoint GET /v1/search/shared/{id}
 * @endpoint GET /v1/search/shared/slug/{slug}
 * @endpoint POST /v1/entities/lookup-batch
 * @endpoint POST /v1/entities/lookup-matches
 * @endpoint POST /v1/entities/search
 * @endpoint POST /v1/lookup-mentions
 * @endpoint POST /v1/people/lookup-batch
 * @endpoint POST /v1/people/search
 * @endpoint POST /v1/search
 * @endpoint POST /v1/search/natural/people
 * @endpoint POST /v1/search/shared
 * @usedBySchema LookupJobMentionSchema
 * @usedBySchema PagePersonSchema
 * @usedBySchema PageResultPersonSchema
 * @usedBySchema PersonDetailSchema
 * @usedBySchema PersonSimilarityResultSchema
 * @contractShape person.person
 * @contractRole canonical
 */
export declare const PersonSchema: z.ZodType<PersonDefinition, PersonSchemaInput>;
export type Person = z.infer<typeof PersonSchema>;
export {};
//# sourceMappingURL=person.d.ts.map