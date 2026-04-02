import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export default function Contato() {
  return (
    <section
      id="contato"
      data-testid="contato"
      className="py-24 px-6 bg-brand/5"
    >
      <div className="max-w-xl mx-auto text-center">
        <p className="text-sm uppercase tracking-widest text-brand mb-3">Contato</p>
        <h2 className="text-3xl font-light text-text mb-6">Vamos conversar?</h2>
        <p className="text-muted mb-10">
          Conte-me sobre o seu projeto e vamos criar juntos um espaço único para você.
        </p>
        <a
          data-testid="contato-whatsapp"
          href="https://wa.me/5500000000000"
          target="_blank"
          rel="noopener noreferrer"
          className={cn(buttonVariants({ size: 'lg' }))}
        >
          Chamar no WhatsApp
        </a>
      </div>
    </section>
  )
}
