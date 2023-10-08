import {
    createBrowserRouter,
    RouterProvider,
    Outlet,
    useNavigate
} from "react-router-dom"
import { Albums , Photos } from "../views";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "albums",
                element: <Albums />,
            },
            {
                path: "albums/:id",
                element: <Photos />,
            }
        ]
    }
]);

function Router() {
    return <RouterProvider router={router} />
}

function Main() {
    const navigate = useNavigate()

    return <div>
        <h1>Header</h1>
        <button onClick={() => navigate('albums')}>Albums</button>
        <button onClick={() => navigate('/photos')}>Photos</button>
        <Outlet />

        <h1>Footer</h1>
    </div>
}

export default Router
