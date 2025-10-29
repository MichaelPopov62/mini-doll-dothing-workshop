
/* Це компонент, який відповідає за відображення списку продуктів. */
"use client";
import React from "react";
import { useOrders } from "@/app/context/OrderContext";
import { Product } from "@/types/types";
import styles from "./ProductsList.module.css";

interface Props {
  products: Product[];
}

export default function ProductList({ products }: Props) {
  const { addOrder } = useOrders();

  return (
    <div className={styles.productList}>
      {products.map((product) => (
        <div key={product.id} className={styles.productCard}>
          <h3 className={styles.productTitle}>{product.name}</h3>
          <p className={styles.productDescription}>{product.description}</p>
          <p className={styles.productPrice}>Ціна: {product.price} грн</p>
          <button
            className={styles.addButton}
            onClick={() =>
              addOrder({
                id: product.id,
                productName: product.name,
                quantity: 1,
                total: product.price,
                price: product.price,
              })
            }
          >
            Додати до замовлення
          </button>
        </div>
      ))}
    </div>
  );
}
