import PageTransition from '../components/PageTransition'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Target, Eye, Heart, Award, MapPin } from 'lucide-react'

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
      <section className="page-hero">
        <div className="container">
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="page-hero__tag">Quem Somos</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="page-hero__title">
            Parceiros estratégicos em <span className="text-accent">geotecnia</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="page-hero__subtitle">
            Desde 2020, transformando conhecimento geotécnico em soluções sólidas e inteligentes.
          </motion.p>
        </div>
      </section>

      <section className="section section--dark">
        <div className="container">
          <div className="about-grid">
            <motion.div {...fadeInUp}>
              <h2 className="about-text__heading">Quem é a Sondex Geo</h2>
              <p className="about-text__p">A SONDEX GEO é uma empresa especializada em serviços de engenharia geotécnica, com foco em sondagens do tipo SPT e sondagens rotativas. Atuamos com excelência em investigações de subsolo, fornecendo dados técnicos precisos e confiáveis para projetos de engenharia civil, fundações, contenções e obras de infraestrutura.</p>
              <p className="about-text__p">Nosso compromisso é garantir soluções seguras, econômicas e eficientes, por meio de uma equipe altamente qualificada, equipamentos modernos e rigorosos padrões de qualidade.</p>
              <p className="about-text__p">Mais do que executar serviços, buscamos ser parceiros estratégicos, entregando conhecimento técnico que sustenta projetos sólidos desde o início.</p>
              <div className="about-text__crea">
                <Award size={20} />
                <div>
                  <strong>Eng. Maurício Araujo Godoi</strong>
                  <span>CREA: 26661/D-DF</span>
                </div>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="about-image">
              <img src="/logo-full.png" alt="Sondex Geo" className="about-image__img" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <motion.h2 {...fadeInUp} className="section__title">Nossos <span className="text-accent">Pilares</span></motion.h2>
          <div className="pillars-grid">
            {[
              { icon: Target, title: 'Missão', desc: 'Fornecer soluções geotécnicas precisas e confiáveis que garantam a segurança e eficiência de projetos de engenharia civil em todo o Brasil.' },
              { icon: Eye, title: 'Visão', desc: 'Ser referência nacional em investigação geotécnica, reconhecida pela excelência técnica, inovação e compromisso com resultados.' },
              { icon: Heart, title: 'Valores', desc: 'Precisão nos resultados. Compromisso com a segurança. Inovação constante. Parceria estratégica com cada cliente.' },
            ].map((item, i) => (
              <motion.div key={i} className="pillar-card" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.15 }}>
                <div className="pillar-card__icon"><item.icon size={36} /></div>
                <h3 className="pillar-card__title">{item.title}</h3>
                <p className="pillar-card__desc">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--dark">
        <div className="container">
          <motion.h2 {...fadeInUp} className="section__title">Nossa <span className="text-accent">Trajetória</span></motion.h2>
          <div className="timeline">
            {timeline.map((item, i) => (
              <motion.div key={i} className={`timeline__item ${i % 2 === 0 ? 'timeline__item--left' : 'timeline__item--right'}`}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}>
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

      <section className="section section--alt">
        <div className="container">
          <motion.h2 {...fadeInUp} className="section__title">Áreas de <span className="text-accent">Atuação</span></motion.h2>
          <div className="locations-grid">
            {[
              { city: 'Brasília', state: 'DF', desc: 'Sede principal. Atendimento em todo o Distrito Federal e Entorno.' },
              { city: 'Goiânia', state: 'GO', desc: 'Segunda unidade. Cobertura completa no estado de Goiás.' },
              { city: 'Todo o Brasil', state: '', desc: 'Execuções em grande parte do território nacional com logística ágil.' },
            ].map((loc, i) => (
              <motion.div key={i} className="location-card" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }}>
                <MapPin size={28} className="location-card__icon" />
                <h3 className="location-card__city">{loc.city} {loc.state && <span className="text-accent">{loc.state}</span>}</h3>
                <p className="location-card__desc">{loc.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--dark cta-section">
        <div className="container cta-container">
          <motion.div {...fadeInUp}>
            <h2 className="section__title">Quer saber mais?</h2>
            <p className="section__subtitle">Entre em contato e descubra como podemos ajudar no seu projeto.</p>
            <Link to="/contato" className="btn btn--primary cta-btn">Fale Conosco <ArrowRight size={18} /></Link>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  )
}
