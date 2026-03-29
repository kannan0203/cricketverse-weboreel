export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-14">
      {/* Flying cricket ball */}
      <div className="flying-ball absolute text-5xl pointer-events-none select-none" aria-hidden>🏏</div>
      <div className="flying-ball absolute text-3xl pointer-events-none select-none" style={{ animationDelay: '1.5s', top: '30%' }} aria-hidden>🏏</div>

      <div className="text-center px-4 z-10">
        <h1 className="text-6xl sm:text-8xl md:text-9xl text-primary tracking-wider drop-shadow-lg">
          THE CRICKET UNIVERSE 🏏
        </h1>
        <p className="text-foreground/80 text-lg sm:text-xl md:text-2xl mt-4 font-medium max-w-2xl mx-auto">
          Everything you need to know about the greatest sport
        </p>
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <span className="pop-in-1 bg-primary text-primary-foreground px-5 py-2 rounded-full font-bold text-sm sm:text-base">12 Teams</span>
          <span className="pop-in-2 bg-accent text-accent-foreground px-5 py-2 rounded-full font-bold text-sm sm:text-base">94 Countries</span>
          <span className="pop-in-3 bg-secondary text-secondary-foreground px-5 py-2 rounded-full font-bold text-sm sm:text-base border border-primary">1 Billion Fans</span>
        </div>
      </div>
    </section>
  );
}
