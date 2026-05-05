import { motion } from 'motion/react';

const steps = [
  {
    num: '01',
    title: 'Escuchamos',
    desc: 'Entendemos tu negocio, tu problema, tu idea o la necesidad que querés resolver.',
  },
  {
    num: '02',
    title: 'Pensamos la solución',
    desc: 'Definimos qué herramienta digital conviene: web, bot, automatización, sistema o combinación.',
  },
  {
    num: '03',
    title: 'Diseñamos',
    desc: 'Armamos la estructura, la experiencia y la estética de la solución.',
  },
  {
    num: '04',
    title: 'Desarrollamos',
    desc: 'Construimos la web, sistema, bot o automatización conectando la tecnología necesaria.',
  },
  {
    num: '05',
    title: 'Probamos y ajustamos',
    desc: 'Revisamos que todo funcione y hacemos las mejoras necesarias antes de lanzar.',
  },
  {
    num: '06',
    title: 'Lanzamos y acompañamos',
    desc: 'Publicamos la solución y podemos seguir con soporte, mantenimiento o nuevas mejoras.',
  },
];

export function Proceso() {
  return (
    <section id="proceso" className="py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#06030f]/60 to-transparent pointer-events-none" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-brand-violet/8 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        {/* Header */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.04] text-brand-gray text-xs font-bold tracking-widest uppercase mb-5"
          >
            Metodología
          </motion.div>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl xl:text-6xl font-bold leading-tight"
            >
              Cómo{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-violet via-violet-400 to-fuchsia-400">
                trabajamos
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-base text-brand-gray max-w-xs leading-relaxed md:text-right"
            >
              No necesitás saber de tecnología. Te guiamos de principio a fin, de forma simple y clara.
            </motion.p>
          </div>
        </div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group"
            >
              {/* Gradient border wrapper */}
              <div className="p-px rounded-2xl bg-gradient-to-br from-brand-violet/25 via-white/[0.03] to-transparent group-hover:from-brand-violet/55 group-hover:via-fuchsia-500/15 transition-all duration-500 h-full">
                <div className="bg-[#0b0e18] rounded-2xl p-7 h-full relative overflow-hidden">

                  {/* Large decorative number */}
                  <span
                    className="absolute right-4 bottom-2 font-display font-black leading-none select-none pointer-events-none text-white/[0.025] group-hover:text-brand-violet/[0.07] transition-colors duration-500"
                    style={{ fontSize: '80px', letterSpacing: '-0.04em' }}
                  >
                    {step.num}
                  </span>

                  {/* Step indicator */}
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-9 h-9 rounded-full bg-brand-violet/20 border border-brand-violet/40 flex items-center justify-center shadow-[0_0_15px_rgba(139,92,246,0.3)] group-hover:shadow-[0_0_25px_rgba(139,92,246,0.5)] transition-shadow duration-300">
                      <span className="text-brand-violet text-xs font-bold font-display">{step.num}</span>
                    </div>
                    <div className="flex-1 h-px bg-gradient-to-r from-brand-violet/30 to-transparent" />
                  </div>

                  <h3 className="text-lg font-bold mb-3 group-hover:text-white transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-brand-gray text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
