import ForgeUI, {
  Text,
  Fragment,
  useState,
  Cell, Head, Row, Table,
  Heading,
  Button,
  TextField,
  Form, ModalDialog
} from "@forge/ui";

const endpointsData = [
  {
    endpoint: 'Inferenz',
    url: 'https://mockup-endpoint-ip:port/endpoint',
    action1: 'Bearbeiten',
    action2: 'Löschen'
  },
  {
    endpoint: 'Gewichte',
    url: 'https://mockup-endpoint-ip:port/endpoint',
    action1: 'Bearbeiten',
    action2: 'Löschen'
  },
  {
    endpoint: 'DVC',
    url: 'https://mockup-endpoint-ip:port/endpoint',
    action1: 'Bearbeiten',
    action2: 'Löschen'
  }
];

export const Endpoints = () => {
  const [editDialog, setEditDialog] = useState({open:false,currentItem:{}});
  return (
    <Fragment>
      <Text> </Text>
      {editDialog.open && (
        <ModalDialog closeButtonText={"Abbrechen"}
                     header={`API Endpunkt bearbeiten: ${editDialog.currentItem.endpoint}`}
                     onClose={() => setEditDialog({currentItem:{},open:false})}>
          <Form submitButtonText={"Speichern"} onSubmit={data => {
            console.log(data);
            setEditDialog({currentItem:{},open:false});
          }}>
            <TextField label="Name" name="name" defaultValue={editDialog.currentItem.endpoint}/>
            <TextField label="URL" name="url" defaultValue={editDialog.currentItem.url} />
          </Form>
        </ModalDialog>
      )}
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
              <Text>{endpoint.url}</Text>
            </Cell>
            <Cell>
              <Button appearance="link" text={endpoint.action1}
                      onClick={()=>setEditDialog({open:true,currentItem:endpoint})} />
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
    </Fragment>
  )
}