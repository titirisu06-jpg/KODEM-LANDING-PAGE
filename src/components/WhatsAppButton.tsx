import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';

export function WhatsAppButton() {
  const openWhatsApp = () => {
    const url = 'https://wa.me/5492914738554?text=' + encodeURIComponent('Hola KODEM, quiero consultar por una solución digital para mi negocio.');
    window.open(url, '_blank');
  };

  return (
    <motion.button
      onClick={openWhatsApp}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      title="Contactar por WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-brand-violet hover:bg-brand-violet/90 text-white rounded-full flex items-center justify-center shadow-[0_4px_20px_rgba(139,92,246,0.4)] transition-colors"
    >
      <div className="absolute inset-0 rounded-full animate-ping opacity-20 bg-brand-violet"></div>
      <MessageCircle size={28} className="relative z-10" />
    </motion.button>
  );
}
