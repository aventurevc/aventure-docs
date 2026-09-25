import { z } from "zod/v4";
/**
 * Media slot on an owner record, addressed by the {mediaType} path segment.
 *
 * @openapiSchema MediaSlot
 * @endpoint GET /v1/entities/{entityId}/media/{mediaType}
 * @endpoint GET /v1/news/{newsId}/media/{mediaType}
 * @endpoint GET /v1/people/{personId}/media/{mediaType}
 * @contractShape media.slot
 * @contractRole canonical
 */
export declare const MediaSlotSchema: z.ZodEnum<{
    logo: "logo";
    photo: "photo";
    thumbnail: "thumbnail";
}>;
export type MediaSlot = z.infer<typeof MediaSlotSchema>;
//# sourceMappingURL=slot.d.ts.map