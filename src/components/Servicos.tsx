const servicos = [
  {
    titulo: 'Projeto Residencial',
    descricao: 'Ambientes que refletem a personalidade e o estilo de vida de quem vive nele.',
  },
  {
    titulo: 'Projeto Comercial',
    descricao: 'Espaços funcionais e atrativos que comunicam a identidade da marca.',
  },
  {
    titulo: 'Consultoria de Interiores',
    descricao: 'Orientação profissional para otimizar e valorizar o seu espaço atual.',
  },
]

export default function Servicos() {
  return (
    <section
      id="servicos"
      data-testid="servicos"
      className="py-24 px-6 bg-brand/5"
    >
      <div className="max-w-4xl mx-auto">
        <p className="text-sm uppercase tracking-widest text-brand mb-3 text-center">Serviços</p>
        <h2 className="text-3xl font-light text-text mb-14 text-center">O que ofereço</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {servicos.map((s) => (
            <div
              key={s.titulo}
              data-testid={`servico-card-${s.titulo.toLowerCase().replace(/\s+/g, '-')}`}
              className="p-8 bg-surface rounded-2xl"
            >
              <h3 className="text-lg font-medium text-text mb-3">{s.titulo}</h3>
              <p className="text-muted text-sm leading-relaxed">{s.descricao}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
