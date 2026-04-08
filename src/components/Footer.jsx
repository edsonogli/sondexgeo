import { Link } from 'react-router-dom'
import { Phone, Mail, Instagram, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer style={{
      background: 'var(--color-bg-dark)',
      borderTop: '1px solid rgba(157, 20, 5, 0.3)',
      padding: 'var(--space-2xl) 0 var(--space-lg)',
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: 'var(--space-lg)',
          marginBottom: 'var(--space-lg)',
        }}>
          {/* Coluna 1 - Logo e sobre */}
          <div>
            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: 700,
              marginBottom: 'var(--space-sm)',
              letterSpacing: '0.05em',
            }}>
              SONDEX<span style={{ color: 'var(--color-accent)' }}>GEO</span>
            </h3>
            <p style={{ color: 'var(--color-gray-muted)', fontSize: '0.9rem', lineHeight: 1.7 }}>
              Engenharia de Fundações & Geotecnia. Geotecnia com confiança e competência.
            </p>
          </div>

          {/* Coluna 2 - Links */}
          <div>
            <h4 style={{ fontWeight: 600, marginBottom: 'var(--space-sm)', color: 'var(--color-accent)' }}>
              Navegação
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {[
                { path: '/', label: 'Home' },
                { path: '/sobre', label: 'Sobre' },
                { path: '/servicos', label: 'Serviços' },
                { path: '/contato', label: 'Contato' },
              ].map(link => (
                <Link key={link.path} to={link.path} style={{
                  color: 'var(--color-gray-muted)',
                  fontSize: '0.9rem',
                  transition: 'var(--transition-fast)',
                }}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Coluna 3 - Contato */}
          <div>
            <h4 style={{ fontWeight: 600, marginBottom: 'var(--space-sm)', color: 'var(--color-accent)' }}>
              Contato
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <a href="tel:+5561996105699" style={{
                display: 'flex', alignItems: 'center', gap: '0.5rem',
                color: 'var(--color-gray-muted)', fontSize: '0.9rem',
              }}>
                <Phone size={16} /> (61) 99610-5699
              </a>
              <a href="mailto:sondex.eng@gmail.com" style={{
                display: 'flex', alignItems: 'center', gap: '0.5rem',
                color: 'var(--color-gray-muted)', fontSize: '0.9rem',
              }}>
                <Mail size={16} /> sondex.eng@gmail.com
              </a>
              <a href="https://instagram.com/sondex.geo" target="_blank" rel="noopener noreferrer" style={{
                display: 'flex', alignItems: 'center', gap: '0.5rem',
                color: 'var(--color-gray-muted)', fontSize: '0.9rem',
              }}>
                <Instagram size={16} /> @sondex.geo
              </a>
              <span style={{
                display: 'flex', alignItems: 'center', gap: '0.5rem',
                color: 'var(--color-gray-muted)', fontSize: '0.9rem',
              }}>
                <MapPin size={16} /> Brasília - DF / Goiânia - GO
              </span>
            </div>
          </div>
        </div>

        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.1)',
          paddingTop: 'var(--space-sm)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '0.5rem',
        }}>
          <p style={{ color: 'var(--color-gray-muted)', fontSize: '0.8rem' }}>
            © {new Date().getFullYear()} Sondex Geo. Todos os direitos reservados.
          </p>
          <p style={{ color: 'var(--color-gray-muted)', fontSize: '0.8rem' }}>
            CREA: 26661/D-DF
          </p>
        </div>
      </div>
    </footer>
  )
}
