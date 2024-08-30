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
import ToDo from "./app8/ToDo.jsx";
import ToDoAxios from "./app9/ToDoAxios.jsx";
import WeekToDo from "./app10/WeekToDo.jsx";
import Calculator from "./app11/Calculator.jsx";

export const ALL_ROUTES = [
  {
    path: "/",
    title: "HelloWorld",
    element: <Page content={<HelloWorld />} />,
  },
  {
    path: "/message",
    title: "Message",
    element: <Page content={<Message />} />,
  },
  {
    path: "/counter",
    title: "Counter",
    element: <Page content={<Counter />} />,
  },
  {
    path: "/products",
    title: "Simple Products",
    element: <Page content={<Products />} />,
  },
  {
    path: "/timer",
    title: "Timer",
    element: <Page content={<Timer />} />,
  },
  {
    path: "/randomcolor",
    title: "Random Color",
    element: <Page content={<RandomColor />} />,
  },
  {
    path: "/productscard",
    title: "Products Card",
    element: <Page content={<ProductsCard />} />,
  },

  {
    path: "/todoapp",
    title: "Simple ToDo",
    element: <Page content={<ToDo />} />,
  },
  {
    path: "/todoaxios",
    title: "ToDo Axios",
    element: <Page content={<ToDoAxios />} />,
  },
  {
    path: "/weektodo",
    title: "Week Todo",
    element: <Page content={<WeekToDo />} />,
  },
  {
    path: "/calculator",
    title: "Calculator",
    element: <Page content={<Calculator />} />,
  },
];

const router = createBrowserRouter(ALL_ROUTES);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
