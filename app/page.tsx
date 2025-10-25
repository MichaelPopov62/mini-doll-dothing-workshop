// import styles from "./page.module.css";
// import Link from "next/link";


// export default function HomePage() {
//   return (
//   <div className={styles.homePage}>
//     <div className={styles.container}>
//       <h1 className={styles.title}>Майстерня одягу для ляльок</h1>

//       <div className={styles.grid}>
//         <Link href="/catalog?collection=Майстерня">
//         <div className={styles.card}>Майстерня</div>
//         </Link>
//         <Link href="/catalog?collection=Зразок%20виробів-низ">
//         <div className={styles.card}> Зразок виробів-низ</div>
//         </Link>
//         <Link href="/catalog?collection=Зразок%20виробів-верх">
//         <div className={styles.card}>Зразок виробів-верх</div>
//         </Link>
//         <Link href="/catalog?collection=Зразок%20виробів-взуття">
//         <div className={styles.card}>Зразок виробів-взуття</div>
//         </Link>
//         <Link href="/catalog?collection=Зрозок%20лялок">
//         <div className={styles.card}>Зрозок лялок</div>
//         </Link>
//         <Link href="/catalog?collection=Зразок%20лялок-літо-весна">
//         <div className={styles.card}>Зрахок лялок-літо-весна</div> 
//         </Link>
//         <Link href="/catalog?collection=Зразок%20лялок-осінь-зима">        <div className={styles.card}>Зразок лялок-осінь-зима</div>
//         </Link>
//         <Link href="/catalog?collection=Упаковки">
//         <div className={styles.card}>Упаковки</div>
//         </Link>
      
//       </div>
//     </div>
//     </div>
  
//   );
// }

import styles from "./page.module.css";
import Link from "next/link";
import { PageProps, CardProps } from "@/types/types";

// Статичні дані
const pageData: PageProps = {
  title: "Майстерня одягу для ляльок",
  subtitle: "Ласкаво просимо до нашої колекції!",
  cards: [
    { label: "Майстерня", href: "/catalog?collection=Майстерня" },
    { label: "Зразок виробів-низ", href: "/catalog?collection=Зразок%20виробів-низ" },
    { label: "Зразок виробів-верх", href: "/catalog?collection=Зразок%20виробів-верх" },
    { label: "Зразок виробів-взуття", href: "/catalog?collection=Зразок%20виробів-взуття" },
    { label: "Зрозок лялок", href: "/catalog?collection=Зрозок%20лялок" },
    { label: "Зрахок лялок-літо-весна", href: "/catalog?collection=Зразок%20лялок-літо-весна" },
    { label: "Зразок лялок-осінь-зима", href: "/catalog?collection=Зразок%20лялок-осінь-зима" },
    { label: "Упаковки", href: "/catalog?collection=Упаковки" },
  ],
};

export default function HomePage() {
  return (
    <div className={styles.homePage}>
      <div className={styles.container}>
        <h1 className={styles.title}>{pageData.title}</h1>
        {pageData.subtitle && <h2 className={styles.subtitle}>{pageData.subtitle}</h2>}

        <div className={styles.grid}>
          {pageData.cards.map((card: CardProps, idx: number) => (
            <Link key={idx} href={card.href}>
              <div className={styles.card}>{card.label}</div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

