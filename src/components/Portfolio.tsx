const projetos = [
  { id: 1, titulo: 'Apartamento Moderno', categoria: 'Residencial' },
  { id: 2, titulo: 'Escritório Criativo', categoria: 'Comercial' },
  { id: 3, titulo: 'Casa de Campo', categoria: 'Residencial' },
  { id: 4, titulo: 'Loja Conceito', categoria: 'Comercial' },
  { id: 5, titulo: 'Suíte Master', categoria: 'Residencial' },
  { id: 6, titulo: 'Restaurante', categoria: 'Comercial' },
]

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      data-testid="portfolio"
      className="py-24 px-6 max-w-5xl mx-auto"
    >
      <p className="text-sm uppercase tracking-widest text-brand mb-3 text-center">Portfólio</p>
      <h2 className="text-3xl font-light text-text mb-14 text-center">Projetos realizados</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {projetos.map((p) => (
          <div
            key={p.id}
            data-testid={`portfolio-item-${p.id}`}
            className="group relative bg-muted/10 aspect-square rounded-xl overflow-hidden cursor-pointer"
          >
            <div className="absolute inset-0 bg-text/0 group-hover:bg-text/40 transition-colors duration-300 flex items-end p-4">
              <div className="translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <p className="text-white font-medium text-sm">{p.titulo}</p>
                <p className="text-white/70 text-xs">{p.categoria}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
