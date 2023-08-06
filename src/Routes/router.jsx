import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../layout/Main";
import LandingPage from "../Components/LandingPage/LandingPage";


import Error from "../ErrorPage/Error";
import Dashboard from "../layout/Dashboard";
import AllUsers from "../Components/Dashboard/AdminPanel/AllUsers/AllUsers";
import UserFetaures from "../Components/Dashboard/UserPanel/UserFetaures";
import DataEntryFeatures from "../Components/Dashboard/UserPanel/DataEntryFeatures";
import SignIn from "../Components/SecurityLogin/SignIn";
import SignUp from "../Components/Register/SignUp";





export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        errorElement: <Error />,
        children: [
            {
                path: '/',
                element: <LandingPage />
            },
            {
                path: '/signin',
                element: <SignIn />
            },
            {
                path: '/signup',
                element: <SignUp />
            }

        ]
    },
    {
        path: '/dashboard',
        element: <Dashboard />,
        errorElement: <Error />,
        children: [
            {
                path: '/dashboard/usersFeatures',
                element: <UserFetaures />
            },
            {
                path: '/dashboard/userDataEntry',
                element: <DataEntryFeatures />
            },

            {
                path: '/dashboard/users',
                element: <AllUsers />
            },

        ]
    }
]);