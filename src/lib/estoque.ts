export default interface Product {
  id: number;
  name: string;
  quantity: number;
  price: number;
  lastUpdate: string;
  isPerishable: boolean;
  expiration?: string;
}

export let estoque: Product[] = [
  {
    id: 1,
    name: "",
    quantity: 0,
    price: 0,
    lastUpdate: "",
    isPerishable: false,
  },
];
let idCounter: number = 2;

export function addProduct(data: Omit<Product, "lastUpdate" | "id">) {
  const newProduct: Product = {
    id: idCounter++,
    lastUpdate: new Date().toISOString(),
    ...data,
  };
  estoque.push(newProduct);
  return newProduct;
}

export function deleteProduct(id: number) {
  estoque = estoque.filter((product) => product.id !== id);
}

export function updateProduct(id: number, newData: Partial<Product>) {
  const index = estoque.findIndex((product) => product.id === id);
  if (index === -1) throw new Error("Produto nao encontrado");
  estoque[index] = {
    ...estoque[index],
    ...newData,
    lastUpdate: new Date().toISOString(),
  };
  return estoque[index];
}
