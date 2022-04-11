const { ApolloServer, gql } = require('apollo-server-lambda');
const { makeExecutableSchema } = require('@graphql-tools/schema');

const { typeDefs } = require('./schema');
const { Query } = require('./resolvers/Query');
const { Product } = require('./resolvers/Product');
const { Category } = require('./resolvers/Category');
const { Mutation } = require('./resolvers/Mutation');
const { db } = require('./db');

const resolvers = {
  Query,
  Product,
  Category,
  Mutation
}

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
})
const server = new ApolloServer({
  schema,
  context: {
    db
  }
});


exports.graphqlHandler = server.createHandler();
