//Це сторінка каталогу — тобто список усіх виробів.
//Вона імпортує дані (products) і для кожного викликає компонент CatalogItem.//

"use client"; // Щоб працювали useState та динаміка

import { useState } from "react";
import styles from "./catalog.module.css";
import { products } from "@/app/data/products";
import CatalogItem from "../components/Catalog/CatalogItem";

export const collections = [
  "Майстерня",
  "Зразок виробів-низ",
  "Зразок виробів-верх",
  "Зразок виробів-взуття",
  "Зразок лялок",
  "Зразок лялок-літо-весна",
  "Зразок лялок-осінь-зима",
  "Упаковки",
];
export default function CatalogPage() {
 
const [activeCollection, setActiveCollection] = useState(collections[0]);
 // Фільтруємо товари за активною колекцією
 const filteredProducts = products.filter(
    (item) => item.collection === activeCollection
  );


  return (
    <div className={styles.container}>
      <h1 className={styles.title}>ВСЕ ДЛЯ ТЕБЕ НА ТВІЙ СМАК</h1>
      <div className={styles.catalogWrapper}>
        {/* Сайдбар */}
        <aside className={styles.sidebar}>
          <ul>
            {collections.map((item) => (
              <li
                key={item}
                className={item === activeCollection ? styles.active : ""}
                onClick={() => setActiveCollection(item)}
              >
                {item}
              </li>
            ))}
          </ul>
        </aside>

        {/* Контент праворуч */}
        <div className={styles.content}>
          {/* Тут поки просто 6 карток для прикладу */}
          {filteredProducts.map((product) => (
            <CatalogItem
              key={product.id}
              id={product.id}
              name={product.name}
              image={product.image}
              price={product.price}
            />
            ))}     
        </div>
      </div>
    </div>
  );
}
