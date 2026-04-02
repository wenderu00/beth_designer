import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export default function Contato() {
  return (
    <section
      id="contato"
      data-testid="contato"
      className="py-24 px-6 bg-brand-deepest"
    >
      <div className="max-w-xl mx-auto text-center">
        <p className="text-sm uppercase tracking-widest text-[#518bf2] mb-3">Contato</p>
        <h2 className="text-3xl font-light text-white mb-6">Vamos conversar?</h2>
        <p className="text-[#518bf2] mb-10">
          Transforme suas memórias em arte. Entre em contato e vamos criar juntos algo único para você.
        </p>
        <a
          data-testid="contato-whatsapp"
          href="https://wa.me/5500000000000"
          target="_blank"
          rel="noopener noreferrer"
          className={cn(buttonVariants({ size: 'lg' }), 'bg-[#518bf2] hover:bg-[#0728d3] text-white border-0 transition-colors duration-300')}
        >
          Chamar no WhatsApp
        </a>
      </div>
    </section>
  )
}
