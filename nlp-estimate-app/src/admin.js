import ForgeUI, { AdminPage, render, Text } from "@forge/ui";
import {Reports} from "./components/reports/reports";

export const AdminConfigPage = () => {
    return (
        <AdminPage>
          <Reports />
        </AdminPage>
    );
};

export const run = render(
  <AdminConfigPage />
);
