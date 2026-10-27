// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { ResearchAllowanceSchema } from "../research/allowance.js";
import { SharedDirectoryTypeSchema } from "../shared/directory-type.js";
const DirectoryExportSchemaDefinition = z.object({
    /** The shared monthly entityView allowance for company or investor rows, or personView allowance for person rows, after this export. */
    allowance: ResearchAllowanceSchema,
    column: z.array(z.string()),
    directory: SharedDirectoryTypeSchema,
    hasNext: z.boolean(),
    page: z.int(),
    row: z.array(z.array(z.string())),
    size: z.int(),
    totalElements: z.number().int(),
});
/**
 * A metered directory page with ordered headers and text cells; absent values are empty strings.
 *
 * @openapiSchema DirectoryExport
 * @endpoint POST /v1/directory/exports
 * @contractShape directory.export
 * @contractRole canonical
 */
export const DirectoryExportSchema = DirectoryExportSchemaDefinition;
//# sourceMappingURL=export.js.map