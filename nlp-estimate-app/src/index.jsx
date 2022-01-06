import ForgeUI, {render, Fragment, Text, IssuePanel, useState} from '@forge/ui';
import { storage } from "@forge/api";

const App = () => {

  const amount = 5;
  const [unit] = useState(storage.get("unit"));

  return (
    <IssuePanel>
      <Fragment>
        <Text> {unit.toString() === "Personentage" ? amount : amount*8} {unit ? unit : "Einheit nicht gesetzt"} </Text>
      </Fragment>
    </IssuePanel>
  );
};

export const run = render(
  <App />
);

