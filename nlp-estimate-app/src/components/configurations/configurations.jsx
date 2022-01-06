import ForgeUI, {
  Text,
  Fragment,
  Cell,
  Head,
  Row,
  Table,
  Button,
  ModalDialog,
  Form,
  Select,
  Option, useState
} from "@forge/ui";

import { storage } from "@forge/api";

async function storeUnit(unit) {
  console.log("Set estimation unit: " + unit);
  await storage.set("unit", unit);
}

export const Configurations = () => {
  const [isOpen, setOpen] = useState(false);

  const [estimationUnit, setEstimationUnit] = useState(storage.get("unit"));

  storeUnit(estimationUnit).then(r => console.log(r));

  const reactConfigurationsData = [
    {
      name: 'Schätzeinheit',
      value: estimationUnit
    }
  ]

  const setEstimation = (unit) => {
    if (!["Personentage", "Personenstunden"].includes(estimationUnit)) {
      throw Error("Schätzeinheiten stimmen nicht miteinander überein.");
    } else {
      setEstimationUnit(unit);
      storeUnit(estimationUnit).then(r => console.log(r));
    }
  }

  return (
    <Fragment>
      <Text> </Text>
      <Text> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </Text>
      <Button text="Standardwerte bearbeiten" onClick={() => setOpen(true)} />
      {isOpen && (
        <ModalDialog closeButtonText={"Abbrechen"} header="Allgemeine Konfigurationen" onClose={() => setOpen(false)}>
          <Form submitButtonText={"Speichern"} onSubmit={data => {
            console.log(data);
            setEstimation(data["unit"]);
            setOpen(false);
          }}>
            <Select label="Schätzeinheit" name="unit">
              <Option defaultSelected label="Personentage" value="Personentage" />
              <Option label="Personenstunden" value="Personenstunden" />
            </Select>
          </Form>
        </ModalDialog>
      )}
      <Table rowsPerPage={3}>
        <Head>
          <Cell>
            <Text>Name</Text>
          </Cell>
          <Cell>
            <Text>Wert</Text>
          </Cell>
        </Head>
        {reactConfigurationsData.map(configuration => (
          <Row>
            <Cell>
              <Text>{configuration.name}</Text>
            </Cell>
            <Cell>
              <Text>{configuration.value}</Text>
            </Cell>
          </Row>
        ))}
      </Table>
    </Fragment>
  )
}
