import { Challenge, NewChallenge } from "../_generated/graphql";

export interface ICloudStorage {
  getChallenge(challengeId: string): Challenge;
  createChallenge(newChallengeArgs: NewChallenge): Challenge;
}
