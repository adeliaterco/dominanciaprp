import { useState, useEffect, useRef } from 'react';
import { X, Check } from 'lucide-react';

const WITHOUT_ITEMS = [
  'Reacciones emocionales descontroladas',
  'Comportamientos que alejan a tu ex',
  'Mensajes desesperados a las 3am',
  'Persecución que mata la atracción',
  'Pérdida total de poder en la relación',
];

const WITH_ITEMS = [
  'Control emocional absoluto 24/7',
  'Comportamientos que atraen magnéticamente',
  'Silencio estratégico que genera obsesión',
  'Distancia calculada que aumenta deseo',
  'Posición de poder y dominio total',
];

export const ComparisonSection = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsFlipped(true), 500);
          
          // Animate checkmarks one by one
          WITH_ITEMS.forEach((_, index) => {
            setTimeout(() => {
              setVisibleItems((prev) => [...prev, index]);
            }, 1000 + index * 200);
          });
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef} className="grid md:grid-cols-2 gap-6">
      {/* Without Protocol */}
      <div className={`p-6 rounded-2xl bg-ruby/10 border border-ruby/30 transition-all duration-500 ${isFlipped ? 'opacity-50 scale-95' : ''}`}>
        <h3 className="text-xl font-bold text-ruby mb-4 flex items-center gap-2">
          <X className="w-6 h-6" />
          SIN Protocolo
        </h3>
        <ul className="space-y-3">
          {WITHOUT_ITEMS.map((item, index) => (
            <li key={index} className="flex items-start gap-3 text-muted-foreground">
              <X className="w-5 h-5 text-ruby shrink-0 mt-0.5" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* With Protocol */}
      <div className={`p-6 rounded-2xl bg-emerald/10 border border-emerald/30 shadow-glow-emerald transition-all duration-500 ${isFlipped ? 'scale-105' : ''}`}>
        <h3 className="text-xl font-bold text-emerald mb-4 flex items-center gap-2">
          <Check className="w-6 h-6" />
          CON Protocolo
        </h3>
        <ul className="space-y-3">
          {WITH_ITEMS.map((item, index) => (
            <li key={index} className="flex items-start gap-3 text-foreground">
              <span className={`${visibleItems.includes(index) ? 'checkmark-shine' : 'opacity-0'}`}>
                <Check className="w-5 h-5 text-emerald shrink-0 mt-0.5" />
              </span>
              <span className={visibleItems.includes(index) ? 'opacity-100' : 'opacity-30'}>
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
