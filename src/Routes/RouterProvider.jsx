import { createBrowserRouter } from "react-router-dom";
import Root from "../Outlet/Root";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <h1>murad</h1>
            }
        ]
    }
])

export default router;