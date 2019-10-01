import {
  IChallengeStorage,
  DBChallenge,
  NewDBChallenge
} from "../ChallengeStorage";
import { Challenge, NewChallenge } from "../../_generated/graphql";

export class TestChallengeStorage implements IChallengeStorage {
  public testNewChallenge: NewChallenge = {
    name: "test",
    startDate: "01/01/2019",
    endDate: "01/01/2020",
    entryFee: 5
  };
  public testChallenge: Challenge = {
    id: "someId",
    totalPrizeMoney: 0,
    ...this.testNewChallenge
  };

  async getChallenge(challengeId: string): Promise<DBChallenge> {
    return challengeId === this.testChallenge.id ? this.testChallenge : null;
  }
  async createChallenge(newDBChallenge: NewDBChallenge): Promise<DBChallenge> {
    return { id: this.testChallenge.id, ...this.testChallenge };
  }
  async deleteChallenge(challengeId: string): Promise<void> {
    return;
  }
}
