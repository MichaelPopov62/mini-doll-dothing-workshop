/*Тут користувач після логіну зможе бачити свою історію замовлень або запитів.
Список замовлень (можна просто мок-дані на фронтенді поки).Потім коли бекенд змінити масив на fetch або API-запит.
Кнопки/фільтри для сортування або перегляду деталей.
Структура сторінки: заголовок, таблиця або картки замовлень, футер.
------------------------------------------------------------------
Це особистий кабінет користувача, куди він потрапляє після логіну. Мета сторінки:
Показати користувачу його дані та історію замовлень/запитів
Що він купив або замовив раніше.
Статус кожного замовлення (нове, в обробці, доставлено).
Дати можливість взаємодії з замовленнями
Наприклад, переглянути деталі замовлення.
Можливо, відмінити або повторити замовлення (в майбутньому).
Зручна навігація по сайту
Може містити кнопки Перейти в каталог, Редагувати профіль, Вийти.
Тобто логіка сторінки: це персоналізований центр управління для користувача — все, що стосується його акаунта і історії дій, знаходиться тут*/


"use client"
import { useState, useEffect } from "react";
import styles from "./dashboardStyles.module.css"
import { products } from "@/app/data/products";
import { useRouter } from "next/navigation";
import axios from "axios";
import { AxiosError}  from "axios";

// Тип для замовлення на фронтенді
interface Order {
  id: number;
  productId: number;
  quantity: number;
  date: string;
  status: string;

}// Тип для даних, що приходять з бекенду
interface BackendOrder {
  id: number;
  productName: string;
  quantity: number;
  total?: number;
  price?: number;
  date?: string;
  status?: string;
}
// Тип відповіді бекенду (FIX)
interface OrdersResponse {
  orders: BackendOrder[]; // якщо бекенд повертає { orders: [...] }
}

export default function DashboardPage() {
   const router = useRouter();
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [sortType, setSortType] = useState <"date" | "status">("date"); // тип сортування



  // --- отримання замовлень з бекенду
   useEffect(() => {  

    const fetchOrders = async () => {
      setLoading(true);
      try{
       // --- доступ до localStorage лише на клієнті
    const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;
    if (!token) {
      setOrders([]);
      setLoading(false);
      return;
    }
      // Виклик API (FIX)
        const res = await axios.get<OrdersResponse>("/api/orders", {
          headers: { Authorization: `Bearer ${token}` },
        });
    
      console.log("Backend orders:", res.data); 
      const backendOrders: BackendOrder[] = Array.isArray(res.data)
          ? res.data
          : Array.isArray((res.data as OrdersResponse).orders)
           ? (res.data as OrdersResponse).orders
           : [];
           console.log("Backend orders:", res.data);

        // перетворюємо на наш Order тип
          const mappedOrders: Order[] =  backendOrders.map((o) => ({
        id: o.id,
        productId: products.find(p => p.name === o.productName)?.id ?? 0,
        quantity: o.quantity,
        date: o.date ?? new Date().toISOString().slice(0,10), // тимчасова дата
        status: o.status ?? "В обробці", // якщо статус не прийшов
      }));
      setOrders(mappedOrders);
    }
    catch (err: unknown) {
      // перевіряємо, чи це AxiosError
      if (axios.isAxiosError(err)) {
         const axiosErr: AxiosError = err;
        console.error(axiosErr.message);
      } else if (err instanceof Error) {
        console.error(err.message);
      } else {
        console.error("Невідома помилка");
      }
      setError("Не вдалося завантажити замовлення");
      setOrders([]); // очищення при помилці
    } finally {
      setLoading(false);
    }
  };

  fetchOrders();}, []);
    
  // --- дії кнопок
   const handleClick = (action: string) => {
    switch (action) {
      case "catalog":
        router.push("/catalog");
        break;
      case "edit":
        router.push("/profile/edit");
        break;
      case "logout":  if (typeof window !== "undefined") {
        localStorage.removeItem("token");}
  
        router.push("/login");
        break;
    }
  };
   // --- сортування
   const sortOrders = (newSortType:"date" | "status") => {
    const sorted = [...orders];
    if (newSortType === "date"){
      sorted.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
      );
    }
    if (newSortType === "status"){
      sorted.sort((a, b) => a.status.localeCompare(b.status));}

    setOrders(sorted);
     setSortType(newSortType); 
    
  };

  if (loading) return <p>Завантаження замовлень...</p>;
  if (error) return <p>{error}</p>;


  
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Кабінет користувача</h1>
      {/* Кнопки UI */}
      <div className={styles.buttonGroup}>
        <button onClick={() => handleClick("catalog")} className={styles.actionBtn}>
          Перейти в каталог
        </button>
        <button onClick={() => handleClick("edit")} className={styles.actionBtn}>
          Редагувати профіль
        </button>
        <button onClick={() => handleClick("logout")} className={styles.actionBtn}>
          Вийти
        </button>
      </div>
      <h2 className={styles.subtitle}>Історія замовлень</h2>
       <div className={styles.sortGroup}>
        <label>Сортувати: </label>
        <select
         value={sortType} 
         onChange={(e) => sortOrders(e.target.value as "date" | "status")}>
          
          <option value="date">За датою</option>
          <option value="status">За статусом</option>
        </select>
      </div>

      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.tableHeader}>ID</th>
            <th className={styles.tableHeader}>Товар</th>
            <th className={styles.tableHeader}>Кількість</th>
            <th className={styles.tableHeader}>Сума</th>
            <th className={styles.tableHeader}>Дата</th>
            <th className={styles.tableHeader}>Статус</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => {
              const product = products.find(p => p.id === order.productId);
              return(
                 <tr key={order.id}>
              <td  className={styles.tableCell}>{order.id}</td>
              <td  className={styles.tableCell}>{product?.name ?? "-"}</td>
              <td  className={styles.tableCell}>{order.quantity}</td>
              <td  className={styles.tableCell}>{product ? product.price * order.quantity : "-"}</td>
              <td className={styles.tableCell}>{order.date}</td>
                <td className={styles.tableCell}>{order.status}</td>
                <td className={styles.tableCell}>
                   <button
                    className={styles.detailBtn}
                    onClick={() => router.push(`/orders/${order.id}`)}
                  >
                    Деталі
                  </button>
                </td>
            </tr>
              );
})}
        </tbody>
      </table>
    </div>
  );
}
