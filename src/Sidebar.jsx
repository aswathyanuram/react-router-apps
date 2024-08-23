import React from "react";
import styles from "./Sidebar.module.css";
import { useNavigate } from "react-router-dom";

export default function Sidebar() {
  const navigate = useNavigate();
  const links = [
    { path: "/message", title: "Message" },
    { path: "/counter", title: "Counter" },
    { path: "/products", title: "Products" },
    { path: "/timer", title: "Timer" },
    { path: "/randomcolor", title: "Random Color" },
    { path: "/productscard", title: "Products Card" },
    { path: "/todoapp", title: "ToDo" },
    { path: "/todoaxios", title: "ToDo Axios" },
  ];
  return (
    <div className={styles.sidebarContainer}>
      {links.map((link) => {
        return (
          <div
            className={styles.link}
            onClick={() => {
              navigate(link.path);
            }}
          >
            {link.title}
          </div>
        );
      })}
    </div>
  );
}
