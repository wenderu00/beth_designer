import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import logo from '@/assets/logo_bd.png'

export default function Hero() {
  return (
    <section
      data-testid="hero"
      className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-white"
    >
      <div className="flex flex-col items-center">
        <img
          src={logo}
          alt="Beth Designer"
          data-testid="hero-logo"
          className="w-full"
        />
        <h1
          className="text-5xl md:text-7xl text-brand-deepest mb-6 leading-tight whitespace-nowrap"
          style={{ fontFamily: "'Dancing Script Variable', cursive" }}
        >
          Beth <span className="text-brand-light">Designer</span>
        </h1>
      </div>
      <p className="text-brand/60 text-lg max-w-md mb-10">
      	Transformando em artes momentos que não devem ser esquecidos.
      </p>
      <div className="flex gap-4">
        <a
          data-testid="hero-cta-portfolio"
          href="#portfolio"
          className={cn(buttonVariants({ size: 'lg' }), 'bg-brand hover:bg-brand-light text-white border-0')}
        >
          Ver portfólio
        </a>
        <a
          data-testid="hero-cta-contato"
          href="#contato"
          className={cn(buttonVariants({ variant: 'outline', size: 'lg' }), 'border-brand text-brand hover:bg-brand hover:text-white')}
        >
          Fale comigo
        </a>
      </div>
    </section>
  )
}
