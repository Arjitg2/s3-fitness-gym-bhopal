import { Phone, MessageCircle } from "lucide-react";
import { motion } from "motion/react";

export default function FloatingActions() {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-4">
      {/* WhatsApp Button */}
      <motion.a
        href="https://wa.me/917400979269"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl"
      >
        <MessageCircle size={30} fill="currentColor" />
      </motion.a>

      {/* Call Button (Mobile Only) */}
      <motion.a
        href="tel:07400979269"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="md:hidden w-14 h-14 bg-neon text-black rounded-full flex items-center justify-center shadow-2xl"
      >
        <Phone size={28} fill="currentColor" />
      </motion.a>
    </div>
  );
}
