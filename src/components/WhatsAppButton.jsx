import { MessageCircle } from 'lucide-react'
import { getWhatsAppLink } from '../config'

const SIZES = {
  md: 'px-5 py-3 text-sm',
  lg: 'px-7 py-4 text-base',
}

const VARIANTS = {
  solid: 'bg-wa text-white shadow-glow-wa hover:brightness-110',
  outline: 'border border-wa/60 text-wa hover:bg-wa/10',
  ghost: 'bg-white/10 text-white hover:bg-white/15',
}

/**
 * Reusable "Chat on WhatsApp" button. Pass `message` to prefill a
 * context-specific greeting (e.g. for a category or product).
 */
export default function WhatsAppButton({
  message,
  label = 'Chat on WhatsApp',
  size = 'md',
  variant = 'solid',
  fullWidth = false,
  className = '',
}) {
  return (
    <a
      href={getWhatsAppLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={`group inline-flex min-h-[44px] items-center justify-center gap-2 rounded-full font-display font-semibold tracking-tight transition-all duration-200 active:scale-95 ${SIZES[size]} ${VARIANTS[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
    >
      <MessageCircle className="h-5 w-5 shrink-0 transition-transform group-hover:rotate-6" strokeWidth={2} />
      <span>{label}</span>
    </a>
  )
}
