import { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

interface TimerProps {
  initialMinutes?: number;
}

export const Timer = ({ initialMinutes = 20 }: TimerProps) => {
  const [timeLeft, setTimeLeft] = useState(initialMinutes * 60);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const isUrgent = minutes < 5;
  const isVeryUrgent = minutes < 2;

  const formatNumber = (num: number) => num.toString().padStart(2, '0');

  return (
    <div
      className={`
        inline-flex items-center gap-3 px-6 py-3 rounded-xl font-bold text-xl
        ${isUrgent ? 'bg-ruby/20 text-ruby' : 'bg-amber/20 text-amber'}
        ${isUrgent ? 'timer-glow-urgent' : 'timer-glow'}
        ${isVeryUrgent ? 'timer-blink' : ''}
        transition-colors duration-500
      `}
    >
      <Clock className="w-6 h-6 icon-spin" />
      <span className="font-mono tracking-wider">
        {formatNumber(minutes)}:{formatNumber(seconds)}
      </span>
      <span className="text-sm font-normal opacity-80">restantes</span>
    </div>
  );
};
