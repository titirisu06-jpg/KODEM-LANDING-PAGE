import { motion } from 'motion/react';
import { Target, Clock, Zap, ShieldCheck } from 'lucide-react';

const benefits = [
  {
    num: '01',
    icon: Target,
    title: 'Mejor imagen y presencia',
    desc: 'Mayor presencia digital y mejor experiencia para el cliente.',
  },
  {
    num: '02',
    icon: Clock,
    title: 'Atención 24/7',
    desc: 'Respuestas automáticas rápidas sin importar el horario.',
  },
  {
    num: '03',
    icon: Zap,
    title: 'Ahorro de tiempo',
    desc: 'Menos tareas repetitivas y más ventas con tecnología simple.',
  },
  {
    num: '04',
    icon: ShieldCheck,
    title: 'Más orden interno',
    desc: 'Procesos organizados y soluciones a medida de cada negocio.',
  },
];

export function Beneficios() {
  return (
    <section id="beneficios" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-brand-dark via-[#08031a] to-brand-dark" />

      {/* Orb central fuerte */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-brand-violet/20 blur-[110px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[150px] bg-fuchsia-500/10 blur-[60px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* ── Left ── */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-brand-violet/50 bg-brand-violet/15 text-brand-violet text-xs font-bold tracking-widest uppercase mb-7"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-brand-violet animate-pulse" />
              Por qué elegirnos
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl xl:text-6xl font-bold mb-6 leading-[1.1]"
            >
              Los negocios que se adaptan,{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-violet via-violet-400 to-fuchsia-400">
                crecen.
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-base text-brand-gray leading-relaxed mb-10 max-w-md"
            >
              En KODEM creamos herramientas para que puedas responder más rápido, ordenar
              procesos, mejorar tu imagen y aprovechar la inteligencia artificial de forma
              simple y útil.
            </motion.p>

            {/* Cita con borde izquierdo gradiente */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="relative pl-6"
            >
              <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-brand-violet via-fuchsia-500 to-transparent rounded-full" />
              <p className="text-lg md:text-xl font-display font-semibold text-white/90 italic leading-snug">
                "Modernizar tu negocio no tiene que ser complicado.
                <br />
                <span className="text-brand-violet not-italic">Tiene que ser útil.</span>"
              </p>
            </motion.div>
          </div>

          {/* ── Right: 2×2 grid con gradient borders reales ── */}
          <div className="grid grid-cols-2 gap-4">
            {benefits.map((bnf, i) => (
              <motion.div
                key={bnf.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.09 + 0.15 }}
                /* Wrapper del gradient border — el p-px expone el gradiente como borde */
                className="group p-px rounded-2xl bg-gradient-to-br from-brand-violet/40 via-fuchsia-500/10 to-white/[0.03] hover:from-brand-violet/70 hover:via-fuchsia-500/30 transition-all duration-500"
              >
                <div className="bg-[#0d1020] rounded-2xl p-6 h-full relative overflow-hidden">
                  {/* Número decorativo gigante de fondo */}
                  <span
                    className="absolute -right-2 -bottom-3 font-display font-bold leading-none select-none pointer-events-none text-brand-violet/[0.07]"
                    style={{ fontSize: '88px' }}
                  >
                    {bnf.num}
                  </span>

                  {/* Icono con glow */}
                  <div className="w-11 h-11 rounded-xl bg-brand-violet/20 border border-brand-violet/40 flex items-center justify-center text-brand-violet mb-5 shadow-[0_0_20px_rgba(139,92,246,0.4)] group-hover:shadow-[0_0_30px_rgba(139,92,246,0.6)] transition-shadow duration-300">
                    <bnf.icon size={20} strokeWidth={1.75} />
                  </div>

                  <h4 className="text-sm font-bold text-white mb-2 leading-snug">
                    {bnf.title}
                  </h4>
                  <p className="text-brand-gray/80 text-xs leading-relaxed">{bnf.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
