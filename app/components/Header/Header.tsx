import Link from "next/link";
import styles from "./Header.module.css"
import Image from "next/image";

export default function Header() {
  return (
    <header className={styles.header}>
       {/* Логотип зліва */}
        <Image src="/images/logo.png" alt="Логотип" width={150} height={150} className={styles.logo}/>
        <h1 className={styles.headerTitle}>МініОдяГ • Handmade
</h1>
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
