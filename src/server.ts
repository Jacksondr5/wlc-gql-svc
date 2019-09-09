import { ApolloServer } from "apollo-server";
import { importSchema } from "graphql-import";
import { Resolvers } from "./_generated/graphql";
import ChallengeResolvers from "./Challenge/ChallengeResolvers";
import UserResolvers from "./User/UserResolvers";
import { Firestore } from "@google-cloud/firestore";

const db = new Firestore({
  projectId: "",
  keyFilename: process.env["GOOGLE_APPLICATION_CREDENTIALS"]
});
const resolvers: Resolvers = {
  Query: {
    authenticatedUser: () => UserResolvers.getAuthenticatedUser()
  },
  Mutation: {
    createChallenge: (parent, args, context, info) =>
      ChallengeResolvers.createChallengeMutation(args)
  }
};
const typeDefs = importSchema("./dist/schema.graphql");
const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
