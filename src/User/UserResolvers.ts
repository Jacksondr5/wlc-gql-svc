import { User } from "../_generated/graphql";
import { user } from "./UserData";

export default class UserResolver {
  static getAuthenticatedUser(): User {
    console.log(user);
    return user;
  }
}
