import ForgeUI, {
  Text,
  Fragment,
  useState,
  Cell, Head, Row, Table,
  Heading,
  Button,
  TextField,
  Form, ModalDialog, Select, Option
} from "@forge/ui";

const endpointsData = [
  {
    endpoint: 'Inferenz',
    url: 'https://mockup-endpoint-ip:port/endpoint',
  },
  {
    endpoint: 'Gewichte',
    url: 'https://mockup-endpoint-ip:port/endpoint',
  },
  {
    endpoint: 'DVC',
    url: 'https://mockup-endpoint-ip:port/endpoint',
  }
];

export const Endpoints = () => {
  // Modal Dialog
  const [isOpenCreate, setOpenCreate] = useState(false);
  const [editDialog, setEditDialog] = useState({open:false,currentItem:{}});
  const[savedEndpoints, setSavedEndpoints] = useState(endpointsData);
  function addEndpoints (endpoint){
    savedEndpoints.push(endpoint)
    setSavedEndpoints(savedEndpoints)
  }
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
        {savedEndpoints.map(endpoint => (
          <Row>
            <Cell>
              <Text>{endpoint.endpoint}</Text>
            </Cell>
            <Cell>
              <Text>{endpoint.url}</Text>
            </Cell>
            <Cell>
              <Button appearance="link" text="Bearbeiten"
                      onClick={()=>setEditDialog({open:true,currentItem:endpoint})} />
              <Button appearance="link" text="Löschen" />
            </Cell>
          </Row>
        ))}
      </Table>

      <Button text="API Endpunkt hinzufügen" onClick={() => setOpenCreate(true)}/>
      {isOpenCreate && (
        <ModalDialog closeButtonText={"Abbrechen"} header="API Endpunkt hinzufügen" onClose={() => setOpenCreate(false)}>
          <Form submitButtonText={"Hinzufügen"} onSubmit={data => {
            addEndpoints(data);
            setOpenCreate(false);
          }}>
            <TextField name="endpoint" label={"Name"} isRequired={true}/>
            <TextField label='URL' name='url' isRequired={true}/>
          </Form>
        </ModalDialog>
      )}
    </Fragment>
  )
}