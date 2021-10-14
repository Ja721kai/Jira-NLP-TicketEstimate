import ForgeUI, { AdminPage, render, Text } from "@forge/ui";
import {BerichteComponent} from "./components/berichteErstellen";

export const AdminConfigPage = () => {
    return (
        <AdminPage>
          <Text> Hello World! </Text>
          <BerichteComponent />
        </AdminPage>
    );
};

export const run = render(
  <AdminConfigPage />
);
