import Panel from "../layouts/Panel";
import Login from "../layouts/auth/Login";
import Registro from "../layouts/auth/Registro";

export let rutasMenu = [
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/panel",
    element: <Panel />,
  },
  {
    path: "/registro",
    element: <Registro />,
  },
];
