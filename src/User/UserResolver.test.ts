import UserResolvers from "./UserResolvers";
import { User } from "../_generated/graphql";
import { IUserStorage } from "../DataAccess/ICloudStorage";

describe("UserResolver", () => {
  let _resolver: UserResolvers, testUser: User, testStorage: IUserStorage;
  beforeAll(() => {
    testUser = {
      id: "someId",
      firstName: "john",
      lastName: "smith",
      displayName: `john smith`,
      email: "test@example.com",
      friends: [],
      profilePicture: "https://happycats.com/cat1.jpg",
      options: {
        shouldRecieveEmailAlerts: true,
        shouldRecieveSMSAlerts: false,
        shouldRevieveWeeklyReports: true,
        shouldRevieveWeighInReminders: true,
        shouldSendPWAAlert: false,
        hasDownloadedPWA: true
      }
    };
    testStorage = {
      getUserById: (userId: string) => testUser,
      getUserByEmail: (email: string) => testUser
    };
    _resolver = new UserResolvers(testStorage);
  });
  describe("getUserById", () => {
    it("should return a user when called with userId", () => {
      //Assemble
      const userId = testUser.id;
      //Act
      const actual = _resolver.getUserById(userId);
      //Assert
      expect(actual).toStrictEqual(testUser);
    });
  });

  describe("getUserByEmail", () => {
    it("should return a user when called with an email", () => {
      //Assemble
      const email = testUser.email;
      //Act
      const actual = _resolver.getUserByEmail(email);
      //Assert
      expect(actual).toStrictEqual(testUser);
    });
  });
});
