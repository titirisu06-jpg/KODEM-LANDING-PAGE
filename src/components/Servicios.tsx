import { motion } from 'motion/react';
import { ArrowRight, Globe, Workflow, Database, MessageSquare, Lightbulb } from 'lucide-react';

const services = [
  {
    icon: Globe,
    title: 'Páginas web',
    desc: 'Creamos páginas web modernas, profesionales y adaptadas a cada negocio para que tu marca se vea confiable, clara y preparada para vender más.',
    features: ['Webs institucionales', 'Landing pages', 'Catálogos digitales', 'Sitios responsive', 'Conexión con WhatsApp', 'Diseño visual profesional'],
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
    features: ['CRM simple', 'Paneles internos', 'Gestión de clientes', 'Gestión de pedidos', 'Gestión de turnos', 'Bases de datos', 'Herramientas administrativas'],
    btnText: 'Consultar por sistema',
    whatsappMsg: 'Hola KODEM, quiero consultar por un sistema personalizado.',
  },
  {
    icon: MessageSquare,
    title: 'Chatbots',
    desc: 'Creamos asistentes digitales que responden consultas, ayudan a no perder clientes y trabajan incluso cuando no estás conectado.',
    features: ['Chatbots para web', 'Chatbots para WhatsApp', 'Respuestas 24/7', 'Información del negocio', 'Derivación a una persona', 'Atención de múltiples clientes'],
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
    <section id="servicios" className="py-24 px-6 md:px-12 max-w-7xl mx-auto relative relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-brand-violet/10 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="text-center mb-20 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-6"
        >
          Qué ofrecemos
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-lg md:text-xl text-brand-gray max-w-2xl mx-auto"
        >
          Soluciones digitales diseñadas para que tu negocio crezca sin complicaciones.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
        {services.map((srv, i) => (
          <motion.div
            key={srv.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className={`bg-brand-card p-8 md:p-10 rounded-3xl border border-white/5 hover:border-brand-violet/30 transition-colors flex flex-col ${srv.fullWidth ? 'md:col-span-2 md:flex-row md:items-center gap-8' : ''}`}
          >
            <div className={`flex-1 ${srv.fullWidth ? 'md:pr-12' : ''}`}>
              <div className="w-14 h-14 rounded-2xl bg-brand-violet/10 text-brand-violet flex items-center justify-center mb-6">
                <srv.icon size={28} />
              </div>
              <h3 className="text-2xl font-display font-semibold mb-4">{srv.title}</h3>
              <p className="text-brand-gray leading-relaxed mb-6">
                {srv.desc}
              </p>
              
              {srv.features.length > 0 && (
                <ul className="space-y-3 mb-8">
                  {srv.features.map((feat) => (
                    <li key={feat} className="flex items-start text-sm text-brand-gray/80">
                      <span className="text-brand-violet mr-3 mt-1">•</span>
                      {feat}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className={`${srv.fullWidth ? 'md:w-auto mt-4 md:mt-0' : 'mt-auto'}`}>
              <button
                onClick={() => openWhatsApp(srv.whatsappMsg)}
                className="group flex items-center justify-between w-full md:w-auto px-6 py-4 bg-white/5 hover:bg-brand-violet/10 border border-white/10 hover:border-brand-violet/50 rounded-xl transition-all duration-300 text-sm font-medium"
              >
                <span>{srv.btnText}</span>
                <ArrowRight size={18} className="ml-4 group-hover:translate-x-1 transition-transform text-brand-violet" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
