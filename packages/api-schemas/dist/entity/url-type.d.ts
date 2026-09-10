import { z } from "zod/v4";
/**
 * Canonical URL platform type such as website, linkedin, twitter, or github. Lifecycle facts belong on link flags such as isCurrent and isPrimary.
 *
 * @openapiSchema EntityUrlType
 * @endpoint GET /v1/entities
 * @endpoint GET /v1/entities/detail
 * @endpoint GET /v1/entities/detail/investors
 * @endpoint GET /v1/entities/detail/person-investors
 * @endpoint GET /v1/entities/detail/similar
 * @endpoint GET /v1/entities/lookup
 * @endpoint GET /v1/entities/summary
 * @endpoint GET /v1/people/detail
 * @endpoint GET /v1/people/detail/similar
 * @endpoint GET /v1/people/lookup
 * @endpoint GET /v1/search/link
 * @endpoint GET /v1/entities/{entityId}
 * @endpoint GET /v1/entities/{entityId}/people
 * @endpoint GET /v1/entities/{entityId}/people/{associationId}
 * @endpoint GET /v1/entities/{entityId}/products/suggestions
 * @endpoint GET /v1/entities/{entityId}/relationships/suggestions
 * @endpoint GET /v1/entities/{entityId}/urls
 * @endpoint GET /v1/entities/{entityId}/urls/{urlId}
 * @endpoint GET /v1/entities/{entityId}/urls/all
 * @endpoint GET /v1/people/{personId}
 * @endpoint GET /v1/people/{personId}/entities
 * @endpoint GET /v1/people/{personId}/entities/{associationId}
 * @endpoint GET /v1/people/{personId}/urls
 * @endpoint GET /v1/people/{personId}/urls/{urlId}
 * @endpoint GET /v1/people/{personId}/urls/all
 * @endpoint POST /v1/entities/batch
 * @endpoint POST /v1/entities/detail/batch
 * @endpoint POST /v1/entities/detail/resolve
 * @endpoint POST /v1/entities/filters/refine
 * @endpoint POST /v1/entities/filters/search
 * @endpoint POST /v1/entities/lookup/batch
 * @endpoint POST /v1/entities/natural-search
 * @endpoint POST /v1/entities/search
 * @endpoint POST /v1/people/batch
 * @endpoint POST /v1/people/detail/batch
 * @endpoint POST /v1/people/lookup/batch
 * @endpoint POST /v1/search/all
 * @usedBySchema EntityFilterSchema
 * @usedBySchema EntityListFilterSchema
 * @usedBySchema EntityUrlLinkSchema
 * @contractShape entity.url-type
 * @contractRole canonical
 */
export declare const EntityUrlTypeSchema: z.ZodEnum<{
    alternativeto: "alternativeto";
    angellist: "angellist";
    appstore: "appstore";
    awsmarketplace: "awsmarketplace";
    bloomberg: "bloomberg";
    capterra: "capterra";
    changelog: "changelog";
    chromewebstore: "chromewebstore";
    crates: "crates";
    crunchbase: "crunchbase";
    discord: "discord";
    dockerhub: "dockerhub";
    documentation: "documentation";
    facebook: "facebook";
    forum: "forum";
    g2: "g2";
    gartnerpeerinsights: "gartnerpeerinsights";
    getapp: "getapp";
    github: "github";
    glassdoor: "glassdoor";
    googleplay: "googleplay";
    homebrew: "homebrew";
    hubspotmarketplace: "hubspotmarketplace";
    instagram: "instagram";
    linkedin: "linkedin";
    maven: "maven";
    morningstar: "morningstar";
    nasdaq: "nasdaq";
    npm: "npm";
    nyse: "nyse";
    pitchbook: "pitchbook";
    producthunt: "producthunt";
    pypi: "pypi";
    roadmap: "roadmap";
    salesforceappexchange: "salesforceappexchange";
    slackappdirectory: "slackappdirectory";
    sourceforge: "sourceforge";
    statuspage: "statuspage";
    subreddit: "subreddit";
    support: "support";
    theorg: "theorg";
    tiktok: "tiktok";
    trustpilot: "trustpilot";
    trustradius: "trustradius";
    twitter: "twitter";
    vscodemarketplace: "vscodemarketplace";
    website: "website";
    wellfound: "wellfound";
    wikipedia: "wikipedia";
    ycombinator: "ycombinator";
    youtube: "youtube";
}>;
export type EntityUrlType = z.infer<typeof EntityUrlTypeSchema>;
//# sourceMappingURL=url-type.d.ts.map