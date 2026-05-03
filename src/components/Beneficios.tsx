import { motion } from 'motion/react';
import { Target, Clock, Zap, ShieldCheck } from 'lucide-react';

const benefits = [
  {
    icon: Target,
    title: 'Mejor imagen y presencia',
    desc: 'Mayor presencia digital y mejor experiencia para el cliente.',
  },
  {
    icon: Clock,
    title: 'Atención 24/7',
    desc: 'Respuestas automáticas rápidas y posibilidad de trabajar fuera del horario comercial.',
  },
  {
    icon: Zap,
    title: 'Ahorro de tiempo',
    desc: 'Menos tareas repetitivas y más ventas. Tecnología aplicada sin complicaciones.',
  },
  {
    icon: ShieldCheck,
    title: 'Más orden interno',
    desc: 'Procesos organizados y soluciones adaptadas a la medida de cada negocio.',
  },
];

export function Beneficios() {
  return (
    <section id="beneficios" className="py-32 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-dark via-[#0a0514] to-brand-dark" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-brand-violet/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-2 border border-brand-violet/30 bg-brand-violet/10 rounded-full text-brand-violet text-sm font-medium tracking-wide mb-6"
            >
              POR QUÉ ELEGIRNOS
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold mb-8 leading-[1.1]"
            >
              Los negocios que se adaptan, <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-violet to-fuchsia-400">crecen.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-brand-gray leading-relaxed mb-10"
            >
              En KODEM creamos herramientas para que puedas responder más rápido, ordenar procesos, mejorar tu imagen y aprovechar la inteligencia artificial de forma simple y útil.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="p-6 border-l-4 border-brand-violet bg-brand-card/50 backdrop-blur-sm rounded-r-2xl"
            >
              <p className="text-xl md:text-2xl font-display font-medium text-white italic">
                "Modernizar tu negocio no tiene que ser complicado. Tiene que ser útil."
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {benefits.map((bnf, i) => (
              <motion.div
                key={bnf.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 + 0.2 }}
                className="bg-brand-card/80 backdrop-blur-md p-8 rounded-2xl border border-white/5 hover:border-brand-violet/20 hover:bg-brand-card transition-all"
              >
                <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-brand-violet mb-6">
                  <bnf.icon size={24} />
                </div>
                <h4 className="text-lg font-semibold mb-3">{bnf.title}</h4>
                <p className="text-brand-gray text-sm leading-relaxed">{bnf.desc}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
