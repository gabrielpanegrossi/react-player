import { AuthChecker } from "../components";
import { Login, Playlists } from "../pages";

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
    label: "Playlists",
    routeInformation: { path: "/playlists", element: <Playlists /> },
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
