import { useRoutes } from "react-router-dom";
import Sign from "../pages/Sign";
import Profile from "../pages/Profile";

function Router() {
  let element = useRoutes([
     {
        path: '/',
        element: <Sign />
     },
     {
      path: '/dashboard',
      element: <Profile />
     }
  ]);
  return element
}

export default Router
