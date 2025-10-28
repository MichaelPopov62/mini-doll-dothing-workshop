/*Тут буде адмін, який керує всіма замовленнями та користувачами.

Можна зробити компоненти:

Список всіх користувачів.

Список всіх замовлень.

Кнопки Редагувати, Видалити, Переглянути.

Навігація може бути через sidebar.*/
"use client"; 
import { useState } from "react";
import styles from "./admin.module.css";

import Sidebar from "@/app/admin/components/Sidebar";
import { users, orders } from "@/app/admin/data/mockData"; // імпорт даних
import { Section } from "@/types/types";




export default function AdminPage() {
   // Стан для активного розділу
  const [activeSection, setActiveSection] = useState<Section>("users");

   // Динамічні підрахунки
  const ordersToday = orders.filter(order => order.date === "2025-10-27");
  const pendingOrders = orders.filter(order => order.status === "В обробці");

  return (
    <div className={styles.adminLayout}>
      <Sidebar activeSection={activeSection} setActiveSection={ setActiveSection}/>

      <main className={styles.mainContent}>
         {activeSection === "users" && (
          <>
        <header className={styles.header}>
          <h1 className={styles.headerTitle}>Адмін-панель</h1>
          <p className={styles.headerText}>Керуйте користувачами, замовленнями та контентом сайту.</p>
        </header>

        <section className={`${styles.dashboardSection} ${styles.activeContent}`}>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Загальна кількість користувачів</h3>
            <p className={styles.cardValue}>{users.length}</p>
          </div>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Замовлень сьогодні</h3>
            <p  className={styles.cardValue}>{ordersToday.length}</p>
          </div>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Очікує на обробку</h3>
            <p className={styles.cardValue}>{pendingOrders.length}</p>
          </div>
        </section>
        </>
         )}
        
        {activeSection === "orders" && (
          <section className={`${styles.tablesSection} ${styles.activeContent}`}>
            <h2>Замовлення</h2>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Товар</th>
                  <th>Кількість</th>
                  <th>Сума</th>
                  <th>Дата</th>
                  <th>Статус</th>
                </tr>
              </thead>
              <tbody>
                {orders.map(order => (
                  <tr key={order.id}>
                    <td>{order.id}</td>
                    <td>{order.product}</td>
                    <td>{order.quantity}</td>
                    <td>{order.total}</td>
                    <td>{order.date}</td>
                    <td>{order.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        )}

        {activeSection === "products" && (
          <div className={`${styles.placeholder} ${styles.activeContent}`}>
            <h2>Товари</h2>
            <p>Сторінка в розробці...</p>
          </div>
        )}

        {activeSection=== "settings" && (
          <div className={`${styles.placeholder} ${styles.activeContent}`}>
            <h2>Налаштування</h2>
            <p>Тут будуть параметри керування сайтом.</p>
          </div>
        )}
        
      </main>
    </div>
  );
}
