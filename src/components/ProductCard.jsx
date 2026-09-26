import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import GadgetImage from './GadgetImage'
import { getWhatsAppLink } from '../config'

/**
 * Generic product card. No prices, specs or ratings are shown unless
 * explicitly provided — BIG BLEX GADGET does not display fabricated data.
 */
export default function ProductCard({
  name,
  category,
  description,
  image,
  icon = 'Sparkles',
  message,
  index = 0,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: (index % 6) * 0.06, ease: 'easeOut' }}
      className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm transition-colors hover:border-blex/40"
    >
      <div className="relative aspect-square w-full overflow-hidden">
        <GadgetImage
          src={image}
          alt={name}
          icon={icon}
          className="h-full w-full"
          imgClassName="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-4">
        {category && (
          <span className="text-[11px] font-display font-semibold uppercase tracking-wider text-cyan/70">
            {category}
          </span>
        )}
        <h3 className="mt-1 font-display text-base font-semibold text-white">{name}</h3>
        {description && (
          <p className="mt-1 flex-1 text-sm leading-relaxed text-white/55">{description}</p>
        )}
        <a
          href={getWhatsAppLink(message || `Hello BIG BLEX GADGET, I'm interested in the ${name}.`)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex min-h-[44px] items-center justify-center gap-2 rounded-full border border-wa/50 px-4 py-2.5 text-sm font-display font-semibold text-wa transition-colors hover:bg-wa hover:text-white active:scale-95"
        >
          <MessageCircle className="h-4 w-4" />
          Ask on WhatsApp
        </a>
      </div>
    </motion.div>
  )
}
