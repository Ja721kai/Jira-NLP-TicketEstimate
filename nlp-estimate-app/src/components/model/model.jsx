import ForgeUI, {
  Text,
  Fragment,
  useState,
  Cell, Head, Row, Table,
  Heading,
  Button,
  TextField,
  Form, Select, Option, CheckboxGroup, Checkbox,
  ModalDialog
} from "@forge/ui";

const modelData = [
  {
    date: '27/Jun/21 1:00PM',
    name: 'Modell - v 1.0.3',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing...',
    action1: 'Aktualisieren',
    action2: 'Löschen'
  },
  {
    date: '21/Jun/21 3:15 PM',
    name: 'Modell - v 1.0.2',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing...',
    action1: 'Aktualisieren',
    action2: 'Löschen'
  },
  {
    date: '18/Jun/21 11:00 AM',
    name: 'Modell - v 1.0.1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing...',
    action1: 'Aktualisieren',
    action2: 'Löschen'
  }
];

export const Models = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <Fragment>
      <Text> </Text>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </Text>
      <Heading size="medium">Modelle</Heading>
      <Table rowsPerPage={3}>
        <Head>
          <Cell>
            <Text>Datum</Text>
          </Cell>
          <Cell>
            <Text>Name</Text>
          </Cell>
          <Cell>
            <Text>Beschreibung</Text>
          </Cell>
          <Cell>
            <Text>Aktionen</Text>
          </Cell>
        </Head>
        {modelData.map(model => (
          <Row>
            <Cell>
              <Text>{model.date}</Text>
            </Cell>
            <Cell>
              <Text>{model.name}</Text>
            </Cell>
            <Cell>
              <Text>{model.description}</Text>
            </Cell>
            <Cell>
              <Button appearance="link" text={model.action1} />
              <Button appearance="link" text={model.action2} />
            </Cell>
          </Row>
        ))}
      </Table>
      <Heading size="small">Modell hinzufügen</Heading>
      <Form submitButtonText={"Hinzufügen"}>
        <TextField label="Name" name="name" />
        <TextField label="Beschreibung" name="desription" />
        <Button text = "Datei auswählen" icon="folder"/>
      </Form>
    </Fragment>
  )
}