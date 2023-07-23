import { AuthChecker } from "../components";
import { Login, Radio, Radios } from "../pages";

const publicRoutesMenuItems = [
  {
    routeInformation: { path: "/login", element: <Login /> },
  },
];

export const privateRoutesMenuItems = [
  {
    shouldShowInMenu: true,
    label: "Home",
    routeInformation: { path: "/", element: <></> },
  },
  {
    shouldShowInMenu: true,
    label: "Radios",
    routeInformation: { path: "/radios", element: <Radios /> },
  },
  {
    shouldShowInMenu: false,
    label: "Radio",
    routeInformation: { path: "/radio/:radioId", element: <Radio /> },
  },
];

export const menuItems = privateRoutesMenuItems.map((item) => item);

export const routes = [
  ...publicRoutesMenuItems.map((item) => item.routeInformation),
  {
    path: "/",
    element: <AuthChecker />,
    children: privateRoutesMenuItems.map((item) => item.routeInformation),
  },
];
