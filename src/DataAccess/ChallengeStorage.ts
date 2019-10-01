import { db } from "./Firebase";

export interface IChallengeStorage {
  getChallenge(challengeId: string): Promise<DBChallenge>;
  createChallenge(newDBChallenge: NewDBChallenge): Promise<DBChallenge>;
  deleteChallenge(challengeId: string): Promise<void>;
}

export interface NewDBChallenge {
  endDate: string;
  entryFee: number;
  name: string;
  startDate: string;
  totalPrizeMoney: number;
}

export interface DBChallenge extends NewDBChallenge {
  id: string;
}

export class ChallengeStorage implements IChallengeStorage {
  challengeCollection: FirebaseFirestore.CollectionReference;
  constructor() {
    this.challengeCollection = db.collection("challenges");
  }

  async getChallenge(challengeId: string): Promise<DBChallenge> {
    const challengeDoc = await this.challengeCollection.doc(challengeId).get();
    return challengeDoc.data() as DBChallenge;
  }

  //TODO: find a more elegant way to handle the new args
  async createChallenge(newDBChallenge: DBChallenge): Promise<DBChallenge> {
    const newChallengeDoc = await db
      .collection("challenges")
      .add(newDBChallenge);
    return { id: newChallengeDoc.id, ...newDBChallenge };
  }

  async deleteChallenge(challengeId: string): Promise<void> {
    this.challengeCollection.doc(challengeId).delete();
  }
}
