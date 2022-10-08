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
    date: 'Sat, 1 Jan 2022 00:18:31 GMT',
    name: 'Modell - v 1.0.3',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing...'
  },
  {
    date: 'Mon, 10 Jan 2022 11:00:59 GMT',
    name: 'Modell - v 1.0.2',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing...'
  },
  {
    date: 'Wed, 12 Jan 2022 10:39:31 GMT',
    name: 'Modell - v 1.0.1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing...'
  }
];

export const Models = () => {
  const [isOpen, setOpen] = useState(false);
  // Modal Dialog
  const [isOpenCreate, setOpenCreate] = useState(false);
  const [editDialog, setEditDialog] = useState({open:false,currentItem:{}});
  const[savedModels, setSavedModels] = useState(modelData);
  function addModels (model){
    savedModels.push(model)
    setSavedModels(savedModels)
  }
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
        {savedModels.map(model => (
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
              <Button appearance="link" text="Aktualisieren" />
              <Button appearance="link" text="Löschen" />
            </Cell>
          </Row>
        ))}
      </Table>

      <Button text="Modell hinzufügen" onClick={() => setOpenCreate(true)}/>
      {isOpenCreate && (
        <ModalDialog closeButtonText={"Abbrechen"} header="Modell hinzufügen" onClose={() => setOpenCreate(false)}>
          <Form submitButtonText={"Hinzufügen"} onSubmit={data => {
            data.date = new Date().toUTCString()
            addModels(data);
            setOpenCreate(false);
          }}>
            <TextField name="name" label={"Name"} isRequired={true}/>
            <TextField label='Beschreibung' name='description' isRequired={true}/>
            <Button text = "Datei auswählen" icon="folder" onClick={()=>{}}/>
          </Form>
        </ModalDialog>
      )}
    </Fragment>
  )
}