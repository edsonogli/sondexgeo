import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, ChevronUp } from 'lucide-react'

const InstagramIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
)

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__col">
            <div className="footer__logo-row">
              <img src="/logo-icon.png" alt="Sondex Geo" className="footer__logo-img" />
              <span className="footer__logo-text">SONDEX<span className="footer__logo-accent">GEO</span></span>
            </div>
            <p className="footer__desc">Engenharia de Fundações & Geotecnia. Geotecnia com confiança e competência desde 2020.</p>
            <div className="footer__social">
              <a href="https://instagram.com/sondex.geo" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <InstagramIcon size={20} />
              </a>
            </div>
          </div>
          <div className="footer__col">
            <h4 className="footer__heading">Navegação</h4>
            <nav className="footer__links">
              <Link to="/" className="footer__link">Home</Link>
              <Link to="/sobre" className="footer__link">Sobre Nós</Link>
              <Link to="/servicos" className="footer__link">Serviços</Link>
              <Link to="/contato" className="footer__link">Contato</Link>
            </nav>
          </div>
          <div className="footer__col">
            <h4 className="footer__heading">Serviços</h4>
            <nav className="footer__links">
              <Link to="/servicos" className="footer__link">Sondagem SPT</Link>
              <Link to="/servicos" className="footer__link">Sondagem Rotativa</Link>
              <Link to="/servicos" className="footer__link">Ensaios Laboratoriais</Link>
              <Link to="/servicos" className="footer__link">Planialtimetria</Link>
              <Link to="/servicos" className="footer__link">Engenharia Consultiva</Link>
            </nav>
          </div>
          <div className="footer__col">
            <h4 className="footer__heading">Contato</h4>
            <div className="footer__contact">
              <a href="tel:+5561996105699"><Phone size={16} /> (61) 99610-5699</a>
              <a href="mailto:sondex.eng@gmail.com"><Mail size={16} /> sondex.eng@gmail.com</a>
              <a href="https://instagram.com/sondex.geo" target="_blank" rel="noopener noreferrer"><InstagramIcon size={16} /> @sondex.geo</a>
              <span><MapPin size={16} /> Brasília - DF / Goiânia - GO</span>
            </div>
          </div>
        </div>
        <div className="footer__bottom">
          <p>© {new Date().getFullYear()} Sondex Geo. Todos os direitos reservados.</p>
          <p>CREA: 26661/D-DF</p>
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="footer__back-top" aria-label="Voltar ao topo">
            <ChevronUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  )
}
