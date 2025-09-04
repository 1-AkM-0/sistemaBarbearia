"use client";
import Product, { addProduct, deleteProduct, estoque } from "@/lib/estoque";
import { useEffect, useState } from "react";
import Card from "@/components/Card";
import AddProductForm from "@/components/AddProductForm";
export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isAdding, setIsAdding] = useState<boolean>(false);

  useEffect(() => {
    setProducts(estoque);
  }, []);

  const handleAddProduct = (newProductData: Product) => {
    addProduct(newProductData);
    setProducts([...estoque]);
    setIsAdding(false);
  };

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

      <button
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        onClick={() => setIsAdding(true)}
      >
        Adicionar
      </button>
      {isAdding && (
        <AddProductForm
          onAdd={handleAddProduct}
          onCancel={() => setIsAdding(false)}
        />
      )}
    </div>
  );
}
