import Counter from '@/components/Counter';

export default function Home() {
  console.log('서버 컴포넌트 - homepage');
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        홈페이지
      </div>
      <Counter />
    </main>
  );
}
