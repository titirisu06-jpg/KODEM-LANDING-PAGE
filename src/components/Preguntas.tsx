import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

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

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 px-6 md:px-12 max-w-4xl mx-auto">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-6"
        >
          Preguntas frecuentes
        </motion.h2>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="border border-white/10 bg-brand-card rounded-2xl overflow-hidden hover:border-brand-violet/30 transition-colors"
          >
            <button
              onClick={() => toggleFAQ(i)}
              className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
            >
              <span className="font-medium pr-8">{faq.q}</span>
              <ChevronDown
                className={`text-brand-violet transition-transform duration-300 flex-shrink-0 ${openIndex === i ? 'rotate-180' : ''}`}
                size={20}
              />
            </button>
            <AnimatePresence>
              {openIndex === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="px-6 pb-5 text-brand-gray text-sm leading-relaxed border-t border-white/5 pt-4">
                    {faq.a}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
