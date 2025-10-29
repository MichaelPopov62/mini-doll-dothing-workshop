/*картка товару в каталозі*/
// components/Catalog/CatalogItem.tsx
import Link from "next/link";
import styles from "./CatalogItem.module.css";
import Image from "next/image";


interface CatalogItemProps {
   id:number,
  name: string;
  image:string;//одна картка
  price:number
}

export default function CatalogItem({id,name,image,price} : CatalogItemProps) {
  return (
    
    <Link href={`/catalog/${id}`} className={styles.link}>
      {/* Посилання на сторінку товару */}
    <div className={styles.card}>
      {/* Зображення */}
      <Image 
      src={image} 
      alt={name} 
       width={300}
        height={300}
      className={styles.image}
       /> {/*якщо не головне фото, залиш false*/}  
{/* Назва */}
      <h3 className={styles.name}>{name}</h3>
       {/* Ціна */}
      <p className={styles.price}>{price} грн</p>
       <span className={styles.text}>Бажаєшь інформаціі тисни картку</span>
       </div>
      </Link>
   
  );
}
