import { Firestore } from "@google-cloud/firestore";

export const db = new Firestore({
  projectId: process.env["FIRESTORE_PROJECT_ID"],
  keyFilename: process.env["GOOGLE_APPLICATION_CREDENTIALS"]
});
