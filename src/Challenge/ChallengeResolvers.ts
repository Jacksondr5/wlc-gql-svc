import {
  Challenge,
  MutationCreateChallengeArgs,
  UserChallengeStatus,
  User,
  UserChallenge,
  NewChallenge
} from "../_generated/graphql";
import { IChallengeStorage } from "../DataAccess/ICloudStorage";
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
    return this.storage.createChallenge(newChallengeArgs);
  }
}
