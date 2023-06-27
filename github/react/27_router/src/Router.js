import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import App from "./App";
import User from "./pages/User";
import UserDetail from "./pages/UserDetail";
import Comment from "./pages/Comment";

const RouterData = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "",
                element: <Home />,
            },
            {
                path: "about",
                element: <About />,
            },
            {
                path: "redirect",
                element: <About />,
            },
        ],
        errorElement: <div>404</div>,
    },
    {
        path: "/user",
        element: <App />,
        children: [
            {
                path: "",
                element: <User />,
            },
            {
                path: ":userId",
                element: <UserDetail />,
                children: [
                    {
                        path: "comment",
                        element: <Comment />,
                    },
                ],
            },
        ],
    },
]);

export default RouterData;
