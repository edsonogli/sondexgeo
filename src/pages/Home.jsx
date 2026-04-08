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
      {/* HERO */}
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

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="hero__scroll"
          >
            <div className="hero__scroll-line" />
          </motion.div>
        </div>
      </section>

      {/* SOBRE RESUMIDO */}
      <section className="section section--dark">
        <div className="container">
          <div className="about-preview">
            <motion.div {...fadeInUp} className="about-preview__text">
              <h2 className="section__title about-preview__title-left">
                Parceiros estratégicos em <span className="text-accent">geotecnia</span>
              </h2>
              <p className="about-preview__p">
                A SONDEX GEO é uma empresa especializada em serviços de engenharia geotécnica, com foco em sondagens do tipo SPT e sondagens rotativas. Atuamos com excelência em investigações de subsolo, fornecendo dados técnicos precisos e confiáveis.
              </p>
              <p className="about-preview__p">
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
              <div className="about-feature">
                <ShieldCheck size={24} className="about-feature__icon" />
                <div>
                  <strong>Qualidade</strong>
                  <p>Rigorosos padrões de qualidade em cada projeto</p>
                </div>
              </div>
              <div className="about-feature">
                <Cpu size={24} className="about-feature__icon" />
                <div>
                  <strong>Tecnologia</strong>
                  <p>Equipamentos modernos e soluções avançadas</p>
                </div>
              </div>
              <div className="about-feature">
                <Users size={24} className="about-feature__icon" />
                <div>
                  <strong>Equipe</strong>
                  <p>Profissionais altamente qualificados</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SERVIÇOS */}
      <ServicePreview />

      {/* NÚMEROS */}
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

      {/* CTA */}
      <section className="section section--alt cta-section">
        <div className="container cta-container">
          <motion.div {...fadeInUp}>
            <h2 className="section__title">
              Precisa de um <span className="text-accent">laudo técnico</span>?
            </h2>
            <p className="section__subtitle">
              Entre em contato com nossa equipe e solicite um orçamento sem compromisso.
            </p>
            <Link to="/contato" className="btn btn--primary cta-btn">
              Solicitar Orçamento <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  )
}
