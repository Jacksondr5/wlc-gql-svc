import { Challenge, NewChallenge } from "../_generated/graphql";
import ChallengeStorage, {
  IChallengeStorage
} from "../DataAccess/ChallengeStorage";
import { UserInputError } from "apollo-server";

export default class ChallengeResolvers {
  private storage: IChallengeStorage;

  constructor(storage: IChallengeStorage) {
    this.storage = storage;
  }

  getChallenge(challengeId: string): Challenge {
    return this.storage.getChallenge(challengeId);
  }

  createChallenge(newChallengeArgs: NewChallenge) {
    return this.storage.createChallenge(newChallengeArgs, {
      totalPrizeMoney: 0
    });
  }

  deleteChallenge(challengeId: string): Promise<void> {
    if (this.getChallenge(challengeId) == null) {
      throw new UserInputError("Challenge not found");
    }
    return this.storage.deleteChallenge(challengeId);
  }
}
