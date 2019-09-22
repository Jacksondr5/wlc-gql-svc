import { Challenge, NewChallenge } from "../_generated/graphql";
import { db } from "./Firebase";

export interface IChallengeStorage {
  getChallenge(challengeId: string): Challenge;
  createChallenge(
    newChallengeArgs: NewChallenge,
    additionalArgs: { totalPrizeMoney: number }
  ): Promise<Challenge>;
  deleteChallenge(challengeId: string): Promise<void>;
}

export default class ChallengeStorage implements IChallengeStorage {
  challengeCollection: FirebaseFirestore.CollectionReference;
  constructor() {
    this.challengeCollection = db.collection("challenges");
  }

  getChallenge(challengeId: string): Challenge {
    throw new Error("Method not implemented.");
  }

  //TODO: find a more elegant way to handle the new args
  async createChallenge(
    newChallengeArgs: NewChallenge,
    additionalArgs: { totalPrizeMoney: number }
  ): Promise<Challenge> {
    const newChallengeDoc = await db
      .collection("challenges")
      .add({ newChallengeArgs, ...additionalArgs });
    const newChallenge: Challenge = {
      id: newChallengeDoc.id,
      ...additionalArgs,
      ...newChallengeArgs
    };
    return newChallenge;
  }

  async deleteChallenge(challengeId: string): Promise<void> {
    this.challengeCollection.doc(challengeId).delete();
  }
}
