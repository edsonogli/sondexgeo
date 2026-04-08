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

export default function Contato() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', form)
    setSent(true)
    setTimeout(() => setSent(false), 4000)
    setForm({ name: '', email: '', phone: '', service: '', message: '' })
  }

  const handleChange = (e) => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))

  return (
    <PageTransition>
      <section className="page-hero">
        <div className="container">
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="page-hero__tag">Fale Conosco</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="page-hero__title">Solicite seu <span className="text-accent">orçamento</span></motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="page-hero__subtitle">Entre em contato com nossa equipe e solicite um orçamento sem compromisso.</motion.p>
        </div>
      </section>

      <section className="section section--dark">
        <div className="container">
          <div className="contact-grid">
            <motion.form onSubmit={handleSubmit} className="contact-form" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
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
              <button type="submit" className="btn btn--primary contact-submit" disabled={sent}>
                {sent ? '✓ Mensagem enviada!' : <><Send size={18} /> Enviar mensagem</>}
              </button>
            </motion.form>

            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="contact-info">
              <h2 className="contact-info__heading">Informações de contato</h2>
              <div className="contact-info__items">
                <a href="tel:+5561996105699" className="contact-info__item">
                  <div className="contact-info__icon"><Phone size={24} /></div>
                  <div><strong>Telefone</strong><p>(61) 99610-5699</p></div>
                </a>
                <a href="https://wa.me/5561996105699" target="_blank" rel="noopener noreferrer" className="contact-info__item">
                  <div className="contact-info__icon"><MessageSquare size={24} /></div>
                  <div><strong>WhatsApp</strong><p>(61) 99610-5699</p></div>
                </a>
                <a href="mailto:sondex.eng@gmail.com" className="contact-info__item">
                  <div className="contact-info__icon"><Mail size={24} /></div>
                  <div><strong>E-mail</strong><p>sondex.eng@gmail.com</p></div>
                </a>
                <a href="https://instagram.com/sondex.geo" target="_blank" rel="noopener noreferrer" className="contact-info__item">
                  <div className="contact-info__icon"><InstagramIcon size={24} /></div>
                  <div><strong>Instagram</strong><p>@sondex.geo</p></div>
                </a>
                <div className="contact-info__item">
                  <div className="contact-info__icon"><MapPin size={24} /></div>
                  <div><strong>Localização</strong><p>Brasília - DF</p><p>Goiânia - GO</p></div>
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
    </PageTransition>
  )
}
