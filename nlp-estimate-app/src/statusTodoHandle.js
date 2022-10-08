// https://developer.atlassian.com/platform/forge/automate-jira-using-triggers/
import { storage } from "@forge/api";

export async function run(event, context) {
  console.log("event: " + JSON.stringify(event.changelog));

  const eventField = event.changelog.items[0].field;
  const eventFromString = event.changelog.items[0].fromString;
  const eventToString = event.changelog.items[0].toString;
  console.log(eventField);
  console.log(eventFromString);
  console.log(eventToString);

  if (eventField === "status" && eventFromString !== eventToString && eventToString === "TO DO") {
    const estimation = Math.round(Math.random() * 100) / 100;
    console.log("Set estimation: " + estimation.toString());
    await storage.set("estimation", estimation);
  }
}
