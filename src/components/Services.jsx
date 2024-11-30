import { Container } from '@/components/Container'
import Prod from './Prod'

// Tableau des services avec leurs noms et descriptions
const services = [
  {
    name: 'Logistique',
    content: [
      'Supervision de l’ensemble des aspects logistiques d’un événement.',
      'Coordination des prestataires et suivi des contrats.',
    ],
  },
  {
    name: 'Transport',
    content: [
      'Gestion des solutions de transport pour le personnel, les invités et les équipements.',
      'Organisation des navettes, véhicules et camions.',
    ],
  },
  {
    name: 'Stocks',
    content: [
      'Suivi des stocks de matériel et fournitures.',
      'Planification et gestion des ressources humaines et matérielles.',
    ],
  },
  {
    name: 'Installation',
    content: [
      'Coordination de l’installation de mobilier et infrastructures temporaires.',
      'Supervision des équipes d’installation et contrôle de la conformité.',
    ],
  },
  {
    name: 'Restauration',
    content: [
      'Organisation des buffets, bars et services traiteurs.',
      'Supervision des livraisons et gestion des stocks alimentaires.',
    ],
  },
  {
    name: 'Déchets et Sécurité',
    content: [
      'Organisation de la collecte des déchets et supervision du nettoyage.',
      'Gestion des accès, sécurité logistique et protocoles d’évacuation.',
    ],
  },
]

export function Services() {
  return (
    <section id="services" className="px-10 py-10 lg:py-28">
      <Container>
        {/* Titre principal */}
        <div className="max-w-3xl md:mx-auto md:text-center">
          <h2 className="font-display text-5xl font-medium tracking-tight text-slate-900 sm:text-7xl">
            Nos services
          </h2>
        </div>

        {/* Liste des services */}
        <div className="mx-auto my-10 max-w-7xl lg:mt-20">
          <dl className="mx-auto grid max-w-3xl grid-cols-1 gap-x-10 gap-y-16 text-base/7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {services.map((service) => (
              <div key={service.name} className="max-w-xs">
                {/* Nom du service */}
                <dt className="text-lg font-semibold text-gray-900">
                  {service.name}
                </dt>
                {/* Descriptions du service */}
                {service.content.map((point, index) => (
                  <dd key={index} className="mt-1 text-gray-600">
                    • {point}
                  </dd>
                ))}
              </div>
            ))}
          </dl>
        </div>
        <Prod />
      </Container>
    </section>
  )
}
