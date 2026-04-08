import PageTransition from '../components/PageTransition'

export default function Servicos() {
  return (
    <PageTransition>
      <section className="page-hero" style={{ paddingTop: 'calc(var(--header-height) + var(--space-2xl))' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h1 className="page-hero__title">Serviços</h1>
          <p className="page-hero__subtitle">Em construção...</p>
        </div>
      </section>
    </PageTransition>
  )
}
