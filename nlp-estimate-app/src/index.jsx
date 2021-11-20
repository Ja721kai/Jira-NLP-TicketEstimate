import ForgeUI, {render, Fragment, Text, IssuePanel} from '@forge/ui';
import { default as runTrigger } from './trigger';

const getEstimation = () => {
  return Math.random();  // TODO: Replace with API Call to Backend
}

const App = () => {

  let schaetzung = ;

  return (
    <IssuePanel>
      <Fragment>
        <Text> {schaetzung} {einheit}</Text>
      </Fragment>
    </IssuePanel>
  );
};

export const run = render(
  <App />
);

