// const { ApolloServer, gql } = require('apollo-server');
import { ApolloServer } from "apollo-server";
import { importSchema } from "graphql-import";
import * as fs from "fs";

const user = {
  name: "Test",
  email: "test@example.com",
  displayName: "test"
};

const testChallenge = {
  name: "test",
  startDate: "ewrg",
  endDate: "sdfg",
  participants: [user],
  totalPrizeMoney: 3456
};

// Resolvers define the technique for fetching the types in the
// schema.  We'll retrieve books from the "books" array above.
const resolvers = {
  Query: {
    authenticatedUser: () => user
  },
  Mutation: {
    createChallenge: () => testChallenge
  }
};
const typeDefs = importSchema("./dist/schema.graphql");
// In the most basic sense, the ApolloServer can be started
// by passing type definitions (typeDefs) and the resolvers
// responsible for fetching the data for those types.
const server = new ApolloServer({ typeDefs, resolvers });

// This `listen` method launches a web-server.  Existing apps
// can utilize middleware options, which we'll discuss later.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
