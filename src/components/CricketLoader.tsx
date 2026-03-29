import { useState, useEffect } from 'react';

export default function CricketLoader() {
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setVisible(false), 2000);
    return () => clearTimeout(t);
  }, []);
  if (!visible) return null;
  return (
    <div className="cricket-loader fixed inset-0 z-[100] flex items-center justify-center bg-background">
      <div className="flex flex-col items-center gap-4">
        <div className="cricket-ball-bounce w-16 h-16 rounded-full bg-accent border-2 border-primary flex items-center justify-center text-3xl">
          🏏
        </div>
        <p className="text-primary font-bold text-xl tracking-widest" style={{ fontFamily: 'Bebas Neue' }}>
          LOADING...
        </p>
      </div>
    </div>
  );
}
