import { Link } from 'react-router-dom'
import { Phone, Mail, Instagram, MapPin, ChevronUp } from 'lucide-react'

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          {/* Coluna 1 - Logo */}
          <div className="footer__col">
            <div className="footer__logo-row">
              <img src="/logo-icon.png" alt="Sondex Geo" className="footer__logo-img" />
              <span className="footer__logo-text">
                SONDEX<span className="footer__logo-accent">GEO</span>
              </span>
            </div>
            <p className="footer__desc">
              Engenharia de Fundações & Geotecnia. Geotecnia com confiança e competência desde 2020.
            </p>
            <div className="footer__social">
              <a href="https://instagram.com/sondex.geo" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Coluna 2 - Links */}
          <div className="footer__col">
            <h4 className="footer__heading">Navegação</h4>
            <nav className="footer__links">
              {[
                { path: '/', label: 'Home' },
                { path: '/sobre', label: 'Sobre Nós' },
                { path: '/servicos', label: 'Serviços' },
                { path: '/contato', label: 'Contato' },
              ].map(link => (
                <Link key={link.path} to={link.path} className="footer__link">
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Coluna 3 - Serviços */}
          <div className="footer__col">
            <h4 className="footer__heading">Serviços</h4>
            <nav className="footer__links">
              {['Sondagem SPT', 'Sondagem Rotativa', 'Ensaios Laboratoriais', 'Planialtimetria', 'Engenharia Consultiva'].map(s => (
                <Link key={s} to="/servicos" className="footer__link">{s}</Link>
              ))}
            </nav>
          </div>

          {/* Coluna 4 - Contato */}
          <div className="footer__col">
            <h4 className="footer__heading">Contato</h4>
            <div className="footer__contact">
              <a href="tel:+5561996105699"><Phone size={16} /> (61) 99610-5699</a>
              <a href="mailto:sondex.eng@gmail.com"><Mail size={16} /> sondex.eng@gmail.com</a>
              <a href="https://instagram.com/sondex.geo" target="_blank" rel="noopener noreferrer"><Instagram size={16} /> @sondex.geo</a>
              <span><MapPin size={16} /> Brasília - DF / Goiânia - GO</span>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p>© {new Date().getFullYear()} Sondex Geo. Todos os direitos reservados.</p>
          <p>CREA: 26661/D-DF</p>
          <button onClick={scrollToTop} className="footer__back-top" aria-label="Voltar ao topo">
            <ChevronUp size={20} />
          </button>
        </div>
      </div>

      <style>{`
        .footer {
          background: var(--color-bg-dark);
          border-top: 1px solid rgba(157, 20, 5, 0.2);
          padding: var(--space-2xl) 0 var(--space-lg);
        }
        .footer__grid {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr 1fr 1.2fr;
          gap: var(--space-lg);
          margin-bottom: var(--space-lg);
        }
        .footer__logo-row {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: var(--space-sm);
        }
        .footer__logo-img { height: 40px; object-fit: contain; }
        .footer__logo-text {
          font-size: 1.3rem;
          font-weight: 800;
          letter-spacing: 0.06em;
          color: var(--color-white);
        }
        .footer__logo-accent { color: var(--color-accent); }
        .footer__desc {
          color: var(--color-gray-muted);
          font-size: 0.9rem;
          line-height: 1.7;
          margin-bottom: var(--space-sm);
        }
        .footer__social a {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: var(--radius-full);
          border: 1px solid rgba(255,255,255,0.1);
          color: var(--color-gray-muted);
          transition: all 0.2s;
        }
        .footer__social a:hover {
          border-color: var(--color-accent);
          color: var(--color-accent);
        }
        .footer__heading {
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--color-accent);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: var(--space-sm);
        }
        .footer__links {
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }
        .footer__link {
          color: var(--color-gray-muted);
          font-size: 0.9rem;
          transition: color 0.2s;
          text-decoration: none;
        }
        .footer__link:hover { color: var(--color-white); }
        .footer__contact {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .footer__contact a,
        .footer__contact span {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--color-gray-muted);
          font-size: 0.9rem;
          text-decoration: none;
          transition: color 0.2s;
        }
        .footer__contact a:hover { color: var(--color-white); }
        .footer__bottom {
          border-top: 1px solid rgba(255,255,255,0.06);
          padding-top: var(--space-sm);
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 0.5rem;
        }
        .footer__bottom p {
          color: var(--color-gray-muted);
          font-size: 0.8rem;
        }
        .footer__back-top {
          width: 36px;
          height: 36px;
          border-radius: var(--radius-full);
          border: 1px solid rgba(255,255,255,0.1);
          background: transparent;
          color: var(--color-gray-muted);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s;
        }
        .footer__back-top:hover {
          border-color: var(--color-accent);
          color: var(--color-accent);
        }
        @media (max-width: 1024px) {
          .footer__grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 640px) {
          .footer__grid { grid-template-columns: 1fr; gap: var(--space-md); }
        }
      `}</style>
    </footer>
  )
}
