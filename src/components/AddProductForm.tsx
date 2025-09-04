"use client";

import Product from "@/lib/estoque";
import { useState } from "react";
import FormField from "./FormField";

type AddProductFormProps = {
  onAdd: (data: Omit<Product, "id" | "lastUpdate">) => void;
  onCancel: () => void;
};
export default function AddProductForm({
  onAdd,
  onCancel,
}: AddProductFormProps) {
  const initialState: Product = {
    name: "",
    quantity: 0,
    price: 0.0,
    isPerishable: false,
    expiration: "",
    id: 0,
    lastUpdate: "",
  };

  const [newProduct, setNewProduct] = useState(initialState);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;

    const newValue = type === "checkbox" ? checked : value;
    setNewProduct((prev) => ({ ...prev, [name]: newValue }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (!newProduct.name) {
      alert("O nome do produto é obrigatório!");
      return;
    }
    onAdd(newProduct);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-6">
      <h2 className="text-xl font-bold mb-4">Adicionar Novo Produto</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <FormField
          label={"Nome do Produto"}
          name={"name"}
          value={newProduct.name}
          onChange={handleChange}
        />
        <FormField
          label={"Quantidade"}
          name={"quantity"}
          value={newProduct.quantity}
          onChange={handleChange}
        />
        <FormField
          label={"Price"}
          name={"price"}
          value={newProduct.price}
          onChange={handleChange}
        />
        <div className="flex items-center">
          <input
            id="isPerishable"
            name="isPerishable"
            type="checkbox"
            checked={newProduct.isPerishable}
            onChange={handleChange}
            className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
          />
          <label
            htmlFor="isPerishable"
            className="ml-2 block text-sm text-gray-900"
          >
            Produto Perecível?
          </label>
          {newProduct.isPerishable && (
            <FormField
              label="Data de Validade"
              type="date"
              name="expiration"
              value={newProduct.expiration}
              onChange={handleChange}
            />
          )}
        </div>
        <div className="flex justify-end gap-2">
          <button
            type="button"
            onClick={onCancel}
            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
          >
            Cancelar
          </button>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Adicionar Produto
          </button>
        </div>
      </form>
    </div>
  );
}
