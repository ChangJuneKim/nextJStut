import path from 'path';
import * as fs from 'fs';

export type Product = {
  id: string;
  name: string;
  image: string;
  price: number;
};

export async function getProducts(): Promise<Array<Product>> {
  const filePath = path.join(process.cwd(), 'data', 'products.json');
  const data = await fs.promises.readFile(filePath, 'utf-8');

  return JSON.parse(data);
}

export async function getProduct(id: string): Promise<Product | undefined> {
  const products = await getProducts();

  return products.find((product) => product.id === id);
}
