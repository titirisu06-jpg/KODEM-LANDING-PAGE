import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, Instagram, Send, MessageCircle, ChevronDown } from 'lucide-react';

const contactLinks = [
  {
    icon: Phone,
    label: 'WhatsApp',
    value: '2914738554',
    href: 'https://wa.me/5492914738554',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'kodemagency@gmail.com',
    href: 'mailto:kodemagency@gmail.com',
  },
  {
    icon: Instagram,
    label: 'Instagram',
    value: '@deltakingarrrr',
    href: 'https://www.instagram.com/deltakingarrrr',
  },
];

export function Contacto() {
  const [form, setForm] = useState({
    nombre: '',
    empresa: '',
    telefono: '',
    email: '',
    tipo: '',
    mensaje: '',
  });
  const [error, setError] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (error) setError('');
  };

  const validate = () => {
    if (!form.nombre || !form.telefono || !form.email || !form.tipo || !form.mensaje) {
      setError('Por favor, completá los campos obligatorios (*).');
      return false;
    }
    return true;
  };

  const handleWhatsApp = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!validate()) return;
    const msg = `Hola KODEM, quiero hacer una consulta.\n\n*Nombre:* ${form.nombre}\n*Empresa:* ${form.empresa || '-'}\n*Teléfono:* ${form.telefono}\n*Email:* ${form.email}\n*Consulta:* ${form.tipo}\n\n*Mensaje:*\n${form.mensaje}`;
    window.open(`https://wa.me/5492914738554?text=${encodeURIComponent(msg)}`, '_blank');
  };

  const handleEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!validate()) return;
    const subject = 'Consulta desde la web de KODEM';
    const body = `Nombre: ${form.nombre}\nEmpresa: ${form.empresa || '-'}\nTeléfono: ${form.telefono}\nEmail: ${form.email}\nConsulta: ${form.tipo}\n\nMensaje:\n${form.mensaje}`;
    window.location.href = `mailto:kodemagency@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const inputClass =
    'w-full bg-white/[0.04] border border-white/10 rounded-xl px-5 py-3.5 text-sm text-white placeholder-brand-gray/50 focus:outline-none focus:border-brand-violet/60 focus:ring-1 focus:ring-brand-violet/40 transition-all';

  return (
    <section id="contacto" className="py-28 relative overflow-hidden">
      {/* Background — climax total */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#07021a]/70 to-brand-dark pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-brand-violet/15 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[250px] bg-fuchsia-500/10 blur-[80px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        {/* ── Section header — climax ── */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-violet/40 bg-brand-violet/15 text-brand-violet text-xs font-bold tracking-widest uppercase mb-7"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-brand-violet animate-pulse" />
            Contacto
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl xl:text-7xl font-bold leading-[1.05] mb-6 tracking-tight"
          >
            Hacelo{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-violet via-violet-400 to-fuchsia-400">
              realidad.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-brand-gray max-w-xl mx-auto leading-relaxed"
          >
            Contanos tu idea. Nosotros la analizamos y la convertimos en una solución digital real para tu negocio.
          </motion.p>
        </div>

        {/* ── Grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-5">

          {/* Info column */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-2 group"
          >
            <div className="p-px rounded-3xl bg-gradient-to-br from-brand-violet/35 via-fuchsia-500/10 to-transparent h-full">
              <div className="bg-[#0b0e18] rounded-3xl p-9 h-full flex flex-col relative overflow-hidden">

                {/* Inner orb */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-brand-violet/10 blur-[60px] rounded-full pointer-events-none" />

                <div className="relative z-10 flex-1">
                  <h3 className="text-2xl font-bold mb-2">Información de contacto</h3>
                  <p className="text-brand-gray text-sm mb-9 leading-relaxed">
                    Elegí el canal que prefieras. Respondemos rápido.
                  </p>

                  <div className="space-y-4">
                    {contactLinks.map(({ icon: Icon, label, value, href }) => (
                      <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/link flex items-center gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/[0.07] hover:border-brand-violet/35 hover:bg-brand-violet/[0.07] transition-all duration-300"
                      >
                        <div className="w-10 h-10 rounded-xl bg-brand-violet/15 border border-brand-violet/30 flex items-center justify-center text-brand-violet shadow-[0_0_12px_rgba(139,92,246,0.25)] flex-shrink-0 group-hover/link:shadow-[0_0_20px_rgba(139,92,246,0.4)] transition-shadow duration-300">
                          <Icon size={18} strokeWidth={1.75} />
                        </div>
                        <div className="min-w-0">
                          <p className="text-brand-gray/70 text-xs font-medium uppercase tracking-wider mb-0.5">
                            {label}
                          </p>
                          <p className="text-white text-sm font-medium group-hover/link:text-brand-violet transition-colors truncate">
                            {value}
                          </p>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>

                {/* Community CTA */}
                <div className="relative z-10 mt-8 pt-8 border-t border-white/[0.07]">
                  <a
                    href="https://www.instagram.com/deltakingarrrr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-3.5 bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-brand-violet/30 rounded-xl text-sm font-semibold text-white/80 hover:text-white transition-all duration-300"
                  >
                    <Instagram size={16} className="text-brand-violet" />
                    Unite a nuestra comunidad
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form column */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="lg:col-span-3"
          >
            <div className="p-px rounded-3xl bg-gradient-to-br from-white/[0.08] via-brand-violet/10 to-transparent">
              <div className="bg-[#0b0e18] rounded-3xl p-9">
                <h3 className="text-2xl font-bold mb-2">Contanos tu idea</h3>
                <p className="text-brand-gray text-sm mb-8">Los campos con * son obligatorios.</p>

                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs text-brand-gray/80 font-semibold uppercase tracking-wider px-1">
                        Nombre completo *
                      </label>
                      <input
                        type="text"
                        name="nombre"
                        value={form.nombre}
                        onChange={handleChange}
                        className={inputClass}
                        placeholder="Tu nombre"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs text-brand-gray/80 font-semibold uppercase tracking-wider px-1">
                        Empresa / negocio
                      </label>
                      <input
                        type="text"
                        name="empresa"
                        value={form.empresa}
                        onChange={handleChange}
                        className={inputClass}
                        placeholder="Nombre de tu negocio"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs text-brand-gray/80 font-semibold uppercase tracking-wider px-1">
                        Teléfono *
                      </label>
                      <input
                        type="tel"
                        name="telefono"
                        value={form.telefono}
                        onChange={handleChange}
                        className={inputClass}
                        placeholder="Tu número"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs text-brand-gray/80 font-semibold uppercase tracking-wider px-1">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        className={inputClass}
                        placeholder="tu@email.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs text-brand-gray/80 font-semibold uppercase tracking-wider px-1">
                      Tipo de consulta *
                    </label>
                    <div className="relative">
                      <select
                        name="tipo"
                        value={form.tipo}
                        onChange={handleChange}
                        className={`${inputClass} appearance-none`}
                      >
                        <option value="" disabled>
                          Seleccioná una opción
                        </option>
                        <option value="Página web">Página web</option>
                        <option value="Automatización de procesos">Automatización de procesos</option>
                        <option value="Sistema personalizado">Sistema personalizado</option>
                        <option value="Chatbot">Chatbot</option>
                        <option value="Solución a medida">Solución a medida</option>
                        <option value="Otra consulta">Otra consulta</option>
                      </select>
                      <ChevronDown
                        className="absolute right-5 top-1/2 -translate-y-1/2 text-brand-gray pointer-events-none"
                        size={16}
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs text-brand-gray/80 font-semibold uppercase tracking-wider px-1">
                      Mensaje *
                    </label>
                    <textarea
                      name="mensaje"
                      value={form.mensaje}
                      onChange={handleChange}
                      rows={4}
                      className={`${inputClass} resize-none`}
                      placeholder="Contanos más sobre lo que necesitás..."
                    />
                  </div>

                  <AnimatePresence>
                    {error && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="text-red-400 text-sm bg-red-400/10 border border-red-400/20 px-4 py-3 rounded-xl"
                      >
                        {error}
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    <button
                      onClick={handleWhatsApp}
                      className="flex items-center justify-center gap-2 py-4 px-6 bg-brand-violet hover:bg-brand-violet/90 text-white rounded-xl font-semibold text-sm transition-all duration-300 shadow-[0_0_25px_rgba(139,92,246,0.45)] hover:shadow-[0_0_40px_rgba(139,92,246,0.65)] cursor-pointer"
                    >
                      <MessageCircle size={17} />
                      Enviar por WhatsApp
                    </button>
                    <button
                      onClick={handleEmail}
                      className="flex items-center justify-center gap-2 py-4 px-6 bg-white/[0.04] hover:bg-white/[0.08] border border-white/15 hover:border-brand-violet/40 text-white rounded-xl font-semibold text-sm transition-all duration-300 cursor-pointer"
                    >
                      <Send size={17} />
                      Enviar por Email
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
