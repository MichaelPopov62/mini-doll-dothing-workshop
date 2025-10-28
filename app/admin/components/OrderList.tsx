// список замовлень
"use client";
import React from "react";
import { useOrders } from "@/app/context/OrderContext";
import Link from "next/link";
import { OrderItem } from "@/types/types";



export default function OrderList() {
  const { orders, removeOrder, clearOrders } = useOrders();
  

  if (!orders || orders.length === 0) {
    return <p>Замовлень ще немає</p>;
  }

  return (
    <div className="order-list">
      <h2 style={{ marginBottom: "1rem",color:"blue" }}>Мої замовлення</h2>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {orders.map((orders:OrderItem) => (
          <li
            key={orders.id}
            className="order-card border p-4 rounded mb-2"
            style={{
              border: "1px solid #ccc",
              borderRadius: "8px",
              padding: "10px",
              marginBottom: "10px",
              backgroundColor: "#5a8ed7ff",
            }}
          >
            <strong>{orders.productName}</strong> — {orders.quantity} шт. —{" "}
            {orders.total} грн
              {/* кнопка видалення */}
                      <button
              style={{
                marginLeft: "10px",
                background: "yellow",
                color: "blue",
                border: "none",
                borderRadius: "4px",
                padding: "4px 8px",
                cursor: "pointer",
              }}
              onClick={() => removeOrder(orders.id)}
            >
              Видалити
            </button>
            </li>
        ))}
        </ul>
            
            {/* Кнопка повернутися до вибору */}
             <div style={{ marginTop: "1rem" }}></div>
             <Link href="/catalog">
                    <button
              style={{
                marginLeft: "10px",
                background: "yellow",
                color: "blue",
                border: "none",
                borderRadius: "4px",
                padding: "4px 8px",
                cursor: "pointer",
              }}
              
            >
               повернутися до вибору
            </button>
            </Link>

            <button
  onClick={clearOrders}
  style={{
    marginTop: "10px",
    background: "red",
    color: "white",
    border: "none",
    borderRadius: "4px",
    padding: "6px 10px",
    cursor: "pointer",
  }}
>
  Очистити всі замовлення
</button>
 </div>
    
  );
}
