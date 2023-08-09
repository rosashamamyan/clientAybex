import { useRoutes } from "react-router-dom";
import Sign from "../pages/Sign";

function Router() {
  let element = useRoutes([
     {
        path: '/',
        element: <Sign />
     }
  ]);
  return element
}

export default Router
