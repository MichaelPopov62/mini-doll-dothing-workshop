
 /*сторінка одного товару Його завдання — знайти потрібний товар за id і передати його у компонент клієнта.шукає товар і передає його (сервер)*/
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



   
   