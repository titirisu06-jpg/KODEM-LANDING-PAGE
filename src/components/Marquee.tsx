import { Zap, Globe, MessageSquare, Workflow, Database, Lightbulb, CheckCircle } from 'lucide-react';

const items = [
  { icon: Globe, label: 'Páginas web profesionales' },
  { icon: Workflow, label: 'Automatización de procesos' },
  { icon: MessageSquare, label: 'Chatbots con IA' },
  { icon: Database, label: 'Sistemas a medida' },
  { icon: Zap, label: 'Integración con WhatsApp' },
  { icon: CheckCircle, label: 'Diseño responsive' },
  { icon: Lightbulb, label: 'Soluciones personalizadas' },
  { icon: CheckCircle, label: 'Soporte continuo' },
];

/* Se duplican para que el loop sea perfectamente seamless */
const doubled = [...items, ...items];

export function Marquee() {
  return (
    <div className="relative py-5 overflow-hidden border-y border-white/[0.05]">
      {/* Fades en los bordes */}
      <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-r from-brand-dark to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-l from-brand-dark to-transparent z-10 pointer-events-none" />

      {/* Track animado */}
      <div className="animate-marquee flex gap-5 w-max">
        {doubled.map(({ icon: Icon, label }, i) => (
          <div
            key={i}
            className="flex items-center gap-2.5 px-5 py-2 bg-white/[0.04] border border-white/[0.07] hover:border-brand-violet/30 rounded-full transition-colors duration-300 cursor-default flex-shrink-0"
          >
            <Icon size={14} className="text-brand-violet flex-shrink-0" strokeWidth={2} />
            <span className="text-sm text-brand-gray/80 font-medium whitespace-nowrap">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
