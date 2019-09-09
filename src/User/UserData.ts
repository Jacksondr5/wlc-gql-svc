import { User } from "../_generated/graphql";
import { userChallenge } from "../Challenge/ChallengeData";

export const user: User = {
  name: "TestName",
  email: "test@example.com",
  displayName: "TestDisplay",
  challenges: [userChallenge]
};
