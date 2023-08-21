'use client';

import { useEffect, useState } from 'react';

export default function MeowArticle() {
  const [factText, setFactText] = useState('데이터 준비 중...');

  useEffect(() => {
    const getMeow = async () => {
      const response = await fetch('https://meowfacts.herokuapp.com', {
        next: { revalidate: 3 },
      });
      const data = await response.json();
      setFactText(data.data[0]);
    };

    getMeow();
  }, []);

  return <article className="text-xl m-1 p-2 text-emerald-800">{factText}</article>;
}
