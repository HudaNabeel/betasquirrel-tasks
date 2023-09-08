import {createBrowserRouter} from "react-router-dom";
import Dashboard from "./Views/Dashboard";
import Student from "./Views/Student";
import Staff  from "./Views/Staff";
import Library from "./Views/Library";
import Account from "./Views/Accounts";



const router = createBrowserRouter([
    {
      path: "/",
      element: <Dashboard />,
    },
    {
        path: "/student",
        element: <Student />,
      },
      {
        path: "/staff",
        element: <Staff />,
      },
      {
        path: "/library",
        element: < Library/>,
      },
      {
        path: "/account",
        element: <Account />,
      },
  ]);

  export default router;