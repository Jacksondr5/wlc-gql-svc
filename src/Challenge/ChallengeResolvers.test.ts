import ChallengeResolvers from "./ChallengeResolvers";
import { NewChallenge } from "../_generated/graphql";
import { TestChallengeStorage } from "../DataAccess/__mocks__/ChallengeStorage";

jest.mock("../DataAccess/ChallengeStorage");

describe("ChallengeResolver", () => {
  let _testStorage: TestChallengeStorage, _resolver: ChallengeResolvers;
  beforeAll(() => {
    _testStorage = new TestChallengeStorage();
    _resolver = new ChallengeResolvers(_testStorage);
  });
  describe("getChallenge", () => {
    it("should return challenge when called with challenge ID", async () => {
      //Arrange
      const testChallengeId = _testStorage.testChallenge.id;

      //Act
      const actual = await _resolver.getChallenge(testChallengeId);

      //Assert
      expect(actual).toStrictEqual(_testStorage.testChallenge);
    });

    it("should return null when called with an incorrect challenge ID", async () => {
      //Arrange
      const testChallengeId = "some nonsense";

      //Act
      const actual = await _resolver.getChallenge(testChallengeId);

      //Assert
      expect(actual).toBeNull();
    });
  });
  describe("createChallenge", () => {
    //TODO: figure out how to test that it creates additonal args correctly
    //Currently having issues getting mock functions to play with TS
    it("should return the new challenge when created", async () => {
      //Arrange

      //Act
      const actual = await _resolver.createChallenge(
        _testStorage.testNewChallenge
      );

      //Assert
      expect(actual).toStrictEqual(_testStorage.testChallenge);
    });
    it("should call the storage provider with the correct params", async () => {});
  });
  describe("deleteChallenge", () => {
    it("should complete successfully when given a correct challengeId", async () => {
      //Arrange
      const challengeId = _testStorage.testChallenge.id;
      //Act & assert
      expect(async () =>
        expect(await _resolver.deleteChallenge(challengeId)).toBe(true)
      ).not.toThrow();
    });
  });
});
