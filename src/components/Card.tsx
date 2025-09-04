import CardDisplay from "./CardDisplay";
import Product from "@/lib/estoque";
import CardForm from "./CardForm";

type CardProps = {
  product: Product;
  handleDelete: (id: number) => void;
  isEditing: boolean;
  onSave: (product: Product) => void;
  setEditingId: (id: number | null) => void;
};

export default function Card({
  product,
  handleDelete,
  isEditing,
  onSave,
  setEditingId,
}: CardProps) {
  return isEditing ? (
    <CardForm
      product={product}
      onSave={onSave}
      onCancel={() => setEditingId(null)}
    />
  ) : (
    <CardDisplay
      product={product}
      onEdit={() => setEditingId(product.id)}
      onDelete={() => handleDelete(product.id)}
    />
  );
}
