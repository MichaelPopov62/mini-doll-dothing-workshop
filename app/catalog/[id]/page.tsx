
import styles from "@/app/catalog/[id]/product.module.css";
import {PageProps } from "@/types/types"
import { products } from "@/app/data/products";
import Image from "next/image";
import Link from "next/link";


export default async function ProductPage( {params}:{params:Promise <{id:string}>}) {
 const { id } = await params; // 👈 Розпаковуємо Promise

  const productId = Number(id);

    
  const product = products.find((p)=> p.id === productId);

  if (!product) {
    return <p>Товар не знайдено</p>;
  }
  return (
    <div className={styles.card}>
      <h1 className={styles.title}>{product.name}</h1>
      <Image className={styles.image} src={product.image || "/images/placeholder.png"} alt={product.name} width={400} height={400} />
      <p className={styles.text}>Ціна: {product.price} грн</p>
      <p className={styles.text}>Колекція: {product.collection}</p>
       <p className={styles.text}>Опис виробу, інша інформація.</p>

        {/* Кнопка повернення */}
      <Link href={`/catalog?collection=${encodeURIComponent(product.collection)}`}>
        <button className={styles.backButton}><span className={styles.arrow}>←</span>Повернутися до каталогу</button>
      </Link>
  
      </div>
  
  );
}





   
   