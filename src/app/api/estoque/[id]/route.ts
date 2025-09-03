import { deleteProduct, updateProduct } from "@/lib/estoque";
export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  const body = await req.json();
  const id = parseInt(params.id);

  const update = updateProduct(id, body);
  return Response.json({ update, status: 201 });
}

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  const id = parseInt(params.id);

  deleteProduct(id);
  return Response.json({ status: 204 });
}
