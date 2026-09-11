// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
/**
 * Canonical URL platform type such as website, linkedin, twitter, or github. Lifecycle facts belong on link flags such as isCurrent and isPrimary.
 *
 * @openapiSchema EntityUrlType
 * @endpoint GET /v1/entities
 * @endpoint GET /v1/entities/detail
 * @endpoint GET /v1/entities/detail/similar
 * @endpoint GET /v1/entities/lookup
 * @endpoint GET /v1/entities/summary
 * @endpoint GET /v1/people/detail
 * @endpoint GET /v1/people/lookup
 * @endpoint GET /v1/search/link
 * @endpoint GET /v1/entities/{entityId}
 * @endpoint GET /v1/entities/{entityId}/investors
 * @endpoint GET /v1/entities/{entityId}/people
 * @endpoint GET /v1/entities/{entityId}/people/{associationId}
 * @endpoint GET /v1/entities/{entityId}/person-investors
 * @endpoint GET /v1/entities/{entityId}/products/suggestions
 * @endpoint GET /v1/entities/{entityId}/relationships/suggestions
 * @endpoint GET /v1/entities/{entityId}/similar
 * @endpoint GET /v1/entities/{entityId}/urls
 * @endpoint GET /v1/entities/{entityId}/urls/{urlId}
 * @endpoint GET /v1/entities/{entityId}/urls/all
 * @endpoint GET /v1/people/{personId}
 * @endpoint GET /v1/people/{personId}/entities
 * @endpoint GET /v1/people/{personId}/entities/{associationId}
 * @endpoint GET /v1/people/{personId}/similar
 * @endpoint GET /v1/people/{personId}/urls
 * @endpoint GET /v1/people/{personId}/urls/{urlId}
 * @endpoint GET /v1/people/{personId}/urls/all
 * @endpoint POST /v1/entities/batch
 * @endpoint POST /v1/entities/detail/batch
 * @endpoint POST /v1/entities/detail/resolve
 * @endpoint POST /v1/entities/filters/refine
 * @endpoint POST /v1/entities/filters/search
 * @endpoint POST /v1/entities/lookup/batch
 * @endpoint POST /v1/entities/lookup/matches
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
export const EntityUrlTypeSchema = z.enum([
    "website",
    "linkedin",
    "twitter",
    "github",
    "facebook",
    "instagram",
    "tiktok",
    "youtube",
    "subreddit",
    "forum",
    "documentation",
    "support",
    "statuspage",
    "changelog",
    "roadmap",
    "discord",
    "crunchbase",
    "wellfound",
    "angellist",
    "glassdoor",
    "theorg",
    "ycombinator",
    "wikipedia",
    "pitchbook",
    "morningstar",
    "bloomberg",
    "nyse",
    "nasdaq",
    "g2",
    "producthunt",
    "trustpilot",
    "alternativeto",
    "gartnerpeerinsights",
    "getapp",
    "sourceforge",
    "appstore",
    "googleplay",
    "capterra",
    "trustradius",
    "hubspotmarketplace",
    "slackappdirectory",
    "awsmarketplace",
    "salesforceappexchange",
    "chromewebstore",
    "vscodemarketplace",
    "npm",
    "pypi",
    "maven",
    "dockerhub",
    "homebrew",
    "crates",
    "huggingface",
]);
//# sourceMappingURL=url-type.js.map