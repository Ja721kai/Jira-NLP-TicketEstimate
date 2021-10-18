import ForgeUI, {AdminPage, render, Text, Button, Fragment, useState,  Macro} from "@forge/ui";
import {Notifications} from "./notifications";
import {Configurations} from "./configurations";

const ReportsComponent = (props) => {
  if (props.show) {
    return (<Text> Report Test Test </Text>)
  }
  return null
}

export const AdminConfigPage = () => {
  const [navigation, setNavigation] = useState({
    report:false,
    model:false,
    notifications:false,
    configurations:false
  });
  return (
    <Fragment>
      <Button
        text={`Bericht(e) erstellen`}
        onClick={async () => {
          setNavigation(Object.assign({},navigation, {
            report:!navigation.report
          }));
        }}
        icon = "page"
      />
      <ReportsComponent show={navigation.report} />
      <Button
        text={`API Endpunkte / Modell`}
        onClick={async () => {
          setNavigation(Object.assign({},navigation, {
            model:!navigation.model
          }));
        }}
        icon = "graph-line"
      />
      <Button
        text={`Benachrichtigungen`}
        onClick={async () => {
          setNavigation(Object.assign({},navigation, {
            notifications:!navigation.notifications
          }));
        }}
        icon = "notification-all"
      />
      {navigation.notifications && <Notifications/>}

      <Button
        text={`Allgemeine Konfigurationen`}
        onClick={async () => {
          setNavigation(Object.assign({},navigation, {
            configurations:!navigation.configurations
          }));
        }}
        icon = "settings"
      />
      {navigation.configurations && <Configurations/>}
    </Fragment>
  );
};

export const run = render(
  <AdminPage>
  <Macro app={<AdminConfigPage />} />
  </AdminPage>
);
