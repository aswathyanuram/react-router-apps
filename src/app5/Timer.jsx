import React, { useEffect, useState } from "react";

export default function Timer() {
  const [time, setTime] = useState(new Date());
  const [color, setColor] = useState("black");

  useEffect(() => {
    setInterval(() => {
      setTime(new Date());
    }, 1000);
  }, []);

  return (
    <div>
      <select
        onChange={(e) => {
          setColor(e.target.value);
        }}
      >
        <option value="red">Red</option>
        <option value="green">Green</option>
        <option value="blue">Blue</option>
      </select>
      <div style={{ color: color }}>
        {time.getHours()} : {time.getMinutes()} : {time.getSeconds()}
      </div>
    </div>
  );
}
