import { useState } from 'react'
import PageTransition from '../components/PageTransition'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Send, MessageSquare } from 'lucide-react'

const InstagramIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
)

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.6 },
}

export default function Contato() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: integrate with email service
    console.log('Form submitted:', form)
    setSent(true)
    setTimeout(() => setSent(false), 4000)
    setForm({ name: '', email: '', phone: '', service: '', message: '' })
  }

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <PageTransition>
      {/* Hero */}
      <section className="page-hero">
        <div className="container">
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="page-hero__tag">
            Fale Conosco
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="page-hero__title">
            Solicite seu <span className="text-accent">orçamento</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="page-hero__subtitle">
            Entre em contato com nossa equipe e solicite um orçamento sem compromisso.
          </motion.p>
        </div>
      </section>

      {/* Contato */}
      <section className="section section--dark">
        <div className="container">
          <div className="contact-grid">
            {/* Form */}
            <motion.form
              onSubmit={handleSubmit}
              className="contact-form"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="contact-form__heading">Envie sua mensagem</h2>
              
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Nome completo</label>
                  <input type="text" name="name" value={form.name} onChange={handleChange} required className="form-input" placeholder="Seu nome" />
                </div>
                <div className="form-group">
                  <label className="form-label">E-mail</label>
                  <input type="email" name="email" value={form.email} onChange={handleChange} required className="form-input" placeholder="seu@email.com" />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Telefone</label>
                  <input type="tel" name="phone" value={form.phone} onChange={handleChange} className="form-input" placeholder="(61) 99999-9999" />
                </div>
                <div className="form-group">
                  <label className="form-label">Serviço desejado</label>
                  <select name="service" value={form.service} onChange={handleChange} className="form-input form-select">
                    <option value="">Selecione...</option>
                    <option value="spt">Sondagem SPT</option>
                    <option value="rotativa">Sondagem Rotativa</option>
                    <option value="mista">Sondagem Mista</option>
                    <option value="eletrorresistividade">Eletrorresistividade</option>
                    <option value="poco">Poço Artesiano</option>
                    <option value="laboratorio">Ensaios Laboratoriais</option>
                    <option value="planialtimetria">Planialtimetria</option>
                    <option value="topografia">Topografia Aérea</option>
                    <option value="estaca">Perfuração de Estacas</option>
                    <option value="laudo">Laudo Técnico</option>
                    <option value="infraestrutura">Infraestrutura</option>
                    <option value="consultoria">Engenharia Consultiva</option>
                    <option value="outro">Outro</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Mensagem</label>
                <textarea name="message" value={form.message} onChange={handleChange} rows={5} required className="form-input form-textarea" placeholder="Descreva seu projeto ou necessidade..." />
              </div>

              <button type="submit" className="btn btn--primary" style={{ width: '100%', justifyContent: 'center' }} disabled={sent}>
                {sent ? '✓ Mensagem enviada!' : <><Send size={18} /> Enviar mensagem</>}
              </button>
            </motion.form>

            {/* Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="contact-info"
            >
              <h2 className="contact-info__heading">Informações de contato</h2>
              
              <div className="contact-info__items">
                <a href="tel:+5561996105699" className="contact-info__item">
                  <div className="contact-info__icon"><Phone size={24} /></div>
                  <div>
                    <strong>Telefone</strong>
                    <p>(61) 99610-5699</p>
                  </div>
                </a>

                <a href="https://wa.me/5561996105699" target="_blank" rel="noopener noreferrer" className="contact-info__item">
                  <div className="contact-info__icon"><MessageSquare size={24} /></div>
                  <div>
                    <strong>WhatsApp</strong>
                    <p>(61) 99610-5699</p>
                  </div>
                </a>

                <a href="mailto:sondex.eng@gmail.com" className="contact-info__item">
                  <div className="contact-info__icon"><Mail size={24} /></div>
                  <div>
                    <strong>E-mail</strong>
                    <p>sondex.eng@gmail.com</p>
                  </div>
                </a>

                <a href="https://instagram.com/sondex.geo" target="_blank" rel="noopener noreferrer" className="contact-info__item">
                  <div className="contact-info__icon"><InstagramIcon size={24} /></div>
                  <div>
                    <strong>Instagram</strong>
                    <p>@sondex.geo</p>
                  </div>
                </a>

                <div className="contact-info__item">
                  <div className="contact-info__icon"><MapPin size={24} /></div>
                  <div>
                    <strong>Localização</strong>
                    <p>Brasília - DF</p>
                    <p>Goiânia - GO</p>
                  </div>
                </div>
              </div>

              <div className="contact-info__crea">
                <strong>CREA: 26661/D-DF</strong>
                <span>Eng. Maurício Araujo Godoi</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <style>{`
        .page-hero {
          padding-top: calc(var(--header-height) + var(--space-2xl));
          padding-bottom: var(--space-xl);
          text-align: center;
          background: linear-gradient(180deg, var(--color-bg-secondary) 0%, var(--color-bg-dark) 100%);
        }
        .page-hero__tag {
          color: var(--color-accent);
          font-size: 0.85rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          font-weight: 600;
          margin-bottom: 0.75rem;
        }
        .page-hero__title {
          font-family: var(--font-heading);
          font-size: clamp(2rem, 5vw, 3.5rem);
          font-weight: 700;
          margin-bottom: 1rem;
        }
        .page-hero__subtitle {
          color: var(--color-gray-muted);
          font-size: 1.1rem;
          max-width: 550px;
          margin: 0 auto;
          line-height: 1.7;
        }
        .contact-grid {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: var(--space-xl);
          align-items: start;
        }
        .contact-form {
          background: var(--color-bg-secondary);
          padding: var(--space-lg);
          border-radius: var(--radius-lg);
          border: 1px solid rgba(255,255,255,0.04);
        }
        .contact-form__heading {
          font-family: var(--font-heading);
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: var(--space-md);
        }
        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--space-sm);
        }
        .form-group {
          margin-bottom: var(--space-sm);
        }
        .form-label {
          display: block;
          font-size: 0.85rem;
          font-weight: 500;
          color: var(--color-gray-light);
          margin-bottom: 0.4rem;
        }
        .form-input {
          width: 100%;
          padding: 0.75rem 1rem;
          background: var(--color-bg-dark);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: var(--radius-sm);
          color: var(--color-white);
          font-size: 0.95rem;
          font-family: var(--font-body);
          transition: border-color 0.2s;
        }
        .form-input:focus {
          outline: none;
          border-color: var(--color-accent);
        }
        .form-input::placeholder { color: var(--color-gray-muted); }
        .form-select { cursor: pointer; appearance: none; }
        .form-textarea { resize: vertical; min-height: 120px; }
        .contact-info {
          padding: var(--space-lg);
        }
        .contact-info__heading {
          font-family: var(--font-heading);
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: var(--space-md);
        }
        .contact-info__items {
          display: flex;
          flex-direction: column;
          gap: var(--space-sm);
          margin-bottom: var(--space-md);
        }
        .contact-info__item {
          display: flex;
          gap: 1rem;
          align-items: flex-start;
          padding: 1rem;
          background: var(--color-bg-secondary);
          border-radius: var(--radius-md);
          border: 1px solid rgba(255,255,255,0.04);
          text-decoration: none;
          transition: all 0.2s;
        }
        .contact-info__item:hover {
          border-color: rgba(157,20,5,0.3);
        }
        .contact-info__icon {
          color: var(--color-accent);
          flex-shrink: 0;
          display: flex;
          padding-top: 2px;
        }
        .contact-info__item strong {
          display: block;
          font-size: 0.9rem;
          margin-bottom: 0.15rem;
        }
        .contact-info__item p {
          color: var(--color-gray-muted);
          font-size: 0.85rem;
        }
        .contact-info__crea {
          padding: 1rem;
          background: var(--color-bg-secondary);
          border-radius: var(--radius-md);
          border-left: 3px solid var(--color-accent);
        }
        .contact-info__crea strong { display: block; font-size: 0.95rem; }
        .contact-info__crea span { color: var(--color-gray-muted); font-size: 0.85rem; }
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr; }
          .form-row { grid-template-columns: 1fr; }
        }
      `}</style>
    </PageTransition>
  )
}
