export default function Sobre() {
  return (
    <section
      id="sobre"
      data-testid="sobre"
      className="py-24 px-6 bg-surface"
    >
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="bg-brand/10 border border-accent/20 aspect-square rounded-2xl" />
        <div>
          <p className="text-sm uppercase tracking-widest text-accent mb-3">Sobre</p>
          <h2 className="text-3xl font-light text-brand-deepest mb-6">
            Criando ambientes que contam histórias
          </h2>
          <p className="text-brand/70 leading-relaxed mb-4">
            Lorem ipsum sobre a Beth — trajetória, formação e filosofia de trabalho.
          </p>
          <p className="text-brand/70 leading-relaxed">
            Especializada em projetos residenciais e comerciais com foco em funcionalidade e estética.
          </p>
        </div>
      </div>
    </section>
  )
}
