import ForgeUI, {AdminPage, render, Tabs, Tab, Macro} from "@forge/ui";
import {Notifications} from "./components/notifications/notifications";
import {Configurations} from "./components/configurations/configurations";
import {Endpoints} from "./components/endpoints/endpoints";
import {Models} from "./components/model/model";
import {Reports} from "./components/reports/reports";

export const AdminConfigPage = () => {
  return (
    <Tabs>
      <Tab label="Bericht(e) erstellen">
        <Reports/>
      </Tab>
      <Tab label="API Endpunkte">
        <Endpoints/>
      </Tab>
      <Tab label="Modelle">
        <Models/>
      </Tab>
      <Tab label="Benachrichtigungen">
        <Notifications/>
      </Tab>
      <Tab label="Allgemeine Konfigurationen">
        <Configurations/>
      </Tab>
    </Tabs>
  )
}

export const run = render(
  <AdminPage>
  <Macro app={<AdminConfigPage />} />
  </AdminPage>
);
