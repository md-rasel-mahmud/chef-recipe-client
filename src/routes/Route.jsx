import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import SharedLayout from "../layouts/SharedLayout";
import Login from "../pages/Login";


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
            }
        ]
    }
])
export default router;