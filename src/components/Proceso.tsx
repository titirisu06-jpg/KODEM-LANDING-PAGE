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
    desc: 'Revisamos que todo funcione bien y hacemos las mejoras correspondientes antes de lanzar.',
  },
  {
    num: '06',
    title: 'Lanzamos y acompañamos',
    desc: 'Publicamos la solución y podemos seguir con soporte, mantenimiento o nuevas mejoras.',
  },
];

export function Proceso() {
  return (
    <section id="proceso" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="text-center mb-20 max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-6"
        >
          Cómo trabajamos
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-lg md:text-xl text-brand-gray"
        >
          No necesitás saber de tecnología. Nosotros te guiamos de principio a fin de forma simple y clara.
        </motion.p>
      </div>

      <div className="relative">
        {/* Connection line desktop */}
        <div className="hidden md:block absolute top-[60px] left-8 right-8 h-[1px] bg-white/10" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-12 gap-x-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative relative group"
            >
              {/* Left line mobile connection */}
              {i !== steps.length - 1 && (
                <div className="md:hidden absolute top-20 left-6 bottom-[-24px] w-[1px] bg-white/10" />
              )}
              
              <div className="flex flex-col relative z-10">
                <div className="w-12 h-12 rounded-full bg-brand-dark border-2 border-brand-violet text-brand-violet font-display font-bold flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_15px_rgba(139,92,246,0.3)] bg-opacity-10">
                  {step.num}
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-brand-gray leading-relaxed text-sm">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
