import { MessageSquare } from 'lucide-react'

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5561996105699"
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="WhatsApp"
    >
      <MessageSquare size={28} />
      <span className="whatsapp-float__tooltip">Fale conosco</span>
    </a>
  )
}
