import ForgeUI, { AdminPage, render, Text } from "@forge/ui";

export const AdminConfigPage = () => {
    return (
        <AdminPage>
          <Text> Hello World! </Text>
        </AdminPage>
    );
};

export const run = render(
  <AdminConfigPage />
);
