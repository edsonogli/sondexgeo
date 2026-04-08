import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

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
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location])

  return (
    <header style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      height: 'var(--header-height)',
      background: scrolled ? 'rgba(22, 22, 22, 0.95)' : 'transparent',
      backdropFilter: scrolled ? 'blur(10px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(157, 20, 5, 0.3)' : 'none',
      transition: 'var(--transition-base)',
      display: 'flex',
      alignItems: 'center',
    }}>
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <img 
            src="/logo-icon.png" 
            alt="Sondex Geo" 
            style={{ height: 45, objectFit: 'contain' }}
          />
          <span style={{
            fontSize: '1.25rem',
            fontWeight: 700,
            letterSpacing: '0.05em',
            color: 'var(--color-white)',
          }}>
            SONDEX<span style={{ color: 'var(--color-accent)' }}>GEO</span>
          </span>
        </Link>

        <nav style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}
             className="nav-desktop">
          {navLinks.map(link => (
            <Link
              key={link.path}
              to={link.path}
              style={{
                color: location.pathname === link.path ? 'var(--color-accent)' : 'var(--color-gray-light)',
                fontWeight: location.pathname === link.path ? 600 : 400,
                fontSize: '0.9rem',
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                transition: 'var(--transition-fast)',
                borderBottom: location.pathname === link.path ? '2px solid var(--color-accent)' : '2px solid transparent',
                paddingBottom: '0.25rem',
              }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          className="nav-mobile-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            color: 'var(--color-white)',
            cursor: 'pointer',
          }}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="nav-mobile-menu"
            style={{
              position: 'absolute',
              top: 'var(--header-height)',
              left: 0,
              right: 0,
              background: 'rgba(22, 22, 22, 0.98)',
              padding: '1.5rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
            }}
          >
            {navLinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
                style={{
                  color: location.pathname === link.path ? 'var(--color-accent)' : 'var(--color-gray-light)',
                  fontSize: '1.1rem',
                  fontWeight: location.pathname === link.path ? 600 : 400,
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                }}
              >
                {link.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-mobile-btn { display: block !important; }
        }
      `}</style>
    </header>
  )
}
