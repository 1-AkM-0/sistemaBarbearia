import { estoque, addProduct } from "@/lib/estoque";

export function GET() {
  console.log(estoque);
  return Response.json({ estoque }, { status: 200 });
}

export async function POST(req: Request) {
  const body = await req.json();
  const newProduct = addProduct(body);
  return Response.json({ newProduct, status: 201 });
}
