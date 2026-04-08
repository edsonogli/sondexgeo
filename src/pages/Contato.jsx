import PageTransition from '../components/PageTransition'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, MessageSquare, Award } from 'lucide-react'

const InstagramIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
)

export default function Contato() {
  return (
    <PageTransition>
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

      <section className="section section--dark">
        <div className="container">
          <div className="contact-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="contact-info-full">
              <h2 className="contact-info__heading">Informações de contato</h2>
              <p style={{ color: 'var(--color-gray-muted)', marginBottom: 'var(--space-lg)', lineHeight: 1.7 }}>
                Entre em contato pelo WhatsApp, telefone ou e-mail. Respondemos rapidamente!
              </p>

              <div className="contact-info__items">
                <a href="https://wa.me/5561996105699" target="_blank" rel="noopener noreferrer" className="contact-info__item contact-info__item--whatsapp">
                  <div className="contact-info__icon"><MessageSquare size={28} /></div>
                  <div>
                    <strong>WhatsApp</strong>
                    <p>(61) 99610-5699</p>
                    <span className="contact-info__hint">Clique para conversar</span>
                  </div>
                </a>

                <a href="tel:+5561996105699" className="contact-info__item">
                  <div className="contact-info__icon"><Phone size={28} /></div>
                  <div>
                    <strong>Telefone</strong>
                    <p>(61) 99610-5699</p>
                  </div>
                </a>

                <a href="mailto:sondex.eng@gmail.com" className="contact-info__item">
                  <div className="contact-info__icon"><Mail size={28} /></div>
                  <div>
                    <strong>E-mail</strong>
                    <p>sondex.eng@gmail.com</p>
                  </div>
                </a>

                <a href="https://instagram.com/sondex.geo" target="_blank" rel="noopener noreferrer" className="contact-info__item">
                  <div className="contact-info__icon"><InstagramIcon size={28} /></div>
                  <div>
                    <strong>Instagram</strong>
                    <p>@sondex.geo</p>
                  </div>
                </a>

                <div className="contact-info__item">
                  <div className="contact-info__icon"><MapPin size={28} /></div>
                  <div>
                    <strong>Localização</strong>
                    <p>Brasília - DF</p>
                    <p>Goiânia - GO</p>
                  </div>
                </div>
              </div>

              <div className="contact-info__crea">
                <Award size={20} />
                <div>
                  <strong>Eng. Maurício Araujo Godoi</strong>
                  <span>CREA: 26661/D-DF</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </PageTransition>
  )
}
