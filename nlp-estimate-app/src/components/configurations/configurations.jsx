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
  Option, useState,
} from "@forge/ui";

const configurationsData = [
  {
    name: 'Schätzeinheit',
    value: 'Personentage'
  }
  ]

export const Configurations = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <Fragment>
      <Text> </Text>
      <Text> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </Text>
      <Button text="Standardwerte bearbeiten" onClick={() => setOpen(true)} />
      {isOpen && (
        <ModalDialog closeButtonText={"Abbrechen"} header="Allgemeine Konfigurationen" onClose={() => setOpen(false)}>
          <Form submitButtonText={"Speichern"} onSubmit={data => {
            console.log(data);
            setOpen(false);
          }}>
            <Select label="Schätzeinheit" name="unit">
              <Option defaultSelected label="Personentage" value="days" />
              <Option label="Personenstunden" value="hours" />
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
        {configurationsData.map(configuration => (
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
