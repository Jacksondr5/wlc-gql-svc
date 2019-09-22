import ChallengeResolvers from "./ChallengeResolvers";
import { Challenge, NewChallenge } from "../_generated/graphql";
import { IChallengeStorage } from "../DataAccess/ChallengeStorage";

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
      createChallenge: async () => {
        return testNewChallenge;
      },
      deleteChallenge: async (challengeId: string) => {}
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
    //TODO: figure out how to test that it creates additonal args correctly
    //Currently having issues getting mock functions to play with TS
    it("should return the new challenge when created", async () => {
      //Arrange

      //Act
      const actual = await _resolver.createChallenge(newchallengeArgs);

      //Assert
      expect(actual).toStrictEqual(testNewChallenge);
    });
  });
  describe("deleteChallenge", () => {
    it("should complete successfully when given a correct challengeId", async () => {
      //Arrange
      const challengeId = testChallenge.id;
      //Act & assert
      expect(() => _resolver.deleteChallenge(challengeId)).not.toThrow();
    });
  });
});
