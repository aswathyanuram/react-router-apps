import React, { useState } from "react";
import Styles from "./RandomColor.module.css";

export default function RandomColor() {
  const [color, setColor] = useState("red");

  const changeColor = () => {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);

    setColor(`rgb(${red},${green},${blue})`);
  };
  return (
    <div className={Styles.container}>
      <button onClick={changeColor} className={Styles.btn}>
        Random Color
      </button>
      <div className={Styles.colorBox} style={{ backgroundColor: color }}></div>
    </div>
  );
}
