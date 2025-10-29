 /*"Мої замовлення"*/
 "use client";
import React from "react";
import OrderList from "@/app/admin/components/OrderList";
import { useOrders } from "@/app/context/OrderContext";
import styles from "./MyOrdersPage.module.css";

export default function MyOrdersPage() {
  const { orders } = useOrders();

  return (
    <div style={{ padding: "20px" }}>
      <h1 className={styles.pageTitle}>Мої замовлення</h1>
      {orders.length === 0 ? (
        <p className={styles.text}>Замовлень ще немає</p>
      ) : (
        <OrderList />
      )}
    </div>
  );
}
