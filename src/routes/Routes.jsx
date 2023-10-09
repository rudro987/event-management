import { createBrowserRouter } from "react-router-dom";
import Main from "../layOut/Main";
import Home from "../pages/Home/Home";
import Services from "../pages/Services/Services";
import Login from "../pages/Authentication/Login";
import Register from "../pages/Authentication/Register";
import Events from "../pages/Events/Events";
import PrivateRoutes from "./PrivateRoutes";
import ErrorPage from "../pages/ErrorPage/ErrorPage";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path: "/events",
            element: <Services></Services>
        },
        {
            path: "events/:id",
            element: <PrivateRoutes><Events></Events></PrivateRoutes>
        },
        {
            path: "/about",
            element: <h1>About page</h1>
        },
        {
            path: "/contact",
            element: <h1>Contact page</h1>
        },
        {
            path: "/login",
            element: <Login></Login>
        },
        {
            path: "/register",
            element: <Register></Register>
        }
      ]
    },
  ]);

  export default router;