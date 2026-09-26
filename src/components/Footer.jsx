import { Link } from 'react-router-dom'
import { MessageCircle } from 'lucide-react'
import { WHATSAPP_NUMBER_LOCAL, getWhatsAppLink } from '../config'

const LINKS = [
  { to: '/', label: 'Home' },
  { to: '/categories', label: 'Categories' },
  { to: '/buy-sell-swap', label: 'Buy / Sell / Swap' },
  { to: '/why-us', label: 'Why Us' },
  { to: '/contact', label: 'Contact' },
]

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-ink px-4 pb-10 pt-14 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2 lg:col-span-2">
          <span className="inline-flex items-center rounded-xl bg-white/95 px-2 py-1">
            <img src="/images/big-blex-logo.png" alt="BIG BLEX GADGET" className="h-9 w-auto object-contain" />
          </span>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/60">
            Quality gadgets. Smart prices. Easy deals. BIG BLEX GADGET buys, sells and
            swaps smartphones, laptops, earbuds and more — all through WhatsApp.
          </p>
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex min-h-[44px] items-center gap-2 rounded-full bg-wa px-5 py-3 text-sm font-display font-semibold text-white shadow-glow-wa"
          >
            <MessageCircle className="h-4 w-4" />
            {WHATSAPP_NUMBER_LOCAL}
          </a>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-white/40">
            Explore
          </h3>
          <ul className="mt-4 space-y-3">
            {LINKS.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-sm text-white/70 transition-colors hover:text-cyan">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-white/40">
            Get in touch
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-white/70">
            <li>WhatsApp: {WHATSAPP_NUMBER_LOCAL}</li>
            <li>Nigeria</li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-7xl border-t border-white/10 pt-6 text-center text-xs text-white/40">
        © {new Date().getFullYear()} BIG BLEX GADGET. All rights reserved.
      </div>
    </footer>
  )
}
