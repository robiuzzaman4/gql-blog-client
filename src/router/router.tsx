import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../pages/home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
    ],
  },
]);
