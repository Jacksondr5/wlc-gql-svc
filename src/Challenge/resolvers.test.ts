import ChallengeResolvers from "./resolvers";
import {
  Challenge,
  User,
  NewChallenge,
  MutationCreateChallengeArgs
} from "../_generated/graphql";

test("transforms source data properly", () => {
  const createChallengeArgs: MutationCreateChallengeArgs = {
    newChallenge: {
      name: "testName",
      startDate: "some date",
      endDate: "some other date",
      entryFee: 40
    }
  };

  const testUser: User = {
    name: "Test",
    email: "test@example.com",
    displayName: "test"
  };

  const testChallenge: Challenge = {
    name: createChallengeArgs.newChallenge.name,
    startDate: createChallengeArgs.newChallenge.startDate,
    endDate: createChallengeArgs.newChallenge.endDate,
    participants: [testUser],
    totalPrizeMoney: 0
  };

  expect(
    ChallengeResolvers.createChallengeMutation(createChallengeArgs)
  ).toStrictEqual(testChallenge);
});
