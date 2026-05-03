/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import { Nosotros } from './components/Nosotros';
import { Servicios } from './components/Servicios';
import { Beneficios } from './components/Beneficios';
import { Proceso } from './components/Proceso';
import { Preguntas } from './components/Preguntas';
import { Contacto } from './components/Contacto';
import { WhatsAppButton } from './components/WhatsAppButton';

export default function App() {
  return (
    <div className="min-h-screen text-white bg-brand-dark selection:bg-brand-violet/30 selection:text-white">
      {/* 
        NOTA: El Hero principal se integrará aquí más adelante.
        La estructura está preparada para que sea el primer componente visual al cargar.
      */}
      <div className="h-20 w-full flex items-center justify-center text-brand-gray/50 border-b border-white/5 uppercase tracking-widest text-sm font-medium">
        [ Hero Section Placeholder ]
      </div>

      <main className="overflow-hidden">
        <Nosotros />
        <Servicios />
        <Beneficios />
        <Proceso />
        <Preguntas />
        <Contacto />
      </main>

      {/* Footer minimalista temporal */}
      <footer className="py-8 text-center text-brand-gray/60 text-sm border-t border-white/5">
        <p>© {new Date().getFullYear()} KODEM. Todos los derechos reservados.</p>
      </footer>

      <WhatsAppButton />
    </div>
  );
}
