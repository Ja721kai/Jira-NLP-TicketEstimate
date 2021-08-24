import ForgeUI, { render, Fragment, Text, IssuePanel } from '@forge/ui';
import { exampleText } from "./admin";

const App = () => {
  return (
    <Fragment>
      <Text content={exampleText + " " + {unit}} />
    </Fragment>
  );
};

export const run = render(
  <IssuePanel>
    <App />
  </IssuePanel>
);
