import ForgeUI, {
  Button,
  Form,
  Fragment,
  Select, Option,
  Cell, Head, Row, Table,
  Text, Strong, TextField,
  useState
} from '@forge/ui';

const tableColumnNames = ["Name", "Besitzer", "Zugriff", "Markiert von"];

let mockReports = [
  {
    name: "Bericht 1",
    owner: "Mahtab Houshmand",
    access: "public",
    marked_by: 0
  },
  {
    name: "Bericht 2",
    owner: "Sabrina Schuler",
    access: "private",
    marked_by: 2
  },
  {
    name: "Bericht 3",
    owner: "Sabrina Schuler",
    access: "private",
    marked_by: 2
  },
  {
    name: "Bericht 4",
    owner: "Sabrina Schuler",
    access: "private",
    marked_by: 2
  },
  {
    name: "Bericht 5",
    owner: "Jan Kaiser",
    access: "private",
    marked_by: 1
  }
];

let currentReports = mockReports;

const PAGESIZE = 3;
let currentPage = 1;

const getCurrentPageRange = (currentPage) => {
  let end = currentPage * PAGESIZE;
  let start = end - (PAGESIZE - 1);
  return start.toString() + "-" + end.toString(); // e.g. 1-20
}

function onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}

const getUserOptions = (reportList) => {
  const reportNames = reportList.map(report => (report.owner));
  const uniqueNames = reportNames.filter(onlyUnique);
  return uniqueNames;
}

const setFormState = () => {};
const onSubmit = async (formData) => {
  /**
   * formData:
   * {
   *   name: 'Bericht 1'
   * }
   */
  setFormState(formData);
}

const goBack = () => {};
const cancel = () => {};

const actionButtons = [
  <Button text="Go back" onClick={goBack} />,
  <Button text="Cancel" onClick={cancel} />,
];

export const Reports = () => {
  return (
    <Fragment>
      <Fragment>
        <Form onSubmit={onSubmit} actionButtons={actionButtons}>
          <TextField name='Name' label='name'/>
          <Select label='User' name='user' description="Benutzer">
            {getUserOptions(mockReports).map(user => (
              <Option label={user} value={user}/>
            ))}
          </Select>
        </Form>
      </Fragment>
      <Text><Strong>{getCurrentPageRange(currentPage)}</Strong> von <Strong>{currentReports.length}</Strong></Text>
      <Table rowsPerPage={PAGESIZE}>
        <Head>
          <Cell>
            <Button
              icon="star-filled"
              disabled={true}
            />
          </Cell>
          {tableColumnNames.map(columnName => (
            <Cell>
              <Text>{columnName}</Text>
            </Cell>
          ))}
        </Head>
        {currentReports.map(report => (
          <Row>
            <Cell>
              <Button
                icon={"star"}
                onClick={async () => {
                  console.log("Hello World!")
                }}
              />
            </Cell>
            <Cell>
              <Text>{report.name}</Text>
            </Cell>
            <Cell>
              <Text>{report.owner}</Text>
            </Cell>
            <Cell>
              <Text>{report.access}</Text>
            </Cell>
            <Cell>
              <Text>{report.marked_by.toString() + " Personen"}</Text>
            </Cell>
          </Row>
        ))}
      </Table>
    </Fragment>
  );
};
