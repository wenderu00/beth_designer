export default function Sobre() {
  return (
    <section
      id="sobre"
      data-testid="sobre"
      className="py-24 px-6 max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center"
    >
      <div className="bg-muted/10 aspect-square rounded-2xl" />
      <div>
        <p className="text-sm uppercase tracking-widest text-brand mb-3">Sobre</p>
        <h2 className="text-3xl font-light text-text mb-6">
          Criando ambientes que contam histórias
        </h2>
        <p className="text-muted leading-relaxed mb-4">
          Lorem ipsum sobre a Beth — trajetória, formação e filosofia de trabalho.
        </p>
        <p className="text-muted leading-relaxed">
          Especializada em projetos residenciais e comerciais com foco em funcionalidade e estética.
        </p>
      </div>
    </section>
  )
}
