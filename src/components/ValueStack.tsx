import { AnimatedCounter } from './AnimatedCounter';

export const ValueStack = () => {
  return (
    <div className="text-center">
      <div className="inline-block p-8 rounded-3xl bg-gradient-to-br from-emerald/10 to-gold/10 border border-emerald/30">
        {/* Original value */}
        <p className="text-lg text-muted-foreground mb-2">Valor Original</p>
        <p className="text-4xl font-bold text-muted-foreground line-through mb-6">
          $<AnimatedCounter end={206} />
        </p>

        {/* Today's price */}
        <p className="text-lg text-emerald mb-2">SOLO POR HOY</p>
        <div className="flex items-center justify-center gap-2 mb-4">
          <span className="text-6xl md:text-7xl font-black gradient-text">
            $<AnimatedCounter end={17} />
          </span>
        </div>

        {/* Discount badge */}
        <div className="inline-block px-6 py-2 bg-ruby rounded-full">
          <span className="text-white font-bold text-lg">
            92% DE DESCUENTO
          </span>
        </div>
      </div>
    </div>
  );
};
