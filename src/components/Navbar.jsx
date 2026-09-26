import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X, MessageCircle } from 'lucide-react'
import WhatsAppButton from './WhatsAppButton'

const LINKS = [
  { to: '/', label: 'Home' },
  { to: '/categories', label: 'Categories' },
  { to: '/buy-sell-swap', label: 'Buy / Sell / Swap' },
  { to: '/why-us', label: 'Why Us' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const linkClass = ({ isActive }) =>
    `relative font-display text-sm font-medium tracking-tight transition-colors ${
      isActive ? 'text-white' : 'text-white/60 hover:text-white'
    }`

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed inset-x-0 top-0 z-50"
      style={{ paddingTop: 'env(safe-area-inset-top)' }}
    >
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between px-4 transition-all duration-300 sm:px-6 lg:px-8 ${
          scrolled
            ? 'h-16 bg-ink/80 backdrop-blur-xl border-b border-white/10'
            : 'h-20 bg-transparent'
        }`}
      >
        <NavLink to="/" onClick={() => setOpen(false)} className="flex items-center gap-2 shrink-0">
          <span className="flex items-center rounded-xl bg-white/95 px-2 py-1 shadow-glow">
            <img
              src="/images/big-blex-logo.png"
              alt="BIG BLEX GADGET"
              className="h-8 w-auto object-contain sm:h-9"
            />
          </span>
        </NavLink>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 lg:flex">
          {LINKS.map((l) => (
            <NavLink key={l.to} to={l.to} className={linkClass} end={l.to === '/'}>
              {({ isActive }) => (
                <span className="py-2">
                  {l.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute -bottom-0.5 left-0 right-0 h-[2px] rounded-full bg-gradient-to-r from-blex to-cyan"
                    />
                  )}
                </span>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:block">
          <WhatsAppButton />
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-11 w-11 items-center justify-center rounded-lg text-white lg:hidden"
        >
          <AnimatePresence mode="wait" initial={false}>
            {open ? (
              <motion.span
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X className="h-7 w-7" />
              </motion.span>
            ) : (
              <motion.span
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu className="h-7 w-7" />
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 top-0 z-40 bg-ink/98 backdrop-blur-xl lg:hidden"
            style={{
              paddingTop: 'calc(env(safe-area-inset-top) + 5rem)',
              paddingBottom: 'env(safe-area-inset-bottom)',
            }}
          >
            <motion.nav
              initial="closed"
              animate="open"
              exit="closed"
              variants={{
                open: { transition: { staggerChildren: 0.06, delayChildren: 0.05 } },
                closed: {},
              }}
              className="flex h-full flex-col gap-2 px-6 pt-4"
            >
              {LINKS.map((l) => (
                <motion.div
                  key={l.to}
                  variants={{
                    open: { opacity: 1, x: 0 },
                    closed: { opacity: 0, x: 24 },
                  }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                >
                  <NavLink
                    to={l.to}
                    end={l.to === '/'}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `flex min-h-[52px] items-center border-b border-white/10 font-display text-2xl font-semibold tracking-tight ${
                        isActive ? 'text-cyan' : 'text-white'
                      }`
                    }
                  >
                    {l.label}
                  </NavLink>
                </motion.div>
              ))}

              <motion.div
                variants={{
                  open: { opacity: 1, y: 0 },
                  closed: { opacity: 0, y: 16 },
                }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="mt-8"
              >
                <a
                  href="https://wa.me/2347054085623?text=Hello%20BIG%20BLEX%20GADGET%2C%20I%27m%20interested%20in%20your%20gadgets."
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="flex min-h-[52px] w-full items-center justify-center gap-2 rounded-full bg-wa font-display text-lg font-semibold text-white shadow-glow-wa active:scale-95"
                >
                  <MessageCircle className="h-5 w-5" />
                  Chat on WhatsApp
                </a>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
