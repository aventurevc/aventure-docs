import { z } from "zod/v4";
/**
 * The unmet campus identity proof; supply that evidence before retrying.
 *
 * @openapiSchema IdentificationCampusRefusal
 * @standardProblemResponse
 * @usedBySchema ProblemDetailSchema
 * @contractShape identification.campus-refusal
 * @contractRole canonical
 */
export declare const IdentificationCampusRefusalSchema: z.ZodUnion<readonly [z.ZodEnum<{
    NAME_NOT_DECLARED: "NAME_NOT_DECLARED";
    REGISTRY_CONTACT_MISSING: "REGISTRY_CONTACT_MISSING";
    REGISTRY_CONTACT_NOT_STATED: "REGISTRY_CONTACT_NOT_STATED";
    SITE_UNREADABLE: "SITE_UNREADABLE";
}>, z.ZodString]> & {
    enum: {
        NAME_NOT_DECLARED: "NAME_NOT_DECLARED";
        REGISTRY_CONTACT_MISSING: "REGISTRY_CONTACT_MISSING";
        REGISTRY_CONTACT_NOT_STATED: "REGISTRY_CONTACT_NOT_STATED";
        SITE_UNREADABLE: "SITE_UNREADABLE";
    };
};
export type IdentificationCampusRefusal = z.infer<typeof IdentificationCampusRefusalSchema>;
//# sourceMappingURL=campus-refusal.d.ts.map