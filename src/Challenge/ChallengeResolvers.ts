import {
  Challenge,
  MutationCreateChallengeArgs,
  UserChallengeStatus,
  User,
  UserChallenge
} from "../_generated/graphql";
import { challenge } from "./ChallengeData";

export default class ChallengeResolvers {
  static createChallengeMutation(args: MutationCreateChallengeArgs): Challenge {
    return challenge;
  }
}
