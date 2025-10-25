// types.ts
import { ReactNode } from "react";

export type ChildrenProps = {
  children: ReactNode;
};
//Модель продукту
export type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  images: string;
   category?: string;
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

// export type CatalogItemProps = {
//   id:number,
//   name: string;
//   image:string;//одна картка
//   price:number
// };
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
