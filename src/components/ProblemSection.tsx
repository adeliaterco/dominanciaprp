import { AnimatedCounter } from './AnimatedCounter';
import { TrendingDown, TrendingUp, AlertCircle } from 'lucide-react';

export const ProblemSection = () => {
  return (
    <div className="space-y-8">
      {/* Stats comparison */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Failure stat */}
        <div className="p-6 rounded-2xl bg-gradient-to-br from-ruby/20 to-orange-500/20 border border-ruby/30 fire-gradient bg-clip-padding">
          <div className="flex items-center gap-4">
            <TrendingDown className="w-12 h-12 text-ruby" />
            <div>
              <p className="text-5xl font-black text-ruby">
                <AnimatedCounter end={73} suffix="%" />
              </p>
              <p className="text-muted-foreground">de los intentos de reconquista FRACASAN</p>
            </div>
          </div>
        </div>

        {/* Success stat */}
        <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald/20 to-gold/20 border border-emerald/30 shadow-glow-emerald">
          <div className="flex items-center gap-4">
            <TrendingUp className="w-12 h-12 text-emerald" />
            <div>
              <p className="text-5xl font-black text-emerald">
                <AnimatedCounter end={97} suffix="%" />
              </p>
              <p className="text-muted-foreground">de ÉXITO con el Protocolo</p>
            </div>
          </div>
        </div>
      </div>

      {/* Warning card */}
      <div className="p-6 rounded-2xl bg-amber/10 border border-amber/30">
        <div className="flex items-start gap-4">
          <AlertCircle className="w-8 h-8 text-amber shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-bold text-amber mb-2">El Error que Nadie Te Dice</h4>
            <p className="text-muted-foreground">
              La mayoría comete errores emocionales en los primeros 
              <span className="font-bold text-amber"> 27 días</span> después de la ruptura. 
              <span className="font-bold text-amber"> El 43%</span> envía mensajes de desesperación que destruyen cualquier posibilidad de reconquista.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
