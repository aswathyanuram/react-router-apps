import axios from "axios";
import React, { useEffect, useState } from "react";
import { HashLoader } from "react-spinners";

export default function Products() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const loadData = () => {
    setLoading(true);
    axios
      .get("https://dummyjson.com/products")
      .then((response) => {
        setData(response.data.products);
        setLoading(false);
      })
      .catch((error) => {
        console.log("Error Occurred");
      });
  };
  return (
    <div>
      {!loading && (
        <button
          onClick={() => {
            loadData();
          }}
        >
          Load Data
        </button>
      )}
      {loading && <HashLoader />}
      {data.map((item) => {
        return <div>{item.title}</div>;
      })}
    </div>
  );
}
