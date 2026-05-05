import { motion } from 'motion/react';
import { Star } from 'lucide-react';

/* ── Reemplazá estos testimonios por los reales de tus clientes ── */
const testimonials = [
  {
    quote:
      'Antes respondíamos consultas uno por uno y perdíamos clientes por las noches. Ahora el chatbot filtra, responde y deriva automáticamente. Cuando abrimos los mensajes, los clientes ya están listos para comprar.',
    author: 'Martín R.',
    role: 'Dueño',
    business: 'Panadería La Victoria',
    initials: 'MR',
    gradient: 'from-brand-violet/40 to-violet-700/30',
  },
  {
    quote:
      'La página web nueva cambió por completo la imagen del consultorio. Los pacientes ven los especialistas, leen sobre los servicios y nos contactan sin llamar. El cambio en la cantidad de consultas fue inmediato.',
    author: 'Sofía G.',
    role: 'Directora',
    business: 'Centro de Estética Lumina',
    initials: 'SG',
    gradient: 'from-fuchsia-600/40 to-brand-violet/30',
  },
  {
    quote:
      'Implementamos el sistema de gestión de pedidos en dos semanas. Lo que antes tardaba horas ahora es completamente automático. El equipo de KODEM estuvo disponible en cada paso.',
    author: 'Nicolás F.',
    role: 'Gerente',
    business: 'Distribuidora Ferreyra',
    initials: 'NF',
    gradient: 'from-violet-600/40 to-fuchsia-500/30',
  },
];

function Stars() {
  return (
    <div className="flex gap-1 mb-5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={14} className="text-brand-violet fill-brand-violet" />
      ))}
    </div>
  );
}

export function Testimonios() {
  return (
    <section className="py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#07021a]/50 to-transparent pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-brand-violet/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-16">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.04] text-brand-gray text-xs font-bold tracking-widest uppercase mb-5"
            >
              Testimonios
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl xl:text-6xl font-bold leading-tight"
            >
              Lo que dicen{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-violet via-violet-400 to-fuchsia-400">
                nuestros clientes
              </span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-base text-brand-gray max-w-xs leading-relaxed md:text-right"
          >
            Negocios reales que digitalizaron con KODEM y lo notaron desde el primer mes.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.author}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group"
            >
              {/* Gradient border wrapper */}
              <div className="p-px rounded-3xl bg-gradient-to-br from-brand-violet/30 via-fuchsia-500/8 to-transparent group-hover:from-brand-violet/55 group-hover:via-fuchsia-500/18 transition-all duration-500 h-full">
                <div className="bg-[#0b0e18] rounded-3xl p-8 h-full flex flex-col relative overflow-hidden">

                  {/* Comilla decorativa de fondo */}
                  <span
                    className="absolute -right-2 -top-6 font-display font-black leading-none select-none pointer-events-none text-brand-violet/[0.06] group-hover:text-brand-violet/[0.1] transition-colors duration-500"
                    style={{ fontSize: '120px' }}
                  >
                    "
                  </span>

                  {/* Estrellas */}
                  <Stars />

                  {/* Quote */}
                  <p className="text-white/85 text-sm leading-relaxed flex-1 mb-8 relative z-10">
                    "{t.quote}"
                  </p>

                  {/* Divider */}
                  <div className="w-full h-px bg-gradient-to-r from-brand-violet/30 via-brand-violet/10 to-transparent mb-5" />

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    {/* Avatar con gradiente */}
                    <div
                      className={`w-11 h-11 rounded-xl bg-gradient-to-br ${t.gradient} border border-brand-violet/30 flex items-center justify-center flex-shrink-0 shadow-[0_0_15px_rgba(139,92,246,0.25)]`}
                    >
                      <span className="text-white text-xs font-bold font-display">
                        {t.initials}
                      </span>
                    </div>
                    <div>
                      <p className="text-white text-sm font-semibold leading-tight">
                        {t.author}
                      </p>
                      <p className="text-brand-gray/70 text-xs mt-0.5">
                        {t.role} · {t.business}
                      </p>
                    </div>
                  </div>

                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-8 text-sm text-brand-gray/60"
        >
          {[
            '✓  Sin contratos largos',
            '✓  Soporte incluido',
            '✓  Resultados medibles',
            '✓  100% a medida',
          ].map((item) => (
            <span key={item} className="font-medium">
              {item}
            </span>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
