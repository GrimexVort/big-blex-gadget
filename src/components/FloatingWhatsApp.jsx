import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import { getWhatsAppLink } from '../config'

export default function FloatingWhatsApp() {
  return (
    <motion.a
      href={getWhatsAppLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with BIG BLEX GADGET on WhatsApp"
      initial={{ opacity: 0, scale: 0.6, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 0.8, duration: 0.5, ease: 'easeOut' }}
      whileTap={{ scale: 0.9 }}
      className="fixed z-50 flex h-14 w-14 items-center justify-center rounded-full bg-wa text-white shadow-glow-wa animate-pulse-glow"
      style={{
        right: 'max(1rem, env(safe-area-inset-right))',
        bottom: 'max(1rem, calc(env(safe-area-inset-bottom) + 1rem))',
      }}
    >
      <MessageCircle className="h-7 w-7" strokeWidth={2} />
      <span className="sr-only">Chat on WhatsApp</span>
    </motion.a>
  )
}
