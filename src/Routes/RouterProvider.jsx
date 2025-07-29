import { createBrowserRouter } from "react-router-dom";
import Root from "../Outlet/Root";
import Home from "../pages/Home";
import Login from "../components/LogAndReg/Login";
import Register from "../components/LogAndReg/Register";
import Companies from "../pages/Companies";
import Profile from "../pages/Profile";
import PrivateRoutes from "./PrivateRoutes";
import CompanyDetails from "../pages/CompanyDetails";
import ErrorPage from "../pages/ErrorPage";
import About from "../pages/About";
import ForgotPassword from "../pages/ForgotPassword";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/companies',
                element: <Companies></Companies>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/forgot-password',
                element: <ForgotPassword></ForgotPassword>
            },
            {
                path: '/company-details/:id',
                element: <PrivateRoutes><CompanyDetails></CompanyDetails></PrivateRoutes>
            },
            {
                path: '/profile',
                element: <PrivateRoutes><Profile></Profile></PrivateRoutes>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
        ]
    }
])

export default router;