import { createBrowserRouter } from "react-router-dom";
import Root from './../Root/Root';
import Home from './../pages/Home/Home';
import ErrorPage from "../pages/ErrorPage/ErrorPage";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path: "/",
          element: <Home></Home>
        }
      ]
    },
  ]);