import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Page from "./Page.jsx";
import HelloWorld from "./app1/HelloWorld.jsx";
import Message from "./app2/Message.jsx";
import Counter from "./app3/Counter.jsx";
import Products from "./app4/Products.jsx";
import Timer from "./app5/Timer.jsx";
import RandomColor from "./app6/RandomColor.jsx";
import ProductsCard from "./app7/ProductsCard.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Page content={<HelloWorld />} />,
  },
  {
    path: "/message",
    element: <Page content={<Message />} />,
  },
  {
    path: "/counter",
    element: <Page content={<Counter />} />,
  },
  {
    path: "/products",
    element: <Page content={<Products />} />,
  },
  {
    path: "/timer",
    element: <Page content={<Timer />} />,
  },
  {
    path: "/randomcolor",
    element: <Page content={<RandomColor />} />,
  },
  {
    path: "/productscard",
    element: <Page content={<ProductsCard />} />,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
