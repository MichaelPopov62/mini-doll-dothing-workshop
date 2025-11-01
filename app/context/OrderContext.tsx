"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";
import{ OrderItem } from "@/types/types";



interface OrderContextType {
  orders: OrderItem[];
  addOrder: (item: OrderItem) => void;
  removeOrder: (id: number| string) => void;
   clearOrders: () => void; 
}

const OrderContext = createContext<OrderContextType | undefined>(undefined);

export const OrderProvider = ({ children }: { children: ReactNode }) => {
  const [orders, setOrders] = useState<OrderItem[]>([]);

  const addOrder = (item: OrderItem) => {
    setOrders(prev => {
      const exists = prev.find(o => o.id === item.id);
      if (exists) {
         // Якщо товар вже є, додаємо кількість і оновлюємо total
        return prev.map(o =>
          o.id === item.id ?  {
                ...o,
                quantity: o.quantity + item.quantity,
                total: (o.total || 0) + (item.total?? item.price * item.quantity)
               }
             : o
        );
      }
       // Якщо товар новий — додаємо до списку
      return [...prev, item];
    });
  };

  const removeOrder = (id: number | string) => {
    setOrders(prev => prev.filter(o => o.id !== id));
  };
    // 🔴 Очистити всі замовлення (додатково, може стати у нагоді)
  const clearOrders = () => {
    setOrders([]);
  };

  return (
    <OrderContext.Provider value={{ orders, addOrder, removeOrder, clearOrders }}>
      {children}
    </OrderContext.Provider>
  );
};

export const useOrders = () => {
  const context = useContext(OrderContext);
  if (!context) throw new Error("useOrders must be used within OrderProvider");
  return context;
};
