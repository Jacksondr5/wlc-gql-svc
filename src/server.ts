import { ApolloServer } from "apollo-server";
import { importSchema } from "graphql-import";
import { Resolvers } from "./_generated/graphql";
import ChallengeResolvers from "./Challenge/ChallengeResolvers";
import UserResolvers from "./User/UserResolvers";
import ChallengeStorage from "./DataAccess/ChallengeStorage";
import * as dotenv from "dotenv";

//Import config vars from .env file
dotenv.config();

//Initialize resolvers
//TODO: fine a better way to do this
const challengeResolvers = new ChallengeResolvers(new ChallengeStorage());

const resolvers: Resolvers = {
  Query: {
    // authenticatedUser: () => UserResolvers.getAuthenticatedUser()
  },
  Mutation: {
    createChallenge: (parent, args, context, info) =>
      challengeResolvers.createChallenge(args.newChallenge)
  }
};
const typeDefs = importSchema("./dist/schema.graphql");
const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
