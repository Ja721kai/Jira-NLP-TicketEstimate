import ForgeUI, {Table, Head, Row, Cell, Text, Strong, Button, Fragment} from '@forge/ui';

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

let currentPage = 1;
const PAGESIZE = 20;

function getCurrentPageRange() {
  let end = currentPage * PAGESIZE;
  let start = end - (PAGESIZE - 1);
  let currentPageElements = start.toString() + "-" + end.toString();  // e.g. 1-20
  return currentPageElements;
}

export const BerichteComponent = () => {
  return (
    <Fragment>
      <Text><Strong>{getCurrentPageRange()}</Strong> von <Strong>{PAGESIZE}</Strong></Text>
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
