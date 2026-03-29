import { useState } from 'react';
import confetti from 'canvas-confetti';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const questions = [
  { q: 'Who holds the record for most ODI centuries?', options: ['Sachin Tendulkar', 'Virat Kohli', 'Ricky Ponting', 'Brian Lara'], answer: 0 },
  { q: 'Which country won the first Cricket World Cup (1975)?', options: ['India', 'Australia', 'West Indies', 'England'], answer: 2 },
  { q: 'How many players are in a cricket team?', options: ['9', '10', '11', '12'], answer: 2 },
  { q: 'What is the highest individual score in ODI cricket?', options: ['264', '200', '183', '237'], answer: 0 },
  { q: 'Which IPL team has won the most titles?', options: ['CSK', 'MI', 'KKR', 'RCB'], answer: 1 },
];

export default function CricketQuiz() {
  const ref = useScrollReveal();
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [finished, setFinished] = useState(false);
  const [shaking, setShaking] = useState(false);

  const handleAnswer = (idx: number) => {
    if (selected !== null) return;
    setSelected(idx);
    const correct = idx === questions[current].answer;
    if (correct) setScore(s => s + 1);
    else {
      setShaking(true);
      setTimeout(() => setShaking(false), 400);
    }
    setTimeout(() => {
      if (current < questions.length - 1) {
        setCurrent(c => c + 1);
        setSelected(null);
      } else {
        setFinished(true);
        confetti({ particleCount: 150, spread: 80, origin: { y: 0.6 } });
      }
    }, 1000);
  };

  return (
    <section id="quiz" className="py-20 px-4 max-w-2xl mx-auto" ref={ref}>
      <h2 className="text-5xl sm:text-6xl text-primary text-center mb-12 tracking-wider">CRICKET QUIZ</h2>
      {finished ? (
        <div className="bg-card border border-border rounded-2xl p-8 text-center">
          <div className="text-6xl mb-4">🏆</div>
          <h3 className="text-4xl text-primary mb-2" style={{ fontFamily: 'Bebas Neue' }}>QUIZ COMPLETE!</h3>
          <p className="text-foreground text-2xl font-bold">You got {score}/{questions.length} correct!</p>
          <button onClick={() => { setCurrent(0); setScore(0); setSelected(null); setFinished(false); }}
            className="mt-6 bg-primary text-primary-foreground px-6 py-3 rounded-full font-bold hover:bg-primary/90 transition-colors min-h-[48px]">
            Play Again
          </button>
        </div>
      ) : (
        <div className={`bg-card border border-border rounded-2xl p-6 sm:p-8 ${shaking ? 'shake' : ''}`}>
          <div className="flex justify-between items-center mb-6">
            <span className="text-muted-foreground text-sm">Question {current + 1}/{questions.length}</span>
            <span className="text-primary font-bold">Score: {score}</span>
          </div>
          <h3 className="text-foreground text-lg sm:text-xl font-bold mb-6">{questions[current].q}</h3>
          <div className="grid gap-3">
            {questions[current].options.map((opt, i) => {
              let cls = 'border border-border bg-secondary/50 hover:bg-secondary text-foreground';
              if (selected !== null) {
                if (i === questions[current].answer) cls = 'border-green-500 bg-green-500/20 text-green-300';
                else if (i === selected) cls = 'border-accent bg-accent/20 text-accent';
              }
              return (
                <button key={i} onClick={() => handleAnswer(i)}
                  className={`${cls} rounded-xl px-5 py-3 text-left font-semibold transition-all duration-200 min-h-[48px]`}>
                  {opt}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </section>
  );
}
