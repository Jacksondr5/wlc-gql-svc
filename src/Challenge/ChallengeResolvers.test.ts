import ChallengeResolvers from "./ChallengeResolvers";
import {
  Challenge,
  User,
  NewChallenge,
  MutationCreateChallengeArgs
} from "../_generated/graphql";
import { IChallengeStorage } from "../DataAccess/ICloudStorage";
import { UserInputError } from "apollo-server";
const rfdc: any = require("rfdc")();

describe("ChallengeResolver", () => {
  let testChallenge: Challenge,
    testNewChallenge: Challenge,
    testStorage: IChallengeStorage,
    _resolver: ChallengeResolvers;
  beforeAll(() => {
    testChallenge = {
      id: "someId",
      name: "test",
      startDate: "01/01/2019",
      endDate: "01/01/2020",
      totalPrizeMoney: 50,
      entryFee: 5
    };
    testNewChallenge = {
      ...testChallenge,
      totalPrizeMoney: 0,
      id: "some new id"
    };
    testStorage = {
      getChallenge: challengeId => {
        return challengeId === testChallenge.id ? testChallenge : null;
      },
      createChallenge: newChallengeArgs => {
        return testNewChallenge;
      }
    };
    _resolver = new ChallengeResolvers(testStorage);
  });
  describe("getChallenge", () => {
    it("should return challenge when called with challenge ID", () => {
      //Arrange
      const testChallengeId = testChallenge.id;

      //Act
      const actual = _resolver.getChallenge(testChallengeId);

      //Assert
      expect(actual).toStrictEqual(testChallenge);
    });

    it("should return null when called with an incorrect challenge ID", () => {
      //Arrange
      const testChallengeId = "some nonsense";

      //Act
      const actual = _resolver.getChallenge(testChallengeId);

      //Assert
      expect(actual).toBeNull();
    });
  });
  describe("createChallenge", () => {
    const newchallengeArgs: NewChallenge = {
      name: "test",
      startDate: "01/01/2019",
      endDate: "01/01/2020",
      entryFee: 40
    };
    it("should return the new challenge when created", () => {
      //Arrange

      //Act
      const actual = _resolver.createChallenge(newchallengeArgs);

      //Assert
      expect(actual).toStrictEqual(testNewChallenge);
    });
  });
});
