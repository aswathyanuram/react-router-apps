import React from "react";
import styles from "./Sidebar.module.css";
import { useNavigate } from "react-router-dom";

export default function Sidebar() {
  const navigate = useNavigate();
  const links = [
    { path: "/message", title: "Message" },
    { path: "/counter", title: "Counter" },
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
