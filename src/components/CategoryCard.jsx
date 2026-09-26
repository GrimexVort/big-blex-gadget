import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import GadgetImage from './GadgetImage'
import { getCategoryImage } from '../data/categories'
import { getCategoryWhatsAppLink } from '../config'

export default function CategoryCard({ category, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: (index % 6) * 0.06, ease: 'easeOut' }}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm transition-colors hover:border-cyan/40"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <GadgetImage
          src={getCategoryImage(category.slug)}
          alt={category.name}
          icon={category.icon}
          className="h-full w-full"
          imgClassName="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-transparent" />
      </div>

      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <h3 className="font-display text-base font-semibold text-white sm:text-lg">
          {category.name}
        </h3>
        <p className="mt-1 flex-1 text-sm leading-relaxed text-white/55">
          {category.description}
        </p>
        <a
          href={getCategoryWhatsAppLink(category.name)}
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
