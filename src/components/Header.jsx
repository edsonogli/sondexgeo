import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone } from 'lucide-react'

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/sobre', label: 'Sobre' },
  { path: '/servicos', label: 'Serviços' },
  { path: '/contato', label: 'Contato' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setMenuOpen(false) }, [location])

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
      <div className="container header__inner">
        <Link to="/" className="header__logo">
          <img src="/logo-icon.png" alt="Sondex Geo" className="header__logo-img" />
          <span className="header__logo-text">
            SONDEX<span className="header__logo-accent">GEO</span>
          </span>
        </Link>

        <nav className="header__nav--desktop">
          {navLinks.map(link => (
            <Link
              key={link.path}
              to={link.path}
              className={`header__link ${location.pathname === link.path ? 'header__link--active' : ''}`}
            >
              {link.label}
              <span className="header__link-bar" />
            </Link>
          ))}
          <a href="tel:+5561996105699" className="header__cta">
            <Phone size={16} /> Orçamento
          </a>
        </nav>

        <button className="header__mobile-btn" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="header__mobile-menu"
          >
            {navLinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
                className={`header__mobile-link ${location.pathname === link.path ? 'header__mobile-link--active' : ''}`}
              >
                {link.label}
              </Link>
            ))}
            <a href="tel:+5561996105699" className="header__mobile-cta">
              <Phone size={16} /> Solicitar Orçamento
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
