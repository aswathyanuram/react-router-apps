import React from "react";
import styles from "./Sidebar.module.css";
import { useNavigate } from "react-router-dom";
import { ALL_ROUTES } from "./main";

export default function Sidebar() {
  const navigate = useNavigate();
  const links = ALL_ROUTES;
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
