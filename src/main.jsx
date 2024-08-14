import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Page from "./Page.jsx";
import HelloWorld from "./app1/HelloWorld.jsx";
import Message from "./app2/Message.jsx";
import Counter from "./app3/Counter.jsx";

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
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
