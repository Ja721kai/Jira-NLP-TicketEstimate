import ForgeUI, {Text, Fragment,Form, Table, Head, Row, Cell, useState, Button, Select, Option, ModalDialog, Checkbox, CheckboxGroup} from "@forge/ui";

const notificationData = [
  {
    author: 'JIRA',
    status: 'TEXT ZZZ',
    action: 'Mehr anzeigen',
    date: '27/Jun/21 7:06 PM'
  },
  {
    author: 'JIRA',
    status: 'TEXT AAA',
    action: 'Mehr anzeigen',
    date: '27/Aug/21 1:34 PM'
  },
  {
    author: 'JIRA',
    status: 'TEXT BBB',
    action: 'Mehr anzeigen',
    date: '27/Sep/21 12:06 PM'
  },
  {
    author: 'JIRA',
    status: 'TEXT CCC',
    action: 'Mehr anzeigen',
    date: '27/Dec/21 4:06 PM'
  }
];

export const Notifications = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <Fragment>
      <Text> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </Text>
      <Button text="Benachrichtigungseinstellungen" onClick={() => setOpen(true)} />
      {isOpen && (
        <ModalDialog closeButtonText={"Abbrechen"} header="Benachrichtigungseinstellungen" onClose={() => setOpen(false)}>
          <Form submitButtonText={"Speichern"} onSubmit={data => {
            console.log(data);
            setOpen(false);
          }}>
            <Select label="Beibehaltungsdauer" name="notificationLength">
              <Option defaultSelected label="1 Monat" value="1M" />
              <Option label="3 Monate" value="3M" />
              <Option label="6 Monate" value="6M" />
              <Option label="12 Monate" value="12M" />
            </Select>
            <CheckboxGroup name="notifications" label="">
            <Checkbox value="mail" label="Benachrichtigungen per Mail erhalten" />
            </CheckboxGroup>
          </Form>
        </ModalDialog>
      )}
      <Table rowsPerPage={3}>
        <Head>
          <Cell>
            <Text>Datum</Text>
          </Cell>
          <Cell>
            <Text>Autor</Text>
          </Cell>
          <Cell>
            <Text>Fehlerkategorie</Text>
          </Cell>
          <Cell>
            <Text>Zusammenfassung</Text>
          </Cell>
          <Cell>
            <Text>Aktionen</Text>
          </Cell>
        </Head>
        {notificationData.map(notification => (
          <Row>
            <Cell>
              <Text>{notification.date}</Text>
            </Cell>
            <Cell>
              <Text>{notification.author}</Text>
            </Cell>
            <Cell>
              <Text>{notification.status}</Text>
            </Cell>
            <Cell>
              <Text>{notification.status}</Text>
            </Cell>
            <Cell>
              <Text>{notification.action}</Text>
            </Cell>
          </Row>
        ))}
      </Table>
    </Fragment>
  )
}