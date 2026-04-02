const servicos = [
  {
    titulo: 'Artes Digitais',
    descricao: 'Expresse sua emoção em arte.',
  },
  {
    titulo: 'Arte Impressa',
    descricao: 'Só em olhar sinta suas emoções.',
  },
  {
    titulo: 'Porta Retratos',
    descricao: 'Suas emoções como decoração.',
  },
]

export default function Servicos() {
  return (
    <section
      id="servicos"
      data-testid="servicos"
      className="py-24 px-6 bg-surface-alt"
    >
      <div className="max-w-4xl mx-auto">
        <p className="text-sm uppercase tracking-widest text-accent mb-3 text-center">Serviços</p>
        <h2 className="text-3xl font-light text-brand-deepest mb-14 text-center">O que ofereço</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {servicos.map((s) => (
            <div
              key={s.titulo}
              data-testid={`servico-card-${s.titulo.toLowerCase().replace(/\s+/g, '-')}`}
              className="p-8 bg-surface rounded-2xl border border-accent/20 shadow-sm hover:bg-brand-deepest hover:border-brand-deepest hover:shadow-xl hover:shadow-brand-deepest/40 transition-all duration-300 group"
            >
              <div className="w-8 h-1 bg-[#518bf2] rounded mb-6" />
              <h3 className="text-lg font-medium text-brand-deepest mb-3 group-hover:text-[#518bf2] transition-colors duration-300">{s.titulo}</h3>
              <p className="text-brand-dark text-sm leading-relaxed group-hover:text-[#518bf2] transition-colors duration-300">{s.descricao}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
