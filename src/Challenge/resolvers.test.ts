import ChallengeResolvers from "./resolvers";

test("transforms source data properly", () => {
  const testUser = {
    name: "Test",
    email: "test@example.com",
    displayName: "test"
  };

  const testChallenge = {
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
