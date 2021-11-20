import ForgeUI, {
  Button, ButtonSet,
  Cell,
  Form,
  Fragment,
  Head,
  Row,
  Select,
  ModalDialog,
  Table,
  Text,
  TextField,
  Option,
  useState
} from '@forge/ui';

const tableColumnNames = ["Name", "Besitzer", "Zugriff", "Markiert von"];

let mockReports = [
  {
    fav: false,
    name: "Bericht 1",
    owner: "Mahtab Houshmand",
    access: "public",
    marked_by: 0
  },
  {
    fav: false,
    name: "Bericht 2",
    owner: "Sabrina Schuler",
    access: "private",
    marked_by: 2
  },
  {
    fav: true,
    name: "Bericht 3",
    owner: "Sabrina Schuler",
    access: "private",
    marked_by: 2
  },
  {
    fav: false,
    name: "Bericht 4",
    owner: "Sabrina Schuler",
    access: "private",
    marked_by: 2
  },
  {
    fav: true,
    name: "Bericht 5",
    owner: "Jan Kaiser",
    access: "private",
    marked_by: 1
  }
];

const PAGESIZE = 3;

function onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}

const getUserOptions = (reportList) => {
  const reportNames = reportList.map(report => (report.owner));
  return reportNames.filter(onlyUnique);
}

const getStarIcon = (isFav) => {
  return isFav ? "star-filled" : "star";
}

export const Reports = () => {

  // Form submission & table filtering using form values
  const[savedReports, setSavedReports] = useState(mockReports);
  const[displayedReports, setDisplayedReports] = useState(savedReports);

  const filterCurrentReports = (formData) => {
    let filteredReports = displayedReports;
    if (formData.name !== "") {
      filteredReports = filteredReports.filter(report => report.name.includes(formData.name));
    }
    if (formData.user !== "") {
      filteredReports = filteredReports.filter(report => report.owner === formData.user);
    }
    setDisplayedReports(filteredReports);
  }

  const onSubmit = async (formData) => {
    filterCurrentReports(formData);
  }

  const reset = () => {
    setDisplayedReports(savedReports);
  };

  const actionButtons = [
    <Button text="Reset Filters" onClick={reset} />,
  ];

  const addReport = (report) => {
    let reports = savedReports;
    reports.push(report);
    setSavedReports(reports);
    reports = displayedReports;
    reports.push(report);
    setDisplayedReports(reports);
  }

  const deleteReport = (report) => {
    setSavedReports(savedReports.filter(rep => rep.name !== report.name));
    setDisplayedReports(displayedReports.filter(rep => rep.name !== report.name));
  }

  const downloadReport = (report) => {}  // to be implemented in the future

  // Modal Dialog
  const [isOpen, setOpen] = useState(false);


export const Reports = () => {
  return (
    <Fragment>
      <Fragment>
        <Form onSubmit={onSubmit} actionButtons={actionButtons}>
          <TextField label='Name' name='name' />
          <Select label='User' name='user' placeholder="Besitzer">
            <Option defaultSelected label="Besitzer" value="" />
            {getUserOptions(savedReports).map(user => (
              <Option label={user} value={user}/>
            ))}
          </Select>
        </Form>
      </Fragment>
      <Fragment>
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
          <Cell>
          </Cell>
        </Head>
        {displayedReports.map(report => (
          <Row>
            <Cell>
              <Button
                icon={getStarIcon(report.fav)}
                onClick={ () => {
                  report.fav = !report.fav;
                  let reports = savedReports.map(savedReport => {
                    if (savedReport.name === report.name) {
                      savedReport.fav = report.fav;
                    }
                    return savedReport
                  });
                  setSavedReports(reports);
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
            <Cell>
              <ButtonSet>
                <Button icon="download" onClick={() => {downloadReport(report)}}/>
                <Button icon="trash" onClick={() => {deleteReport(report)}}/>
              </ButtonSet>
            </Cell>
          </Row>
        ))}
      </Table>
      </Fragment>
      <Fragment>
      <Button text="Bericht erstellen" onClick={() => setOpen(true)}/>
      {isOpen && (
        <ModalDialog closeButtonText={"Abbrechen"} header="Bericht erstellen" onClose={() => setOpen(false)}>
          <Form submitButtonText={"Erstellen"} onSubmit={data => {
            console.log(data);
            data["fav"] = false;
            data["marked_by"] = 0;
            addReport(data);
            setOpen(false);
          }}>
            <TextField name={"name"} label={"Name"} isRequired={true}/>
            <Select label='Besitzer' name='owner' placeholder="Besitzer" isRequired={true}>
              {getUserOptions(savedReports).map(user => (
                <Option label={user} value={user}/>
              ))}
            </Select>
            <Select label="Zugriffsrechte" name="access" isRequired={true}>
              <Option defaultSelected label="Öffentlich" value="public" />
              <Option label="Privat" value="private" />
            </Select>
          </Form>
        </ModalDialog>
      )}
      </Fragment>
    </Fragment>
  );
};
