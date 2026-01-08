import { useEffect, useState } from 'react';
import { Confetti } from '@/components/Confetti';
import { FloatingEmojis } from '@/components/FloatingEmojis';
import { Timer } from '@/components/Timer';
import { ProgressBar } from '@/components/ProgressBar';
import { LiveCounters } from '@/components/LiveCounters';
import { BadgeUnlock } from '@/components/BadgeUnlock';
import { ModuleCard } from '@/components/ModuleCard';
import { ComparisonSection } from '@/components/ComparisonSection';
import { TestimonialCard } from '@/components/TestimonialCard';
import { ValueStack } from '@/components/ValueStack';
import { GuaranteeSection } from '@/components/GuaranteeSection';
import { HotmartWidget } from '@/components/HotmartWidget';
import { ProblemSection } from '@/components/ProblemSection';
import { Brain, Heart, MessageSquare, Zap, Lock, Target, Crown, Flame } from 'lucide-react';

const Index = () => {
  const [sectionsVisible, setSectionsVisible] = useState<string[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setSectionsVisible((prev) => [...prev, entry.target.id]);
          }
        });
      },
      { threshold: 0.2 }
    );

    document.querySelectorAll('section').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const isVisible = (id: string) => sectionsVisible.includes(id);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Confetti />
      <FloatingEmojis />
      <BadgeUnlock />

      {/* HEADER */}
      <header className="relative py-12 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald/20 via-gold/10 to-transparent" />
        <div className="relative max-w-4xl mx-auto text-center space-y-8">
          {/* Celebration */}
          <div className="inline-flex items-center gap-2 px-6 py-2 bg-emerald/20 rounded-full border border-emerald/30">
            <span className="text-emerald font-bold">🎉 ¡FELICIDADES!</span>
          </div>

          {/* Main headline */}
          <h1 className="text-4xl md:text-6xl font-black leading-tight">
            Tu Plan Está{' '}
            <span className="gradient-text">Confirmado</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Ahora, el siguiente paso es{' '}
            <span className="font-bold text-gold">DOMINAR emocionalmente</span>
          </p>

          {/* Progress bar */}
          <ProgressBar />

          {/* Timer */}
          <div className="pt-6">
            <Timer initialMinutes={20} />
          </div>

          {/* Live counters */}
          <LiveCounters />
        </div>
      </header>

      {/* SECTION 1 - PROBLEM */}
      <section 
        id="problem" 
        className={`py-16 px-4 bg-gradient-to-b from-background to-muted/30 section-fade ${isVisible('problem') ? 'visible' : ''}`}
      >
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-black">
              El Problema Oculto{' '}
              <span className="gradient-text-fire">(73% No Lo Ve Venir)</span>
            </h2>
          </div>
          <ProblemSection />
        </div>
      </section>

      {/* SECTION 2 - SOLUTION */}
      <section 
        id="solution" 
        className={`py-16 px-4 section-fade ${isVisible('solution') ? 'visible' : ''}`}
      >
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-black">
              La Solución:{' '}
              <span className="gradient-text">Protocolo de Dominancia Emocional</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              4 módulos que transformarán completamente tu posición de poder
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <ModuleCard
              number={1}
              title="Control Mental Absoluto"
              description="Técnicas para dominar tus emociones y no actuar desde la desesperación. Aprenderás a mantener la calma incluso en los momentos más difíciles."
              icon={<Brain className="w-7 h-7" />}
              delay={0}
            />
            <ModuleCard
              number={2}
              title="Comunicación Estratégica"
              description="Cómo cada mensaje, silencio y respuesta debe ser calculado para generar obsesión. El poder de las palabras y del timing perfecto."
              icon={<MessageSquare className="w-7 h-7" />}
              delay={100}
            />
            <ModuleCard
              number={3}
              title="Atracción Magnética"
              description="Transforma tu presencia para que tu ex no pueda dejar de pensar en ti. Posicionamiento que genera deseo irresistible."
              icon={<Heart className="w-7 h-7" />}
              delay={200}
            />
            <ModuleCard
              number={4}
              title="Reconquista Final"
              description="El plan paso a paso para el reencuentro. Cómo orquestar el momento perfecto y asegurar que vuelvan más fuertes que nunca."
              icon={<Target className="w-7 h-7" />}
              delay={300}
            />
          </div>
        </div>
      </section>

      {/* SECTION 3 - COMPARISON */}
      <section 
        id="comparison" 
        className={`py-16 px-4 bg-gradient-to-b from-background to-muted/30 section-fade ${isVisible('comparison') ? 'visible' : ''}`}
      >
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-black">
              La <span className="text-ruby">Diferencia</span> que{' '}
              <span className="text-emerald">Importa</span>
            </h2>
          </div>
          <ComparisonSection />
        </div>
      </section>

      {/* SECTION 4 - TESTIMONIAL */}
      <section 
        id="testimonial" 
        className={`py-16 px-4 section-fade ${isVisible('testimonial') ? 'visible' : ''}`}
      >
        <div className="max-w-3xl mx-auto">
          <TestimonialCard />
        </div>
      </section>

      {/* SECTION 5 - VALUE STACK */}
      <section 
        id="value" 
        className={`py-16 px-4 bg-gradient-to-b from-background to-muted/30 section-fade ${isVisible('value') ? 'visible' : ''}`}
      >
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-black">
              Valor <span className="gradient-text">Exclusivo</span>
            </h2>
          </div>
          <ValueStack />
        </div>
      </section>

      {/* SECTION 6 - GUARANTEE */}
      <section 
        id="guarantee" 
        className={`py-16 px-4 section-fade ${isVisible('guarantee') ? 'visible' : ''}`}
      >
        <div className="max-w-3xl mx-auto">
          <GuaranteeSection />
        </div>
      </section>

      {/* SECTION 7 - URGENCY */}
      <section 
        id="urgency" 
        className={`py-16 px-4 bg-gradient-to-b from-muted/30 to-background section-fade ${isVisible('urgency') ? 'visible' : ''}`}
      >
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="flex items-center justify-center gap-3">
            <Flame className="w-8 h-8 text-amber animate-pulse" />
            <h2 className="text-2xl md:text-3xl font-black text-amber">
              OFERTA POR TIEMPO LIMITADO
            </h2>
            <Flame className="w-8 h-8 text-amber animate-pulse" />
          </div>
          <Timer initialMinutes={20} />
          <LiveCounters />
        </div>
      </section>

      {/* SECTION 8 - CTA */}
      <section 
        id="cta" 
        className={`py-16 px-4 section-fade ${isVisible('cta') ? 'visible' : ''}`}
      >
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="flex items-center justify-center gap-3">
            <Crown className="w-8 h-8 text-gold" />
            <h2 className="text-2xl md:text-3xl font-black">
              Toma el Control <span className="gradient-text">AHORA</span>
            </h2>
            <Crown className="w-8 h-8 text-gold" />
          </div>

          <div className="flex flex-col items-center gap-6">
            <HotmartWidget />

            {/* Security badges */}
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Lock className="w-4 h-4" />
                <span>Pago 100% Seguro</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4" />
                <span>Acceso Inmediato</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 9 - DECLINE */}
      <section className="py-8 px-4 text-center">
        <a 
          href="https://sistemaplan.vercel.app/" 
          className="text-sm text-muted-foreground/60 hover:text-ruby transition-colors animated-underline"
        >
          No, prefiero arriesgarme solo
        </a>
      </section>

      {/* Footer spacer */}
      <div className="h-20" />
    </div>
  );
};

export default Index;
