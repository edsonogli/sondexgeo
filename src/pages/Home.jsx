import PageTransition from '../components/PageTransition'
import ParticleField from '../components/ParticleField'
import CountUp from '../components/CountUp'
import ServicePreview from '../components/ServicePreview'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, ShieldCheck, Cpu, Users } from 'lucide-react'

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.6 },
}

export default function Home() {
  return (
    <PageTransition>
      {/* ===== HERO ===== */}
      <section className="hero">
        <ParticleField />
        <div className="hero__bg" />
        <div className="container hero__content">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="hero__tag"
          >
            Engenharia de Fundações & Geotecnia
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="hero__title"
          >
            Geotecnia com
            <br />
            <span className="hero__title-accent">confiança</span> e competência
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="hero__subtitle"
          >
            Sondagens, ensaios laboratoriais e projetos de infraestrutura com precisão e qualidade em todo o Brasil.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="hero__actions"
          >
            <Link to="/servicos" className="btn btn--primary">
              Nossos Serviços <ArrowRight size={18} />
            </Link>
            <Link to="/contato" className="btn btn--outline">
              Fale Conosco
            </Link>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="hero__scroll"
          >
            <div className="hero__scroll-line" />
          </motion.div>
        </div>

        <style>{`
          .hero__scroll {
            position: absolute;
            bottom: 2rem;
            left: 50%;
            transform: translateX(-50%);
          }
          .hero__scroll-line {
            width: 1px;
            height: 40px;
            background: linear-gradient(to bottom, var(--color-accent), transparent);
            animation: scrollPulse 2s ease-in-out infinite;
          }
          @keyframes scrollPulse {
            0%, 100% { opacity: 0.3; transform: scaleY(0.7); }
            50% { opacity: 1; transform: scaleY(1); }
          }
        `}</style>
      </section>

      {/* ===== SOBRE RESUMIDO ===== */}
      <section className="section section--dark">
        <div className="container">
          <div className="about-preview">
            <motion.div {...fadeInUp} className="about-preview__text">
              <h2 className="section__title" style={{ textAlign: 'left' }}>
                Parceiros estratégicos em <span className="text-accent">geotecnia</span>
              </h2>
              <p style={{ color: 'var(--color-gray-muted)', lineHeight: 1.8, fontSize: '1.05rem', marginBottom: 'var(--space-sm)' }}>
                A SONDEX GEO é uma empresa especializada em serviços de engenharia geotécnica, com foco em sondagens do tipo SPT e sondagens rotativas. Atuamos com excelência em investigações de subsolo, fornecendo dados técnicos precisos e confiáveis para projetos de engenharia civil, fundações, contenções e obras de infraestrutura.
              </p>
              <p style={{ color: 'var(--color-gray-muted)', lineHeight: 1.8, fontSize: '1.05rem', marginBottom: 'var(--space-md)' }}>
                Mais do que executar serviços, buscamos ser parceiros estratégicos, entregando conhecimento técnico que sustenta projetos sólidos desde o início.
              </p>
              <Link to="/sobre" className="btn btn--outline">
                Saiba mais <ArrowRight size={18} />
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="about-preview__features"
            >
              {[
                { icon: ShieldCheck, title: 'Qualidade', desc: 'Rigorosos padrões de qualidade em cada projeto' },
                { icon: Cpu, title: 'Tecnologia', desc: 'Equipamentos modernos e soluções avançadas' },
                { icon: Users, title: 'Equipe', desc: 'Profissionais altamente qualificados' },
              ].map((f, i) => (
                <div key={i} className="about-feature">
                  <f.icon size={24} className="about-feature__icon" />
                  <div>
                    <strong>{f.title}</strong>
                    <p>{f.desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        <style>{`
          .about-preview {
            display: grid;
            grid-template-columns: 1.2fr 0.8fr;
            gap: var(--space-xl);
            align-items: center;
          }
          .about-preview__features {
            display: flex;
            flex-direction: column;
            gap: var(--space-sm);
          }
          .about-feature {
            display: flex;
            gap: 1rem;
            padding: 1.25rem;
            background: var(--color-bg-secondary);
            border-radius: var(--radius-md);
            border: 1px solid rgba(255,255,255,0.04);
          }
          .about-feature__icon {
            color: var(--color-accent);
            flex-shrink: 0;
            margin-top: 2px;
          }
          .about-feature strong {
            font-size: 1rem;
            display: block;
            margin-bottom: 0.15rem;
          }
          .about-feature p {
            color: var(--color-gray-muted);
            font-size: 0.85rem;
            line-height: 1.5;
          }
          @media (max-width: 768px) {
            .about-preview {
              grid-template-columns: 1fr;
              gap: var(--space-lg);
            }
          }
        `}</style>
      </section>

      {/* ===== SERVIÇOS ===== */}
      <ServicePreview />

      {/* ===== NÚMEROS ===== */}
      <section className="section section--dark">
        <div className="container">
          <motion.h2 {...fadeInUp} className="section__title">
            Nossos <span className="text-accent">Números</span>
          </motion.h2>
          <div className="stats-grid">
            {[
              { number: 2020, label: 'Ano de fundação' },
              { number: 5, suffix: '+', label: 'Anos de experiência' },
              { number: 100, suffix: '+', label: 'Projetos realizados' },
              { number: 2, label: 'Unidades (BSB/GYN)' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                className="stat"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <span className="stat__number">
                  <CountUp end={stat.number} suffix={stat.suffix || ''} />
                </span>
                <span className="stat__label">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="section section--alt cta-section">
        <div className="container" style={{ textAlign: 'center' }}>
          <motion.div {...fadeInUp}>
            <h2 className="section__title">
              Precisa de um <span className="text-accent">laudo técnico</span>?
            </h2>
            <p className="section__subtitle">
              Entre em contato com nossa equipe e solicite um orçamento sem compromisso.
            </p>
            <Link to="/contato" className="btn btn--primary" style={{ marginTop: '1.5rem' }}>
              Solicitar Orçamento <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  )
}
