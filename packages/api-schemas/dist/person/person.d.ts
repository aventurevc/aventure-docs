import { z } from "zod/v4";
declare const PersonSchemaDefinition: z.ZodObject<{
    createdAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
    gender: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    id: z.ZodUUID;
    image: z.ZodType<{
        isMonogram: boolean;
        picture?: string | null | undefined;
    }, unknown, z.core.$ZodTypeInternals<{
        isMonogram: boolean;
        picture?: string | null | undefined;
    }, unknown>>;
    lastModifiedAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
    nameAlias: z.ZodArray<z.ZodType<{
        displayable?: boolean | null | undefined;
        name: string;
        type?: "formerName" | "maidenName" | "nickname" | "stageName" | null | undefined;
    }, unknown, z.core.$ZodTypeInternals<{
        displayable?: boolean | null | undefined;
        name: string;
        type?: "formerName" | "maidenName" | "nickname" | "stageName" | null | undefined;
    }, unknown>>>;
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
        sourceJson: z.ZodString;
        sourceText: z.ZodString;
        sourceType: z.ZodEnum<{
            agentHelpDoc: "agentHelpDoc";
            blogPost: "blogPost";
            classificationCode: "classificationCode";
            classificationTag: "classificationTag";
            entity: "entity";
            newsArticle: "newsArticle";
            person: "person";
            product: "product";
            service: "service";
            text: "text";
        }>;
    }, z.core.$strip>>>;
    slug: z.ZodString;
    source: z.ZodObject<{
        changedAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
        dataSourceUpdatedAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
        detail: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        kind: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        pendingApproval: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
        sourceId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        status: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.core.$strip>;
    suffix: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    text: z.ZodType<{
        expanded?: string | null | undefined;
        generatedDescription?: string | null | undefined;
        short?: string | null | undefined;
    }, unknown, z.core.$ZodTypeInternals<{
        expanded?: string | null | undefined;
        generatedDescription?: string | null | undefined;
        short?: string | null | undefined;
    }, unknown>>;
    updatedAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
}, z.core.$strip>;
type PersonDefinition = z.infer<typeof PersonSchemaDefinition>;
/**
 * Canonical person core record
 *
 * @openapiSchema Person
 * @endpoint GET /v1/entities/detail
 * @endpoint GET /v1/entities/detail/investors
 * @endpoint GET /v1/entities/detail/person-investors
 * @endpoint GET /v1/entities/lookup
 * @endpoint GET /v1/people
 * @endpoint GET /v1/people/detail
 * @endpoint GET /v1/people/detail/similar
 * @endpoint GET /v1/people/lookup
 * @endpoint GET /v1/search/link
 * @endpoint POST /v1/entities/batch
 * @endpoint POST /v1/entities/detail/batch
 * @endpoint POST /v1/entities/detail/resolve
 * @endpoint POST /v1/people/batch
 * @endpoint POST /v1/people/detail/batch
 * @endpoint POST /v1/people/natural-search
 * @endpoint POST /v1/people/search
 * @endpoint POST /v1/search/all
 * @usedBySchema PagePersonSchema
 * @usedBySchema PageResultPersonSchema
 * @usedBySchema PersonDetailSchema
 * @usedBySchema PersonSimilarityResultSchema
 * @contractShape person.person
 * @contractRole canonical
 */
export declare const PersonSchema: z.ZodType<PersonDefinition>;
export type Person = z.infer<typeof PersonSchema>;
export {};
//# sourceMappingURL=person.d.ts.map