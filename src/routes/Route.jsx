import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import SharedLayout from "../layouts/SharedLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";


const router = createBrowserRouter([
    {
        path: '/',
        element: <SharedLayout/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: 'login',
                element: <Login/>
            },
            {
                path: 'register',
                element: <Register/>
            }
        ]
    }
])
export default router;