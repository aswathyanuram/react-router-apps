import React from "react";
import styles from "./Page.module.css";
import Sidebar from "./Sidebar";

export default function Page({ content }) {
  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <Sidebar />
      </div>
      <div className={styles.content}>{content}</div>
    </div>
  );
}
