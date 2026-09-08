import { z } from "zod/v4";
declare const GithubRepoSchemaDefinition: z.ZodObject<{
    createdAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
    description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    forkCount: z.ZodInt;
    githubId: z.ZodNumber;
    homepageUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    id: z.ZodNumber;
    isArchived: z.ZodBoolean;
    isFork: z.ZodBoolean;
    language: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    license: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    name: z.ZodString;
    ownerLogin: z.ZodString;
    repoCreatedAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
    repoPushedAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
    stargazerCount: z.ZodInt;
    topic: z.ZodArray<z.ZodString>;
    updatedAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
    url: z.ZodString;
}, z.core.$strip>;
type GithubRepoDefinition = z.infer<typeof GithubRepoSchemaDefinition>;
/**
 * GitHub repository synced for an entity or person from their current github URL links. githubId is GitHub's stable numeric repository id; rows are replaced per owner on each sync, so counts and timestamps reflect the last sync.
 *
 * @openapiSchema GithubRepo
 * @endpoint GET /v1/entities/{entityId}/repositories
 * @endpoint GET /v1/people/{personId}/repositories
 * @usedBySchema PageGithubRepoSchema
 * @contractShape github.repo
 * @contractRole canonical
 */
export declare const GithubRepoSchema: z.ZodType<GithubRepoDefinition>;
export type GithubRepo = z.infer<typeof GithubRepoSchema>;
export {};
//# sourceMappingURL=repo.d.ts.map