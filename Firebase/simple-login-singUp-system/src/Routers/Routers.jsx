import { createBrowserRouter } from "react-router";
import App from "../App";
import { Home } from "../Home/Home";
import Login from "../Pages/Login";
import SingUp from "../Pages/SingUp";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "SingIn",
        Component: Login,
      },
      {
        path: "SingUp",
        Component: SingUp,
      },
      {
        path: "*",
        element: <div>Not Found</div>,
      },
    ],
  },
]);
