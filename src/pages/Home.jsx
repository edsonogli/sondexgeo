import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Drill, Beaker, Building2, BarChart3 } from 'lucide-react'

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

const stagger = {
  animate: {
    transition: { staggerChildren: 0.15 },
  },
}

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, var(--color-bg-dark) 0%, var(--color-bg-secondary) 50%, var(--color-bg-dark) 100%)',
      }}>
        {/* Background effect */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(circle at 20% 80%, rgba(157, 20, 5, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(68, 6, 1, 0.1) 0%, transparent 50%)',
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              color: 'var(--color-accent)',
              fontSize: '0.9rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              marginBottom: 'var(--space-sm)',
              fontWeight: 600,
            }}
          >
            Engenharia de Fundações & Geotecnia
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            style={{
              fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
              fontWeight: 800,
              lineHeight: 1.1,
              marginBottom: 'var(--space-md)',
              letterSpacing: '-0.02em',
            }}
          >
            Geotecnia com
            <br />
            <span style={{ color: 'var(--color-accent)' }}>confiança</span> e competência
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            style={{
              color: 'var(--color-gray-muted)',
              fontSize: '1.15rem',
              maxWidth: '600px',
              margin: '0 auto var(--space-lg)',
              lineHeight: 1.7,
            }}
          >
            Sondagens, ensaios laboratoriais e projetos de infraestrutura com precisão e qualidade.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}
          >
            <Link to="/servicos" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.875rem 2rem',
              background: 'var(--color-accent)',
              color: 'var(--color-white)',
              borderRadius: 'var(--radius-sm)',
              fontWeight: 600,
              fontSize: '0.95rem',
              transition: 'var(--transition-fast)',
              letterSpacing: '0.03em',
            }}>
              Nossos Serviços <ArrowRight size={18} />
            </Link>
            <Link to="/contato" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.875rem 2rem',
              border: '1px solid var(--color-gray-muted)',
              color: 'var(--color-white)',
              borderRadius: 'var(--radius-sm)',
              fontWeight: 600,
              fontSize: '0.95rem',
              transition: 'var(--transition-fast)',
              letterSpacing: '0.03em',
            }}>
              Fale Conosco
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Diferenciais */}
      <section style={{ padding: 'var(--space-2xl) 0', background: 'var(--color-bg-secondary)' }}>
        <div className="container">
          <motion.div
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: '-100px' }}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: 'var(--space-md)',
            }}
          >
            {[
              { icon: Drill, title: 'Sondagens', desc: 'SPT, Rotativa e Mista com equipamentos modernos' },
              { icon: Beaker, title: 'Laboratório', desc: 'Ensaios geotécnicos completos e certificados' },
              { icon: Building2, title: 'Infraestrutura', desc: 'Projetos rodoviários, ferroviários e aeroportuários' },
              { icon: BarChart3, title: 'Consultoria', desc: 'Laudos, vistorias e assistência técnica especializada' },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                style={{
                  padding: 'var(--space-lg)',
                  background: 'var(--color-bg-dark)',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid rgba(255,255,255,0.05)',
                  transition: 'var(--transition-base)',
                }}
                whileHover={{
                  borderColor: 'rgba(157, 20, 5, 0.5)',
                  y: -4,
                }}
              >
                <item.icon size={36} style={{ color: 'var(--color-accent)', marginBottom: 'var(--space-sm)' }} />
                <h3 style={{ fontSize: '1.15rem', fontWeight: 600, marginBottom: '0.5rem' }}>
                  {item.title}
                </h3>
                <p style={{ color: 'var(--color-gray-muted)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        padding: 'var(--space-2xl) 0',
        textAlign: 'center',
        background: 'var(--color-bg-dark)',
      }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 style={{
              fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
              fontWeight: 700,
              marginBottom: 'var(--space-sm)',
            }}>
              Precisa de um <span style={{ color: 'var(--color-accent)' }}>laudo técnico</span>?
            </h2>
            <p style={{
              color: 'var(--color-gray-muted)',
              fontSize: '1.05rem',
              marginBottom: 'var(--space-lg)',
              maxWidth: '500px',
              margin: '0 auto var(--space-lg)',
            }}>
              Entre em contato com nossa equipe e solicite um orçamento.
            </p>
            <Link to="/contato" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '1rem 2.5rem',
              background: 'var(--color-accent)',
              color: 'var(--color-white)',
              borderRadius: 'var(--radius-sm)',
              fontWeight: 600,
              fontSize: '1rem',
              transition: 'var(--transition-fast)',
            }}>
              Solicitar Orçamento <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}
