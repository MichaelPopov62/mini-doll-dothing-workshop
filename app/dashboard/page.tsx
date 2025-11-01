/*Тут користувач після логіну зможе бачити свою історію замовлень або запитів.
Список замовлень (можна просто мок-дані на фронтенді поки).Потім коли бекенд змінити масив на fetch або API-запит.
Кнопки/фільтри для сортування або перегляду деталей.
Структура сторінки: заголовок, таблиця або картки замовлень, футер.
------------------------------------------------------------------
Це особистий кабінет користувача, куди він потрапляє після логіну. Мета сторінки:
Показати користувачу його дані та історію замовлень/запитів
Що він купив або замовив раніше.
Статус кожного замовлення (нове, в обробці, доставлено).
Дати можливість взаємодії з замовленнями
Наприклад, переглянути деталі замовлення.
Можливо, відмінити або повторити замовлення (в майбутньому).
Зручна навігація по сайту
Може містити кнопки Перейти в каталог, Редагувати профіль, Вийти.
Тобто логіка сторінки: це персоналізований центр управління для користувача — все, що стосується його акаунта і історії дій, знаходиться тут*/


"use client"
import { useState } from "react";
import styles from "./dashboardStyles.module.css"
import { products } from "@/app/data/products";

interface Order {
  id: number;
  productId: number;
  quantity: number;
  date: string;
  status: string;
}

const mockOrders: Order[] = [
  { id: 1, productId: 3, quantity: 2, date: "2025-10-27", status: "Доставлено" },
  { id: 2, productId: 10, quantity: 1, date: "2025-10-25", status: "В обробці" },
  { id: 3, productId: 25, quantity: 3, date: "2025-10-20", status: "Скасовано" },
];
export default function DashboardPage() {
  const [orders] = useState(mockOrders);
   const handleClick = (action: string) => {
     console.log("Button clicked:", action);
  };
  
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Кабінет користувача</h1>
      {/* Кнопки UI */}
      <div className={styles.buttonGroup}>
        <button onClick={() => handleClick("catalog")} className={styles.actionBtn}>
          Перейти в каталог
        </button>
        <button onClick={() => handleClick("edit")} className={styles.actionBtn}>
          Редагувати профіль
        </button>
        <button onClick={() => handleClick("logout")} className={styles.actionBtn}>
          Вийти
        </button>
      </div>
      <h2 className={styles.subtitle}>Історія замовлень</h2>

      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.tableHeader}>ID</th>
            <th className={styles.tableHeader}>Товар</th>
            <th className={styles.tableHeader}>Кількість</th>
            <th className={styles.tableHeader}>Сума</th>
            <th className={styles.tableHeader}>Дата</th>
            <th className={styles.tableHeader}>Статус</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => {
              const product = products.find(p => p.id === order.productId);
              return(
                 <tr key={order.id}>
              <td  className={styles.tableCell}>{order.id}</td>
              <td  className={styles.tableCell}>{product?.name ?? "-"}</td>
              <td  className={styles.tableCell}>{order.quantity}</td>
              <td  className={styles.tableCell}>{product ? product.price * order.quantity : "-"}</td>
              <td className={styles.tableCell}>{order.date}</td>
                <td className={styles.tableCell}>{order.status}</td>
            </tr>
              );
})}
        </tbody>
      </table>
    </div>
  );
}
