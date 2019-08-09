import ChallengeResolvers from "./resolvers";
import { Challenge, User } from "../generated/graphql";

test("transforms source data properly", () => {
  const testUser: User = {
    name: "Test",
    email: "test@example.com",
    displayName: "test"
  };

  const testChallenge: Challenge = {
    name: "test",
    startDate: "ewrg",
    endDate: "sdfg",
    participants: [testUser],
    totalPrizeMoney: 3456
  };

  expect(ChallengeResolvers.createChallengeMutation()).toStrictEqual(
    testChallenge
  );
});
