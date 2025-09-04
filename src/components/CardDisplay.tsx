import Product from "@/lib/estoque";
export default function CardDisplay({
  product,
  onDelete,
  onEdit,
}: {
  product: Product;
  onDelete: () => void;
}) {
  return (
    <div
      key={product.id}
      className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200"
    >
      <h2 className="text-lg font-semibold text-gray-800 mb-2">
        {product.name}
      </h2>
      <p className="text-gray-600 text-sm mb-1">
        <span className="font-medium">Qtd:</span> {product.quantity}
      </p>
      <p className="text-gray-600 text-sm mb-1">
        <span className="font-medium">Preço:</span> {product.price}
      </p>
      <p className="text-gray-600 text-sm mb-1">
        <span className="font-medium">Atualizado:</span> {product.lastUpdate}
      </p>
      <p className="text-gray-600 text-sm mb-1">
        <span className="font-medium">Validade:</span>
        {product.isPerishable ? product.expiration : "N/A"}
      </p>
      <div className="flex gap-2 mt-4">
        <button
          className="bg-blue-500 text-white px-3 py-1 rounded text-sm"
          onClick={onEdit}
        >
          Editar
        </button>
        <button
          className="bg-red-500 text-white px-3 py-1 rounded text-sm"
          onClick={onDelete}
        >
          Apagar
        </button>
      </div>
    </div>
  );
}
