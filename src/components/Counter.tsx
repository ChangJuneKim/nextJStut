'use client';

import React, { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);
  console.log('서버 컴포넌트인 Home 안에 있는 클라이언트 컴포넌트 카운터');
  return (
    <>
      <p>{count}</p>
      <button onClick={() => setCount((prev) => prev + 1)}>+</button>
    </>
  );
}
