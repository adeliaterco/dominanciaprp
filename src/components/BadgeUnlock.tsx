import { useState, useEffect } from 'react';
import { Unlock } from 'lucide-react';

interface Badge {
  id: number;
  text: string;
  scrollThreshold: number;
}

const BADGES: Badge[] = [
  { id: 1, text: '🔓 MÓDULO 1 DESBLOQUEADO', scrollThreshold: 0 },
  { id: 2, text: '🔓 MÓDULO 2 DESBLOQUEADO', scrollThreshold: 0.3 },
  { id: 3, text: '🔓 MÓDULO 3 DESBLOQUEADO', scrollThreshold: 0.6 },
  { id: 4, text: '🔓 MÓDULO 4 DESBLOQUEADO', scrollThreshold: 0.9 },
];

export const BadgeUnlock = () => {
  const [unlockedBadges, setUnlockedBadges] = useState<number[]>([1]);
  const [visibleBadge, setVisibleBadge] = useState<Badge | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPercent = window.scrollY / (document.body.scrollHeight - window.innerHeight);
      
      BADGES.forEach((badge) => {
        if (scrollPercent >= badge.scrollThreshold && !unlockedBadges.includes(badge.id)) {
          setUnlockedBadges((prev) => [...prev, badge.id]);
          setVisibleBadge(badge);
          setTimeout(() => setVisibleBadge(null), 3000);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [unlockedBadges]);

  if (!visibleBadge) return null;

  return (
    <div className="fixed top-20 left-1/2 -translate-x-1/2 z-50 badge-unlock">
      <div className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald to-gold rounded-full shadow-glow-emerald">
        <Unlock className="w-5 h-5 text-white" />
        <span className="font-bold text-white">{visibleBadge.text}</span>
      </div>
    </div>
  );
};
