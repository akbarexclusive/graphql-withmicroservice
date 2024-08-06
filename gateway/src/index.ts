import { ApolloServer } from 'apollo-server';
import { ApolloGateway } from '@apollo/gateway';

const gateway = new ApolloGateway({
  serviceList: [
    { name: 'serviceA', url: 'http://localhost:4001' },
    { name: 'serviceB', url: 'http://localhost:4002' },
    // Add other services here
  ],
});

const server = new ApolloServer({
  gateway,
  //subscriptions: false,
});

server.listen({ port: 4000 }).then(({ url }) => {
  console.log(`🚀 Gateway ready at ${url}`);
});

