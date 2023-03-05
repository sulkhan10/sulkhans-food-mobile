const { ApolloServer } = require("@apollo/server");
const { startStandaloneServer } = require("@apollo/server/standalone");
const axios = require('axios')
const {typeDefs : itemTypeDefs,resolvers : itemResolvers} = require('./schema/itemSchema')
const {typeDefs : userTypeDefs,resolvers : userResolvers} = require('./schema/userSchema')
const server = new ApolloServer({
  typeDefs:
  [itemTypeDefs,userTypeDefs],
  resolvers:
  [itemResolvers,userResolvers],introspection: true 
});

let startServer = async () => {
  const { url } = await startStandaloneServer(server, {
    listen: { port: process.env.PORT || 4000 },
  });
  console.log(`🚀  Server ready at: ${url}`);
};

startServer();
