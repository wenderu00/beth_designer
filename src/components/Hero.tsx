import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export default function Hero() {
  return (
    <section
      data-testid="hero"
      className="min-h-screen flex flex-col items-center justify-center text-center px-6"
    >
      <p className="text-sm uppercase tracking-widest text-muted mb-4">
        Design de Interiores
      </p>
      <h1 className="text-5xl md:text-7xl font-light text-text mb-6 leading-tight">
        Beth<br />
        <span className="text-brand">Designer</span>
      </h1>
      <p className="text-muted text-lg max-w-md mb-10">
        Transformando espaços em experiências únicas com identidade e propósito.
      </p>
      <div className="flex gap-4">
        <a
          data-testid="hero-cta-portfolio"
          href="#portfolio"
          className={cn(buttonVariants({ size: 'lg' }))}
        >
          Ver portfólio
        </a>
        <a
          data-testid="hero-cta-contato"
          href="#contato"
          className={cn(buttonVariants({ variant: 'outline', size: 'lg' }))}
        >
          Fale comigo
        </a>
      </div>
    </section>
  )
}
