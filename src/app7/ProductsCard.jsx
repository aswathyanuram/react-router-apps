import axios from "axios";
import React, { useEffect, useState } from "react";
import styles from "./ProductsCard.module.css";

export default function ProductsCard() {
  const [data, setData] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((response) => {
        setData(response.data.products);
      })
      .catch((error) => {
        console.error("Error Occurred");
      });
  }, []);
  return (
    <div className={styles.cardContainer}>
      <div
        className={styles.buy}
        onClick={() => {
          console.log("Products: ", cart);
        }}
      >
        Buy All
      </div>
      <div className={styles.cart}>In Cart: {cart?.length}</div>
      {data.map((item) => {
        return (
          <div className={styles.container}>
            <div
              style={{
                height: "100px",
                width: "100px",
                backgroundImage: `url(${item.images?.[0]})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
            <div className={styles.details}>
              <div className={styles.title}>{item.title}</div>
              <div>Brand: {item?.brand ?? "N/A"}</div>
              <div>Price: ${item.price}</div>
              <div>Rating: {item.rating}</div>
              <button
                className={styles.btn}
                onClick={() => {
                  setCart((old) => [...old, item]);
                }}
              >
                Add to cart
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
