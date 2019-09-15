import { User } from "../_generated/graphql";
import { IUserStorage } from "../DataAccess/ICloudStorage";

export default class UserResolver {
  private storage: IUserStorage;

  constructor(storage: IUserStorage) {
    this.storage = storage;
  }

  getUserById(userId: string): User {
    return this.storage.getUserById(userId);
  }

  getUserByEmail(email: string): User {
    return this.storage.getUserByEmail(email);
  }
}
