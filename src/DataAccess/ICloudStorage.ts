import { Challenge, NewChallenge, User } from "../_generated/graphql";

export interface IUserStorage {
  getUserById(userId: string): User;
  getUserByEmail(email: string): User;
}
