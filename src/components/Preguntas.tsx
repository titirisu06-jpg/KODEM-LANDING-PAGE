import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    q: '¿Necesito saber de tecnología para trabajar con KODEM?',
    a: 'No. Vos nos contás tu problema, idea o necesidad, y nosotros pensamos la mejor solución digital para tu negocio.',
  },
  {
    q: '¿Hacen soluciones a medida?',
    a: 'Sí. Además de páginas web, automatizaciones, sistemas y chatbots, también podemos analizar proyectos personalizados.',
  },
  {
    q: '¿Pueden integrar WhatsApp?',
    a: 'Sí. Muchas soluciones pueden conectarse con WhatsApp, formularios, páginas web u otros canales.',
  },
  {
    q: '¿Ofrecen mantenimiento?',
    a: 'Sí. Podemos ofrecer soporte, ajustes, mejoras y mantenimiento mensual según el tipo de proyecto.',
  },
  {
    q: '¿Cuánto tarda un proyecto?',
    a: 'Depende de la solución. Una página simple puede resolverse más rápido, mientras que un sistema o automatización más compleja requiere más análisis y desarrollo.',
  },
  {
    q: '¿El chatbot puede responder con información de mi negocio?',
    a: 'Sí. Puede configurarse con información del negocio como servicios, productos, horarios, preguntas frecuentes, formas de pago, ubicación y más.',
  },
  {
    q: '¿El bot reemplaza a una persona?',
    a: 'No necesariamente. Puede responder consultas, filtrar clientes y ahorrar tiempo, pero también puede derivar a una persona cuando sea necesario.',
  },
  {
    q: '¿Puedo pedir algo que no aparece en la web?',
    a: 'Sí. Si tenés una idea o problema específico, podés consultarnos igual.',
  },
];

export function Preguntas() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section id="faq" className="py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[400px] bg-brand-violet/8 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-3xl mx-auto px-6 md:px-12 relative z-10">

        {/* Header */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.04] text-brand-gray text-xs font-bold tracking-widest uppercase mb-5"
          >
            FAQ
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl xl:text-6xl font-bold leading-tight"
          >
            Preguntas{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-violet via-violet-400 to-fuchsia-400">
              frecuentes
            </span>
          </motion.h2>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                /* Gradient border wrapper — intensifica cuando está abierto */
                className={`p-px rounded-2xl transition-all duration-400 ${
                  isOpen
                    ? 'bg-gradient-to-br from-brand-violet/55 via-fuchsia-500/20 to-transparent'
                    : 'bg-gradient-to-br from-brand-violet/20 via-white/[0.03] to-transparent hover:from-brand-violet/40'
                }`}
              >
                <div className="bg-[#0b0e18] rounded-2xl overflow-hidden">
                  <button
                    onClick={() => toggle(i)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left cursor-pointer group"
                  >
                    <span className={`font-semibold pr-8 text-sm md:text-base transition-colors duration-200 ${isOpen ? 'text-white' : 'text-white/85 group-hover:text-white'}`}>
                      {faq.q}
                    </span>
                    <div className={`flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center transition-all duration-300 ${
                      isOpen
                        ? 'bg-brand-violet/30 border border-brand-violet/50 text-brand-violet'
                        : 'bg-white/[0.05] border border-white/10 text-brand-gray group-hover:border-brand-violet/30'
                    }`}>
                      {isOpen ? <Minus size={14} /> : <Plus size={14} />}
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        style={{ overflow: 'hidden' }}
                      >
                        <div className="px-6 pb-5 pt-1">
                          <div className="w-full h-px bg-gradient-to-r from-brand-violet/30 via-brand-violet/10 to-transparent mb-4" />
                          <p className="text-brand-gray text-sm leading-relaxed">{faq.a}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
