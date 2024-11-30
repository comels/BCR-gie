import { Container } from './Container'

export function About() {
  return (
    <section
      id="about"
      className="flex items-center bg-kaki-100 px-10 py-28 lg:h-screen"
    >
      <Container>
        {/* Section principale avec le titre et la description */}
        <div className="max-w-3xl md:mx-auto md:text-center">
          {/* Titre de la section */}
          <h2 className="font-display text-5xl font-medium tracking-tight text-white sm:text-7xl">
            Qui sommes-nous ?
          </h2>

          {/* Description de l'équipe */}
          <p className="mt-6 text-lg tracking-tight text-white">
            BC Régie est une équipe passionnée et spécialisée dans la logistique
            et la gestion d&apos;événements. Fondée par Côme et Basile, forts
            d’une solide expérience dans la restauration et l&apos;événementiel,
            notre entreprise regroupe une équipe dynamique dédiée à la
            coordination et à l&apos;organisation logistique. Basés à Paris,
            nous offrons des services complets pour garantir le bon déroulement
            de vos événements, en prenant en charge chaque détail logistique
            avec professionnalisme et efficacité. Vous pouvez compter sur notre
            expertise et notre approche conviviale pour mener à bien vos projets
            !
          </p>
        </div>
      </Container>
    </section>
  )
}
