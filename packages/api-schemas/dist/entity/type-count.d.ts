import { z } from "zod/v4";
declare const EntityTypeCountSchemaDefinition: z.ZodObject<{
    totalCount: z.ZodNumber;
    typeRecord: z.ZodEnum<{
        "Business Line": "Business Line";
        Company: "Company";
        Fund: "Fund";
        Government: "Government";
        "Investment Firm": "Investment Firm";
        Nonprofit: "Nonprofit";
        Organization: "Organization";
        Product: "Product";
        Service: "Service";
    }>;
}, z.core.$strip>;
type EntityTypeCountDefinition = z.infer<typeof EntityTypeCountSchemaDefinition>;
/**
 * Visible entity count for one EntityType.
 *
 * @openapiSchema EntityTypeCount
 * @endpoint GET /v1/entities/counts
 * @contractShape entity.type-count
 * @contractRole canonical
 */
export declare const EntityTypeCountSchema: z.ZodType<EntityTypeCountDefinition>;
export type EntityTypeCount = z.infer<typeof EntityTypeCountSchema>;
export {};
//# sourceMappingURL=type-count.d.ts.map