
import styles from "./page.module.css";
import Link from "next/link";
import { PageProps, CardProps } from "@/types/types";
import "modern-normalize";
import Container from "./components/container/Container";


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
    <Container>
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
    
    </Container>
    
  );
}

