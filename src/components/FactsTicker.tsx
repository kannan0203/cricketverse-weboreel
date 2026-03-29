const facts = [
  '🏏 Sachin Tendulkar scored 100 international centuries',
  '🌏 Cricket is the 2nd most popular sport in the world',
  '🏟️ The MCG can hold over 100,000 spectators',
  '🔥 The fastest ball bowled was 161.3 km/h by Shoaib Akhtar',
  '📅 The first Test match was played in 1877',
  '🏆 India has won 2 ODI World Cups (1983 & 2011)',
  '⚡ AB de Villiers scored the fastest ODI century in 31 balls',
  '🌟 Don Bradman\'s Test average of 99.94 is unmatched',
];

export default function FactsTicker() {
  return (
    <div className="bg-primary text-primary-foreground py-3 overflow-hidden">
      <div className="ticker-track flex whitespace-nowrap">
        {[...facts, ...facts].map((f, i) => (
          <span key={i} className="mx-8 text-sm sm:text-base font-semibold">{f}</span>
        ))}
      </div>
    </div>
  );
}
