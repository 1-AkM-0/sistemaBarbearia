import CardDisplay from "./CardDisplay";
import Product from "@/lib/estoque";
export default function Card({
  product,
  handleDelete,
}: {
  product: Product;
  handleDelete: (id: number) => void;
}) {
  return (
    <CardDisplay product={product} onDelete={() => handleDelete(product.id)} />
  );
}
