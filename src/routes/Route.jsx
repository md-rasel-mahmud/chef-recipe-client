import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import SharedLayout from "../layouts/SharedLayout";


const router = createBrowserRouter([
    {
        path: '/',
        element: <SharedLayout/>,
        children: [
            {
                path: '/',
                element: <Home/>
            }
        ]
    }
])
export default router;