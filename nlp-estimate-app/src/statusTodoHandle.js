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
    const estimation = Math.random();
    console.log("Set estimation: " + estimation.toString());
    await storage.set("estimation", estimation);
  }
}


async function addComment(issueId, message) {
  /**
   * @issueId - the Jira issueId number for the issue that this function will try to add
   * a comment to (as per the Jira Rest API)
   * @message {string} - the message that will appear in the comment
   *
   * @example addComment('10050', 'f5ce5f0a-3ab7-404a-b96b-96ebbd79102f', 'Hello world')
   */

    // You'll come back to this later
  const requestUrl = route`https`;
  const body = { };

  // Use the Forge Runtime API to fetch data from an HTTP server using your (the app developer) Authorization header
  let response = await api.asApp().requestJira(requestUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body)
  });

  // Error checking: the Jira issue comment Rest API returns a 201 if the request is successful
  if (response.status !== 201) {
    console.log(response.status);
    throw `Unable to add comment to issueId ${issueId} Status: ${response.status}.`;
  }

  return response.json();
}