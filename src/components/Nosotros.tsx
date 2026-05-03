import { motion } from 'motion/react';
import { Bot, User, Zap } from 'lucide-react';

const team = [
  {
    name: 'Tiago Risueño',
    role: 'MKT',
    desc: 'Enfocado en estrategia, comunicación y crecimiento digital. Ayuda a que cada solución tenga sentido comercial y conecte con el cliente correcto.',
    icon: Zap,
  },
  {
    name: 'Loren Vitale',
    role: 'Dueño, papá de JOPI',
    desc: 'Impulsa la visión de KODEM y acompaña cada proyecto desde la idea hasta la ejecución, buscando soluciones útiles, claras y adaptadas a cada negocio.',
    icon: User,
  },
  {
    name: 'Homero Ballmajo',
    role: 'Ingeniero en sistemas',
    desc: 'Encargado del desarrollo técnico, sistemas, automatizaciones e inteligencia artificial aplicada. Convierte ideas en herramientas digitales funcionales.',
    icon: Bot,
  },
];

export function Nosotros() {
  return (
    <section id="nosotros" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="text-center md:text-left mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-6"
        >
          Nosotros
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-lg md:text-xl text-brand-gray max-w-3xl leading-relaxed"
        >
          Somos KODEM, una agencia creada por tres personas con una misma idea: usar la tecnología para resolver problemas reales. Diseñamos soluciones digitales que ayudan a negocios a verse mejor, trabajar más ordenados y aprovechar herramientas modernas sin complicarse.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {team.map((member, i) => (
          <motion.div
            key={member.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 + 0.2 }}
            whileHover={{ y: -5 }}
            className="bg-brand-card p-8 rounded-3xl border border-white/5 hover:border-brand-violet/50 hover:shadow-[0_0_30px_rgba(139,92,246,0.15)] transition-all duration-300 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-brand-violet/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="w-16 h-16 rounded-2xl bg-brand-dark border border-white/10 flex items-center justify-center mb-6 text-brand-violet group-hover:scale-110 transition-transform duration-300">
              <member.icon size={32} strokeWidth={1.5} />
            </div>
            
            <h3 className="text-2xl font-display font-semibold mb-2">{member.name}</h3>
            <p className="text-brand-violet text-sm font-medium uppercase tracking-wider mb-4">{member.role}</p>
            <p className="text-brand-gray leading-relaxed text-sm">
              {member.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
