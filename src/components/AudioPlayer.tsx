import { useState, useRef, useEffect } from 'react';

export default function AudioPlayer() {
  const [muted, setMuted] = useState(true);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.3;
    }
  }, []);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (muted) {
      audio.play().catch(() => {});
      audio.muted = false;
    } else {
      audio.muted = true;
    }
    setMuted(!muted);
  };

  return (
    <>
      <audio ref={audioRef} loop preload="none"
        src="https://www.soundjay.com/crowd/sounds/crowd-cheer-02.mp3" />
      <button onClick={toggle}
        className="fixed bottom-4 left-4 z-50 bg-card border border-border rounded-full w-12 h-12 flex items-center justify-center text-xl shadow-lg hover:scale-110 transition-transform min-h-[48px] min-w-[48px]"
        aria-label={muted ? 'Unmute' : 'Mute'}>
        {muted ? '🔇' : '🔊'}
      </button>
    </>
  );
}
