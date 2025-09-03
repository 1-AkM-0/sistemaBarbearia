import CardDisplay from "./CardDisplay";
import Product from "@/lib/estoque";
export default function Card({ product }: { product: Product }) {
  return <CardDisplay product={product} />;
}
