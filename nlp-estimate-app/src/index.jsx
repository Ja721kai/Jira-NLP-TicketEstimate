import ForgeUI, {render, Fragment, Text, IssuePanel, useState} from '@forge/ui';
import { storage } from "@forge/api";

const App = () => {

  const [amount] = useState(storage.get("estimation"));
  const [unit] = useState(storage.get("unit"));



  return (
    <IssuePanel>
      <Fragment>
        <Text> {unit.toString() === "Personentage" ? (amount ? amount : "Dauer nicht gesetzt") : (amount ? amount*8 : "Dauer nicht gesetzt")} {unit ? unit : "Einheit nicht gesetzt"} </Text>
      </Fragment>
    </IssuePanel>
  );
};

export const run = render(
  <App />
);
