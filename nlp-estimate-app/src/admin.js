import ForgeUI, { AdminPage, render, Text } from "@forge/ui";
import {BerichteComponent} from "./components/berichteErstellen";

export const AdminConfigPage = () => {
    return (
        <AdminPage>
          <BerichteComponent />
        </AdminPage>
    );
};

export const run = render(
  <AdminConfigPage />
);
