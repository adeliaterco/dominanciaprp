import { Check, Clock } from 'lucide-react';

export const ProgressBar = () => {
  return (
    <div className="w-full max-w-md mx-auto">
      <div className="flex items-center justify-between relative">
        {/* Step 1 - Complete */}
        <div className="flex flex-col items-center z-10">
          <div className="w-12 h-12 rounded-full bg-emerald flex items-center justify-center shadow-glow-emerald">
            <Check className="w-6 h-6 text-white" />
          </div>
          <span className="mt-2 text-sm font-medium text-emerald">PRP</span>
          <span className="text-xs text-emerald/70">Confirmado ✅</span>
        </div>

        {/* Connection Line */}
        <div className="absolute top-6 left-12 right-12 h-1 bg-muted rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-emerald to-amber rounded-full"
            style={{ width: '50%' }}
          />
        </div>

        {/* Step 2 - In Progress */}
        <div className="flex flex-col items-center z-10">
          <div className="w-12 h-12 rounded-full bg-amber/20 border-2 border-amber flex items-center justify-center animate-pulse">
            <Clock className="w-6 h-6 text-amber" />
          </div>
          <span className="mt-2 text-sm font-medium text-amber">Protocolo</span>
          <span className="text-xs text-amber/70">Pendiente ⏳</span>
        </div>
      </div>
    </div>
  );
};
