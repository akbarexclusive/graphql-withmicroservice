"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_1 = require("apollo-server");
const federation_1 = require("@apollo/federation");
const apollo_server_2 = require("apollo-server");
const typeDefs = (0, apollo_server_2.gql) `
  type Query {
    hello: String
  }
`;
const resolvers = {
    Query: {
        hello: () => 'Hello from Service A',
    },
};
const server = new apollo_server_1.ApolloServer({
    schema: (0, federation_1.buildFederatedSchema)([{ typeDefs, resolvers }]),
});
server.listen({ port: 4001 }).then(({ url }) => {
    console.log(`🚀 Service A ready at ${url}`);
});