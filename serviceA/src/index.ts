import { ApolloServer } from 'apollo-server';
import { buildFederatedSchema } from '@apollo/federation';
import { gql } from 'apollo-server';

const typeDefs = gql`
  type Query {
    hello: String
  }
`;

const resolvers = {
  Query: {
    hello: () => 'Hello from Service A',
  },
};

const server = new ApolloServer({
  schema: buildFederatedSchema([{ typeDefs, resolvers }]),
});

server.listen({ port: 4001 }).then(({ url }) => {
  console.log(`🚀 Service A ready at ${url}`);
});

