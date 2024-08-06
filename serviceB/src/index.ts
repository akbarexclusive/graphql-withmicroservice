import { ApolloServer } from 'apollo-server';
import { buildFederatedSchema } from '@apollo/federation';
import { gql } from 'apollo-server';

const typeDefs = gql`
  type Query {
    hi: String
  }
`;

const resolvers = {
  Query: {
    hi: () => 'Hi from Service B',
  },
};

const server = new ApolloServer({
  schema: buildFederatedSchema([{ typeDefs, resolvers }]),
});

server.listen({ port: 4002 }).then(({ url }) => {
  console.log(`🚀 Service B ready at ${url}`);
});

