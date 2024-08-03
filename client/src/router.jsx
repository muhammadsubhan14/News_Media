import { createBrowserRouter } from "react-router-dom";
import Public from "./pages/public";
import Login from "./pages/login";
import Register from "./pages/register";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Public />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  }
]);
