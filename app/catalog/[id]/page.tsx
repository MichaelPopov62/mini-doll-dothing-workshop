// "use client"; 
// import styles from "@/app/catalog/[id]/product.module.css";
// import {PageProps } from "@/types/types"
// import { products } from "@/app/data/products";
// import Image from "next/image";
// import Link from "next/link";
// import { useState } from "react";

// interface Props {
//   productId: number;
// }
// export default function ProductPage( {params}:{params:{id:string}}) {
 

//   const productId = Number(params.id);

    
//   const product = products.find((p)=> p.id === productId);
//   const [quantity, setQuantity] = useState(1);

//   if (!product) {
//     return <p>Товар не знайдено</p>;
//   }
//     // Мок-функція для створення замовлення
//   const handleOrder = () => {
//     console.log("Створюємо замовлення:", {
//       productId: product.id,
//       productName: product.name,
//       quantity,
//       total: product.price * quantity,
//     });
//     alert(`Замовлення на ${quantity} шт. "${product.name}" створено (тимчасово)`);
//   };
//   return (
//     <div className={styles.card}>
//       <h1 className={styles.title}>{product.name}</h1>
//       <Image className={styles.image} src={product.image || "/images/placeholder.png"} alt={product.name} width={400} height={400} />
//       <p className={styles.text}>Ціна: {product.price} грн</p>
//       <p className={styles.text}>Колекція: {product.collection}</p>
//        <p className={styles.text}>Опис виробу, інша інформація.</p>

//         {/* Вибір кількості */}
//       <div className={styles.quantity}>
//         <label htmlFor="quantity">Кількість: </label>
//         <input
//           id="quantity"
//           type="number"
//           min={1}
//           value={quantity}
//           onChange={(e) => setQuantity(Number(e.target.value))}
//           className={styles.quantityInput}
//         />
//       </div>
//         {/* Кнопка замовлення */}
//       <button onClick={handleOrder} className={styles.orderButton}>
//         Замовити
//       </button>

//         {/* Кнопка повернення */}
//       <Link href={`/catalog?collection=${encodeURIComponent(product.collection)}`}>
//         <button className={styles.backButton}><span className={styles.arrow}>←</span>Повернутися до каталогу</button>
//       </Link>
  
//       </div>
  
//   );
// }


// catalog/[id]/page.tsx
import { products } from "@/app/data/products";
import ProductPageClient from "./ProductPageClient";



interface PageProps {
  params: Promise<{ id: string }>;
}

export default  async function ProductPage({ params }: PageProps) {
    const resolvedParams = await params;
    const productId = Number(resolvedParams.id);
  const product = products.find((p) => p.id === productId);

  if (!product) {
    return <p>Товар не знайдено</p>;
  }
   console.log("Product:", product);

  // Передаємо продукт у Client Component
  return <ProductPageClient product={product} />;
  
}



   
   