import React from 'react';
import { Metadata } from 'next';
import { getProduct, getProducts } from '@/service/products';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import GoProductsButton from '@/components/GoProductsButton';

type Props = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params: { slug } }: Props): Promise<Metadata> {
  const product = await getProduct(slug);
  return {
    title: `제품의 이름: ${product?.name}`,
  };
}

export default async function ProductPage({ params: { slug } }: Props) {
  const product = await getProduct(slug);

  if (!product) {
    notFound();
  }

  return (
    <>
      <h1>{product.name} 제품 설명 페이지</h1>
      <Image src={`/images/${product.image}`} alt={product.name} width={400} height={400} />
      <GoProductsButton />
    </>
  );
}

export async function generateStaticParams() {
  const products = await getProducts();

  return products.map((product) => ({
    slug: product.id,
  }));
}
