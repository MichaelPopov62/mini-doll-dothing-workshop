/*Тут буде адмін, який керує всіма замовленнями та користувачами.

Можна зробити компоненти:

Список всіх користувачів.

Список всіх замовлень.

Кнопки Редагувати, Видалити, Переглянути.

Навігація може бути через sidebar.*/


import styles from "./admin.module.css";
import Sidebar from "./components/Sidebar";
import { users, orders } from "./data/mockData"; // імпорт даних


export default function AdminPage() {
   // Динамічні підрахунки
  const ordersToday = orders.filter(order => order.date === "2025-10-27");
  const pendingOrders = orders.filter(order => order.status === "В обробці");

  return (
    <div className={styles.adminLayout}>
      <Sidebar />

      <main className={styles.mainContent}>
        <header className={styles.header}>
          <h1 className={styles.headerTitle}>Адмін-панель</h1>
          <p className={styles.headerText}>Керуйте користувачами, замовленнями та контентом сайту.</p>
        </header>

        <section className={styles.dashboardSection}>
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
         { /*<section className={styles.tablesSection}>
          <h2>Користувачі</h2>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>ID</th>
                <th>name</th>
                <th>Email</th>
                <th>role</th>
              </tr>
            </thead>
            <tbody>
              {users.map(user => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.role}</td>
                </tr>
              ))}
            </tbody>
          </table>

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
        </section> */}
      </main>
    </div>
  );
}
