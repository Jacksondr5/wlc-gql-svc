import { Challenge } from "../_generated/graphql";

export default class ChallengeResolvers {
  static createChallengeMutation(): Challenge {
    const user = {
      name: "Test",
      email: "test@example.com",
      displayName: "test"
    };

    const challenge = {
      name: "test",
      startDate: "ewrg",
      endDate: "sdfg",
      participants: [user],
      totalPrizeMoney: 3456
    };
    return challenge;
  }
}
