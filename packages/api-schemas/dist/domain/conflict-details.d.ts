import { z } from "zod/v4";
/**
 * Polymorphic envelope for RFC 9457 ProblemDetail.details on HTTP 409 responses. The concrete variant depends on the conflict kind: URL ownership collisions return UrlDuplicateConflict; ambiguous strict URL lookups return StrictUrlLookupConflict; create-time duplicate review gates return DuplicateCreateReview; classification writes that touch an inactive tag bucket return ClassificationInactiveTagDetails; news publication+URL uniqueness violations return NewsSourceUrlConflict. Inspect ProblemDetail.code/type and the field set present on details to identify the variant.
 *
 * @openapiSchema DomainConflictDetails
 * @standardProblemResponse
 * @usedBySchema ProblemDetailSchema
 * @contractShape domain.conflict-details
 * @contractRole canonical
 */
export declare const DomainConflictDetailsSchema: z.ZodUnion<readonly [z.ZodType<{
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
}, {
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
}, z.core.$ZodTypeInternals<{
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
}, {
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
}>>, z.ZodType<{
    candidateEntityId: string[];
    candidatePersonId: string[];
    hint: string;
    normalizedUrl?: string | null | undefined;
    url: string;
    urlType?: string | null | undefined;
}, {
    candidateEntityId: string[];
    candidatePersonId: string[];
    hint: string;
    normalizedUrl?: string | null | undefined;
    url: string;
    urlType?: string | null | undefined;
}, z.core.$ZodTypeInternals<{
    candidateEntityId: string[];
    candidatePersonId: string[];
    hint: string;
    normalizedUrl?: string | null | undefined;
    url: string;
    urlType?: string | null | undefined;
}, {
    candidateEntityId: string[];
    candidatePersonId: string[];
    hint: string;
    normalizedUrl?: string | null | undefined;
    url: string;
    urlType?: string | null | undefined;
}>>, z.ZodType<{
    candidate?: {
        externalId?: string | null | undefined;
        id: string;
        name?: string | null | undefined;
        operatingStatus?: string | null | undefined;
        publicPath?: string | null | undefined;
        reason: string[];
        score: number;
        slug?: string | null | undefined;
        typeRecord?: "Business Line" | "Company" | "Fund" | "Government" | "Investment Firm" | "Nonprofit" | "Organization" | "Product" | "Service" | null | undefined;
    }[] | null | undefined;
    newsCandidate?: {
        externalId?: string | null | undefined;
        id: number;
        reason: string[];
        score: number;
        slug?: string | null | undefined;
    }[] | null | undefined;
    overridePath?: string | null | undefined;
    threshold: number;
}, {
    candidate?: {
        externalId?: string | null | undefined;
        id: string;
        name?: string | null | undefined;
        operatingStatus?: string | null | undefined;
        publicPath?: string | null | undefined;
        reason: string[];
        score: number;
        slug?: string | null | undefined;
        typeRecord?: "Business Line" | "Company" | "Fund" | "Government" | "Investment Firm" | "Nonprofit" | "Organization" | "Product" | "Service" | null | undefined;
    }[] | null | undefined;
    newsCandidate?: {
        externalId?: string | null | undefined;
        id: number;
        reason: string[];
        score: number;
        slug?: string | null | undefined;
    }[] | null | undefined;
    overridePath?: string | null | undefined;
    threshold: number;
}, z.core.$ZodTypeInternals<{
    candidate?: {
        externalId?: string | null | undefined;
        id: string;
        name?: string | null | undefined;
        operatingStatus?: string | null | undefined;
        publicPath?: string | null | undefined;
        reason: string[];
        score: number;
        slug?: string | null | undefined;
        typeRecord?: "Business Line" | "Company" | "Fund" | "Government" | "Investment Firm" | "Nonprofit" | "Organization" | "Product" | "Service" | null | undefined;
    }[] | null | undefined;
    newsCandidate?: {
        externalId?: string | null | undefined;
        id: number;
        reason: string[];
        score: number;
        slug?: string | null | undefined;
    }[] | null | undefined;
    overridePath?: string | null | undefined;
    threshold: number;
}, {
    candidate?: {
        externalId?: string | null | undefined;
        id: string;
        name?: string | null | undefined;
        operatingStatus?: string | null | undefined;
        publicPath?: string | null | undefined;
        reason: string[];
        score: number;
        slug?: string | null | undefined;
        typeRecord?: "Business Line" | "Company" | "Fund" | "Government" | "Investment Firm" | "Nonprofit" | "Organization" | "Product" | "Service" | null | undefined;
    }[] | null | undefined;
    newsCandidate?: {
        externalId?: string | null | undefined;
        id: number;
        reason: string[];
        score: number;
        slug?: string | null | undefined;
    }[] | null | undefined;
    overridePath?: string | null | undefined;
    threshold: number;
}>>, z.ZodType<{
    availableOverrides: ("ATTACH_INACTIVE" | "REACTIVATE")[];
    slug: string;
    tagId: number;
}, {
    availableOverrides: ("ATTACH_INACTIVE" | "REACTIVATE")[];
    slug: string;
    tagId: number;
}, z.core.$ZodTypeInternals<{
    availableOverrides: ("ATTACH_INACTIVE" | "REACTIVATE")[];
    slug: string;
    tagId: number;
}, {
    availableOverrides: ("ATTACH_INACTIVE" | "REACTIVATE")[];
    slug: string;
    tagId: number;
}>>, z.ZodType<{
    conflictingArticleId: number;
    conflictingArticleSlug: string;
    conflictingArticleTitle: string;
}, {
    conflictingArticleId: number;
    conflictingArticleSlug: string;
    conflictingArticleTitle: string;
}, z.core.$ZodTypeInternals<{
    conflictingArticleId: number;
    conflictingArticleSlug: string;
    conflictingArticleTitle: string;
}, {
    conflictingArticleId: number;
    conflictingArticleSlug: string;
    conflictingArticleTitle: string;
}>>]>;
export type DomainConflictDetails = z.infer<typeof DomainConflictDetailsSchema>;
//# sourceMappingURL=conflict-details.d.ts.map