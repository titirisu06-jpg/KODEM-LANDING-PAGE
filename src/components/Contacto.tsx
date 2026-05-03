import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, Instagram, Send, MessageCircle, ChevronDown } from 'lucide-react';

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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

    const msg = `Hola KODEM, quiero hacer una consulta.\n\n*Nombre:* ${form.nombre}\n*Empresa / negocio:* ${form.empresa || '-'}\n*Teléfono:* ${form.telefono}\n*Email:* ${form.email}\n*Tipo de consulta:* ${form.tipo}\n\n*Mensaje:*\n${form.mensaje}`;
    const url = `https://wa.me/5492914738554?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
  };

  const handleEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const subject = 'Consulta desde la web de KODEM';
    const body = `Hola KODEM, quiero hacer una consulta.\n\nNombre: ${form.nombre}\nEmpresa / negocio: ${form.empresa || '-'}\nTeléfono: ${form.telefono}\nEmail: ${form.email}\nTipo de consulta: ${form.tipo}\n\nMensaje:\n${form.mensaje}`;
    const url = `mailto:kodemagency@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = url;
  };

  return (
    <section id="contacto" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8">
        
        {/* INFO COLUMN */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-2 bg-brand-card p-10 rounded-3xl border border-white/5 flex flex-col h-full relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-violet/10 blur-[80px] rounded-full pointer-events-none" />
          
          <h3 className="text-3xl font-bold mb-8 relative z-10">Información de contacto</h3>
          
          <div className="space-y-6 flex-grow relative z-10">
            <a href="https://wa.me/5492914738554" target="_blank" rel="noopener noreferrer" className="flex items-center group">
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mr-6 group-hover:bg-brand-violet/20 transition-colors text-brand-violet border border-white/5">
                <Phone size={20} />
              </div>
              <div>
                <p className="text-sm text-brand-gray mb-1">WhatsApp</p>
                <p className="font-medium group-hover:text-brand-violet transition-colors">2914738554</p>
              </div>
            </a>
            
            <a href="mailto:kodemagency@gmail.com" className="flex items-center group">
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mr-6 group-hover:bg-brand-violet/20 transition-colors text-brand-violet border border-white/5">
                <Mail size={20} />
              </div>
              <div>
                <p className="text-sm text-brand-gray mb-1">Email</p>
                <p className="font-medium group-hover:text-brand-violet transition-colors break-all">kodemagency@gmail.com</p>
              </div>
            </a>
            
            <a href="https://www.instagram.com/deltakingarrrr" target="_blank" rel="noopener noreferrer" className="flex items-center group">
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mr-6 group-hover:bg-brand-violet/20 transition-colors text-brand-violet border border-white/5">
                <Instagram size={20} />
              </div>
              <div>
                <p className="text-sm text-brand-gray mb-1">Instagram</p>
                <p className="font-medium group-hover:text-brand-violet transition-colors">@deltakingarrrr</p>
              </div>
            </a>
          </div>

          <div className="mt-12 relative z-10">
            <a
              href="https://www.instagram.com/deltakingarrrr"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl font-medium transition-colors"
            >
              Unite a nuestra comunidad
            </a>
          </div>
        </motion.div>

        {/* FORM COLUMN */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-3"
        >
          <h3 className="text-3xl font-bold mb-8">Contanos tu idea</h3>
          <form className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="space-y-1.5">
                <label className="text-sm text-brand-gray font-medium px-1">Nombre completo *</label>
                <input
                  type="text"
                  name="nombre"
                  value={form.nombre}
                  onChange={handleChange}
                  className="w-full bg-brand-card border border-white/10 rounded-xl px-5 py-3.5 focus:outline-none focus:border-brand-violet focus:ring-1 focus:ring-brand-violet transition-colors"
                  placeholder="Tu nombre"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-sm text-brand-gray font-medium px-1">Empresa / negocio</label>
                <input
                  type="text"
                  name="empresa"
                  value={form.empresa}
                  onChange={handleChange}
                  className="w-full bg-brand-card border border-white/10 rounded-xl px-5 py-3.5 focus:outline-none focus:border-brand-violet focus:ring-1 focus:ring-brand-violet transition-colors"
                  placeholder="Nombre de tu negocio"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-sm text-brand-gray font-medium px-1">Teléfono *</label>
                <input
                  type="tel"
                  name="telefono"
                  value={form.telefono}
                  onChange={handleChange}
                  className="w-full bg-brand-card border border-white/10 rounded-xl px-5 py-3.5 focus:outline-none focus:border-brand-violet focus:ring-1 focus:ring-brand-violet transition-colors"
                  placeholder="Tu número"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-sm text-brand-gray font-medium px-1">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full bg-brand-card border border-white/10 rounded-xl px-5 py-3.5 focus:outline-none focus:border-brand-violet focus:ring-1 focus:ring-brand-violet transition-colors"
                  placeholder="tu@email.com"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-sm text-brand-gray font-medium px-1">Tipo de consulta *</label>
              <div className="relative">
                <select
                  name="tipo"
                  value={form.tipo}
                  onChange={handleChange}
                  className="w-full bg-brand-card border border-white/10 rounded-xl px-5 py-3.5 focus:outline-none focus:border-brand-violet focus:ring-1 focus:ring-brand-violet transition-colors appearance-none"
                >
                  <option value="" disabled>Seleccioná una opción</option>
                  <option value="Página web">Página web</option>
                  <option value="Automatización de procesos">Automatización de procesos</option>
                  <option value="Sistema personalizado">Sistema personalizado</option>
                  <option value="Chatbot">Chatbot</option>
                  <option value="Solución a medida">Solución a medida</option>
                  <option value="Otra consulta">Otra consulta</option>
                </select>
                <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 text-brand-gray pointer-events-none" size={18} />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-sm text-brand-gray font-medium px-1">Mensaje *</label>
              <textarea
                name="mensaje"
                value={form.mensaje}
                onChange={handleChange}
                rows={4}
                className="w-full bg-brand-card border border-white/10 rounded-xl px-5 py-3.5 focus:outline-none focus:border-brand-violet focus:ring-1 focus:ring-brand-violet transition-colors resize-none"
                placeholder="Contanos más sobre lo que necesitás..."
              ></textarea>
            </div>

            <AnimatePresence>
              {error && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="text-red-400 text-sm bg-red-400/10 border border-red-400/20 px-4 py-3 rounded-xl flex items-center"
                >
                   {error}
                </motion.div>
              )}
            </AnimatePresence>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 pt-4">
              <button
                onClick={handleWhatsApp}
                className="flex items-center justify-center py-4 px-6 bg-brand-violet hover:bg-brand-violet/90 text-white rounded-xl font-medium transition-colors shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:shadow-[0_0_25px_rgba(139,92,246,0.5)]"
              >
                <MessageCircle size={18} className="mr-2" />
                Enviar por WhatsApp
              </button>
              <button
                onClick={handleEmail}
                className="flex items-center justify-center py-4 px-6 bg-brand-dark hover:bg-brand-card border border-white/20 hover:border-brand-violet/50 rounded-xl font-medium transition-colors"
              >
                <Send size={18} className="mr-2" />
                Enviar por Email
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
