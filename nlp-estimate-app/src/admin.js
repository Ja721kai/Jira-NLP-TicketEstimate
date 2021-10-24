import ForgeUI, {AdminPage, render, Text,Tabs, Tab, Button, Fragment, useState,  Macro} from "@forge/ui";
import {Notifications} from "./notifications";
import {Configurations} from "./configurations";
import {Endpoints} from "./endpoints";

export const AdminConfigPage = () => {
  return (
    <Tabs>
      <Tab label="Bericht(e) erstellen">
      </Tab>
      <Tab label="API Endpunkte / Modell">
        <Endpoints/>
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
// export const AdminConfigPage = () => {
//   const [navigation, setNavigation] = useState({
//     report:false,
//     endpoints:false,
//     notifications:false,
//     configurations:false
//   });
//   return (
//     <Fragment>
//       <Button
//         text={`Bericht(e) erstellen`}
//         onClick={async () => {
//           setNavigation(Object.assign({},navigation, {
//             report:!navigation.report
//           }));
//         }}
//         icon = "page"
//       />
//       <Button
//         text={`API Endpunkte / Modell`}
//         onClick={async () => {
//           setNavigation(Object.assign({},navigation, {
//             endpoints:!navigation.endpoints
//           }));
//         }}
//         icon = "graph-line"
//       />
//       {navigation.endpoints && <Endpoints/>}
//
//       <Button
//         text={`Benachrichtigungen`}
//         onClick={async () => {
//           setNavigation(Object.assign({},navigation, {
//             notifications:!navigation.notifications
//           }));
//         }}
//         icon = "notification-all"
//       />
//       {navigation.notifications && <Notifications/>}
//
//       <Button
//         text={`Allgemeine Konfigurationen`}
//         onClick={async () => {
//           setNavigation(Object.assign({},navigation, {
//             configurations:!navigation.configurations
//           }));
//         }}
//         icon = "settings"
//       />
//       {navigation.configurations && <Configurations/>}
//     </Fragment>
//   );
// };

export const run = render(
  <AdminPage>
  <Macro app={<AdminConfigPage />} />
  </AdminPage>
);
