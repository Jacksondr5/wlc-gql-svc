import { Challenge, MutationCreateChallengeArgs } from "../_generated/graphql";

export default class ChallengeResolvers {
  static createChallengeMutation(args: MutationCreateChallengeArgs): Challenge {
    const user = {
      name: "Test",
      email: "test@example.com",
      displayName: "test"
    };

    const challenge = {
      name: args.newChallenge.name,
      startDate: args.newChallenge.startDate,
      endDate: args.newChallenge.endDate,
      participants: [user],
      totalPrizeMoney: 0
    };
    return challenge;
  }
}
