import { Container } from '@/components/Container'

// Tableau des contacts
const contacts = [
  {
    name: 'Basile Le Sauter',
    email: 'b.lesauter@hotmail.fr',
    phone: '06 68 03 95 91',
  },
  {
    name: 'Côme Le Sauter',
    email: 'come.l.s@hotmail.fr',
    phone: '06 66 67 96 88',
  },
]

export function Contact() {
  return (
    <section id="contact" className="bg-kaki-100 px-10 py-28">
      <Container>
        {/* Titre et description */}
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="font-display text-5xl font-medium tracking-tight text-white sm:text-7xl">
              Contact
            </h2>
            <p className="mt-6 text-lg text-white">
              Veuillez nous contacter pour toute demande de collaboration ou
              autre.
            </p>
          </div>

          {/* Liste des contacts */}
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4">
            {contacts.map((contact, index) => (
              <div key={index}>
                <h3 className="border-l border-white pl-6 font-semibold text-white">
                  {contact.name}
                </h3>
                <address className="border-l border-gray-200 pl-6 pt-2 not-italic text-white">
                  <p>{contact.email}</p>
                  <p>{contact.phone}</p>
                </address>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
