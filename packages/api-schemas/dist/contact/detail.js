// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { EntityPersonOwnerSchema } from "../entity/person-owner.js";
const ContactDetailSchemaDefinition = z.object({
    /** Kind of contact value: an email address or a phone number. */
    contactType: z.enum(["EMAIL", "PHONE"]),
    /** Whether a contact reaches its owner personally or at work. PERSONAL: a personal mailbox or phone, always for a public email service domain (gmail.com, outlook.com, icloud.com, ...). WORK: an address at a business, government, or non-profit domain, always for a government domain, by default for a company's website domain. UNDETERMINED: stated only after checking the domain and finding no evidence either way, never as a shortcut. The server applies PERSONAL and WORK itself when its rule decides. */
    contactUsage: z.enum(["PERSONAL", "WORK", "UNDETERMINED"]),
    /** Stored value: an email trimmed and lower-cased, or a phone reduced to digits with an optional leading +. */
    contactValue: z.string(),
    createdAt: z.iso.datetime({ offset: true }),
    /** Contact detail id. */
    id: z.int(),
    /** Whether this is the owner's primary contact of its type. */
    isPrimary: z.boolean(),
    /** The company or person this contact reaches. */
    owner: EntityPersonOwnerSchema,
    /** True when the email is on the sales-lead opt-out list: never contact it for outreach or marketing. Read live from the opt-out list, so an opt-out applies at once. Always false for a phone. */
    suppressed: z.boolean(),
    updatedAt: z.iso.datetime({ offset: true }),
});
/**
 * One email address or phone number of a company or person. A signed-in subscriber reads the contacts of a publicly visible record through the metered list routes; a caller who may edit the owner also sees opted-out (suppressed) rows.
 *
 * @openapiSchema ContactDetail
 * @endpoint GET /v1/entities/{entityId}/contact-details
 * @endpoint GET /v1/people/{personId}/contact-details
 * @contractShape contact.detail
 * @contractRole canonical
 */
export const ContactDetailSchema = ContactDetailSchemaDefinition;
//# sourceMappingURL=detail.js.map