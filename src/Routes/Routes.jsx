import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import AddProducts from "../Pages/AddProducts/AddProducts";
import SignUp from "../Pages/SignUp/SignUp";
import SignIn from "../SignIn/SignIn";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path: "/addProducts",
            element: <AddProducts></AddProducts>
        },
        {
            path: "/sign-up",
            element: <SignUp></SignUp>
        },
        {
            path: "/sign-in",
            element: <SignIn></SignIn>
        },
      ]
    },
  ]);