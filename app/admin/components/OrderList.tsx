
// список замовлень 
"use client";
import React from "react";
import { useOrders } from "@/app/context/OrderContext";
import Link from "next/link";
import { OrderItem } from "@/types/types";
import styles from "./OrderList.module.css";

export default function OrderList() {
  const { orders, removeOrder, clearOrders } = useOrders();

  if (!orders || orders.length === 0) {
    return <p>Замовлень ще немає</p>;
  }

  return (
    <div className={styles.orderList}>

      <ul className={styles.orderUl}>
        {orders.map((order: OrderItem) => (
          <li key={order.id} className={styles.orderCard}>
            <strong>{order.productName}</strong> — {order.quantity} шт. —{" "}
            {order.total} грн
            <button
              className={styles.deleteBtn}
              onClick={() => removeOrder(order.id)}
            >
              Видалити
            </button>
          </li>
        ))}
      </ul>

      <div className={styles.btnContainer}>
        <Link href="/catalog">
          <button className={styles.returnBtn}>
            повернутися до вибору
          </button>
        </Link>

        <button className={styles.clearBtn} onClick={clearOrders}>
          Очистити всі замовлення
        </button>
      </div>
    </div>
  );
}
