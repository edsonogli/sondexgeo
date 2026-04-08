import PageTransition from '../components/PageTransition'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Target, Eye, Heart, Award, Clock, MapPin } from 'lucide-react'

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.6 },
}

const timeline = [
  { year: '2020', title: 'Fundação', desc: 'A Sondex Geo nasce em Brasília, com foco em sondagens geotécnicas de excelência.' },
  { year: '2021', title: 'Expansão', desc: 'Ampliação dos serviços com ensaios laboratoriais e equipamentos modernos.' },
  { year: '2022', title: 'Goiânia', desc: 'Abertura da segunda unidade, ampliando a atuação para o Centro-Oeste.' },
  { year: '2023', title: 'Infraestrutura', desc: 'Início dos projetos de infraestrutura rodoviária e ferroviária.' },
  { year: '2024', title: 'Consultoria', desc: 'Lançamento da divisão de engenharia consultiva e laudos técnicos.' },
  { year: '2025', title: 'Drones & RTK', desc: 'Incorporação de topografia aérea com drones e tecnologia RTK.' },
]

export default function Sobre() {
  return (
    <PageTransition>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="page-hero__tag"
          >
            Quem Somos
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="page-hero__title"
          >
            Parceiros estratégicos em <span className="text-accent">geotecnia</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="page-hero__subtitle"
          >
            Desde 2020, transformando conhecimento geotécnico em soluções sólidas e inteligentes.
          </motion.p>
        </div>
      </section>

      {/* Sobre Texto */}
      <section className="section section--dark">
        <div className="container">
          <div className="about-grid">
            <motion.div {...fadeInUp} className="about-text">
              <h2 className="about-text__heading">Quem é a Sondex Geo</h2>
              <p className="about-text__p">
                A SONDEX GEO é uma empresa especializada em serviços de engenharia geotécnica, com foco em sondagens do tipo SPT e sondagens rotativas. Atuamos com excelência em investigações de subsolo, fornecendo dados técnicos precisos e confiáveis para projetos de engenharia civil, fundações, contenções e obras de infraestrutura.
              </p>
              <p className="about-text__p">
                Nosso compromisso é garantir soluções seguras, econômicas e eficientes, por meio de uma equipe altamente qualificada, equipamentos modernos e rigorosos padrões de qualidade. Através da geotecnia aplicada, ajudamos nossos clientes a entenderem as características do solo e a tomarem decisões mais assertivas em seus empreendimentos.
              </p>
              <p className="about-text__p">
                Mais do que executar serviços, buscamos ser parceiros estratégicos, entregando conhecimento técnico que sustenta projetos sólidos desde o início.
              </p>
              <div className="about-text__crea">
                <Award size={20} />
                <div>
                  <strong>Eng. Maurício Araujo Godoi</strong>
                  <span>CREA: 26661/D-DF</span>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="about-image"
            >
              <img src="/logo-full.png" alt="Sondex Geo" className="about-image__img" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Missão, Visão, Valores */}
      <section className="section section--alt">
        <div className="container">
          <motion.h2 {...fadeInUp} className="section__title">
            Nossos <span className="text-accent">Pilares</span>
          </motion.h2>
          <div className="pillars-grid">
            {[
              { icon: Target, title: 'Missão', desc: 'Fornecer soluções geotécnicas precisas e confiáveis que garantam a segurança e eficiência de projetos de engenharia civil em todo o Brasil.' },
              { icon: Eye, title: 'Visão', desc: 'Ser referência nacional em investigação geotécnica, reconhecida pela excelência técnica, inovação e compromisso com resultados.' },
              { icon: Heart, title: 'Valores', desc: 'Precisão nos resultados. Compromisso com a segurança. Inovação constante. Parceria estratégica com cada cliente.' },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="pillar-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
              >
                <div className="pillar-card__icon"><item.icon size={36} /></div>
                <h3 className="pillar-card__title">{item.title}</h3>
                <p className="pillar-card__desc">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section section--dark">
        <div className="container">
          <motion.h2 {...fadeInUp} className="section__title">
            Nossa <span className="text-accent">Trajetória</span>
          </motion.h2>
          <div className="timeline">
            {timeline.map((item, i) => (
              <motion.div
                key={i}
                className={`timeline__item ${i % 2 === 0 ? 'timeline__item--left' : 'timeline__item--right'}`}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <span className="timeline__year">{item.year}</span>
                <div className="timeline__content">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Atuação */}
      <section className="section section--alt">
        <div className="container">
          <motion.h2 {...fadeInUp} className="section__title">
            Áreas de <span className="text-accent">Atuação</span>
          </motion.h2>
          <div className="locations-grid">
            {[
              { city: 'Brasília', state: 'DF', desc: 'Sede principal. Atendimento em todo o Distrito Federal e Entorno.' },
              { city: 'Goiânia', state: 'GO', desc: 'Segunda unidade. Cobertura completa no estado de Goiás.' },
              { city: 'Todo o Brasil', state: '', desc: 'Execuções em grande parte do território nacional com logística ágil.' },
            ].map((loc, i) => (
              <motion.div
                key={i}
                className="location-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <MapPin size={28} className="location-card__icon" />
                <h3 className="location-card__city">
                  {loc.city} {loc.state && <span className="text-accent">{loc.state}</span>}
                </h3>
                <p className="location-card__desc">{loc.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section--dark cta-section">
        <div className="container" style={{ textAlign: 'center' }}>
          <motion.div {...fadeInUp}>
            <h2 className="section__title">Quer saber mais?</h2>
            <p className="section__subtitle">Entre em contato e descubra como podemos ajudar no seu projeto.</p>
            <Link to="/contato" className="btn btn--primary" style={{ marginTop: '1.5rem' }}>
              Fale Conosco <ArrowRight size={18} />
            </Link>
          </motion.div>
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
          letter-spacing: -0.01em;
        }
        .page-hero__subtitle {
          color: var(--color-gray-muted);
          font-size: 1.1rem;
          max-width: 550px;
          margin: 0 auto;
          line-height: 1.7;
        }
        .about-grid {
          display: grid;
          grid-template-columns: 1.3fr 0.7fr;
          gap: var(--space-xl);
          align-items: center;
        }
        .about-text__heading {
          font-family: var(--font-heading);
          font-size: clamp(1.5rem, 3vw, 2rem);
          font-weight: 700;
          margin-bottom: var(--space-md);
        }
        .about-text__p {
          color: var(--color-gray-muted);
          font-size: 1rem;
          line-height: 1.8;
          margin-bottom: var(--space-sm);
        }
        .about-text__crea {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-top: var(--space-md);
          padding: 1rem 1.25rem;
          background: var(--color-bg-secondary);
          border-radius: var(--radius-md);
          border-left: 3px solid var(--color-accent);
        }
        .about-text__crea svg { color: var(--color-accent); flex-shrink: 0; }
        .about-text__crea strong { display: block; font-size: 0.95rem; }
        .about-text__crea span { color: var(--color-gray-muted); font-size: 0.85rem; }
        .about-image {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .about-image__img {
          max-width: 280px;
          filter: drop-shadow(0 0 40px rgba(157, 20, 5, 0.15));
        }
        .pillars-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: var(--space-md);
        }
        .pillar-card {
          padding: var(--space-lg);
          background: var(--color-bg-dark);
          border-radius: var(--radius-lg);
          border: 1px solid rgba(255,255,255,0.04);
          text-align: center;
          transition: all 0.3s;
        }
        .pillar-card:hover { border-color: rgba(157,20,5,0.3); transform: translateY(-4px); }
        .pillar-card__icon { color: var(--color-accent); margin-bottom: var(--space-sm); display: flex; justify-content: center; }
        .pillar-card__title { font-size: 1.2rem; font-weight: 600; margin-bottom: 0.5rem; }
        .pillar-card__desc { color: var(--color-gray-muted); font-size: 0.9rem; line-height: 1.7; }
        .timeline {
          position: relative;
          max-width: 700px;
          margin: 0 auto;
        }
        .timeline::before {
          content: '';
          position: absolute;
          left: 50%;
          top: 0;
          bottom: 0;
          width: 2px;
          background: linear-gradient(to bottom, var(--color-accent), rgba(157,20,5,0.2));
          transform: translateX(-50%);
        }
        .timeline__item {
          display: flex;
          align-items: flex-start;
          margin-bottom: var(--space-md);
          position: relative;
        }
        .timeline__item--left { flex-direction: row; padding-right: 55%; }
        .timeline__item--right { flex-direction: row-reverse; padding-left: 55%; }
        .timeline__year {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          background: var(--color-accent);
          color: white;
          font-size: 0.8rem;
          font-weight: 700;
          padding: 0.3rem 0.75rem;
          border-radius: var(--radius-full);
          z-index: 1;
        }
        .timeline__content {
          background: var(--color-bg-secondary);
          padding: 1.25rem;
          border-radius: var(--radius-md);
          border: 1px solid rgba(255,255,255,0.04);
        }
        .timeline__content h3 { font-size: 1rem; font-weight: 600; margin-bottom: 0.25rem; }
        .timeline__content p { color: var(--color-gray-muted); font-size: 0.85rem; line-height: 1.6; }
        .locations-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: var(--space-md);
        }
        .location-card {
          padding: var(--space-lg);
          background: var(--color-bg-dark);
          border-radius: var(--radius-md);
          border: 1px solid rgba(255,255,255,0.04);
          text-align: center;
          transition: all 0.3s;
        }
        .location-card:hover { border-color: rgba(157,20,5,0.3); }
        .location-card__icon { color: var(--color-accent); margin-bottom: 0.75rem; display: flex; justify-content: center; }
        .location-card__city { font-size: 1.2rem; font-weight: 600; margin-bottom: 0.5rem; }
        .location-card__desc { color: var(--color-gray-muted); font-size: 0.9rem; line-height: 1.6; }
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr; }
          .timeline::before { left: 20px; }
          .timeline__item--left, .timeline__item--right { padding-left: 50px; padding-right: 0; flex-direction: row; }
          .timeline__year { left: 20px; transform: translateX(-50%); }
        }
      `}</style>
    </PageTransition>
  )
}
