import { Challenge, NewChallenge, User } from "../_generated/graphql";

export interface IChallengeStorage {
  getChallenge(challengeId: string): Challenge;
  createChallenge(newChallengeArgs: NewChallenge): Challenge;
}

export interface IUserStorage {
  getUserById(userId: string): User;
  getUserByEmail(email: string): User;
}
