import { createBrowserRouter } from "react-router-dom";
import Public from "./pages/public";
import Login from "./pages/login";
import Register from "./pages/register";
import Layout from "./pages/layout";
import News from "./pages/news";
import { redirect } from "react-router-dom";
import NewsId from "./pages/newsId";
import Profile from "./pages/profile";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Public />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
    loader: () => {
      const isLogin = localStorage.getItem("access_token");
      if (isLogin) {
        return redirect("/news");
      } else {
        return null;
      }
    },
  },

  {
    element: <Layout/>,
    loader: () => {
      if (!localStorage.getItem("access_token")) return redirect("/login");
      return null
    },
    children: [
      {
        path: "/news",
        element: <News />,
      },
      {
        path: "/news/:id",
        element: <NewsId />,
      },
      {
        path: "/profile/:id",
        element: <Profile/>,
      }
    ],
  }
]);
