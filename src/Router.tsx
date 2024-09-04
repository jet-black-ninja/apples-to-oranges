import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./styles/reset.scss";
import "./styles/global.scss"
import App from "./App";
import Home from "./components/Home/Home";
import Store from "./components/Store/Store";
import FruitView from "./components/FruitSection/FruitView/FruitView";
import Bag from "./components/Bag/Bag";
import ErrorPage from "./components/ErrorPage/ErrorPage";

const Router = () => {
    const router = createBrowserRouter([
        {
          path: "/",
          element: <App />,
          errorElement: <ErrorPage />,
          children: [
            {
              path: "/",
              element: <Home />,
            },
            {
              path: "/home",
              element: <Home />,
            },
            {
              path: "/store",
              element: <Store />,
            },
            {
              path: "/store/:slug",
              element: <FruitView />,
            },
            {
              path: "/bag",
              element: <Bag />,
            },
          ],
        },
      ]);

    return <RouterProvider router={router}/>
}
export default Router;