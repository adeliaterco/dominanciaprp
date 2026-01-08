import { Zap } from 'lucide-react';

interface CTAButtonProps {
  onClick?: () => void;
}

export const CTAButton = ({ onClick }: CTAButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="pulse-glow ripple w-full max-w-md px-10 py-6 rounded-2xl bg-gradient-to-r from-emerald to-gold text-white font-black text-xl uppercase tracking-wider shadow-glow-emerald transition-all hover:shadow-glow-gold"
    >
      <span className="flex items-center justify-center gap-3">
        <Zap className="w-7 h-7" />
        ACTIVAR EL PROTOCOLO AHORA
        <Zap className="w-7 h-7" />
      </span>
    </button>
  );
};
