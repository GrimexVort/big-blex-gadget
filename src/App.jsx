import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import FloatingWhatsApp from './components/FloatingWhatsApp'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import Categories from './pages/Categories'
import BuySellSwap from './pages/BuySellSwap'
import WhyUs from './pages/WhyUs'
import Contact from './pages/Contact'

export default function App() {
  const location = useLocation()

  return (
    <div className="min-h-dvh overflow-x-hidden bg-ink font-body text-white">
      <ScrollToTop />
      <Navbar />
      <main>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/buy-sell-swap" element={<BuySellSwap />} />
            <Route path="/why-us" element={<WhyUs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  )
}
