import { motion } from 'motion/react';
import { ArrowUpRight, Globe, Workflow, Database, MessageSquare, Lightbulb } from 'lucide-react';

/* ─────────────────────────────────────────────
   Mini-visuales decorativos únicos por card
   ───────────────────────────────────────────── */

/** Browser mockup — para Páginas web */
function BrowserVisual() {
  return (
    <div className="mb-6 select-none pointer-events-none">
      <div className="flex items-center gap-1.5 px-3 py-2 bg-white/[0.06] rounded-t-xl border border-white/[0.08] border-b-0">
        <span className="w-2.5 h-2.5 rounded-full bg-red-400/50" />
        <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/50" />
        <span className="w-2.5 h-2.5 rounded-full bg-green-400/50" />
        <div className="flex-1 h-2 bg-white/[0.06] rounded-full ml-2" />
      </div>
      <div className="h-16 bg-white/[0.03] rounded-b-xl border border-white/[0.08] border-t-0 overflow-hidden px-3 pt-3 space-y-2">
        <div className="h-1.5 bg-brand-violet/30 rounded-full w-1/2" />
        <div className="h-1.5 bg-white/10 rounded-full w-full" />
        <div className="h-1.5 bg-white/10 rounded-full w-3/4" />
      </div>
    </div>
  );
}

/** Flujo de automatización */
function FlowVisual() {
  return (
    <div className="mb-6 flex items-center gap-2 select-none pointer-events-none">
      {['Entrada', 'Proceso', 'Salida'].map((step, i) => (
        <div key={step} className="flex items-center gap-2 flex-1">
          <div className="flex-1 py-2 text-center text-[10px] font-bold uppercase tracking-wider border border-brand-violet/25 bg-brand-violet/8 rounded-lg text-brand-violet/60">
            {step}
          </div>
          {i < 2 && (
            <svg width="14" height="10" viewBox="0 0 14 10" fill="none" className="text-brand-violet/30 flex-shrink-0">
              <path d="M1 5h12M8 1l5 4-5 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
        </div>
      ))}
    </div>
  );
}

/** Filas de base de datos — para Sistemas */
function DataVisual() {
  const rows = [
    { w: '75%', accent: true },
    { w: '55%', accent: false },
    { w: '88%', accent: false },
    { w: '42%', accent: false },
  ];
  return (
    <div className="mb-6 space-y-2 select-none pointer-events-none">
      <div className="flex items-center gap-2 text-[10px] text-brand-gray/40 font-bold uppercase tracking-wider border-b border-white/[0.06] pb-1.5">
        <span className="w-4 text-center">#</span>
        <span>Cliente</span>
        <span className="ml-auto">Estado</span>
      </div>
      {rows.map((row, i) => (
        <div key={i} className="flex items-center gap-2">
          <span className="w-4 text-center text-[9px] text-brand-gray/25">{i + 1}</span>
          <div className="flex-1 h-1.5 bg-white/[0.07] rounded-full overflow-hidden">
            <div
              className={`h-full rounded-full ${row.accent ? 'bg-brand-violet/50' : 'bg-white/20'}`}
              style={{ width: row.w }}
            />
          </div>
          <span className={`text-[9px] font-bold ${row.accent ? 'text-brand-violet' : 'text-white/25'}`}>
            {row.accent ? 'activo' : '···'}
          </span>
        </div>
      ))}
    </div>
  );
}

/** Burbujas de chat — para Chatbots */
function ChatVisual() {
  return (
    <div className="mb-6 space-y-2 select-none pointer-events-none">
      <div className="flex items-end gap-2">
        <div className="w-6 h-6 rounded-full bg-brand-violet/30 border border-brand-violet/40 flex-shrink-0" />
        <div className="px-3 py-2 bg-brand-violet/15 border border-brand-violet/25 rounded-2xl rounded-bl-sm text-[11px] text-brand-violet/80 max-w-[75%]">
          ¿Tienen disponibilidad hoy?
        </div>
      </div>
      <div className="flex items-end gap-2 flex-row-reverse">
        <div className="w-6 h-6 rounded-full bg-white/10 border border-white/15 flex-shrink-0" />
        <div className="px-3 py-2 bg-white/[0.06] border border-white/10 rounded-2xl rounded-br-sm text-[11px] text-white/50 max-w-[75%]">
          ¡Sí! Turno disponible a las 15hs 📅
        </div>
      </div>
      <div className="flex items-center gap-1 pl-8">
        <span className="w-1 h-1 rounded-full bg-brand-violet/50 animate-bounce" style={{ animationDelay: '0ms' }} />
        <span className="w-1 h-1 rounded-full bg-brand-violet/50 animate-bounce" style={{ animationDelay: '150ms' }} />
        <span className="w-1 h-1 rounded-full bg-brand-violet/50 animate-bounce" style={{ animationDelay: '300ms' }} />
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Datos de servicios
   ───────────────────────────────────────────── */
const services = [
  {
    id: 'web' as const,
    icon: Globe,
    title: 'Páginas web',
    desc: 'Creamos páginas web modernas, profesionales y adaptadas a cada negocio para que tu marca se vea confiable y preparada para vender más.',
    features: ['Webs institucionales', 'Landing pages', 'Catálogos digitales', 'Sitios responsive', 'Conexión con WhatsApp'],
    btnText: 'Consultar por página web',
    whatsappMsg: 'Hola KODEM, quiero consultar por una página web.',
    bgClass: '',
    borderFrom: 'from-brand-violet/30',
    borderHoverFrom: 'group-hover:from-brand-violet/60',
  },
  {
    id: 'automation' as const,
    icon: Workflow,
    title: 'Automatización de procesos',
    desc: 'Automatizamos tareas repetitivas para que tu negocio ahorre tiempo, responda más rápido y trabaje de forma más ordenada.',
    features: ['Respuestas automáticas', 'Organización de consultas', 'Reducción de trabajo manual', 'Flujos internos'],
    btnText: 'Consultar por automatización',
    whatsappMsg: 'Hola KODEM, quiero consultar por una automatización.',
    bgClass: '',
    borderFrom: 'from-fuchsia-500/25',
    borderHoverFrom: 'group-hover:from-fuchsia-500/55',
  },
  {
    id: 'systems' as const,
    icon: Database,
    title: 'Creación de sistemas',
    desc: 'Desarrollamos sistemas personalizados para ordenar clientes, pedidos, turnos, consultas y procesos internos.',
    features: ['CRM simple', 'Paneles internos', 'Gestión de clientes', 'Gestión de pedidos', 'Bases de datos'],
    btnText: 'Consultar por sistema',
    whatsappMsg: 'Hola KODEM, quiero consultar por un sistema personalizado.',
    bgClass: '',
    borderFrom: 'from-indigo-500/25',
    borderHoverFrom: 'group-hover:from-indigo-500/55',
  },
  {
    id: 'chatbot' as const,
    icon: MessageSquare,
    title: 'Chatbots',
    desc: 'Creamos asistentes digitales que responden consultas, ayudan a no perder clientes y trabajan incluso cuando no estás conectado.',
    features: ['Chatbots para web', 'Chatbots para WhatsApp', 'Respuestas 24/7', 'Derivación a persona'],
    btnText: 'Consultar por chatbot',
    whatsappMsg: 'Hola KODEM, quiero consultar por un chatbot.',
    bgClass: '',
    borderFrom: 'from-violet-400/25',
    borderHoverFrom: 'group-hover:from-violet-400/55',
  },
];

const customService = {
  icon: Lightbulb,
  title: 'Servicio personalizado',
  desc: 'Si tenés una idea o un problema específico, lo analizamos y lo convertimos en una solución digital útil y concreta para tu negocio.',
  btnText: 'Contanos tu idea',
  whatsappMsg: 'Hola KODEM, tengo una idea específica y quiero consultar por una solución digital.',
};

const visuals: Record<string, JSX.Element> = {
  web: <BrowserVisual />,
  automation: <FlowVisual />,
  systems: <DataVisual />,
  chatbot: <ChatVisual />,
};

/* ─────────────────────────────────────────────
   Componente principal
   ───────────────────────────────────────────── */
export function Servicios() {
  const openWhatsApp = (msg: string) =>
    window.open(`https://wa.me/5492914738554?text=${encodeURIComponent(msg)}`, '_blank');

  return (
    <section id="servicios" className="py-28 relative overflow-hidden">
      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(rgba(139,92,246,0.11) 1px, transparent 1px)',
          backgroundSize: '30px 30px',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-brand-dark via-transparent to-brand-dark pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-transparent to-brand-dark pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-brand-violet/8 blur-[160px] rounded-full pointer-events-none" />

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
              className="text-4xl md:text-5xl xl:text-6xl font-bold"
            >
              Qué{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-violet via-violet-400 to-fuchsia-400">
                ofrecemos
              </span>
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

        {/* ── Grid 2 columnas — 4 cards con visuales únicos ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          {services.map((srv, i) => (
            <motion.div
              key={srv.id}
              initial={{ opacity: 0, y: i % 2 === 0 ? 32 : 48 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="group"
            >
              {/* Gradient border — cada card con color diferente */}
              <div
                className={`p-px rounded-3xl bg-gradient-to-br ${srv.borderFrom} via-white/[0.03] to-transparent ${srv.borderHoverFrom} hover:via-white/[0.05] transition-all duration-500 h-full`}
              >
                <div className="bg-[#0b0e18] rounded-3xl p-8 h-full flex flex-col relative overflow-hidden">

                  {/* Icono grande decorativo de fondo */}
                  <div className="absolute -right-6 -bottom-6 pointer-events-none select-none text-brand-violet/[0.035] group-hover:text-brand-violet/[0.065] transition-colors duration-500">
                    <srv.icon size={160} strokeWidth={0.4} />
                  </div>

                  {/* Orb de color en hover */}
                  <div className="absolute top-0 right-0 w-48 h-48 opacity-0 group-hover:opacity-100 blur-[50px] rounded-full pointer-events-none transition-opacity duration-700 bg-brand-violet/10" />

                  {/* ─ Visual decorativo único ─ */}
                  {visuals[srv.id]}

                  {/* Icono real */}
                  <div className="w-11 h-11 rounded-xl bg-brand-violet/20 border border-brand-violet/35 flex items-center justify-center text-brand-violet mb-5 shadow-[0_0_18px_rgba(139,92,246,0.35)] group-hover:shadow-[0_0_28px_rgba(139,92,246,0.55)] transition-shadow duration-300">
                    <srv.icon size={20} strokeWidth={1.75} />
                  </div>

                  <h3 className="text-xl font-display font-bold mb-3">{srv.title}</h3>
                  <p className="text-brand-gray text-sm leading-relaxed mb-6 flex-1">{srv.desc}</p>

                  {/* Feature pills */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {srv.features.map((f) => (
                      <span
                        key={f}
                        className="px-2.5 py-1 bg-brand-violet/8 border border-brand-violet/15 group-hover:border-brand-violet/30 rounded-full text-[11px] font-medium text-brand-gray/85 transition-colors duration-300"
                      >
                        {f}
                      </span>
                    ))}
                  </div>

                  {/* Separador + botón */}
                  <div className="w-full h-px bg-gradient-to-r from-transparent via-brand-violet/20 to-transparent mb-5" />
                  <button
                    onClick={() => openWhatsApp(srv.whatsappMsg)}
                    className="group/btn flex items-center justify-between w-full px-5 py-3.5 bg-brand-violet/12 hover:bg-brand-violet/22 border border-brand-violet/25 hover:border-brand-violet/55 rounded-xl transition-all duration-300 text-sm font-semibold cursor-pointer"
                  >
                    <span className="text-white/80 group-hover/btn:text-white transition-colors">
                      {srv.btnText}
                    </span>
                    <ArrowUpRight
                      size={16}
                      className="text-brand-violet flex-shrink-0 ml-3 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-200"
                    />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Card personalizado — diseño completamente diferente ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.35 }}
          className="group relative overflow-hidden rounded-3xl"
        >
          {/* Fondo con gradiente fuerte — rompe visualmente con las cards anteriores */}
          <div className="absolute inset-0 bg-gradient-to-r from-brand-violet/25 via-fuchsia-500/15 to-brand-violet/20 group-hover:from-brand-violet/35 group-hover:via-fuchsia-500/22 transition-all duration-700" />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)',
              backgroundSize: '22px 22px',
            }}
          />
          <div className="absolute inset-0 border border-brand-violet/35 group-hover:border-brand-violet/60 rounded-3xl transition-colors duration-500" />

          {/* Orbs internos */}
          <div className="absolute -left-20 top-1/2 -translate-y-1/2 w-48 h-48 bg-brand-violet/20 blur-[60px] rounded-full pointer-events-none" />
          <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-48 h-48 bg-fuchsia-500/15 blur-[60px] rounded-full pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 px-10 md:px-16 py-12">
            {/* Left */}
            <div className="text-center md:text-left">
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-brand-violet/50 bg-brand-violet/20 text-brand-violet text-xs font-bold tracking-widest uppercase mb-5">
                <customService.icon size={13} />
                Proyecto especial
              </div>
              <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-3">
                {customService.title}
              </h3>
              <p className="text-white/65 text-sm leading-relaxed max-w-md">
                {customService.desc}
              </p>
            </div>

            {/* Right — CTA grande */}
            <div className="flex-shrink-0">
              <button
                onClick={() => openWhatsApp(customService.whatsappMsg)}
                className="group/btn flex items-center gap-3 px-8 py-4 bg-white text-brand-dark hover:bg-white/90 rounded-xl font-bold text-sm transition-all duration-300 shadow-[0_0_30px_rgba(139,92,246,0.4)] hover:shadow-[0_0_45px_rgba(139,92,246,0.6)] cursor-pointer"
              >
                {customService.btnText}
                <ArrowUpRight
                  size={18}
                  className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-200"
                />
              </button>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
