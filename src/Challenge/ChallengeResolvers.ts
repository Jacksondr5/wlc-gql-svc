import { Challenge, NewChallenge } from "../_generated/graphql";
import {
  NewDBChallenge,
  IChallengeStorage
} from "../DataAccess/ChallengeStorage";
import { UserInputError } from "apollo-server";

export default class ChallengeResolvers {
  private readonly storage: IChallengeStorage;

  constructor(storage: IChallengeStorage) {
    this.storage = storage;
  }

  async getChallenge(challengeId: string): Promise<Challenge> {
    return this.storage.getChallenge(challengeId);
  }

  async createChallenge(newChallengeArgs: NewChallenge): Promise<Challenge> {
    const newStorageChallenge: NewDBChallenge = {
      ...newChallengeArgs,
      totalPrizeMoney: 0
    };
    //Being more explicit than necessary since at some point soon we'll
    //need to do more processing here anyway
    const newChallenge: Challenge = await this.storage.createChallenge(
      newStorageChallenge
    );
    return newChallenge;
  }

  async deleteChallenge(challengeId: string): Promise<boolean> {
    if (this.getChallenge(challengeId) == null) {
      throw new UserInputError("Challenge not found");
    }
    this.storage.deleteChallenge(challengeId);
    return true;
  }
}
