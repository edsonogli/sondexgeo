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

        <nav className="header__nav header__nav--desktop">
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
            <Phone size={16} />
            Orçamento
          </a>
        </nav>

        <button
          className="header__mobile-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
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

      <style>{`
        .header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          height: var(--header-height);
          background: transparent;
          transition: background 0.3s, border-color 0.3s, backdrop-filter 0.3s;
          border-bottom: 1px solid transparent;
        }
        .header--scrolled {
          background: rgba(22, 22, 22, 0.92);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-bottom-color: rgba(157, 20, 5, 0.25);
        }
        .header__inner {
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 100%;
        }
        .header__logo {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          text-decoration: none;
        }
        .header__logo-img {
          height: 44px;
          object-fit: contain;
        }
        .header__logo-text {
          font-size: 1.3rem;
          font-weight: 800;
          letter-spacing: 0.06em;
          color: var(--color-white);
        }
        .header__logo-accent {
          color: var(--color-accent);
        }
        .header__nav--desktop {
          display: flex;
          align-items: center;
          gap: 1.75rem;
        }
        .header__link {
          color: var(--color-gray-light);
          font-size: 0.85rem;
          font-weight: 500;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          text-decoration: none;
          position: relative;
          padding-bottom: 4px;
          transition: color 0.2s;
        }
        .header__link:hover { color: var(--color-white); }
        .header__link--active { color: var(--color-accent); }
        .header__link-bar {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background: var(--color-accent);
          transition: width 0.3s;
        }
        .header__link--active .header__link-bar,
        .header__link:hover .header__link-bar { width: 100%; }
        .header__cta {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.55rem 1.25rem;
          background: var(--color-accent);
          color: var(--color-white);
          border-radius: var(--radius-sm);
          font-size: 0.8rem;
          font-weight: 600;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          text-decoration: none;
          transition: background 0.2s, transform 0.2s;
        }
        .header__cta:hover {
          background: var(--color-accent-dark);
          transform: translateY(-1px);
        }
        .header__mobile-btn {
          display: none;
          background: none;
          border: none;
          color: var(--color-white);
          cursor: pointer;
          padding: 0.5rem;
        }
        .header__mobile-menu {
          position: absolute;
          top: var(--header-height);
          left: 0;
          right: 0;
          background: rgba(22, 22, 22, 0.98);
          backdrop-filter: blur(12px);
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          overflow: hidden;
          border-bottom: 1px solid rgba(157, 20, 5, 0.2);
        }
        .header__mobile-link {
          color: var(--color-gray-light);
          font-size: 1.1rem;
          font-weight: 500;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          text-decoration: none;
          padding: 0.25rem 0;
          transition: color 0.2s;
        }
        .header__mobile-link:hover,
        .header__mobile-link--active { color: var(--color-accent); }
        .header__mobile-cta {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1.5rem;
          background: var(--color-accent);
          color: var(--color-white);
          border-radius: var(--radius-sm);
          font-weight: 600;
          text-decoration: none;
          margin-top: 0.5rem;
          justify-content: center;
        }
        @media (max-width: 768px) {
          .header__nav--desktop { display: none !important; }
          .header__mobile-btn { display: block !important; }
        }
      `}</style>
    </header>
  )
}
