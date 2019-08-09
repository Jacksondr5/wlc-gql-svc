import { ApolloServer } from "apollo-server";
import { importSchema } from "graphql-import";
import { Resolvers } from "./generated/graphql";
import ChallengeResolvers from "./Challenge/resolvers";

const user = {
  name: "Test",
  email: "test@example.com",
  displayName: "test"
};

const resolvers: Resolvers = {
  Query: {
    authenticatedUser: () => user
  },
  Mutation: {
    createChallenge: (root, args, context) =>
      ChallengeResolvers.createChallengeMutation()
  }
};
const typeDefs = importSchema("./dist/schema.graphql");
const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
