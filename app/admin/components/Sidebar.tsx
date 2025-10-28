
// бокова навігаці

"use client";
import styles from "@/app/admin/components/Sidebar.module.css";
import { Section } from "@/types/types";



// тип пропсів
interface SidebarProps {
  activeSection: Section;
  setActiveSection: React.Dispatch<React.SetStateAction<Section>>;
}
export default function Sidebar({  activeSection, setActiveSection }: SidebarProps) {
  return (
    <aside className={styles.sidebar}>
      <h2 className={styles.sidebarHeader}>Адмін меню</h2>
      <nav className={styles.nav}>
        <button
  className={`${styles.navButton} ${activeSection === "users" ? styles.active : ""}`}
  onClick={() => setActiveSection("users")}
>Користувачі</button>

<button
  className={`${styles.navButton} ${activeSection === "orders" ? styles.active : ""}`}
  onClick={() => setActiveSection("orders")}
>Замовлення</button>

<button 
className={`${styles.navButton} ${activeSection === "products" ? styles.active : ""}`}
  onClick={() => setActiveSection("products")}
>Товари</button>

<button
  className={`${styles.navButton} ${activeSection === "settings" ? styles.active : ""}`}
  onClick={() => setActiveSection("settings")}
>Налаштування</button>

      </nav>
    </aside>
  );
}
