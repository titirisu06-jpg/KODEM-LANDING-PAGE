import { motion } from 'motion/react';
import { Bot, User, Zap } from 'lucide-react';

const team = [
  {
    name: 'Tiago Risueño',
    role: 'Marketing',
    roleShort: 'MKT',
    desc: 'Enfocado en estrategia, comunicación y crecimiento digital. Ayuda a que cada solución tenga sentido comercial y conecte con el cliente correcto.',
    icon: Zap,
    gradient: 'from-violet-500/30 to-fuchsia-600/20',
  },
  {
    name: 'Loren Vitale',
    role: 'Fundador',
    roleShort: 'CEO',
    desc: 'Impulsa la visión de KODEM y acompaña cada proyecto desde la idea hasta la ejecución, buscando soluciones útiles, claras y adaptadas a cada negocio.',
    icon: User,
    gradient: 'from-brand-violet/35 to-indigo-600/20',
  },
  {
    name: 'Homero Ballmajo',
    role: 'Ingeniero en sistemas',
    roleShort: 'DEV',
    desc: 'Encargado del desarrollo técnico, sistemas, automatizaciones e inteligencia artificial aplicada. Convierte ideas en herramientas digitales funcionales.',
    icon: Bot,
    gradient: 'from-fuchsia-500/30 to-brand-violet/20',
  },
];

export function Nosotros() {
  return (
    <section id="nosotros" className="py-28 relative overflow-hidden">
      {/* Orb de fondo */}
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[300px] bg-brand-violet/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        {/* Header */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.04] text-brand-gray text-xs font-bold tracking-widest uppercase mb-5"
          >
            El equipo
          </motion.div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl xl:text-6xl font-bold"
            >
              Nosotros
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-base text-brand-gray max-w-sm leading-relaxed md:text-right"
            >
              Tres personas. Una misma idea: tecnología que resuelve problemas reales.
            </motion.p>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 + 0.1 }}
              whileHover={{ y: -6 }}
              className="group cursor-default"
            >
              {/* Gradient border wrapper */}
              <div className="p-px rounded-3xl bg-gradient-to-br from-brand-violet/30 via-white/[0.04] to-transparent group-hover:from-brand-violet/60 group-hover:via-fuchsia-500/20 transition-all duration-500 h-full">
                <div className="bg-[#0b0e18] rounded-3xl p-8 h-full flex flex-col relative overflow-hidden">

                  {/* Roleshot decorativo de fondo */}
                  <span
                    className="absolute -right-2 -top-4 font-display font-black leading-none select-none pointer-events-none text-brand-violet/[0.05] group-hover:text-brand-violet/[0.09] transition-colors duration-500"
                    style={{ fontSize: '80px', letterSpacing: '-0.04em' }}
                  >
                    {member.roleShort}
                  </span>

                  {/* Avatar con gradiente y glow */}
                  <div
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${member.gradient} border border-brand-violet/40 flex items-center justify-center mb-6 shadow-[0_0_24px_rgba(139,92,246,0.35)] group-hover:shadow-[0_0_38px_rgba(139,92,246,0.55)] transition-shadow duration-400`}
                  >
                    <member.icon size={26} className="text-white" strokeWidth={1.5} />
                  </div>

                  {/* Nombre */}
                  <h3 className="text-2xl font-display font-bold mb-2 leading-tight">
                    {member.name}
                  </h3>

                  {/* Role badge */}
                  <div className="inline-flex items-center px-2.5 py-1 rounded-md bg-brand-violet/15 border border-brand-violet/30 w-fit mb-5">
                    <span className="text-brand-violet text-[11px] font-bold tracking-widest uppercase">
                      {member.role}
                    </span>
                  </div>

                  {/* Divider degradado */}
                  <div className="w-full h-px bg-gradient-to-r from-brand-violet/30 via-brand-violet/10 to-transparent mb-5" />

                  <p className="text-brand-gray text-sm leading-relaxed flex-1">
                    {member.desc}
                  </p>

                  {/* Bottom accent que aparece en hover */}
                  <div className="mt-6 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-brand-violet text-xs font-semibold">KODEM</span>
                    <div className="flex-1 h-px bg-gradient-to-r from-brand-violet/40 to-transparent" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
