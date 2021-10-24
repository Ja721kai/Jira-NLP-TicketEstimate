import ForgeUI, {
  Text,
  Fragment,
  useState,
  Cell, Head, Row, Table,
  Heading,
  Button,
  TextField,
  Form
} from "@forge/ui";

const endpointsData = [
  {
    endpoint: 'Inferenz',
    URL: 'https://mockup-endpoint-ip:port/endpoint',
    action1: 'Bearbeiten',
    action2: 'Löschen'
  },
  {
    endpoint: 'Gewichte',
    URL: 'https://mockup-endpoint-ip:port/endpoint',
    action1: 'Bearbeiten',
    action2: 'Löschen'
  },
  {
    endpoint: 'DVC',
    URL: 'https://mockup-endpoint-ip:port/endpoint',
    action1: 'Bearbeiten',
    action2: 'Löschen'
  }
];

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

export const Endpoints = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <Fragment>
      <Text> </Text>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </Text>
      <Text> </Text>
      <Heading size="medium">API Endpunkte</Heading>
      <Table rowsPerPage={3}>
        <Head>
          <Cell>
            <Text>API Endpunkt</Text>
          </Cell>
          <Cell>
            <Text>URL</Text>
          </Cell>
          <Cell>
            <Text>Aktionen</Text>
          </Cell>
        </Head>
        {endpointsData.map(endpoint => (
          <Row>
            <Cell>
              <Text>{endpoint.endpoint}</Text>
            </Cell>
            <Cell>
              <Text>{endpoint.URL}</Text>
            </Cell>
            <Cell>
              <Button appearance="link" text={endpoint.action1} />
              <Button appearance="link" text={endpoint.action2} />
            </Cell>
          </Row>
        ))}
      </Table>
      <Heading size="small">API Endpunkt hinzufügen</Heading>
      <Form submitButtonText={"Hinzufügen"}>
        <TextField label="Name" name="name" />
        <TextField label="URL" name="url" />
      </Form>
      <Text> </Text>
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