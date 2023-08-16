import styles from './layout.module.css';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '제품 소개 페이지 | 전체 제품 확인',
  description: '제품을 소개하는 페이지입니다.',
};

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <nav className={styles.nav}>
        <ul>
          <li>
            <Link href="/products/women">여성옷</Link>
          </li>
          <li>
            <Link href="/products/men">남성옷</Link>
          </li>
        </ul>
      </nav>
      <main>{children}</main>
    </>
  );
}
