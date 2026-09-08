import { z } from "zod/v4";
declare const DatasourceFieldProvenanceSchemaDefinition: z.ZodObject<{
    actor: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        agent: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            chassis: z.ZodString;
            model: z.ZodString;
            modelFamily: z.ZodString;
        }, z.core.$strip>>>;
        displayName: z.ZodString;
        employeeDisplayName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        employeeUserId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        type: z.ZodEnum<{
            agent: "agent";
            employee: "employee";
        }>;
    }, z.core.$strip>>>;
    changedBy: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    changes: z.ZodArray<z.ZodType<{
        fieldName: string;
        newPresent: boolean;
        newValue?: string | null | undefined;
        oldPresent: boolean;
        oldValue?: string | null | undefined;
    }, unknown, z.core.$ZodTypeInternals<{
        fieldName: string;
        newPresent: boolean;
        newValue?: string | null | undefined;
        oldPresent: boolean;
        oldValue?: string | null | undefined;
    }, unknown>>>;
    effectiveAt: z.ZodISODateTime;
    entityId: z.ZodOptional<z.ZodNullable<z.ZodUUID>>;
    eventId: z.ZodUUID;
    id: z.ZodNumber;
    operation: z.ZodEnum<{
        delete: "delete";
        insert: "insert";
        update: "update";
    }>;
    personId: z.ZodOptional<z.ZodNullable<z.ZodUUID>>;
    recordId: z.ZodString;
    source: z.ZodObject<{
        actorType: z.ZodOptional<z.ZodEnum<{
            agent: "agent";
            employee: "employee";
        }>>;
        agentChassis: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        agentModel: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        sourceDetail: z.ZodString;
        sourceProvider: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        sourceProviderId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        sourceProviderSlug: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        sourceType: z.ZodEnum<{
            api: "api";
            aventureStaff: "aventureStaff";
            blogArticle: "blogArticle";
            firstPartyWebsite: "firstPartyWebsite";
            import: "import";
            llm: "llm";
            manual: "manual";
            newsArticle: "newsArticle";
            relatedPartyWebsite: "relatedPartyWebsite";
            requestChangeForm: "requestChangeForm";
            thirdPartyWebsite: "thirdPartyWebsite";
        }>;
    }, z.core.$strip>;
    status: z.ZodEnum<{
        confirmed: "confirmed";
        disputedAnonymous: "disputedAnonymous";
        disputedFirstParty: "disputedFirstParty";
        disputedRelatedParty: "disputedRelatedParty";
        disputedThirdParty: "disputedThirdParty";
        unconfirmed: "unconfirmed";
    }>;
    tableName: z.ZodEnum<{
        deployTarget: "deployTarget";
        entity: "entity";
        entityAddressJoin: "entityAddressJoin";
        entityClassificationJoin: "entityClassificationJoin";
        entityDetail: "entityDetail";
        entityPersonJoin: "entityPersonJoin";
        entityRelationship: "entityRelationship";
        entityResearchSnippets: "entityResearchSnippets";
        entityTypeJoin: "entityTypeJoin";
        fundraiseTransaction: "fundraiseTransaction";
        fundraiseTransactionInvestorJoin: "fundraiseTransactionInvestorJoin";
        newsArticle: "newsArticle";
        newsArticleEntityJoin: "newsArticleEntityJoin";
        newsArticlePersonJoin: "newsArticlePersonJoin";
        person: "person";
        personAddressJoin: "personAddressJoin";
        text: "text";
        urlLink: "urlLink";
    }>;
}, z.core.$strip>;
type DatasourceFieldProvenanceDefinition = z.infer<typeof DatasourceFieldProvenanceSchemaDefinition>;
/**
 * Full audit row from research.res_provenance_event
 *
 * @openapiSchema DatasourceFieldProvenance
 * @endpoint GET /v1/provenance/history
 * @endpoint GET /v1/provenance/{provenanceId}
 * @usedBySchema PageDatasourceFieldProvenanceSchema
 * @contractShape datasource.field-provenance
 * @contractRole canonical
 */
export declare const DatasourceFieldProvenanceSchema: z.ZodType<DatasourceFieldProvenanceDefinition>;
export type DatasourceFieldProvenance = z.infer<typeof DatasourceFieldProvenanceSchema>;
export {};
//# sourceMappingURL=field-provenance.d.ts.map