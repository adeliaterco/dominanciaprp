import { Star, Trophy, Clock } from 'lucide-react';

export const TestimonialCard = () => {
  return (
    <div className="relative p-8 rounded-3xl bg-gradient-to-br from-card to-muted border border-border shadow-card card-float">
      {/* Badges */}
      <div className="flex flex-wrap gap-3 mb-6">
        <div className="flex items-center gap-2 px-4 py-2 bg-gold/20 rounded-full">
          <Trophy className="w-5 h-5 text-gold" />
          <span className="text-sm font-bold text-gold">97% DE ÉXITO</span>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 bg-emerald/20 rounded-full">
          <Clock className="w-5 h-5 text-emerald" />
          <span className="text-sm font-bold text-emerald">RECONQUISTA EN 9 DÍAS</span>
        </div>
      </div>

      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-5 h-5 fill-gold text-gold" />
        ))}
      </div>

      {/* Quote */}
      <blockquote className="text-lg text-foreground italic mb-6 relative">
        <span className="absolute -left-4 -top-2 text-5xl text-violet/30">"</span>
        Cuando apliqué el Protocolo de Dominancia Emocional, mi ex empezó a escribirme ella primero. En 9 días, estábamos de vuelta. 
        <span className="font-bold text-violet"> No fue magia, fue estrategia pura.</span>
        <span className="absolute -right-2 bottom-0 text-5xl text-violet/30">"</span>
      </blockquote>

      {/* Author */}
      <div className="flex items-center gap-4">
        <div className="w-14 h-14 rounded-full bg-gradient-to-r from-violet to-rose p-0.5">
          <div className="w-full h-full rounded-full bg-card flex items-center justify-center text-xl font-bold text-violet">
            M
          </div>
        </div>
        <div>
          <p className="font-bold text-foreground">Miguel R.</p>
          <p className="text-sm text-muted-foreground">Reconquistó en 9 días</p>
        </div>
      </div>
    </div>
  );
};
