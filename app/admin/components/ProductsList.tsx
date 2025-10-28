/*Це компонент, який відповідає за відображення списку продуктів.*/
"use client";
import React from "react";
import { useOrders } from "@/app/context/OrderContext";
import { Product } from "@/types/types";

interface Props {
  products: Product[];
}

export default function ProductList({ products }: Props) {
  const { addOrder } = useOrders();

  return (
    <div>
      {products.map((product) => (
        <div
          key={product.id}
          style={{
            border: "1px solid #ccc",
            padding: "10px",
            margin: "10px 0",
            borderRadius: "8px",
          }}
        >
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p>Ціна: {product.price} грн</p>
          <button
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
