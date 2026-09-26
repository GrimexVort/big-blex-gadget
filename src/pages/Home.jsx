import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Repeat, ShieldCheck, Smartphone, Sparkles } from 'lucide-react'
import SEO from '../components/SEO'
import PageTransition from '../components/PageTransition'
import AnimatedBackground from '../components/AnimatedBackground'
import WhatsAppButton from '../components/WhatsAppButton'
import CategoryCard from '../components/CategoryCard'
import GadgetImage from '../components/GadgetImage'
import { CATEGORIES, getCategoryImage } from '../data/categories'
import { getWhatsAppLink } from '../config'

const FEATURED_SLUGS = ['smartphones', 'laptops', 'earbuds', 'smartwatches', 'gaming', 'powerbanks']
const featured = CATEGORIES.filter((c) => FEATURED_SLUGS.includes(c.slug))

const DEALS = [
  {
    icon: Smartphone,
    title: 'Buy',
    text: 'Browse smartphones, laptops and accessories and get the one that fits your budget.',
  },
  {
    icon: ShieldCheck,
    title: 'Sell',
    text: 'Turn the gadget you no longer use into cash — quick and straightforward.',
  },
  {
    icon: Repeat,
    title: 'Swap',
    text: 'Upgrade your current device by trading it in for something better.',
  },
]

const WHY_PREVIEW = [
  'Quality products',
  'Competitive prices',
  'Buy, sell & swap',
  'WhatsApp support',
  'Wide range of gadgets',
  'Easy ordering',
]

export default function Home() {
  return (
    <PageTransition>
      <SEO
        title="BIG BLEX GADGET | Your One-Stop Gadget Store"
        description="Quality gadgets, smart prices, easy deals. Buy, sell and swap smartphones, laptops, earbuds and more on WhatsApp."
      />

      {/* ── Hero ───────────────────────────────────────────── */}
      <section className="relative flex min-h-[100dvh] items-center overflow-hidden px-4 pt-24 sm:px-6 lg:px-8">
        <AnimatedBackground variant="rich" />

        <div className="mx-auto grid w-full max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col items-start text-left">
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-blex/40 bg-blex/10 px-4 py-1.5 text-xs font-display font-semibold tracking-wide text-cyan sm:text-sm"
            >
              <Sparkles className="h-3.5 w-3.5" />
              We Buy, Sell &amp; Swap
            </motion.span>

            <h1 className="mt-5 text-balance font-display text-[clamp(2.2rem,7vw,4.2rem)] font-bold leading-[1.05] tracking-tight">
              {'Your One-Stop'.split(' ').map((word, i) => (
                <motion.span
                  key={word + i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.15 + i * 0.08 }}
                  className="mr-3 inline-block"
                >
                  {word}
                </motion.span>
              ))}
              <br />
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.35 }}
                className="inline-block bg-gradient-to-r from-blex via-cyan to-blex bg-clip-text text-transparent"
              >
                Gadget Store
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-5 max-w-md text-base leading-relaxed text-white/65 sm:text-lg"
            >
              Quality gadgets. Smart prices. Easy deals.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.62 }}
              className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row"
            >
              <WhatsAppButton size="lg" label="Chat on WhatsApp" fullWidth className="sm:w-auto" />
              <Link
                to="/categories"
                className="inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-full border border-white/20 px-7 py-4 text-base font-display font-semibold text-white transition-colors hover:border-cyan/60 hover:text-cyan sm:w-auto"
              >
                Explore Gadgets
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative mx-auto aspect-square w-full max-w-sm motion-safe:animate-float lg:max-w-md"
          >
            <div className="absolute inset-0 rounded-full bg-blex/20 blur-3xl" />
            <GadgetImage
              src="/images/products/smartphones/hero.jpg"
              alt="Featured gadget"
              icon="Smartphone"
              className="relative h-full w-full rounded-[2rem] border border-white/10 shadow-glow"
              imgClassName="h-full w-full rounded-[2rem] object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* ── Quick facts ────────────────────────────────────── */}
      <section className="relative px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-3">
          {[
            { label: 'Gadget Categories', value: `${CATEGORIES.length}+` },
            { label: 'Deal Type', value: 'Buy · Sell · Swap' },
            { label: 'Ordering', value: '100% WhatsApp' },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-6 text-center backdrop-blur-sm"
            >
              <div className="font-display text-2xl font-bold text-cyan sm:text-3xl">{stat.value}</div>
              <div className="mt-1 text-xs uppercase tracking-wider text-white/50 sm:text-sm">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Featured categories ────────────────────────────── */}
      <section className="relative px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="font-display text-2xl font-bold sm:text-3xl">Popular Categories</h2>
              <p className="mt-2 max-w-lg text-sm text-white/55 sm:text-base">
                A quick look at what people ask us for most.
              </p>
            </div>
            <Link
              to="/categories"
              className="inline-flex items-center gap-1.5 text-sm font-display font-semibold text-cyan hover:text-white"
            >
              View all categories
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 lg:grid-cols-3">
            {featured.map((cat, i) => (
              <CategoryCard key={cat.slug} category={cat} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Buy / Sell / Swap preview ──────────────────────── */}
      <section className="relative px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">Buy. Sell. Swap.</h2>
          <p className="mt-2 max-w-lg text-sm text-white/55 sm:text-base">
            One place for every gadget move you want to make.
          </p>

          <div className="mt-8 grid gap-5 sm:grid-cols-3">
            {DEALS.map((deal, i) => (
              <motion.div
                key={deal.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-2xl border border-white/10 bg-gradient-to-b from-navy/60 to-transparent p-6"
              >
                <deal.icon className="h-8 w-8 text-cyan" strokeWidth={1.5} />
                <h3 className="mt-4 font-display text-xl font-bold uppercase tracking-tight">
                  {deal.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">{deal.text}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 flex justify-center sm:justify-start">
            <Link
              to="/buy-sell-swap"
              className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-full border border-white/20 px-7 py-3.5 font-display font-semibold text-white transition-colors hover:border-cyan/60 hover:text-cyan"
            >
              Start a Deal
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Why us preview ─────────────────────────────────── */}
      <section className="relative px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-3xl border border-white/10 bg-gradient-to-br from-navy/50 via-ink to-ink p-6 sm:p-10">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2 className="font-display text-2xl font-bold sm:text-3xl">Why Big Blex Gadget?</h2>
              <p className="mt-2 max-w-md text-sm text-white/55 sm:text-base">
                A gadget store built around one simple idea: make it easy to buy, sell and swap.
              </p>
              <Link
                to="/why-us"
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-display font-semibold text-cyan hover:text-white"
              >
                Learn more about us
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {WHY_PREVIEW.map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-center text-xs font-display font-semibold uppercase tracking-wide text-white/70 sm:text-sm"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Final WhatsApp CTA ─────────────────────────────── */}
      <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(37,211,102,0.12),transparent_60%)]" />
        <div className="relative mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
          <h2 className="text-balance font-display text-[clamp(1.6rem,5vw,2.6rem)] font-bold">
            Ready to make a deal?
          </h2>
          <p className="max-w-lg text-sm text-white/60 sm:text-base">
            Message us on WhatsApp and let&apos;s sort out your next gadget together.
          </p>
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[52px] w-full max-w-xs items-center justify-center gap-2 rounded-full bg-wa px-8 py-4 font-display text-lg font-semibold text-white shadow-glow-wa active:scale-95"
          >
            Chat on WhatsApp
          </a>
        </div>
      </section>
    </PageTransition>
  )
}
