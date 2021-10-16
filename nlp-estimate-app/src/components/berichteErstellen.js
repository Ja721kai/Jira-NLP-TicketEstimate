import ForgeUI, {Table, Head, Row, Cell, Text, Button, Fragment} from '@forge/ui';

const tableColumnNames = ["Name", "Besitzer", "Zugriff", "Markiert von"];

const mockReports = [
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
  }
];


export const BerichteComponent = () => {
  return (
    <Fragment>
      <Text>{getPaginationString(mockReports, 20) + " von " + mockReports.length.toString()}</Text>
      <Table>
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
        {mockReports.map(report => (
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
