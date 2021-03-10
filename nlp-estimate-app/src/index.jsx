import ForgeUI, { render, Fragment, Text, IssuePanel } from '@forge/ui';

const App = () => {
  return (
    <Fragment>
      <Text>Hello Mahtab & Sabrina, this is your local developer from Constance who just setup his developing
      environment to create and continuously deploy forge apps through Docker. </Text>
    </Fragment>
  );
};

export const run = render(
  <IssuePanel>
    <App />
  </IssuePanel>
);
