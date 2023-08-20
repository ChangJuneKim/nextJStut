import React from 'react';
import Link from 'next/link';
import { getProducts } from '@/service/products';

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <>
      <h1>제품 소개 페이지!</h1>
      <ul>
        {products.map(({ id, name, price }) => {
          return (
            <li key={id}>
              <Link href={`/products/${id}`}>
                {name}: {price}원
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
