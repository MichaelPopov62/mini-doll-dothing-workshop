/*відображення і взаємодія , дозволяє натискати кнопки (клієнт).*/



"use client";

import { useState } from "react";
import styles from "./product.module.css";
import Image from "next/image";
import Link from "next/link";
import { useOrders } from "@/app/context/OrderContext";



interface Product {
  id: number;
  name: string;
  price: number;
  collection: string;
  image?: string;
}

interface ProductPageClientProps {
  product: Product;
}



export default function ProductPageClient({ product }: ProductPageClientProps) {
  console.log("Client Product:", product);
   const { addOrder } = useOrders();
   const [quantity, setQuantity] = useState(1);

  const handleOrder = () => {
    addOrder({
    id: product.id,
    productName: product.name,
    quantity,
    total: product.price * quantity,
    price: product.price,
  });
    alert(`Замовлення на ${quantity} шт. "${product.name}" створено (тимчасово)`);
  };

  return (
    <div className={styles.card}>
      <h1 className={styles.title}>{product.name}</h1>
      <Image
        className={styles.image}
        src={product.image || "/images/placeholder.png"}
        alt={product.name}
        width={120}
        height={120}
      />
      <p className={styles.text}>Ціна: {product.price} грн</p>
      <p className={styles.text}>Колекція: {product.collection}</p>
      <p className={styles.text}>Опис виробу, інша інформація.</p>

      <div className={styles.quantity}>
        <label htmlFor="quantity">Кількість: </label>
        <input
          id="quantity"
          type="number"
          min={1}
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          className={styles.quantityInput}
        />
      </div>

      <button onClick={handleOrder} className={styles.orderButton}>
        Замовити
      </button>

      <div style={{ marginTop: "10px" }}>
  <Link href="/user/orders">
    <button className={styles.orderListButton}>
      Перейти до моїх замовлень
    </button>
  </Link>
</div>


      <Link href={`/catalog?collection=${encodeURIComponent(product.collection)}`}>
        <button className={styles.backButton}>
          <span className={styles.arrow}>←</span> Повернутися до каталогу
        </button>
      </Link>
    </div>
  );
}
