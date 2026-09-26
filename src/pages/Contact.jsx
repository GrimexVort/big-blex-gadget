import { useState } from 'react'
import { motion } from 'framer-motion'
import { MessageCircle, Send } from 'lucide-react'
import SEO from '../components/SEO'
import PageTransition from '../components/PageTransition'
import AnimatedBackground from '../components/AnimatedBackground'
import { WHATSAPP_NUMBER_LOCAL, WHATSAPP_NUMBER_INTL } from '../config'

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', message: '' })

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const lines = ['Hello BIG BLEX GADGET,', '']
    if (form.name.trim()) lines.push(`Name: ${form.name.trim()}`)
    if (form.phone.trim()) lines.push(`Phone: ${form.phone.trim()}`)
    if (form.message.trim()) lines.push(`Message: ${form.message.trim()}`)

    const text = encodeURIComponent(lines.join('\n'))
    window.open(`https://wa.me/${WHATSAPP_NUMBER_INTL}?text=${text}`, '_blank', 'noopener,noreferrer')
  }

  return (
    <PageTransition>
      <SEO
        title="Contact BIG BLEX GADGET"
        description="Get in touch with BIG BLEX GADGET on WhatsApp — send your name, phone number and message and we'll respond directly."
      />

      <section className="relative px-4 pb-16 pt-28 sm:px-6 lg:px-8 lg:pt-36">
        <AnimatedBackground variant="rich" />

        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-balance font-display text-[clamp(2rem,6vw,3.2rem)] font-bold leading-[1.05] tracking-tight"
            >
              Contact Big Blex Gadget
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-4 max-w-md text-base leading-relaxed text-white/60 sm:text-lg"
            >
              WhatsApp is our main line — fill the form and we&apos;ll open a chat with
              everything filled in for you, or message us directly.
            </motion.p>

            <motion.a
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              href={`https://wa.me/${WHATSAPP_NUMBER_INTL}?text=Hello%20BIG%20BLEX%20GADGET%2C%20I%27m%20interested%20in%20your%20gadgets.`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 flex items-center gap-4 rounded-2xl border border-wa/30 bg-wa/10 p-5"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-wa text-white shadow-glow-wa">
                <MessageCircle className="h-6 w-6" />
              </span>
              <span>
                <span className="block font-display font-semibold text-white">
                  {WHATSAPP_NUMBER_LOCAL}
                </span>
                <span className="text-sm text-white/60">Tap to chat on WhatsApp</span>
              </span>
            </motion.a>
          </div>

          <motion.form
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm sm:p-8"
          >
            <div>
              <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-white/70">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                className="min-h-[48px] w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder:text-white/30 outline-none transition-colors focus:border-cyan/60"
              />
            </div>

            <div>
              <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-white/70">
                Phone
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                value={form.phone}
                onChange={handleChange}
                placeholder="Your phone number"
                className="min-h-[48px] w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder:text-white/30 outline-none transition-colors focus:border-cyan/60"
              />
            </div>

            <div>
              <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-white/70">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={form.message}
                onChange={handleChange}
                placeholder="What gadget are you looking for?"
                className="w-full resize-none rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder:text-white/30 outline-none transition-colors focus:border-cyan/60"
              />
            </div>

            <button
              type="submit"
              className="mt-2 inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-full bg-wa px-6 py-3.5 font-display font-semibold text-white shadow-glow-wa active:scale-95"
            >
              <Send className="h-4 w-4" />
              Send to WhatsApp
            </button>
            <p className="text-center text-xs text-white/40">
              This opens WhatsApp with your details filled in — nothing is sent until you do.
            </p>
          </motion.form>
        </div>
      </section>
    </PageTransition>
  )
}
