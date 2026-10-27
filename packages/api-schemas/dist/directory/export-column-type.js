// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const DirectoryExportColumnTypeSchemaKnownMembers = z.enum([
    "NAME",
    "AVENTURE_URL",
    "STAGE",
    "ACCELERATOR",
    "BATCH",
    "FOUNDED",
    "CUSTOMER_TYPE",
    "REVENUE_TYPE",
    "TAGS",
    "SUMMARY",
    "HQ",
    "LAST_ROUND",
    "DISCLOSED_FUNDING",
    "EMPLOYEES",
    "MAIN_PRODUCTS",
    "OPERATING_STATUS",
    "MODEL_TYPE",
    "OWNERSHIP_TYPE",
    "TECHNOLOGY_USED",
    "INVESTOR_TYPE",
    "SECTOR",
    "TITLE",
    "CURRENT_COMPANY",
    "LOCATION",
    "LAST_UPDATE",
]);
/**
 * Core export column; readers accept future columns.
 *
 * @openapiSchema DirectoryExportColumnType
 * @endpoint POST /v1/directory/exports
 * @usedBySchema DirectoryExportMutationSchema
 * @contractShape directory.export-column-type
 * @contractRole canonical
 */
export const DirectoryExportColumnTypeSchema = Object.assign(z.union([DirectoryExportColumnTypeSchemaKnownMembers, z.string()]), { enum: DirectoryExportColumnTypeSchemaKnownMembers.enum });
//# sourceMappingURL=export-column-type.js.map