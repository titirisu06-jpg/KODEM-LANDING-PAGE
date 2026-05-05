import { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';

/* ── Animated counter hook ── */
function Counter({
  to,
  prefix = '',
  suffix = '',
}: {
  to: number;
  prefix?: string;
  suffix?: string;
}) {
  const elRef = useRef<HTMLSpanElement>(null);
  const [val, setVal] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const el = elRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started.current) return;
        started.current = true;

        const duration = 1600;
        const startTime = performance.now();

        const tick = (now: number) => {
          const t = Math.min((now - startTime) / duration, 1);
          // easeOutCubic
          const ease = 1 - Math.pow(1 - t, 3);
          setVal(Math.round(ease * to));
          if (t < 1) requestAnimationFrame(tick);
        };

        requestAnimationFrame(tick);
      },
      { threshold: 0.5 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [to]);

  return (
    <span ref={elRef}>
      {prefix}
      {val}
      {suffix}
    </span>
  );
}

/* ── Stats data ── */
const stats = [
  {
    prefix: '',
    value: 15,
    suffix: '+',
    label: 'Proyectos entregados',
    detail: 'Webs, bots, sistemas y automatizaciones en producción.',
  },
  {
    prefix: '',
    value: 99,
    suffix: '%',
    label: 'Satisfacción de clientes',
    detail: 'Cada proyecto se cierra con el cliente conforme y con resultados.',
  },
  {
    prefix: '<',
    value: 24,
    suffix: 'hs',
    label: 'Tiempo de respuesta',
    detail: 'Respondemos consultas rápido, sin dejar esperar al cliente.',
  },
  {
    prefix: '',
    value: 4,
    suffix: '',
    label: 'Servicios especializados',
    detail: 'Web, automatización, sistemas y chatbots — todo bajo un mismo equipo.',
  },
];

export function Estadisticas() {
  return (
    <section className="relative py-6 overflow-hidden">
      {/* Línea separadora degradada arriba */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-violet/30 to-transparent" />
      {/* Línea separadora degradada abajo */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-violet/30 to-transparent" />

      {/* Glow ambient suave */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-violet/[0.05] to-brand-dark pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/[0.06]">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group px-6 md:px-10 py-8 text-center first:pl-0 last:pr-0 relative"
            >
              {/* Número animado */}
              <div className="text-4xl md:text-5xl font-bold font-display text-transparent bg-clip-text bg-gradient-to-r from-brand-violet via-violet-400 to-fuchsia-400 mb-2 leading-none tabular-nums">
                <Counter to={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
              </div>

              {/* Label */}
              <p className="text-white/90 text-sm font-semibold mb-1">{stat.label}</p>

              {/* Detail — aparece en hover en desktop */}
              <p className="text-brand-gray/60 text-xs leading-snug max-w-[160px] mx-auto hidden md:block opacity-0 group-hover:opacity-100 transition-opacity duration-300 h-0 group-hover:h-auto overflow-hidden">
                {stat.detail}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
