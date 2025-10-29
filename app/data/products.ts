// data/products.ts Це файл із даними про вироби (продукти).список всіх товарів
//поки немає бази даних, тому зручно створити тимчасове джерело даних у вигляді масиву об'єктів.Потім просто імпортуєш цей масив у будь-яку сторінку//
// interface Product {
//   id: number;
//   name: string;
//   description: string;
//   price: number;
//   images: string;
//    category?: string;
// }
export const products = [
  // Колекція: Майстерня
  { id: 1, name: "Виріб 1", image: "/images/item1.jpg", price: 100, collection: "Майстерня" },
  { id: 2, name: "Виріб 2", image: "/images/item2.jpg", price: 150, collection: "Майстерня" },
  { id: 3, name: "Виріб 3", image: "/images/item3.jpg", price: 200, collection: "Майстерня" },
  { id: 4, name: "Виріб 4", image: "/images/item4.jpg", price: 100, collection: "Майстерня" },
  { id: 5, name: "Виріб 5", image: "/images/item5.jpg", price: 150, collection: "Майстерня" },
  { id: 6, name: "Виріб 6", image: "/images/item6.jpg", price: 200, collection: "Майстерня" },
  // Колекція: Зразок виробів-низ
   { id: 7, name: "Виріб 1", image: "/images/item7.jpg", price: 100, collection: "Зразок виробів-низ" },
  { id: 8, name: "Виріб 2", image: "/images/item8.jpg", price: 150, collection: "Зразок виробів-низ" },
  { id: 9, name: "Виріб 3", image: "/images/item9.jpg", price: 200, collection: "Зразок виробів-низ" },
  { id: 10, name: "Виріб 4", image: "/images/item10.jpg", price: 100, collection: "Зразок виробів-низ" },
  { id: 11, name: "Виріб 5", image: "/images/item11.jpg", price: 150, collection: "Зразок виробів-низ" },
  { id: 12, name: "Виріб 6", image: "/images/item12.jpg", price: 200, collection: "Зразок виробів-низ" },
  //Колекці:Зразок виробів-верх
   { id: 13, name: "Виріб 1", image: "/images/item13.jpg", price: 100, collection: "Зразок виробів-верх" },
  { id: 14, name: "Виріб 2", image: "/images/item14.jpg", price: 150, collection: "Зразок виробів-верх" },
  { id: 15, name: "Виріб 3", image: "/images/item15.jpg", price: 200, collection: "Зразок виробів-верх" },
  { id: 16, name: "Виріб 4", image: "/images/item16.jpg", price: 100, collection: "Зразок виробів-верх" },
  { id: 17, name: "Виріб 5", image: "/images/item17.jpg", price: 150, collection: "Зразок виробів-верх" },
  { id: 18, name: "Виріб 6", image: "/images/item18.jpg", price: 200, collection: "Зразок виробів-верх" },
  //Колекці:Зразок виробів-взуття
   { id: 19, name: "Виріб 1", image: "/images/item19.jpg", price: 100, collection: "Зразок виробів-взуття" },
  { id: 20, name: "Виріб 2", image: "/images/item20.jpg", price: 150, collection: "Зразок виробів-взуття" },
  { id: 21, name: "Виріб 3", image: "/images/item21.jpg", price: 200, collection: "Зразок виробів-взуття" },
  { id: 22, name: "Виріб 4", image: "/images/item22.jpg", price: 100, collection: "Зразок виробів-взуття" },
  { id: 23, name: "Виріб 5", image: "/images/item23.jpg", price: 150, collection: "Зразок виробів-взуття" },
  { id: 24, name: "Виріб 6", image: "/images/item24.jpg", price: 200, collection: "Зразок виробів-взуття" },
  //Колекція:Зразок лялок 
   { id: 25, name: "Виріб 1", image: "/images/item25.jpg", price: 100, collection: "Зразок лялок" },
  { id: 26, name: "Виріб 2", image: "/images/item26.jpg", price: 150, collection: "Зразок лялок" },
  { id: 27, name: "Виріб 3", image: "/images/item27.jpg", price: 200, collection: "Зразок лялок" },
  { id: 28, name: "Виріб 4", image: "/images/item28.jpg", price: 100, collection: "Зразок лялок" },
  { id: 29, name: "Виріб 5", image: "/images/item29.jpg", price: 150, collection: "Зразок лялок" },
  { id: 30, name: "Виріб 6", image: "/images/item30.jpg", price: 200, collection: "Зразок лялок" },
  //Колекція:Зразок лялок-літо-весна
   { id: 31, name: "Виріб 1", image: "/images/item31.jpg", price: 100, collection: "Зразок лялок-літо-весна" },
  { id: 32, name: "Виріб 2", image: "/images/item32.jpg", price: 150, collection: "Зразок лялок-літо-весна" },
  { id: 33, name: "Виріб 3", image: "/images/item33.jpg", price: 200, collection: "Зразок лялок-літо-весна" },
  { id: 34, name: "Виріб 4", image: "/images/item34.jpg", price: 100, collection: "Зразок лялок-літо-весна" },
  { id: 35, name: "Виріб 5", image: "/images/item35.jpg", price: 150, collection: "Зразок лялок-літо-весна" },
  { id: 36, name: "Виріб 6", image: "/images/item36.jpg", price: 200, collection: "Зразок лялок-літо-весна" },
  //Колекція:Зразок лялок-осінь-зима
   { id: 37, name: "Виріб 1", image: "/images/item37.jpg", price: 100, collection: "Зразок лялок-осінь-зима" },
  { id: 38, name: "Виріб 2", image: "/images/item38.jpg", price: 150, collection: "Зразок лялок-осінь-зима" },
  { id: 39, name: "Виріб 3", image: "/images/item39.jpg", price: 200, collection: "Зразок лялок-осінь-зима" },
  { id: 40, name: "Виріб 4", image: "/images/item40.jpg", price: 100, collection: "Зразок лялок-осінь-зима" },
  { id: 41, name: "Виріб 5", image: "/images/item41.jpg", price: 150, collection: "Зразок лялок-осінь-зима" },
  { id: 42, name: "Виріб 6", image: "/images/item42.jpg", price: 200, collection: "Зразок лялок-осінь-зима" },
  //Колекція:Упаковки
   { id: 43, name: "Виріб 1", image: "/images/item43.jpg", price: 100, collection: "Упаковки" },
  { id: 44, name: "Виріб 2", image: "/images/item44.jpg", price: 150, collection: "Упаковки" },
  { id: 45, name: "Виріб 3", image: "/images/item45.jpg", price: 200, collection: "Упаковки" },
  
];
  

