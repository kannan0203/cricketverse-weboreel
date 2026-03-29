import { useScrollReveal } from '@/hooks/useScrollReveal';

const players = [
  { name: 'Sachin Tendulkar', role: 'Batsman', stat: '100 international centuries', flag: '🇮🇳' },
  { name: 'Virat Kohli', role: 'Batsman', stat: '80+ international centuries', flag: '🇮🇳' },
  { name: 'MS Dhoni', role: 'WK-Batsman', stat: 'Won all 3 ICC trophies as captain', flag: '🇮🇳' },
  { name: 'Rohit Sharma', role: 'Batsman', stat: '3 ODI double centuries', flag: '🇮🇳' },
  { name: 'Jasprit Bumrah', role: 'Fast Bowler', stat: '#1 ICC Test bowler ranking', flag: '🇮🇳' },
  { name: 'Ravindra Jadeja', role: 'All-rounder', stat: 'Best fielder in world cricket', flag: '🇮🇳' },
];

export default function HallOfFame() {
  const ref = useScrollReveal();
  return (
    <section id="legends" className="py-20 px-4" ref={ref}>
      <h2 className="text-5xl sm:text-6xl text-primary text-center mb-12 tracking-wider max-w-7xl mx-auto">HALL OF FAME</h2>
      <div className="flex gap-6 overflow-x-auto pb-4 px-4 hide-scrollbar max-w-7xl mx-auto">
        {players.map(p => (
          <div key={p.name}
            className="neon-glow flex-shrink-0 w-56 bg-card border border-border rounded-2xl p-6 text-center transition-all duration-300 hover:border-primary">
            <div className="text-4xl mb-3">{p.flag}</div>
            <h3 className="text-xl text-primary font-bold" style={{ fontFamily: 'Bebas Neue' }}>{p.name}</h3>
            <p className="text-accent text-sm font-semibold mt-1">{p.role}</p>
            <p className="text-muted-foreground text-xs mt-2">{p.stat}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
