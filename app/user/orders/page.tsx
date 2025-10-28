 /*"Мої замовлення"*/
 "use client";
import React from "react";
import OrderList from "@/app/admin/components/OrderList";
import { useOrders } from "@/app/context/OrderContext";

export default function MyOrdersPage() {
  const { orders } = useOrders();

  return (
    <div style={{ padding: "20px" }}>
      <h1>Мої замовлення</h1>
      {orders.length === 0 ? (
        <p>Замовлень ще немає</p>
      ) : (
        <OrderList />
      )}
    </div>
  );
}
