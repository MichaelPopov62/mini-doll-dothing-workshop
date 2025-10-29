// types.ts
import { ReactNode } from "react";

export type ChildrenProps = {
  children: ReactNode;
};
//Модель продукту
export type Product = {
  id: number | string;
  name: string;
  description: string;
  price: number;
  images: string[];
   category?: string;
};
//для фронтенду 
export type OrderItem = {
  id: number | string;          // унікальний ідентифікатор картки
    productName: string;       // назва продукту
  price: number;       // ціна за одиницю
  quantity: number;    // кількість
  total?: number;      // необов'язково: price * quantity
};
export type PageProps = {
  params?: { id: string };
  subtitle?: string; // необов'язковий
   cards: CardProps[];
   title:string
};
// Тип для карток
export type CardProps = {
  label: string;       // Текст на картці
  href: string;        // Посилання для Link
};


// Тип для сторінки продукту з динамічним id
export type ItemPageProps = {
  params: {
    id: string; // сегмент [id] з URL
  };
  product?: Product; // якщо передаєш сам продукт
};
// Модель користувача
export type User = {
  name: string;
  email: string;
  password: string;
  role: "user" | "admin";
};
// Модель замовлення
export type Order = {
  userId: string; // або ObjectId, якщо працюєш з MongoDB
  productId: string;
  status: "pending" | "in_progress" | "done";
  comment?: string;
  createdAt: Date;
};
export type Section = "users" | "orders"| "products" | "settings";

