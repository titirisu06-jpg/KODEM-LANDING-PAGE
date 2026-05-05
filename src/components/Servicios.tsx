import { motion } from 'motion/react';
import { ArrowUpRight, Globe, Workflow, Database, MessageSquare, Lightbulb } from 'lucide-react';

const services = [
  {
    icon: Globe,
    title: 'Páginas web',
    desc: 'Creamos páginas web modernas, profesionales y adaptadas a cada negocio para que tu marca se vea confiable, clara y preparada para vender más.',
    features: ['Webs institucionales', 'Landing pages', 'Catálogos digitales', 'Sitios responsive', 'Conexión con WhatsApp', 'Diseño profesional'],
    btnText: 'Consultar por página web',
    whatsappMsg: 'Hola KODEM, quiero consultar por una página web.',
  },
  {
    icon: Workflow,
    title: 'Automatización de procesos',
    desc: 'Automatizamos tareas repetitivas para que tu negocio ahorre tiempo, responda más rápido y trabaje de forma más ordenada.',
    features: ['Respuestas automáticas', 'Organización de consultas', 'Reducción de trabajo manual', 'Flujos internos', 'Conexión entre herramientas'],
    btnText: 'Consultar por automatización',
    whatsappMsg: 'Hola KODEM, quiero consultar por una automatización para mi negocio.',
  },
  {
    icon: Database,
    title: 'Creación de sistemas',
    desc: 'Desarrollamos sistemas personalizados para ordenar clientes, pedidos, turnos, consultas, datos y procesos internos.',
    features: ['CRM simple', 'Paneles internos', 'Gestión de clientes', 'Gestión de pedidos', 'Gestión de turnos', 'Bases de datos'],
    btnText: 'Consultar por sistema',
    whatsappMsg: 'Hola KODEM, quiero consultar por un sistema personalizado.',
  },
  {
    icon: MessageSquare,
    title: 'Chatbots',
    desc: 'Creamos asistentes digitales que responden consultas, ayudan a no perder clientes y trabajan incluso cuando no estás conectado.',
    features: ['Chatbots para web', 'Chatbots para WhatsApp', 'Respuestas 24/7', 'Información del negocio', 'Derivación a una persona'],
    btnText: 'Consultar por chatbot',
    whatsappMsg: 'Hola KODEM, quiero consultar por un chatbot para mi negocio.',
  },
  {
    icon: Lightbulb,
    title: 'Servicio personalizado',
    desc: 'Si tenés una idea o un problema específico, lo analizamos y vemos cómo transformarlo en una solución digital útil para tu negocio.',
    features: [],
    btnText: 'Contanos tu idea',
    whatsappMsg: 'Hola KODEM, tengo una idea o problema específico y quiero consultar por una solución digital.',
    fullWidth: true,
  },
];

export function Servicios() {
  const openWhatsApp = (msg: string) => {
    window.open(`https://wa.me/5492914738554?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <section id="servicios" className="py-28 relative overflow-hidden">
      {/* Dot grid sutil sobre el fondo */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(rgba(139,92,246,0.12) 1px, transparent 1px)',
          backgroundSize: '30px 30px',
        }}
      />
      {/* Fade edges del dot grid */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-dark via-transparent to-brand-dark pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-transparent to-brand-dark pointer-events-none" />
      {/* Orb violeta */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-brand-violet/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        {/* Header */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.04] text-brand-gray text-xs font-bold tracking-widest uppercase mb-5"
          >
            Servicios
          </motion.div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl xl:text-6xl font-bold leading-tight"
            >
              Qué ofrecemos
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-base text-brand-gray max-w-xs md:text-right leading-relaxed"
            >
              Soluciones digitales diseñadas para que tu negocio crezca sin complicaciones.
            </motion.p>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {services.map((srv, i) => (
            <motion.div
              key={srv.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className={`group ${srv.fullWidth ? 'md:col-span-2' : ''}`}
            >
              {/* Gradient border wrapper */}
              <div
                className={`relative p-px rounded-3xl bg-gradient-to-br from-brand-violet/30 via-fuchsia-500/5 to-white/[0.02] group-hover:from-brand-violet/60 group-hover:via-fuchsia-500/20 group-hover:to-white/[0.04] transition-all duration-500 h-full ${
                  srv.fullWidth ? 'flex' : ''
                }`}
              >
                <div
                  className={`bg-[#0b0e18] rounded-3xl relative overflow-hidden h-full ${
                    srv.fullWidth
                      ? 'flex flex-col md:flex-row md:items-center w-full'
                      : 'flex flex-col'
                  }`}
                >
                  {/* Icono gigante de fondo, decorativo */}
                  <div className="absolute -right-8 -bottom-8 pointer-events-none select-none text-brand-violet/[0.04] group-hover:text-brand-violet/[0.07] transition-colors duration-500">
                    <srv.icon size={180} strokeWidth={0.4} />
                  </div>

                  {/* Orb interno en hover */}
                  <div className="absolute top-0 right-0 w-40 h-40 bg-brand-violet/0 group-hover:bg-brand-violet/8 blur-[50px] rounded-full pointer-events-none transition-colors duration-700" />

                  {/* Content principal */}
                  <div className={`relative flex-1 p-8 md:p-10 ${srv.fullWidth ? 'md:pr-6' : ''}`}>
                    {/* Icono con glow */}
                    <div className="w-13 h-13 w-12 h-12 rounded-2xl bg-brand-violet/20 border border-brand-violet/40 text-brand-violet flex items-center justify-center mb-7 shadow-[0_0_22px_rgba(139,92,246,0.35)] group-hover:shadow-[0_0_35px_rgba(139,92,246,0.55)] transition-shadow duration-400">
                      <srv.icon size={22} strokeWidth={1.75} />
                    </div>

                    <h3 className="text-2xl font-display font-bold mb-3 group-hover:text-white transition-colors">
                      {srv.title}
                    </h3>
                    <p className="text-brand-gray text-sm leading-relaxed mb-7">
                      {srv.desc}
                    </p>

                    {srv.features.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {srv.features.map((feat) => (
                          <span
                            key={feat}
                            className="px-3 py-1 bg-brand-violet/10 border border-brand-violet/20 group-hover:border-brand-violet/35 rounded-full text-[11px] font-medium text-brand-gray/90 transition-colors duration-300"
                          >
                            {feat}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Separador + CTA */}
                  <div
                    className={`relative ${
                      srv.fullWidth
                        ? 'md:w-60 md:py-10 md:pr-10 px-8 pb-8 md:border-l md:border-white/[0.05]'
                        : 'px-8 pb-8 md:px-10 md:pb-10'
                    }`}
                  >
                    {!srv.fullWidth && (
                      <div className="w-full h-px bg-gradient-to-r from-transparent via-brand-violet/25 to-transparent mb-6" />
                    )}
                    <button
                      onClick={() => openWhatsApp(srv.whatsappMsg)}
                      className="group/btn flex items-center justify-between w-full px-5 py-3.5 bg-brand-violet/15 hover:bg-brand-violet/25 border border-brand-violet/35 hover:border-brand-violet/60 rounded-xl transition-all duration-300 text-sm font-semibold cursor-pointer shadow-[0_0_15px_rgba(139,92,246,0.0)] hover:shadow-[0_0_20px_rgba(139,92,246,0.2)]"
                    >
                      <span className="text-white/85 group-hover/btn:text-white transition-colors">
                        {srv.btnText}
                      </span>
                      <ArrowUpRight
                        size={16}
                        className="text-brand-violet flex-shrink-0 ml-3 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-200"
                      />
                    </button>
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
