# graphql-withmicroservice
To interact with different microservices using Apollo Server and TypeScript, leveraged Apollo Federation to create a unified GraphQL API

Certainly! Here’s a concise `README.md` with instructions for the example setup:

---

# Apollo Federation with TypeScript Example

This repository demonstrates how to set up Apollo Federation with TypeScript to interact with multiple microservices.

## Setup Instructions

### 1. Service A

1. Navigate to the `serviceA` directory:
   ```bash
   cd serviceA
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the Service A server:
   ```bash
   npx tsc && node dist/index.js
   ```

### 2. Service B

1. Navigate to the `serviceB` directory:
   ```bash
   cd serviceB
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the Service B server:
   ```bash
   npx tsc && node dist/index.js
   ```

### 3. Apollo Gateway

1. Navigate to the `gateway` directory:
   ```bash
   cd gateway
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the Apollo Gateway server:
   ```bash
   npx tsc && node dist/index.js
   ```

### Querying the API

With all services running, you can query the unified API via the Apollo Gateway at `http://localhost:4000`. For example, use a GraphQL client or Playground to execute:

```graphql
{
  hi
  hello
}
```

## Introspection and Playground

Introspection is enabled to explore the schema. GraphQL Playground is available at `http://localhost:4000` for interactive querying and schema exploration.

## License

MIT

---

Feel free to modify this README as needed!
