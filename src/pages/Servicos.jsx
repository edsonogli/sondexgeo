import PageTransition from '../components/PageTransition'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Drill, FlaskConical, Mountain, Map, HardHat, FileText, Droplets, ArrowRight, Beaker, TestTube, Microscope, TrainFront, Plane, Building2, Wrench, Search } from 'lucide-react'

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.6 },
}

const servicesCampo = [
  { icon: Drill, title: 'Sondagem SPT', desc: 'Análise de resistência do solo em profundidade através de golpes padronizados. Essencial para projetar fundações seguras.' },
  { icon: Drill, title: 'Sondagem Rotativa', desc: 'Investigação em terrenos rochosos com coleta de amostras em profundidade. Permite identificar resistência e fraturas.' },
  { icon: Drill, title: 'Sondagem Mista', desc: 'Combinação de técnicas SPT e Rotativa para investigação completa do subsolo em diferentes tipos de terreno.' },
  { icon: Droplets, title: 'Sondagem por Eletrorresistividade', desc: 'Método geofísico não invasivo para mapeamento de estruturas do subsolo através de medições de resistividade elétrica.' },
  { icon: HardHat, title: 'Poço Artesiano Leve', desc: 'Perfuração de poços artesianos leves para captação de água subterrânea com qualidade e segurança.' },
  { icon: Droplets, title: 'Ensaio Piezométrico', desc: 'Medição do nível da água subterrânea e pressão neutra do solo, fundamental para projetos de fundações e contenções.' },
  { icon: Droplets, title: 'Ensaio de Percolação', desc: 'Medição da capacidade de absorção de água pelo solo. Essencial para projetos de drenagem e infiltração pluvial.' },
  { icon: Droplets, title: 'Ensaio de Permeabilidade', desc: 'Avaliação da velocidade de fluxo de água através do solo, importante para obras de contenção e drenagem.' },
  { icon: HardHat, title: 'Perfuração de Estacas', desc: 'Execução de estacas com controle técnico e precisão para fundações profundas.' },
  { icon: Mountain, title: 'Planialtimetria', desc: 'Levantamento topográfico preciso com informações planas e altimétricas do terreno.' },
  { icon: Map, title: 'Topografia Aérea', desc: 'Mapeamento aéreo de alta precisão com drones e tecnologia RTK.' },
  { icon: Search, title: 'Coleta de Amostras a Trado', desc: 'Coleta de amostras deformadas do solo em diferentes profundidades para análise laboratorial.' },
  { icon: FileText, title: 'Laudo Técnico', desc: 'Emissão de laudos e pareceres técnicos com rigor para embasar decisões em projetos de engenharia.' },
]

const servicesLab = [
  { icon: Beaker, title: 'CBR', desc: 'California Bearing Ratio — ensaio para avaliar a capacidade de suporte do subleito em pavimentos.' },
  { icon: Microscope, title: 'Cisalhamento Direto', desc: 'Determinação da resistência ao cisalhamento do solo, parâmetro essencial para análise de estabilidade.' },
  { icon: TestTube, title: 'Triaxial', desc: 'Ensaio de resistência do solo sob diferentes condições de drenagem e carregamento.' },
  { icon: FlaskConical, title: 'Granulometria Completa', desc: 'Análise da distribuição das partículas do solo por tamanho, fundamental para classificação.' },
  { icon: Beaker, title: 'Compactação de Solos', desc: 'Determinação da umidade e densidade máxima do solo para controle de compactação em obras.' },
  { icon: FlaskConical, title: 'Módulo de Resiliência', desc: 'Avaliação da rigidez do solo sob carregamentos cíclicos, essencial para projetos de pavimentos.' },
  { icon: Beaker, title: 'Limites de Atterberg', desc: 'Determinação dos limites de consistência do solo (liquidez, plasticidade e contração).' },
  { icon: TestTube, title: 'Adensamento', desc: 'Ensaio para avaliar a velocidade de compressão do solo ao longo do tempo sob carregamento.' },
]

const servicesInfra = [
  { icon: Building2, title: 'Infraestrutura Rodoviária', desc: 'Projetos básicos e executivos para rodovias com qualidade e desempenho.' },
  { icon: TrainFront, title: 'Infraestrutura Ferroviária', desc: 'Projetos ferroviários com técnicas modernas de engenharia.' },
  { icon: Plane, title: 'Infraestrutura Aeroportuária', desc: 'Projetos aeroportuários atendendo aos mais altos padrões.' },
  { icon: Wrench, title: 'Engenharia Consultiva', desc: 'Assistência técnica, vistorias e laudos com avaliação criteriosa.' },
]

export default function Servicos() {
  return (
    <PageTransition>
      <section className="page-hero">
        <div className="container">
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="page-hero__tag">O que Fazemos</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="page-hero__title">Nossos <span className="text-accent">Serviços</span></motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="page-hero__subtitle">Soluções completas em investigação geotécnica, laboratório e infraestrutura.</motion.p>
        </div>
      </section>

      <section className="section section--dark">
        <div className="container">
          <motion.h2 {...fadeInUp} className="section__title">Serviços de <span className="text-accent">Campo</span></motion.h2>
          <motion.p {...fadeInUp} className="section__subtitle section__subtitle--mb">Abordagem focada na exatidão dos dados e na excelência técnica, utilizando recursos modernos e soluções tecnológicas avançadas.</motion.p>
          <div className="services-full-grid">
            {servicesCampo.map((s, i) => (
              <motion.div key={i} className="service-detail-card" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.05 }}>
                <div className="service-detail-card__icon"><s.icon size={28} strokeWidth={1.5} /></div>
                <h3 className="service-detail-card__title">{s.title}</h3>
                <p className="service-detail-card__desc">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <motion.h2 {...fadeInUp} className="section__title">Ensaios <span className="text-accent">Laboratoriais</span></motion.h2>
          <motion.p {...fadeInUp} className="section__subtitle section__subtitle--mb">Ensaios de caracterização geotécnica com rigor técnico e resultados confiáveis.</motion.p>
          <div className="services-full-grid">
            {servicesLab.map((s, i) => (
              <motion.div key={i} className="service-detail-card service-detail-card--alt" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.05 }}>
                <div className="service-detail-card__icon"><s.icon size={28} strokeWidth={1.5} /></div>
                <h3 className="service-detail-card__title">{s.title}</h3>
                <p className="service-detail-card__desc">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--dark">
        <div className="container">
          <motion.h2 {...fadeInUp} className="section__title"><span className="text-accent">Infraestrutura</span> & Consultoria</motion.h2>
          <motion.p {...fadeInUp} className="section__subtitle section__subtitle--mb">Atuamos com foco em projetos de infraestrutura, aplicando técnicas modernas e inovadoras.</motion.p>
          <div className="infra-grid">
            {servicesInfra.map((s, i) => (
              <motion.div key={i} className="infra-card" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }} whileHover={{ y: -6, borderColor: 'rgba(157,20,5,0.5)' }}>
                <div className="infra-card__icon"><s.icon size={36} /></div>
                <h3 className="infra-card__title">{s.title}</h3>
                <p className="infra-card__desc">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--alt cta-section">
        <div className="container cta-container">
          <motion.div {...fadeInUp}>
            <h2 className="section__title">Precisa de um serviço específico?</h2>
            <p className="section__subtitle">Entre em contato e solicite seu orçamento.</p>
            <Link to="/contato" className="btn btn--primary cta-btn">Solicitar Orçamento <ArrowRight size={18} /></Link>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  )
}
