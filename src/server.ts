// const { ApolloServer, gql } = require('apollo-server');
import { ApolloServer } from 'apollo-server';
import typeDefs from './typeDefs';

const user = {
  name: 'Test',
  email: 'test@example.com',
  displayName: 'test',  
};

// Resolvers define the technique for fetching the types in the
// schema.  We'll retrieve books from the "books" array above.
const resolvers = {
  Query: {
    authenticatedUser: () => user
  },
};

// In the most basic sense, the ApolloServer can be started
// by passing type definitions (typeDefs) and the resolvers
// responsible for fetching the data for those types.
const server = new ApolloServer({ typeDefs, resolvers });

// This `listen` method launches a web-server.  Existing apps
// can utilize middleware options, which we'll discuss later.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});