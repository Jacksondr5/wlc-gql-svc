import {
  Challenge,
  UserChallenge,
  UserChallengeStatus
} from "../_generated/graphql";
import { user } from "../User/UserData";

export const challenge: Challenge = {
  name: "test name",
  startDate: "start date",
  endDate: "end date",
  totalPrizeMoney: 0
};

export const userChallenge: UserChallenge = {
  //   user,
  challenge,
  status: UserChallengeStatus.Pending
};
challenge.participants = [userChallenge];
