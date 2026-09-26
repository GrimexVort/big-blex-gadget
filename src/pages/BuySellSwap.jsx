import { motion } from 'framer-motion'
import { Repeat, ShoppingBag, Wallet } from 'lucide-react'
import SEO from '../components/SEO'
import PageTransition from '../components/PageTransition'
import AnimatedBackground from '../components/AnimatedBackground'
import GadgetImage from '../components/GadgetImage'
import { getWhatsAppLink } from '../config'

const PANELS = [
  {
    key: 'buy',
    title: 'Buy.',
    icon: ShoppingBag,
    text: 'Find the gadget you need.',
    detail:
      'From the latest smartphones to reliable laptops and everyday accessories — tell us what you\'re looking for and we\'ll help you find it.',
    image: '/images/products/smartphones/buy.jpg',
    fallbackIcon: 'ShoppingBag',
    message: "Hello BIG BLEX GADGET, I'd like to buy a gadget.",
  },
  {
    key: 'sell',
    title: 'Sell.',
    icon: Wallet,
    text: 'Turn your old gadget into value.',
    detail:
      'Have a device you no longer use? Send us the details on WhatsApp and we\'ll let you know what we can offer.',
    image: '/images/products/laptops/sell.jpg',
    fallbackIcon: 'Wallet',
    message: "Hello BIG BLEX GADGET, I'd like to sell a gadget.",
  },
  {
    key: 'swap',
    title: 'Swap.',
    icon: Repeat,
    text: 'Upgrade your gadget through a convenient swap.',
    detail:
      'Trade in what you have towards something better. Send us your current device and the one you want in return.',
    image: '/images/products/smartwatches/swap.jpg',
    fallbackIcon: 'Repeat',
    message: "Hello BIG BLEX GADGET, I'd like to swap a gadget.",
  },
]

export default function BuySellSwap() {
  return (
    <PageTransition>
      <SEO
        title="Buy, Sell & Swap Gadgets | BIG BLEX GADGET"
        description="Buy a new gadget, sell the one you don't use, or swap it for an upgrade — all handled directly on WhatsApp with BIG BLEX GADGET."
      />

      <section className="relative px-4 pb-16 pt-28 sm:px-6 lg:px-8 lg:pt-36">
        <AnimatedBackground variant="rich" />

        <div className="mx-auto max-w-7xl">
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-balance font-display text-[clamp(2.2rem,8vw,4rem)] font-bold leading-[1.02] tracking-tight"
          >
            <span className="block">BUY.</span>
            <span className="block bg-gradient-to-r from-blex to-cyan bg-clip-text text-transparent">
              SELL.
            </span>
            <span className="block">SWAP.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-5 max-w-lg text-base leading-relaxed text-white/60 sm:text-lg"
          >
            Three simple ways to move a gadget — all handled directly on WhatsApp.
          </motion.p>

          <div className="mt-12 flex flex-col gap-6">
            {PANELS.map((panel, i) => (
              <motion.div
                key={panel.key}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.55, delay: i * 0.08, ease: 'easeOut' }}
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.99 }}
                className={`grid overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-sm sm:grid-cols-2 ${
                  i % 2 === 1 ? 'sm:[&>*:first-child]:order-2' : ''
                }`}
              >
                <div className="relative aspect-[16/10] w-full sm:aspect-auto">
                  <GadgetImage
                    src={panel.image}
                    alt={panel.title}
                    icon={panel.fallbackIcon}
                    className="h-full w-full"
                    imgClassName="h-full w-full object-cover"
                  />
                </div>

                <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
                  <panel.icon className="h-9 w-9 text-cyan" strokeWidth={1.5} />
                  <h2 className="mt-4 font-display text-3xl font-bold uppercase tracking-tight sm:text-4xl">
                    {panel.title}
                  </h2>
                  <p className="mt-2 font-display text-base font-semibold text-white/80">
                    {panel.text}
                  </p>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-white/55">
                    {panel.detail}
                  </p>
                  <a
                    href={getWhatsAppLink(panel.message)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-full bg-wa px-6 py-3.5 font-display font-semibold text-white shadow-glow-wa active:scale-95 sm:w-auto"
                  >
                    Start a Deal on WhatsApp
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  )
}
