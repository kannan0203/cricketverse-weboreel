import { useScrollReveal } from '@/hooks/useScrollReveal';

const formats = [
  { name: 'TEST', ball: '🔴', overs: 'Unlimited', duration: '5 days', fact: 'The longest Test match lasted 12 days (1939)!', bg: 'from-red-900/40 to-red-800/20' },
  { name: 'ODI', ball: '⚪', overs: '50 per side', duration: '~8 hours', fact: 'First ODI was played in 1971 between Aus & Eng!', bg: 'from-blue-900/40 to-blue-800/20' },
  { name: 'T20', ball: '🟡', overs: '20 per side', duration: '~3 hours', fact: 'T20 was invented to attract younger audiences!', bg: 'from-yellow-900/40 to-yellow-800/20' },
];

export default function CricketFormats() {
  const ref = useScrollReveal();
  return (
    <section id="formats" className="py-20 px-4 max-w-5xl mx-auto" ref={ref}>
      <h2 className="text-5xl sm:text-6xl text-primary text-center mb-12 tracking-wider">CRICKET FORMATS</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {formats.map((f, i) => (
          <div key={f.name}
            className={`bg-gradient-to-br ${f.bg} border border-border rounded-2xl p-6 text-center hover:scale-105 transition-transform duration-300`}
            style={{ transitionDelay: `${i * 100}ms` }}>
            <div className="text-5xl mb-4">{f.ball}</div>
            <h3 className="text-3xl text-primary mb-3">{f.name}</h3>
            <p className="text-foreground font-semibold">{f.overs}</p>
            <p className="text-muted-foreground text-sm mb-3">Duration: {f.duration}</p>
            <p className="text-accent text-sm italic">💡 {f.fact}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
