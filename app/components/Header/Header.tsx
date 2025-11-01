"use client";

import Link from "next/link";
import styles from "./Header.module.css"
import Image from "next/image";
import { useOrders } from "@/app/context/OrderContext";//тимчасово



export default function Header() {
   const { orders } = useOrders();
  console.log("🔎 Поточні замовлення:", orders);//для реоеввірки
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logoContainer} aria-label="Ляльковий Handmade — головна">
      
       {/* Логотип зліва */}
       <div className={styles.logoWrapper}>
        <Image
          src="/images/icons-doll.svg"
          width={80}
          height={80}
          alt="Логотип Ляльковий Handmade"
          className={styles.logo}
        />
       
        </div>
        {/* Надпис справа */}
        <span className={styles.logoText}>
          <span className={styles.logoTextYellow}>Ляльковий</span>{" "}
          <span className={styles.logoTextBlue}>handmade</span>
        </span>
        
      </Link>

        <h1 className={styles.headerTitle}>МініОдяГ  Handmade</h1>

      {/* Навігація справа */}
<nav className={styles.nav}>
<Link href="/" className={styles.navLink}>Головна</Link>
<Link href="/catalog" className={styles.navLink}>Каталог</Link>
<Link href="/login" className={styles.navLink}>Вхід</Link>
<Link href="/dashboard" className={styles.navLink}>Кабінет</Link>
</nav>
    </header>
  );
}
