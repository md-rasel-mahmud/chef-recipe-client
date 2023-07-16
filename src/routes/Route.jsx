import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import SharedLayout from "../layouts/SharedLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Blog from "../pages/Blog";
import ChefRecipes from "../pages/ChefRecipes";
import ErrorPage from "../pages/ErrorPage";
import PrivetLayout from "../layouts/PrivateLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SharedLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "chef-recipes/:id",
        element: (
          <PrivetLayout>
            <ChefRecipes />
          </PrivetLayout>
        ),
        loader: ({ params }) =>
          fetch(
            `https://a-10-chef-recipe-server.vercel.app/single-chef/${params.id}`
          ),
      },
    ],
  },
]);
export default router;
