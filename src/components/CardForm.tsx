"use client";

import { useState } from "react";
import FormEditField from "./FormEditField";

export default function CardForm({ product, onSave, onCancel }) {
  const [editData, setEditData] = useState(product);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    onSave(editData);
  };

  return (
    <div
      key={product.id}
      className="bg-white rounded-lg shadow-md p-6 ring-2 ring-blue-500"
    >
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Editando...</h2>
      <FormEditField
        label="Nome do Produto"
        name="name"
        value={editData.name}
        onChange={handleInputChange}
      />
      <FormEditField
        label="Quantidade"
        type="number"
        name="quantity"
        value={editData.quantity}
        onChange={handleInputChange}
      />
      <FormEditField
        label="Preço"
        name="price"
        value={editData.price}
        onChange={handleInputChange}
      />
      <div className="flex gap-2 mt-4">
        <button
          onClick={handleSave}
          className="bg-green-500 text-white px-3 py-1 text-sm"
        >
          Salvar
        </button>
        <button
          onClick={onCancel}
          className="bg-gray-500 text-white px-3 py-1 text-sm"
        >
          Cancelar
        </button>
      </div>
    </div>
  );
}
