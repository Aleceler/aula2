import {createBrowserRouter, Navigate} from 'react-router-dom';
import Home from "../views/Home";
import About from "../views/About";
import Product from "../views/Product";
import Careers from "../views/Careers";

const RoutesConfig =  createBrowserRouter([
        {
            path: "/",
            element: <Home />,
        },
        {
            path: "/about",
            element: <About />,
            children: [
                {
                    path: "careers",
                    element: <Careers />,
                },
                ],
        },
        {
            path: "/product/:id",
            element: <Product />,
        },
        {
            path: "/old-product",
            element: <Navigate to="/product/123" replace />,
        },
    ]);


export default RoutesConfig