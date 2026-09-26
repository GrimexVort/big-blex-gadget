import { motion } from 'framer-motion'
import {
  BadgeCheck,
  Gem,
  MessageCircleHeart,
  Repeat,
  Sparkles,
  Wallet,
} from 'lucide-react'
import SEO from '../components/SEO'
import PageTransition from '../components/PageTransition'
import AnimatedBackground from '../components/AnimatedBackground'
import GadgetImage from '../components/GadgetImage'
import WhatsAppButton from '../components/WhatsAppButton'

const FEATURES = [
  {
    icon: Gem,
    title: 'Quality Products',
    text: 'Every gadget we offer is checked before it reaches you.',
  },
  {
    icon: Wallet,
    title: 'Competitive Prices',
    text: 'Fair pricing on every deal, with no pressure to buy.',
  },
  {
    icon: Repeat,
    title: 'Buy, Sell & Swap',
    text: 'One store for every gadget move you want to make.',
  },
  {
    icon: MessageCircleHeart,
    title: 'WhatsApp Support',
    text: 'Talk to a real person, on the app you already use daily.',
  },
  {
    icon: Sparkles,
    title: 'Wide Range of Gadgets',
    text: 'Smartphones, laptops, audio, wearables and accessories.',
  },
  {
    icon: BadgeCheck,
    title: 'Easy Ordering',
    text: 'No confusing checkout — just a straightforward chat.',
  },
]

const BRAND_PILLARS = [
  {
    title: 'Quality',
    text: 'We take the condition of every gadget seriously, from smartphones to accessories.',
  },
  {
    title: 'Style',
    text: 'A store front that looks and feels like the premium gadgets it carries.',
  },
  {
    title: 'Technology',
    text: 'Built around the devices that keep you connected, working and entertained.',
  },
]

export default function WhyUs() {
  return (
    <PageTransition>
      <SEO
        title="Why Choose BIG BLEX GADGET"
        description="See what makes BIG BLEX GADGET a trusted gadget store — quality products, fair prices and WhatsApp-first support."
      />

      <section className="relative px-4 pb-16 pt-28 sm:px-6 lg:px-8 lg:pt-36">
        <AnimatedBackground />

        <div className="mx-auto max-w-7xl">
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-balance font-display text-[clamp(2rem,6vw,3.2rem)] font-bold leading-[1.05] tracking-tight"
          >
            Why Big Blex Gadget?
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 max-w-xl text-base leading-relaxed text-white/60 sm:text-lg"
          >
            A gadget store built around what actually matters to you.
          </motion.p>

          {/* Feature grid */}
          <div className="mt-12 grid grid-cols-1 gap-4 sm:mt-14 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
            {FEATURES.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
                className="rounded-2xl border border-white/10 bg-gradient-to-b from-navy/50 to-transparent p-6"
              >
                <f.icon className="h-9 w-9 text-cyan" strokeWidth={1.5} />
                <h3 className="mt-4 font-display text-lg font-bold">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/55">{f.text}</p>
              </motion.div>
            ))}
          </div>

          {/* Brand pillars */}
          <div className="mt-20 grid gap-10 lg:grid-cols-2 lg:items-center">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/10"
            >
              <GadgetImage
                src="/images/brand/blex-bag.jpg"
                alt="BIG BLEX GADGET — quality, style, technology"
                icon="Laptop"
                className="h-full w-full"
                imgClassName="h-full w-full object-cover"
              />
            </motion.div>

            <div className="flex flex-col gap-6">
              {BRAND_PILLARS.map((p, i) => (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="border-l-2 border-blex/50 pl-5"
                >
                  <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-cyan">
                    {p.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-white/60 sm:text-base">
                    {p.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="mt-16 flex justify-center">
            <WhatsAppButton size="lg" label="Chat on WhatsApp" />
          </div>
        </div>
      </section>
    </PageTransition>
  )
}
