// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const GithubRepoSchemaDefinition = z.object({
    createdAt: z.iso.datetime({ offset: true }).nullish(),
    description: z.string().nullish(),
    forkCount: z.int(),
    /** GitHub's stable numeric repository id; sync upsert key per owner */
    githubId: z.number().int(),
    /** Project homepage URL declared on the repository */
    homepageUrl: z.string().nullish(),
    id: z.number().int(),
    /** True when the repository is archived on GitHub */
    isArchived: z.boolean(),
    /** True when the repository is a fork of another repository */
    isFork: z.boolean(),
    /** Primary language reported by GitHub */
    language: z.string().nullish(),
    /** SPDX license id reported by GitHub */
    license: z.string().nullish(),
    /** Repository name (slug segment after the login) */
    name: z.string(),
    /** GitHub account login (org or user) the repository belongs to */
    ownerLogin: z.string(),
    /** GitHub created_at of the repository */
    repoCreatedAt: z.iso.datetime({ offset: true }).nullish(),
    /** GitHub pushed_at of the repository at last sync */
    repoPushedAt: z.iso.datetime({ offset: true }).nullish(),
    stargazerCount: z.int(),
    /** Repository topics reported by GitHub */
    topic: z.array(z.string()),
    updatedAt: z.iso.datetime({ offset: true }).nullish(),
    /** Canonical https GitHub repository page URL */
    url: z.string(),
});
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
export const GithubRepoSchema = GithubRepoSchemaDefinition;
//# sourceMappingURL=repo.js.map