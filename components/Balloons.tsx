'use client';

import { useEffect, useState } from 'react';

const Balloons = () => {
  const [balloons, setBalloons] = useState<number[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setBalloons((prev) => [...prev, Date.now()]);
    }, 500);

    setTimeout(() => {
      clearInterval(interval);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bottom-2 left-0 w-full h-full pointer-events-none overflow-hidden z-50">
      {balloons.map((id) => (
        <div
          key={id}
          className="absolute bottom-[-50px] w-10 h-14 bg-pink-400 rounded-t-full animation-floatUp"
          style={{
            left: `${Math.random() * 100}%`,
            animationDuration: `${4 + Math.random() * 2}s`,
          }}
        >
          {/* Linha do balão */}
          <div className="absolute bottom-[-10px] left-1/2 w-1 h-6 bg-pink-400 transform -translate-x-1/2" />
        </div>
      ))}
    </div>
  );
};

export default Balloons;
