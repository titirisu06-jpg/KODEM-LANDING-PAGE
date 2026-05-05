import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, MessageCircle } from 'lucide-react';

const links = [
  { label: 'Servicios', href: 'servicios' },
  { label: 'Por qué elegirnos', href: 'beneficios' },
  { label: 'Proceso', href: 'proceso' },
  { label: 'Contacto', href: 'contacto' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-4">
      <motion.nav
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className={`max-w-7xl mx-auto flex items-center justify-between px-5 py-3 rounded-2xl border transition-all duration-500 ${
          scrolled
            ? 'bg-brand-dark/85 backdrop-blur-xl border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.6)]'
            : 'bg-white/[0.03] backdrop-blur-md border-white/[0.07]'
        }`}
      >
        {/* Logo */}
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="cursor-pointer">
          <span className="text-xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-violet via-violet-400 to-fuchsia-400 tracking-tight">
            KODEM
          </span>
        </button>

        {/* Nav links — desktop */}
        <div className="hidden md:flex items-center gap-7">
          {links.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="text-sm font-medium text-brand-gray hover:text-white transition-colors cursor-pointer"
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* CTA — desktop */}
        <button
          onClick={() => window.open('https://wa.me/5492914738554?text=Hola KODEM, quiero consultar sobre sus servicios.', '_blank')}
          className="hidden md:flex items-center gap-2 px-5 py-2.5 bg-brand-violet hover:bg-brand-violet/90 text-white rounded-xl text-sm font-semibold transition-all duration-300 shadow-[0_0_20px_rgba(139,92,246,0.4)] hover:shadow-[0_0_30px_rgba(139,92,246,0.6)] cursor-pointer"
        >
          <MessageCircle size={15} />
          Consultar
        </button>

        {/* Hamburger — mobile */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg border border-white/10 text-brand-gray hover:text-white transition-colors cursor-pointer"
        >
          {menuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="max-w-7xl mx-auto mt-2 p-px rounded-2xl bg-gradient-to-br from-brand-violet/30 via-white/[0.04] to-transparent md:hidden"
          >
            <div className="bg-brand-dark/95 backdrop-blur-xl rounded-2xl p-5 space-y-1">
              {links.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="w-full text-left px-4 py-3 rounded-xl text-sm font-medium text-brand-gray hover:text-white hover:bg-white/[0.05] transition-all cursor-pointer"
                >
                  {link.label}
                </button>
              ))}
              <div className="pt-2 border-t border-white/[0.07]">
                <button
                  onClick={() => window.open('https://wa.me/5492914738554?text=Hola KODEM, quiero consultar sobre sus servicios.', '_blank')}
                  className="w-full flex items-center justify-center gap-2 py-3 bg-brand-violet hover:bg-brand-violet/90 text-white rounded-xl text-sm font-semibold transition-all cursor-pointer"
                >
                  <MessageCircle size={15} />
                  Consultar por WhatsApp
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
