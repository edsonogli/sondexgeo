import { useState, useEffect } from 'react'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const accepted = localStorage.getItem('sondex-cookies-accepted')
    if (!accepted) setVisible(true)
  }, [])

  const accept = () => {
    localStorage.setItem('sondex-cookies-accepted', 'true')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="cookie-banner">
      <div className="cookie-banner__content">
        <p className="cookie-banner__text">
          Este site utiliza cookies para melhorar sua experiência. Ao continuar navegando, você concorda com nossa política de privacidade.
        </p>
        <div className="cookie-banner__actions">
          <button onClick={accept} className="cookie-banner__btn cookie-banner__btn--accept">
            Aceitar
          </button>
          <button onClick={accept} className="cookie-banner__btn cookie-banner__btn--close">
            ✕
          </button>
        </div>
      </div>
    </div>
  )
}
