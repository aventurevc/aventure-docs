// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { EntityPersonOwnerSchema } from "../entity/person-owner.js";
const ResolvedHandleSchemaDefinition = z.object({
    /** Which identifier kind matched the token. */
    matchedBy: z.enum(["PUBLIC_ID", "UUID", "EXTERNAL_ID", "SLUG"]),
    /** Canonical entity/person owner matched by the token. */
    owner: EntityPersonOwnerSchema,
    /** Canonical stable public handle of the resolved subject; null on rows still awaiting handle backfill. */
    publicId: z.string().nullish(),
    /** Canonical slug of the resolved subject. */
    slug: z
        .string()
        .regex(/^[a-z0-9_-]+$/)
        .max(255)
        .nullish(),
});
/**
 * Canonical subject a universal-lookup token resolved to. Exactly one of owner.entityId / owner.personId is set. Echoes the subject's canonical public handle and slug. Fetch display fields with GET /v1/entities/detail or GET /v1/people/detail.
 *
 * @openapiSchema ResolvedHandle
 * @endpoint GET /v1/resolve/{token}
 * @contractShape resolved.handle
 * @contractRole canonical
 */
export const ResolvedHandleSchema = ResolvedHandleSchemaDefinition;
//# sourceMappingURL=handle.js.map