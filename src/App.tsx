import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Nosotros } from './components/Nosotros';
import { Servicios } from './components/Servicios';
import { Beneficios } from './components/Beneficios';
import { Proceso } from './components/Proceso';
import { Preguntas } from './components/Preguntas';
import { Contacto } from './components/Contacto';
import { WhatsAppButton } from './components/WhatsAppButton';

export default function App() {
  return (
    <div className="min-h-screen text-white bg-brand-dark selection:bg-brand-violet/30 selection:text-white overflow-x-hidden">

      {/* ── Navbar fija ── */}
      <Navbar />

      {/* ── Orbs globales de ambiente (fijos, recorren toda la página) ── */}
      <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 0 }}>
        <div className="absolute top-[10vh] left-[10%] w-[500px] h-[500px] bg-brand-violet/[0.04] blur-[160px] rounded-full" />
        <div className="absolute top-[50vh] right-[5%] w-[450px] h-[400px] bg-fuchsia-500/[0.04] blur-[140px] rounded-full" />
        <div className="absolute top-[90vh] left-[30%] w-[600px] h-[400px] bg-brand-violet/[0.04] blur-[160px] rounded-full" />
        <div className="absolute top-[150vh] right-[20%] w-[400px] h-[350px] bg-fuchsia-500/[0.03] blur-[130px] rounded-full" />
      </div>

      {/* ── Contenido ── */}
      <div className="relative" style={{ zIndex: 1 }}>
        <Hero />

        <main className="overflow-hidden">
          <Nosotros />
          <Servicios />
          <Beneficios />
          <Proceso />
          <Preguntas />
          <Contacto />
        </main>

        {/* ── Footer ── */}
        <footer className="relative pt-16 pb-10 border-t border-white/[0.06]">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-brand-violet/8 blur-[100px] rounded-full pointer-events-none" />
          <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
            <div className="flex flex-col md:flex-row items-center md:items-end justify-between gap-8 mb-10">

              {/* Logo + tagline */}
              <div>
                <span className="text-2xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-violet via-violet-400 to-fuchsia-400 tracking-tight block mb-1">
                  KODEM
                </span>
                <p className="text-brand-gray/50 text-xs tracking-wider">
                  Agencia digital · Argentina
                </p>
              </div>

              {/* Nav links */}
              <nav className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
                {[
                  ['Servicios', '#servicios'],
                  ['Por qué elegirnos', '#beneficios'],
                  ['Proceso', '#proceso'],
                  ['FAQ', '#faq'],
                  ['Contacto', '#contacto'],
                ].map(([label, href]) => (
                  <a
                    key={href}
                    href={href}
                    className="text-sm text-brand-gray/60 hover:text-white transition-colors"
                  >
                    {label}
                  </a>
                ))}
              </nav>

              {/* CTA footer */}
              <a
                href="https://wa.me/5492914738554?text=Hola KODEM, quiero consultar sobre sus servicios."
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-brand-violet/15 hover:bg-brand-violet/25 border border-brand-violet/30 hover:border-brand-violet/60 text-brand-violet rounded-xl text-sm font-semibold transition-all duration-300 shadow-[0_0_15px_rgba(139,92,246,0.2)] hover:shadow-[0_0_25px_rgba(139,92,246,0.35)]"
              >
                Consultar por WhatsApp
              </a>
            </div>

            <div className="w-full h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent mb-8" />

            <p className="text-center text-brand-gray/35 text-xs">
              © {new Date().getFullYear()} KODEM. Todos los derechos reservados.
            </p>
          </div>
        </footer>
      </div>

      <WhatsAppButton />
    </div>
  );
}
