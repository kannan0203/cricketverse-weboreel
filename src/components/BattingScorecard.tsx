import { useState, useEffect } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const batsmen = [
  { name: 'Virat Kohli', runs: 72, balls: 48, fours: 8, sixes: 2 },
  { name: 'Rohit Sharma', runs: 45, balls: 32, fours: 5, sixes: 1 },
];

export default function BattingScorecard() {
  const ref = useScrollReveal();
  const [flash, setFlash] = useState<string | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const options = ['FOUR! 🏏', 'SIX! 💥', 'FOUR! 🔥', 'SIX! 🚀'];
      setFlash(options[Math.floor(Math.random() * options.length)]);
      setTimeout(() => setFlash(null), 1200);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="scorecard" className="py-20 px-4 max-w-4xl mx-auto" ref={ref}>
      <h2 className="text-5xl sm:text-6xl text-primary text-center mb-4 tracking-wider">LIVE SCORECARD</h2>
      <p className="text-center text-muted-foreground mb-8 text-lg">🇮🇳 India vs Australia 🇦🇺 • 2nd T20I</p>

      <div className="relative bg-card border border-border rounded-2xl overflow-hidden">
        <div className="bg-secondary/50 px-6 py-3 flex justify-between items-center text-sm">
          <span className="text-primary font-bold">IND 117/1 (12.4 ov)</span>
          <span className="text-muted-foreground">Target: 186</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border text-muted-foreground">
                <th className="text-left px-6 py-3">Batsman</th>
                <th className="px-4 py-3">R</th>
                <th className="px-4 py-3">B</th>
                <th className="px-4 py-3">4s</th>
                <th className="px-4 py-3">6s</th>
                <th className="px-4 py-3">SR</th>
              </tr>
            </thead>
            <tbody>
              {batsmen.map(b => (
                <tr key={b.name} className="border-b border-border/50 text-foreground">
                  <td className="px-6 py-3 font-semibold">{b.name} *</td>
                  <td className="px-4 py-3 text-center text-primary font-bold">{b.runs}</td>
                  <td className="px-4 py-3 text-center">{b.balls}</td>
                  <td className="px-4 py-3 text-center">{b.fours}</td>
                  <td className="px-4 py-3 text-center">{b.sixes}</td>
                  <td className="px-4 py-3 text-center text-accent font-semibold">
                    {((b.runs / b.balls) * 100).toFixed(1)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {flash && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <span className="score-flash text-6xl sm:text-8xl font-bold text-primary drop-shadow-lg" style={{ fontFamily: 'Bebas Neue' }}>
              {flash}
            </span>
          </div>
        )}
      </div>
    </section>
  );
}
