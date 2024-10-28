import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../pages/home";
import SignUp from "../pages/sign-up";
import SignIn from "../pages/sign-in";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/signin",
        element: <SignIn />,
      },
    ],
  },
]);
