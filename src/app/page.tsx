import Counter from '@/components/Counter';
import Image from 'next/image';

export default function Home() {
  console.log('서버 컴포넌트 - homepage');
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        홈페이지
      </div>
      <Counter />
      <Image
        src="https://images.unsplash.com/photo-1441986300917-64674bd600d8"
        alt="움"
        width={400}
        height={400}
        priority
      />
    </main>
  );
}
