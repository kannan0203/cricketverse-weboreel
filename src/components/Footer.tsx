export default function Footer() {
  const shareText = encodeURIComponent('Check out THE CRICKET UNIVERSE 🏏 — built for VishwaNova AI Hackathon 2026!');
  const shareUrl = encodeURIComponent(window.location.href);
  return (
    <footer className="py-10 px-4 text-center border-t border-border">
      <p className="text-foreground text-lg font-semibold mb-4">Made with ❤️ using AI • VishwaNova Hackathon 2026</p>
      <div className="flex justify-center gap-4">
        <a href={`https://twitter.com/intent/tweet?text=${shareText}&url=${shareUrl}`} target="_blank" rel="noopener noreferrer"
          className="bg-card border border-border rounded-full px-5 py-2 text-sm font-semibold hover:bg-secondary transition-colors min-h-[48px] flex items-center">
          🐦 Share on Twitter
        </a>
        <a href={`https://wa.me/?text=${shareText}%20${shareUrl}`} target="_blank" rel="noopener noreferrer"
          className="bg-card border border-border rounded-full px-5 py-2 text-sm font-semibold hover:bg-secondary transition-colors min-h-[48px] flex items-center">
          💬 Share on WhatsApp
        </a>
      </div>
    </footer>
  );
}
