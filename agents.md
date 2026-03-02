# Conekta Node SDK

## Description

Official Node.js SDK for the Conekta Payments API. Auto-generated client library from an OpenAPI specification that enables integration with payments, subscriptions, BNPL, SPEI transfers, credit cards, and payouts.

- **npm package**: `conekta`
- **Version**: 8.0.0
- **API version**: 2.2.0
- **License**: MIT
- **Node.js**: >= 18

## Tech Stack

| Category | Technology |
|---|---|
| Language | TypeScript 5.4+ |
| Runtime | Node.js >= 18 |
| HTTP Client | Axios 1.13.6 |
| Build | tsc + ttypescript |
| Tests | Jest 30.2 + ts-jest |
| Mocking | Mockoon 6.0.1 |
| Code Gen | OpenAPI Generator v7.20.0 |
| CI/CD | GitHub Actions |

## Project Structure

```
conekta-node/
├── api/                  # 25 API classes (auto-generated)
├── model/                # 183 data models (auto-generated)
├── examples/             # Usage examples
├── __tests__/            # Tests (*.spec.ts)
├── dist/                 # Build output (CommonJS + ESM)
├── cert/                 # CA bundle for HTTPS
├── .github/workflows/    # CI/CD
│   ├── nodejs.yml        # Tests (Node 18, 20, 22, 24)
│   └── npmpublish.yml    # npm publishing
├── index.ts              # Main entry point
├── configuration.ts      # Configuration class
├── base.ts               # BaseAPI + RequiredError
├── common.ts             # Shared utilities
├── api.ts                # API re-exports
├── package.json
├── tsconfig.json          # CommonJS config
├── tsconfig.esm.json      # ESM config
├── jest.config.js
├── Makefile
├── config-node.json       # OpenAPI generator config
└── docker-compose.yml     # Mock server for tests
```

## Available APIs (25)

| API | Domain |
|---|---|
| AntifraudApi | Antifraud rules |
| ApiKeysApi | API key management |
| BalancesApi | Balance inquiries |
| ChargesApi | Charges and refunds |
| CompaniesApi | Company accounts |
| CustomersApi | Customer CRUD |
| DiscountsApi | Coupons and discounts |
| EventsApi | Webhook events |
| LogsApi | Activity logs |
| OrdersApi | Payment orders |
| PaymentLinkApi | Payment links |
| PaymentMethodsApi | Payment methods |
| PayoutOrdersApi | Payout orders |
| PlansApi | Subscription plans |
| ProductsApi | E-commerce products |
| ShippingContactsApi | Shipping contacts |
| ShippingsApi | Shipments |
| SubscriptionsApi | Recurring subscriptions |
| SubscriptionsCustomerPortalApi | Customer portal for subscriptions |
| TaxesApi | Taxes |
| TokensApi | Payment tokenization |
| TransactionsApi | Transaction history |
| TransfersApi | Transfers |
| WebhookKeysApi | Webhook keys |
| WebhooksApi | Webhook endpoints |

## Basic Usage

```typescript
import { Configuration, CustomersApi } from 'conekta';

const config = new Configuration({ accessToken: 'key_xxxxxxxx' });
const api = new CustomersApi(config);

const response = await api.createCustomer({
  name: 'John Doe',
  email: 'john@example.com',
  phone: '+5218181818181'
});

console.log(response.data.id);
```

## Authentication

- Bearer token via `Configuration({ accessToken: "key_xxxxx" })`
- AWS v4 Signature via `Configuration({ awsv4: { options, credentials } })`
- Automatic headers:
  - `User-Agent: Conekta/v2 NodeBindings/8.0.0`
  - `Accept: application/vnd.conekta-v2.2.0+json`

## Distribution

| Format | Entry Point |
|---|---|
| CommonJS | `dist/index.js` |
| ESM | `dist/esm/index.js` |
| Types | `dist/index.d.ts` |

## Scripts

```bash
npm run build     # Compile TS to CommonJS + ESM
npm run test      # Jest with coverage
npm run clean     # Clean node_modules, dist, coverage
```

## Makefile

```bash
make test         # Run tests
make node         # Regenerate code from OpenAPI spec
```

## Tests

- Framework: Jest + ts-jest
- Mock server: Mockoon (API mock on localhost:3000)
- Files: `__tests__/*.spec.ts`
- CI matrix: Node 18, 20, 22, 24

### Running Tests Locally

```bash
# Start mock server
docker run -d -p 3000:3000 mockoon/cli:latest -d https://raw.githubusercontent.com/conekta/openapi/main/mocks/conekta_api.json --port 3000

# Run tests
BASE_PATH=http://localhost:3000 npm test
```

## Code Generation

Code in `api/` and `model/` is **auto-generated** from the OpenAPI specification. Do not edit manually.

- Spec: `https://raw.githubusercontent.com/conekta/openapi/main/_build/api.yaml`
- Generator: OpenAPI Generator v7.20.0
- Config: `config-node.json`
- Command: `make node`

## CI/CD

### Test Workflow (`nodejs.yml`)
- Trigger: push/PR to main/master
- Matrix: Node 18, 20, 22, 24
- Starts Mockoon as mock server
- Runs tests with `BASE_PATH=http://localhost:3000`

### Publish Workflow (`npmpublish.yml`)
- Trigger: GitHub release creation
- Verifies release creator is a code owner
- Detects stable vs pre-release version
- Publishes to npm with `latest` or `beta` tag
