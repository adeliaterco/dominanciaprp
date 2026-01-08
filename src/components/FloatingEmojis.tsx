import { useEffect, useState } from 'react';

const EMOJIS = ['🔥', '💰', '❤️', '✨', '💎', '🚀'];

interface FloatingEmoji {
  id: number;
  emoji: string;
  x: number;
  delay: number;
}

export const FloatingEmojis = () => {
  const [emojis, setEmojis] = useState<FloatingEmoji[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newEmoji: FloatingEmoji = {
        id: Date.now(),
        emoji: EMOJIS[Math.floor(Math.random() * EMOJIS.length)],
        x: Math.random() * 90 + 5,
        delay: 0,
      };

      setEmojis((prev) => {
        const filtered = prev.slice(-4);
        return [...filtered, newEmoji];
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {emojis.map((item) => (
        <div
          key={item.id}
          className="floating-emoji absolute bottom-0 text-3xl"
          style={{
            left: `${item.x}%`,
          }}
        >
          {item.emoji}
        </div>
      ))}
    </div>
  );
};
