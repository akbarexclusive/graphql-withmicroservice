"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_1 = require("apollo-server");
const gateway_1 = require("@apollo/gateway");
const gateway = new gateway_1.ApolloGateway({
    serviceList: [
        { name: 'serviceA', url: 'http://localhost:4001' },
        { name: 'serviceB', url: 'http://localhost:4002' },
        // Add other services here
    ],
});
const server = new apollo_server_1.ApolloServer({
    gateway,
    //subscriptions: false,
});
server.listen({ port: 4000 }).then(({ url }) => {
    console.log(`🚀 Gateway ready at ${url}`);
});
