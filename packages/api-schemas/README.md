# @aventurevc/api-schemas

Zod v4 schemas and TypeScript types for the aVenture API: companies, people,
funding rounds, investors, and news.

Calling the API requires an aVenture account. Free and paid plans both work;
[create an account](https://aventure.vc/sign-up), then create an API key in
[API Keys settings](https://aventure.vc/settings/api-keys).

```bash
npm install @aventurevc/api-schemas
```

## Example

```ts
import { EntityDetailSchema } from "@aventurevc/api-schemas/entity/detail";

const response = await fetch(
  "https://api.aventure.vc/v1/entities/lookup-exact?urlDomain=stripe.com",
  { headers: { Authorization: `Bearer ${process.env.AUTH_TOKEN}` } },
);
const stripe = EntityDetailSchema.parse(await response.json());
console.log(stripe.core.nameBrand);
```

## Documentation

- [API quickstart](https://docs.aventure.vc/quickstart)
- [API reference](https://docs.aventure.vc/api-reference)
