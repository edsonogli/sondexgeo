import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Drill, FlaskConical, Mountain, Plane, TrainFront, FileText, Map, HardHat } from 'lucide-react'

const services = [
  { icon: Drill, title: 'Sondagem SPT', desc: 'Análise de resistência do solo com golpes padronizados para fundações seguras.' },
  { icon: Drill, title: 'Sondagem Rotativa', desc: 'Investigação em solos rochosos com coleta de amostras em profundidade.' },
  { icon: FlaskConical, title: 'Ensaios Laboratoriais', desc: 'CBR, Triaxial, Granulometria, Cisalhamento e mais ensaios certificados.' },
  { icon: Mountain, title: 'Planialtimetria', desc: 'Levantamento topográfico preciso com informações planas e altimétricas.' },
  { icon: Map, title: 'Topografia com Drones', desc: 'Mapeamento aéreo de alta precisão com tecnologia RTK.' },
  { icon: HardHat, title: 'Perfuração de Estacas', desc: 'Execução de estacas com controle técnico e precisão.' },
  { icon: Plane, title: 'Infraestrutura', desc: 'Projetos rodoviários, ferroviários e aeroportuários.' },
  { icon: FileText, title: 'Laudo Técnico', desc: 'Pareceres e laudos com rigor técnico para embasar decisões.' },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
}

export default function ServicePreview() {
  return (
    <section className="section section--alt">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section__title"
        >
          Nossos <span className="text-accent">Serviços</span>
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="services-grid"
        >
          {services.map((s, i) => (
            <motion.div key={i} variants={itemVariants} className="service-card">
              <div className="service-card__icon"><s.icon size={28} strokeWidth={1.5} /></div>
              <div>
                <h3 className="service-card__title">{s.title}</h3>
                <p className="service-card__desc">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="services-cta"
        >
          <Link to="/servicos" className="btn btn--outline">
            Ver todos os serviços <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
