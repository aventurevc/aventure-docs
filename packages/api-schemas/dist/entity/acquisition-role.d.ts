import { z } from "zod/v4";
/**
 * Role of the path entity in the acquisition. Defaults to acquired (the company that was bought). Pass acquirer to list acquisitions made by the path entity, or all to list both sides in one page.
 *
 * @openapiSchema EntityAcquisitionRole
 * @endpoint GET /v1/entities/{entityId}/acquisitions
 * @endpoint GET /v1/entities/{entityId}/acquisitions/{relationshipId}
 * @contractShape entity.acquisition-role
 * @contractRole canonical
 */
export declare const EntityAcquisitionRoleSchema: z.ZodEnum<{
    acquired: "acquired";
    acquirer: "acquirer";
    all: "all";
}>;
export type EntityAcquisitionRole = z.infer<typeof EntityAcquisitionRoleSchema>;
//# sourceMappingURL=acquisition-role.d.ts.map