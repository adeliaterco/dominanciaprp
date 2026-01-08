import { useState, useEffect } from 'react';
import { Users, AlertTriangle } from 'lucide-react';

export const LiveCounters = () => {
  const [peopleCount, setPeopleCount] = useState(3);
  const [slotsLeft, setSlotsLeft] = useState(10);
  const [showPop, setShowPop] = useState(false);
  const [showShake, setShowShake] = useState(false);

  // People counter - increases every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setPeopleCount((prev) => {
        if (prev < 12) {
          setShowPop(true);
          setTimeout(() => setShowPop(false), 300);
          return prev + 1;
        }
        return 3; // Reset
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Slots counter - decreases every 3 minutes
  useEffect(() => {
    const interval = setInterval(() => {
      setSlotsLeft((prev) => {
        if (prev > 1) {
          setShowShake(true);
          setTimeout(() => setShowShake(false), 400);
          return prev - 1;
        }
        return prev;
      });
    }, 180000); // 3 minutes

    return () => clearInterval(interval);
  }, []);

  const getSlotsColor = () => {
    if (slotsLeft <= 3) return 'text-ruby bg-ruby/20';
    if (slotsLeft <= 6) return 'text-amber bg-amber/20';
    return 'text-emerald bg-emerald/20';
  };

  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {/* People buying now */}
      <div className="flex items-center gap-2 px-4 py-2 bg-violet/20 rounded-lg">
        <Users className="w-5 h-5 text-violet icon-spin" />
        <span className="text-sm text-violet">
          <span className={`font-bold ${showPop ? 'number-pop' : ''}`}>{peopleCount}</span>
          {' '}personas comprando AHORA
        </span>
      </div>

      {/* Slots left */}
      <div className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${getSlotsColor()}`}>
        <AlertTriangle className="w-5 h-5" />
        <span className="text-sm">
          Solo{' '}
          <span className={`font-bold ${showShake ? 'shake' : ''}`}>{slotsLeft}</span>
          {' '}vacantes disponibles
        </span>
      </div>
    </div>
  );
};
