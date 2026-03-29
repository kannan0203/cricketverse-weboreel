import { useScrollReveal } from '@/hooks/useScrollReveal';

const teams = [
  { name: 'CSK', city: 'Chennai', player: 'MS Dhoni', color: '#FFFF00' },
  { name: 'MI', city: 'Mumbai', player: 'Rohit Sharma', color: '#004BA0' },
  { name: 'RCB', city: 'Bangalore', player: 'Virat Kohli', color: '#EC1C24' },
  { name: 'KKR', city: 'Kolkata', player: 'Andre Russell', color: '#3A225D' },
  { name: 'SRH', city: 'Hyderabad', player: 'Pat Cummins', color: '#FF822A' },
  { name: 'DC', city: 'Delhi', player: 'Rishabh Pant', color: '#17449B' },
  { name: 'PBKS', city: 'Punjab', player: 'Shikhar Dhawan', color: '#DD1F2D' },
  { name: 'RR', city: 'Rajasthan', player: 'Sanju Samson', color: '#EA1A85' },
  { name: 'GT', city: 'Ahmedabad', player: 'Hardik Pandya', color: '#1C1C2B' },
  { name: 'LSG', city: 'Lucknow', player: 'KL Rahul', color: '#A72056' },
];

export default function IPLTeamsGrid() {
  const ref = useScrollReveal();
  return (
    <section id="ipl" className="py-20 px-4 max-w-7xl mx-auto" ref={ref}>
      <h2 className="text-5xl sm:text-6xl text-primary text-center mb-12 tracking-wider">IPL TEAMS</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        {teams.map(t => (
          <div key={t.name}
            className="group relative bg-card rounded-xl p-5 border border-border text-center cursor-pointer transition-all duration-300 hover:scale-105"
            style={{ '--team-color': t.color } as React.CSSProperties}
          >
            <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ boxShadow: `0 0 20px ${t.color}40, 0 0 40px ${t.color}20, inset 0 0 20px ${t.color}10` }} />
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-full mx-auto mb-3 flex items-center justify-center text-xl font-bold"
                style={{ backgroundColor: t.color, color: t.color === '#FFFF00' || t.color === '#FF822A' ? '#000' : '#fff' }}>
                {t.name}
              </div>
              <h3 className="text-foreground font-bold text-lg">{t.name}</h3>
              <p className="text-muted-foreground text-sm">{t.city}</p>
              <p className="text-primary text-xs mt-1 font-semibold">{t.player}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
