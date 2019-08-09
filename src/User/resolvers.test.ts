import { User } from "../_generated/graphql";
import UserResolver from "./resolvers";

describe("getAuthenticatedUser", () => {
  test("transforms source data properly", () => {
    const testUser: User = {
      name: "TestName",
      email: "test@example.com",
      displayName: "TestDisplay"
    };
    expect(UserResolver.getAuthenticatedUser()).toStrictEqual(testUser);
  });
});
