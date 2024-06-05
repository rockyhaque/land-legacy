import { createBrowserRouter } from "react-router-dom";
import Root from './../Root/Root';
import Home from './../pages/Home/Home';
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import LandDetails from "../pages/LandDetails/LandDetails";
import Contact from "../pages/Contact/Contact";
import PrivateRoute from "./PrivateRoute";
import UpdateProfile from "../pages/UpdateProfile/UpdateProfile";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
          loader: () => fetch('/lands.json')
        },
        {
          path: "/login",
          element: <Login></Login>
        },
        {
          path: "/register",
          element: <Register></Register>
        },
        {
          path: "/contact",
          element: <PrivateRoute><Contact></Contact></PrivateRoute>
        },
        {
          path: "/land/:id",
          element: <PrivateRoute><LandDetails></LandDetails></PrivateRoute>
        },
        {
          path: "updateProfile",
          element: <UpdateProfile></UpdateProfile>
        }
      ]
    },
  ]);