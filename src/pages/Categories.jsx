import { motion } from 'framer-motion'
import SEO from '../components/SEO'
import PageTransition from '../components/PageTransition'
import AnimatedBackground from '../components/AnimatedBackground'
import CategoryCard from '../components/CategoryCard'
import { CATEGORIES } from '../data/categories'

export default function Categories() {
  return (
    <PageTransition>
      <SEO
        title="Gadgets & Accessories | BIG BLEX GADGET"
        description="Explore every gadget category BIG BLEX GADGET deals in — smartphones, laptops, earbuds, gaming, accessories and more."
      />

      <section className="relative px-4 pb-16 pt-28 sm:px-6 lg:px-8 lg:pt-36">
        <AnimatedBackground />

        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-blex/40 bg-blex/10 px-4 py-1.5 text-xs font-display font-semibold tracking-wide text-cyan">
              12 Categories
            </span>
            <h1 className="mt-4 text-balance font-display text-[clamp(2rem,6vw,3.2rem)] font-bold leading-[1.05] tracking-tight">
              Explore Our Gadgets
            </h1>
            <p className="mt-4 text-base leading-relaxed text-white/60 sm:text-lg">
              Tap any category to ask about it directly on WhatsApp — we&apos;ll walk you
              through what&apos;s available.
            </p>
          </motion.div>

          <div className="mt-10 grid grid-cols-2 gap-4 sm:mt-14 sm:gap-5 md:grid-cols-3 lg:grid-cols-4">
            {CATEGORIES.map((cat, i) => (
              <CategoryCard key={cat.slug} category={cat} index={i} />
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  )
}
