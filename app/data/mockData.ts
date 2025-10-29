
/*спільний для фронта і API*/


export interface User {
  id: number;
  name: string;
  email: string;
  role: "user" | "admin";
}

export interface Order {
  id: number;
  product: string;
  quantity: number;
  total: number;
  date: string;
  status: string;
}

export const users: User[] = [
  { id: 1, name: "Mik", email: "mik@example.com", role: "user" },
  { id: 2, name: "Liza", email: "liza@example.com", role: "user" },
  { id: 3, name: "Admin", email: "admin@example.com", role: "admin" },
];

export const orders: Order[] = [
  { id: 1, product: "Виріб 1", quantity: 2, total: 200, date: "2025-10-27", status: "Доставлено" },
  { id: 2, product: "Виріб 2", quantity: 1, total: 150, date: "2025-10-25", status: "В обробці" },
];
