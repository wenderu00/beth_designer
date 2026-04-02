import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

import img1 from '@/assets/images/portfolio/99771bea-c5ac-4cb9-81c1-63737ebfc23a.jpeg'
import img2 from '@/assets/images/portfolio/54aa7c67-a901-442e-989e-a94ed6340c3a.jpeg'
import img3 from '@/assets/images/portfolio/08a7cadc-2623-4cab-8831-bf3e78fa10ec.jpeg'
import img4 from '@/assets/images/portfolio/9f4f792b-a134-4734-bc42-aae4d1858741.jpeg'
import img5 from '@/assets/images/portfolio/13b6c8e3-22a7-4e81-b339-77c9c7b6adaf.jpeg'
import img6 from '@/assets/images/portfolio/fa287b65-b9e3-457f-8b11-87afc7f44291.jpeg'

const projetos = [
  { id: 1, imagem: img1, titulo: 'Saudades', categoria: 'Homenagem' },
  { id: 2, imagem: img2, titulo: 'Caminho da Fé', categoria: 'Homenagem' },
  { id: 3, imagem: img3, titulo: 'Memória Eterna', categoria: 'Homenagem' },
  { id: 4, imagem: img4, titulo: 'Justiça por Orelha', categoria: 'Pet' },
  { id: 5, imagem: img5, titulo: 'Hebreus 10:23', categoria: 'Homenagem' },
  { id: 6, imagem: img6, titulo: 'Naum 1:7', categoria: 'Homenagem' },
]

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      data-testid="portfolio"
      className="py-24 px-6 bg-brand-deepest"
    >
      <div className="max-w-5xl mx-auto">
        <p className="text-sm uppercase tracking-widest text-accent mb-3 text-center">Portfólio</p>
        <h2 className="text-3xl font-light text-white mb-14 text-center">Projetos realizados</h2>

        <Carousel opts={{ align: 'start', loop: true }} className="px-12">
          <CarouselContent>
            {projetos.map((p) => (
              <CarouselItem key={p.id} className="basis-full sm:basis-1/2 md:basis-1/3">
                <div
                  data-testid={`portfolio-item-${p.id}`}
                  className="group relative aspect-[2/3] rounded-xl overflow-hidden cursor-pointer"
                >
                  <img
                    src={p.imagem}
                    alt={p.titulo}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-brand-deepest/0 group-hover:bg-brand-deepest/60 transition-colors duration-300 flex items-end p-4">
                    <div className="translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                      <p className="text-white font-medium text-sm">{p.titulo}</p>
                      <p className="text-white/70 text-xs">{p.categoria}</p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="border-accent/40 text-accent hover:bg-accent hover:text-white hover:border-accent" />
          <CarouselNext className="border-accent/40 text-accent hover:bg-accent hover:text-white hover:border-accent" />
        </Carousel>
      </div>
    </section>
  )
}
