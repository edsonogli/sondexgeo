import PageTransition from '../components/PageTransition'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Drill, Beaker, Building2, BarChart3 } from 'lucide-react'

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.6 },
}

export default function Home() {
  return (
    <PageTransition>
      {/* Hero */}
      <section className="hero">
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
        </div>
      </section>

      {/* Diferenciais */}
      <section className="section section--dark">
        <div className="container">
          <motion.h2 {...fadeInUp} className="section__title">
            Por que a <span className="text-accent">Sondex Geo</span>?
          </motion.h2>
          <div className="cards-grid">
            {[
              { icon: Drill, title: 'Sondagens', desc: 'SPT, Rotativa e Mista com equipamentos de última geração e equipe qualificada.' },
              { icon: Beaker, title: 'Laboratório', desc: 'Ensaios geotécnicos completos — CBR, Triaxial, Granulometria e muito mais.' },
              { icon: Building2, title: 'Infraestrutura', desc: 'Projetos rodoviários, ferroviários e aeroportuários com excelência.' },
              { icon: BarChart3, title: 'Consultoria', desc: 'Laudos, vistorias e assistência técnica com rigor e precisão.' },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -6, borderColor: 'rgba(157,20,5,0.5)' }}
              >
                <div className="card__icon"><item.icon size={32} /></div>
                <h3 className="card__title">{item.title}</h3>
                <p className="card__desc">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Números */}
      <section className="section section--alt">
        <div className="container">
          <div className="stats-grid">
            {[
              { number: '2020', label: 'Ano de fundação' },
              { number: '5+', label: 'Anos de experiência' },
              { number: '100+', label: 'Projetos realizados' },
              { number: '2', label: 'Unidades (BSB/GYN)' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                className="stat"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <span className="stat__number">{stat.number}</span>
                <span className="stat__label">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section--dark cta-section">
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
