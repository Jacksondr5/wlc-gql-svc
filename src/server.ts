import { ApolloServer } from "apollo-server";
import { importSchema } from "graphql-import";
import { Resolvers } from "./_generated/graphql";
import ChallengeResolvers from "./Challenge/resolvers";
import UserResolvers from "./User/resolvers";

const resolvers: Resolvers = {
  Query: {
    authenticatedUser: () => UserResolvers.getAuthenticatedUser()
  },
  Mutation: {
    createChallenge: () => ChallengeResolvers.createChallengeMutation()
  }
};
const typeDefs = importSchema("./dist/schema.graphql");
const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
