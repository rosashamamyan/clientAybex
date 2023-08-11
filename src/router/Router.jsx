import { useRoutes } from "react-router-dom";
import Sign from "../pages/Sign";
import Profile from "../pages/Profile";
import Layout from "../components/Layout";
function Router() {
  let element = useRoutes([
    {
      path: "/",
      element: <Sign />,
    },
    {
      path: '/dashboard',
      element: <Layout />,
      children: [
         {
            path: "",
            element: <Profile />,
         },
      ]
    },
  ]);
  return element;
}

export default Router;
