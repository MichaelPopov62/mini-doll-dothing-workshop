
// бокова навігаці

"use client";
import styles from "@/app/admin/components/Sidebar.module.css";

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <h2 className={styles.sidebarHeader}>Адмін меню</h2>
      <nav className={styles.nav}>
        <button className={styles.navButton}>Користувачі</button>
        <button className={styles.navButton}>Замовлення</button>
        <button className={styles.navButton}>Товари</button>
        <button className={styles.navButton}>Налаштування</button>
      </nav>
    </aside>
  );
}
