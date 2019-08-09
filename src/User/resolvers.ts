import { User } from "../_generated/graphql";

export default class UserResolver {
  static getAuthenticatedUser(): User {
    const user = {
      name: "TestName",
      email: "test@example.com",
      displayName: "TestDisplay"
    };
    return user;
  }
}
