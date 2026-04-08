import PageTransition from '../components/PageTransition'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { 
  Drill, FlaskConical, Mountain, Map, HardHat, FileText, 
  Droplets, ArrowRight, Beaker, TestTube, Microscope,
  TrainFront, Plane, Building2, Wrench, Search
} from 'lucide-react'

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.6 },
}

const servicesCampo = [
  { icon: Drill, title: 'Sondagem SPT', desc: 'Análise de resistência do solo em profundidade através de golpes padronizados. Essencial para projetar fundações seguras para construções.' },
  { icon: Drill, title: 'Sondagem Rotativa', desc: 'Investigação em terrenos rochosos com coleta de amostras em profundidade. Permite identificar resistência, fraturas e composição da rocha.' },
  { icon: Drill, title: 'Sondagem Mista', desc: 'Combinação de técnicas SPT e Rotativa para investigação completa do subsolo em diferentes tipos de terreno.' },
  { icon: Droplets, title: 'Sondagem por Eletrorresistividade', desc: 'Método geofísico não invasivo para mapeamento de estruturas do subsolo através de medições de resistividade elétrica.' },
  { icon: HardHat, title: 'Poço Artesiano Leve', desc: 'Perfuração de poços artesianos leves para captação de água subterrânea com qualidade e segurança.' },
  { icon: Droplets, title: 'Ensaio Piezométrico', desc: 'Medição do nível da água subterrânea e pressão neutra do solo, fundamental para projetos de fundações e contenções.' },
  { icon: Droplets, title: 'Ensaio de Percolação', desc: 'Medição da capacidade de absorção de água pelo solo. Essencial para projetos de drenagem, fossas e infiltração pluvial.' },
  { icon: Droplets, title: 'Ensaio de Permeabilidade de Solo', desc: 'Avaliação da velocidade de fluxo de água através do solo, importante para obras de contenção e drenagem.' },
  { icon: HardHat, title: 'Perfuração de Estacas', desc: 'Execução de estacas com controle técnico e precisão para fundações profundas.' },
  { icon: Mountain, title: 'Planialtimetria', desc: 'Levantamento topográfico preciso com informações planas (forma e dimensões) e altimétricas (altitudes e relevo) do terreno.' },
  { icon: Map, title: 'Topografia Aérea', desc: 'Mapeamento aéreo de alta precisão com drones e tecnologia RTK para levantamentos topográficos completos.' },
  { icon: Search, title: 'Coleta de Amostras a Trado', desc: 'Coleta de amostras deformadas do solo em diferentes profundidades para análise laboratorial.' },
  { icon: FileText, title: 'Laudo Técnico', desc: 'Emissão de laudos e pareceres técnicos com rigor para embasar decisões em projetos de engenharia.' },
]

const servicesLab = [
  { icon: Beaker, title: 'CBR', desc: 'California Bearing Ratio — ensaio para avaliar a capacidade de suporte do subleito em pavimentos.' },
  { icon: Microscope, title: 'Cisalhamento Direto', desc: 'Determinação da resistência ao cisalhamento do solo, parâmetro essencial para análise de estabilidade.' },
  { icon: TestTube, title: 'Triaxial', desc: 'Ensaio de resistência do solo sob diferentes condições de drenagem e carregamento.' },
  { icon: FlaskConical, title: 'Granulometria Completa', desc: 'Análise da distribuição das partículas do solo por tamanho, fundamental para classificação e comportamento.' },
  { icon: Beaker, title: 'Compactação de Solos', desc: 'Determinação da umidade e densidade máxima do solo para controle de compactação em obras.' },
  { icon: FlaskConical, title: 'Módulo de Resiliência', desc: 'Avaliação da rigidez do solo sob carregamentos cíclicos, essencial para projetos de pavimentos.' },
  { icon: Beaker, title: 'Limites de Atterberg', desc: 'Determinação dos limites de consistência do solo (liquidez, plasticidade e contração).' },
  { icon: TestTube, title: 'Adensamento', desc: 'Ensaio para avaliar a velocidade de compressão do solo ao longo do tempo sob carregamento.' },
]

const servicesInfra = [
  { icon: Building2, title: 'Infraestrutura Rodoviária', desc: 'Projetos básicos e executivos para rodovias com qualidade e desempenho.' },
  { icon: TrainFront, title: 'Infraestrutura Ferroviária', desc: 'Projetos ferroviários com técnicas modernas de engenharia.' },
  { icon: Plane, title: 'Infraestrutura Aeroportuária', desc: 'Projetos aeroportuários atendendo aos mais altos padrões.' },
  { icon: Wrench, title: 'Engenharia Consultiva', desc: 'Assistência técnica, vistorias e laudos com avaliação econômica criteriosa.' },
]

export default function Servicos() {
  return (
    <PageTransition>
      {/* Hero */}
      <section className="page-hero">
        <div className="container">
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="page-hero__tag">
            O que Fazemos
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="page-hero__title">
            Nossos <span className="text-accent">Serviços</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="page-hero__subtitle">
            Soluções completas em investigação geotécnica, laboratório e infraestrutura.
          </motion.p>
        </div>
      </section>

      {/* Campo */}
      <section className="section section--dark">
        <div className="container">
          <motion.h2 {...fadeInUp} className="section__title">
            Serviços de <span className="text-accent">Campo</span>
          </motion.h2>
          <motion.p {...fadeInUp} className="section__subtitle" style={{ marginBottom: 'var(--space-lg)' }}>
            Adotamos uma abordagem focada na exatidão dos dados e na excelência técnica, utilizando recursos modernos e soluções tecnológicas avançadas.
          </motion.p>
          <div className="services-full-grid">
            {servicesCampo.map((s, i) => (
              <motion.div
                key={i}
                className="service-detail-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <div className="service-detail-card__icon"><s.icon size={28} strokeWidth={1.5} /></div>
                <h3 className="service-detail-card__title">{s.title}</h3>
                <p className="service-detail-card__desc">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Laboratório */}
      <section className="section section--alt">
        <div className="container">
          <motion.h2 {...fadeInUp} className="section__title">
            Ensaios <span className="text-accent">Laboratoriais</span>
          </motion.h2>
          <motion.p {...fadeInUp} className="section__subtitle" style={{ marginBottom: 'var(--space-lg)' }}>
            Ensaios de caracterização geotécnica com rigor técnico e resultados confiáveis.
          </motion.p>
          <div className="services-full-grid">
            {servicesLab.map((s, i) => (
              <motion.div
                key={i}
                className="service-detail-card service-detail-card--alt"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <div className="service-detail-card__icon"><s.icon size={28} strokeWidth={1.5} /></div>
                <h3 className="service-detail-card__title">{s.title}</h3>
                <p className="service-detail-card__desc">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Infraestrutura */}
      <section className="section section--dark">
        <div className="container">
          <motion.h2 {...fadeInUp} className="section__title">
            <span className="text-accent">Infraestrutura</span> & Consultoria
          </motion.h2>
          <motion.p {...fadeInUp} className="section__subtitle" style={{ marginBottom: 'var(--space-lg)' }}>
            Atuamos com foco em projetos de infraestrutura, aplicando técnicas modernas e inovadoras.
          </motion.p>
          <div className="infra-grid">
            {servicesInfra.map((s, i) => (
              <motion.div
                key={i}
                className="infra-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                whileHover={{ y: -6, borderColor: 'rgba(157,20,5,0.5)' }}
              >
                <div className="infra-card__icon"><s.icon size={36} /></div>
                <h3 className="infra-card__title">{s.title}</h3>
                <p className="infra-card__desc">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section--alt cta-section">
        <div className="container" style={{ textAlign: 'center' }}>
          <motion.div {...fadeInUp}>
            <h2 className="section__title">Precisa de um serviço específico?</h2>
            <p className="section__subtitle">Entre em contato e solicite seu orçamento.</p>
            <Link to="/contato" className="btn btn--primary" style={{ marginTop: '1.5rem' }}>
              Solicitar Orçamento <ArrowRight size={18} />
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
        }
        .page-hero__subtitle {
          color: var(--color-gray-muted);
          font-size: 1.1rem;
          max-width: 550px;
          margin: 0 auto;
          line-height: 1.7;
        }
        .services-full-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: var(--space-sm);
        }
        .service-detail-card {
          display: flex;
          gap: 1rem;
          padding: 1.25rem;
          background: var(--color-bg-secondary);
          border-radius: var(--radius-md);
          border: 1px solid rgba(255,255,255,0.04);
          transition: all 0.3s;
        }
        .service-detail-card--alt {
          background: var(--color-bg-dark);
        }
        .service-detail-card:hover {
          border-color: rgba(157,20,5,0.3);
        }
        .service-detail-card__icon {
          color: var(--color-accent);
          flex-shrink: 0;
          padding-top: 2px;
        }
        .service-detail-card__title {
          font-size: 1rem;
          font-weight: 600;
          margin-bottom: 0.35rem;
        }
        .service-detail-card__desc {
          color: var(--color-gray-muted);
          font-size: 0.85rem;
          line-height: 1.6;
        }
        .infra-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: var(--space-md);
        }
        .infra-card {
          padding: var(--space-lg);
          background: var(--color-bg-secondary);
          border-radius: var(--radius-md);
          border: 1px solid rgba(255,255,255,0.04);
          text-align: center;
          transition: all 0.3s;
          cursor: default;
        }
        .infra-card__icon { color: var(--color-accent); margin-bottom: var(--space-sm); display: flex; justify-content: center; }
        .infra-card__title { font-size: 1.15rem; font-weight: 600; margin-bottom: 0.5rem; }
        .infra-card__desc { color: var(--color-gray-muted); font-size: 0.9rem; line-height: 1.6; }
      `}</style>
    </PageTransition>
  )
}
