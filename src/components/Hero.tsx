import { motion } from 'motion/react';
import { ArrowRight, Zap } from 'lucide-react';

const tags = ['Páginas web', 'Automatizaciones', 'Chatbots', 'Sistemas a medida'];

export function Hero() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 pt-28 pb-20">

      {/* ── Background ── */}
      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(rgba(139,92,246,0.18) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />
      {/* Fades del grid */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-dark via-transparent to-brand-dark pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-transparent to-brand-dark pointer-events-none" />

      {/* Orb principal */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[55%] w-[900px] h-[600px] bg-brand-violet/18 blur-[130px] rounded-full pointer-events-none" />
      {/* Orb fuchsia secundario */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[60%] w-[400px] h-[250px] bg-fuchsia-500/10 blur-[80px] rounded-full pointer-events-none" />

      {/* ── Content ── */}
      <div className="max-w-5xl mx-auto text-center relative z-10">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-brand-violet/40 bg-brand-violet/15 text-brand-violet text-xs font-bold tracking-widest uppercase mb-10"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-brand-violet animate-pulse" />
          Agencia digital — Argentina
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl sm:text-7xl xl:text-[88px] font-bold leading-[1.04] tracking-tight mb-8"
        >
          Convertimos ideas
          <br />
          en herramientas
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-violet via-violet-400 to-fuchsia-400">
            digitales.
          </span>
        </motion.h1>

        {/* Sub */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="text-lg md:text-xl text-brand-gray max-w-2xl mx-auto leading-relaxed mb-12"
        >
          Webs profesionales, automatizaciones, chatbots y sistemas a medida.
          Soluciones claras para negocios que quieren{' '}
          <span className="text-white/80 font-medium">crecer de verdad.</span>
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.38 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <button
            onClick={() => scrollTo('servicios')}
            className="group flex items-center gap-3 px-8 py-4 bg-brand-violet hover:bg-brand-violet/90 text-white rounded-xl font-semibold text-base transition-all duration-300 shadow-[0_0_35px_rgba(139,92,246,0.55)] hover:shadow-[0_0_55px_rgba(139,92,246,0.75)] cursor-pointer"
          >
            Ver servicios
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            onClick={() =>
              window.open(
                'https://wa.me/5492914738554?text=Hola KODEM, quiero saber más sobre sus servicios.',
                '_blank',
              )
            }
            className="flex items-center gap-3 px-8 py-4 bg-white/[0.04] hover:bg-white/[0.08] border border-white/15 hover:border-brand-violet/50 text-white rounded-xl font-semibold text-base transition-all duration-300 cursor-pointer"
          >
            <Zap size={18} className="text-brand-violet" />
            Hablar con nosotros
          </button>
        </motion.div>

        {/* Service tags */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-3"
        >
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-4 py-1.5 bg-white/[0.04] border border-white/[0.08] rounded-full text-xs text-brand-gray/70 font-medium"
            >
              {tag}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-brand-gray/35 text-[10px] tracking-[0.2em] uppercase font-medium">
          scroll
        </span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-px h-10 bg-gradient-to-b from-brand-violet/50 to-transparent"
        />
      </motion.div>
    </section>
  );
}
