import ForgeUI, {render, Fragment, Text, IssuePanel} from '@forge/ui';

const App = () => {
  return (
    <IssuePanel>
      <Fragment>
        <Text> Hi. </Text>
      </Fragment>
    </IssuePanel>
  );
};

export const run = render(
  <App />
);

