import { Shield, RefreshCw } from 'lucide-react';

export const GuaranteeSection = () => {
  return (
    <div className="p-8 rounded-3xl bg-gradient-to-br from-violet/20 to-rose/20 border border-violet/30 shadow-card">
      <div className="flex flex-col md:flex-row items-center gap-6">
        {/* Icon */}
        <div className="w-24 h-24 rounded-full bg-gradient-to-r from-violet to-rose flex items-center justify-center shrink-0 shadow-glow-emerald">
          <Shield className="w-12 h-12 text-white" />
        </div>

        {/* Content */}
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-bold text-foreground mb-2">
            Garantía Total de 30 Días
          </h3>
          <p className="text-muted-foreground mb-4">
            Si no ves resultados, devolvemos el 100% de tu dinero. Sin preguntas, sin complicaciones.
          </p>
          <div className="flex items-center gap-2 justify-center md:justify-start text-emerald">
            <RefreshCw className="w-5 h-5" />
            <span className="font-medium">Reembolso 100% garantizado</span>
          </div>
        </div>
      </div>
    </div>
  );
};
