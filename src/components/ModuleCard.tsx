import { ReactNode } from 'react';

interface ModuleCardProps {
  number: number;
  title: string;
  description: string;
  icon: ReactNode;
  delay?: number;
}

export const ModuleCard = ({ number, title, description, icon, delay = 0 }: ModuleCardProps) => {
  return (
    <div 
      className="card-float ripple relative p-6 rounded-2xl bg-gradient-to-br from-emerald/10 to-blue-500/10 border border-emerald/20 shadow-card cursor-pointer"
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Number badge */}
      <div className="absolute -top-3 -left-3 w-10 h-10 rounded-full bg-gradient-to-r from-emerald to-gold flex items-center justify-center font-bold text-white shadow-glow-emerald">
        {number}
      </div>

      {/* Icon */}
      <div className="w-14 h-14 mb-4 rounded-xl bg-emerald/20 flex items-center justify-center text-emerald icon-spin">
        {icon}
      </div>

      {/* Content */}
      <h3 className="text-xl font-bold text-foreground mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
    </div>
  );
};
