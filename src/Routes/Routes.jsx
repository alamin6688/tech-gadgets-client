import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import AddProducts from "../Pages/AddProducts/AddProducts";
import SignUp from "../Pages/SignUp/SignUp";
import SignIn from "../SignIn/SignIn";
import MyCart from "../Pages/MyCart/MyCart";
import PrivateRoute from "../Routes/PrivateRoute";
import ProductDetails from "../Pages/ProductDetails/ProductDetails";

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
            path: "/addProducts/:id",
            element: <ProductDetails></ProductDetails>
        },
        {
            path: "/myCart",
            element: <PrivateRoute><MyCart></MyCart></PrivateRoute>
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