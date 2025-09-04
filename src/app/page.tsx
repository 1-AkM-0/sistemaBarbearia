"use client";
import Product, { deleteProduct, estoque } from "@/lib/estoque";
import { useEffect, useState } from "react";
import Card from "@/components/Card";
export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    setProducts(estoque);
  }, []);

  const handleDelete = (id: number) => {
    deleteProduct(id);
    setProducts([...estoque]);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6 ">
      <h1 className="text-2xl font-bold mb-6">📦 Estoque da Barbearia</h1>
      <div className="grid grid-cols-3 gap-6 mb-6">
        {products ? (
          products.map((product) => (
            <Card
              key={product.id}
              product={product}
              handleDelete={handleDelete}
            />
          ))
        ) : (
          <p></p>
        )}
      </div>

      <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
        Adicionar
      </button>
    </div>
  );
}
