import { z } from "zod/v4";
/**
 * Core export column; readers accept future columns.
 *
 * @openapiSchema DirectoryExportColumnType
 * @endpoint POST /v1/directory/exports
 * @usedBySchema DirectoryExportMutationSchema
 * @contractShape directory.export-column-type
 * @contractRole canonical
 */
export declare const DirectoryExportColumnTypeSchema: z.ZodUnion<readonly [z.ZodEnum<{
    ACCELERATOR: "ACCELERATOR";
    AVENTURE_URL: "AVENTURE_URL";
    BATCH: "BATCH";
    CURRENT_COMPANY: "CURRENT_COMPANY";
    CUSTOMER_TYPE: "CUSTOMER_TYPE";
    DISCLOSED_FUNDING: "DISCLOSED_FUNDING";
    EMPLOYEES: "EMPLOYEES";
    FOUNDED: "FOUNDED";
    HQ: "HQ";
    INVESTOR_TYPE: "INVESTOR_TYPE";
    LAST_ROUND: "LAST_ROUND";
    LAST_UPDATE: "LAST_UPDATE";
    LOCATION: "LOCATION";
    MAIN_PRODUCTS: "MAIN_PRODUCTS";
    MODEL_TYPE: "MODEL_TYPE";
    NAME: "NAME";
    OPERATING_STATUS: "OPERATING_STATUS";
    OWNERSHIP_TYPE: "OWNERSHIP_TYPE";
    REVENUE_TYPE: "REVENUE_TYPE";
    SECTOR: "SECTOR";
    STAGE: "STAGE";
    SUMMARY: "SUMMARY";
    TAGS: "TAGS";
    TECHNOLOGY_USED: "TECHNOLOGY_USED";
    TITLE: "TITLE";
}>, z.ZodString]> & {
    enum: {
        ACCELERATOR: "ACCELERATOR";
        AVENTURE_URL: "AVENTURE_URL";
        BATCH: "BATCH";
        CURRENT_COMPANY: "CURRENT_COMPANY";
        CUSTOMER_TYPE: "CUSTOMER_TYPE";
        DISCLOSED_FUNDING: "DISCLOSED_FUNDING";
        EMPLOYEES: "EMPLOYEES";
        FOUNDED: "FOUNDED";
        HQ: "HQ";
        INVESTOR_TYPE: "INVESTOR_TYPE";
        LAST_ROUND: "LAST_ROUND";
        LAST_UPDATE: "LAST_UPDATE";
        LOCATION: "LOCATION";
        MAIN_PRODUCTS: "MAIN_PRODUCTS";
        MODEL_TYPE: "MODEL_TYPE";
        NAME: "NAME";
        OPERATING_STATUS: "OPERATING_STATUS";
        OWNERSHIP_TYPE: "OWNERSHIP_TYPE";
        REVENUE_TYPE: "REVENUE_TYPE";
        SECTOR: "SECTOR";
        STAGE: "STAGE";
        SUMMARY: "SUMMARY";
        TAGS: "TAGS";
        TECHNOLOGY_USED: "TECHNOLOGY_USED";
        TITLE: "TITLE";
    };
};
export type DirectoryExportColumnType = z.infer<typeof DirectoryExportColumnTypeSchema>;
//# sourceMappingURL=export-column-type.d.ts.map