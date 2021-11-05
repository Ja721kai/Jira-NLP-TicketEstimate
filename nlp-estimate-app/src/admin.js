import ForgeUI, {AdminPage, render, Text,Tabs, Tab, Button, Fragment, useState,  Macro} from "@forge/ui";
import {Notifications} from "./notifications";
import {Configurations} from "./configurations";
import {Endpoints} from "./endpoints";
import {Models} from "./model";

export const AdminConfigPage = () => {
  return (
    <Tabs>
      <Tab label="Bericht(e) erstellen">
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
