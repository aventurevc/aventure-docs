// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const SystemBuildDetailSchemaDefinition = z.object({
    /** Artifact identifier */
    artifact: z.string().nullish(),
    /** Group identifier */
    group: z.string().nullish(),
    /** Project name */
    name: z.string().nullish(),
    /** Deployed Git commit revision */
    revision: z.string().nullish(),
    /** Build timestamp */
    time: z.iso.datetime({ offset: true }).nullish(),
    /** Project version */
    version: z.string().nullish(),
});
/**
 * Application build metadata
 *
 * @openapiSchema SystemBuildDetail
 * @endpoint GET /info
 * @usedBySchema SystemBuildSchema
 * @contractShape system.system-build-detail
 * @contractRole canonical
 */
export const SystemBuildDetailSchema = SystemBuildDetailSchemaDefinition;
//# sourceMappingURL=system-build-detail.js.map