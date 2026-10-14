import { z } from "zod/v4";
/**
 * Details of an HTTP 409 conflict. conflictType names the shape: URL_DUPLICATE when the URL is already a current URL on another record; STRICT_URL_LOOKUP when an exact URL lookup matches more than one record; DUPLICATE_CREATE_REVIEW when a create or lookup returns candidate records to review; CLASSIFICATION_INACTIVE_TAG when a classification value exists but is inactive; NEWS_SOURCE_URL when another article already has the same publication and URL.
 *
 * @openapiSchema DomainConflictDetails
 * @standardProblemResponse
 * @usedBySchema ProblemDetailSchema
 * @contractShape domain.conflict-details
 * @contractRole canonical
 */
export declare const DomainConflictDetailsSchema: z.ZodUnion<readonly [z.ZodType<{
    conflictType: string;
    existingJoin: {
        owner: {
            entityId?: string | null | undefined;
            personId?: string | null | undefined;
        };
        urlId: number;
    }[];
    fragmentIgnored: boolean;
    guidance: string;
    normalizedUrl?: string | null | undefined;
    requestedOwner: {
        entityId?: string | null | undefined;
        personId?: string | null | undefined;
    };
    url: string;
    urlType: string;
}, import("../url/duplicate-conflict.ts").UrlDuplicateConflictSchemaInput, z.core.$ZodTypeInternals<{
    conflictType: string;
    existingJoin: {
        owner: {
            entityId?: string | null | undefined;
            personId?: string | null | undefined;
        };
        urlId: number;
    }[];
    fragmentIgnored: boolean;
    guidance: string;
    normalizedUrl?: string | null | undefined;
    requestedOwner: {
        entityId?: string | null | undefined;
        personId?: string | null | undefined;
    };
    url: string;
    urlType: string;
}, import("../url/duplicate-conflict.ts").UrlDuplicateConflictSchemaInput>>, z.ZodType<{
    candidateEntityId: string[];
    candidatePersonId: string[];
    conflictType: string;
    hint: string;
    normalizedUrl?: string | null | undefined;
    url: string;
    urlType?: string | null | undefined;
}, import("../strict/url-lookup-conflict.ts").StrictUrlLookupConflictSchemaInput, z.core.$ZodTypeInternals<{
    candidateEntityId: string[];
    candidatePersonId: string[];
    conflictType: string;
    hint: string;
    normalizedUrl?: string | null | undefined;
    url: string;
    urlType?: string | null | undefined;
}, import("../strict/url-lookup-conflict.ts").StrictUrlLookupConflictSchemaInput>>, z.ZodType<{
    candidate?: {
        externalId?: string | null | undefined;
        id: string;
        name?: string | null | undefined;
        operatingStatus?: string | null | undefined;
        publicPath?: string | null | undefined;
        reason: string[];
        score?: number | undefined;
        slug?: string | null | undefined;
        typeRecord?: "Business Line" | "Company" | "Fund" | "Government" | "Investment Firm" | "Nonprofit" | "Organization" | "Product" | "Service" | null | undefined;
    }[] | null | undefined;
    conflictType: string;
    newsCandidate?: {
        externalId?: string | null | undefined;
        id: number;
        reason: string[];
        score: number;
        slug?: string | null | undefined;
    }[] | null | undefined;
    overridePath?: string | null | undefined;
    threshold: number;
}, import("../duplicate/create-review.ts").DuplicateCreateReviewSchemaInput, z.core.$ZodTypeInternals<{
    candidate?: {
        externalId?: string | null | undefined;
        id: string;
        name?: string | null | undefined;
        operatingStatus?: string | null | undefined;
        publicPath?: string | null | undefined;
        reason: string[];
        score?: number | undefined;
        slug?: string | null | undefined;
        typeRecord?: "Business Line" | "Company" | "Fund" | "Government" | "Investment Firm" | "Nonprofit" | "Organization" | "Product" | "Service" | null | undefined;
    }[] | null | undefined;
    conflictType: string;
    newsCandidate?: {
        externalId?: string | null | undefined;
        id: number;
        reason: string[];
        score: number;
        slug?: string | null | undefined;
    }[] | null | undefined;
    overridePath?: string | null | undefined;
    threshold: number;
}, import("../duplicate/create-review.ts").DuplicateCreateReviewSchemaInput>>, z.ZodType<{
    availableOverrides: ("ATTACH_INACTIVE" | "REACTIVATE")[];
    conflictType: string;
    slug: string;
    tagId: number;
}, import("../classification/inactive-tag-details.ts").ClassificationInactiveTagDetailsSchemaInput, z.core.$ZodTypeInternals<{
    availableOverrides: ("ATTACH_INACTIVE" | "REACTIVATE")[];
    conflictType: string;
    slug: string;
    tagId: number;
}, import("../classification/inactive-tag-details.ts").ClassificationInactiveTagDetailsSchemaInput>>, z.ZodType<{
    conflictingArticleId: number;
    conflictingArticleSlug: string;
    conflictingArticleTitle: string;
    conflictType: string;
}, import("../news/source-url-conflict.ts").NewsSourceUrlConflictSchemaInput, z.core.$ZodTypeInternals<{
    conflictingArticleId: number;
    conflictingArticleSlug: string;
    conflictingArticleTitle: string;
    conflictType: string;
}, import("../news/source-url-conflict.ts").NewsSourceUrlConflictSchemaInput>>]>;
export type DomainConflictDetails = z.infer<typeof DomainConflictDetailsSchema>;
//# sourceMappingURL=conflict-details.d.ts.map