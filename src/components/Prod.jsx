import Image from 'next/image'

import logoAigle from '@/images/logos/aigle.png'
import logocourreges from '@/images/logos/courreges.png'
import logoKitsune from '@/images/logos/kitsune.png'
import logoLesEchos from '@/images/logos/lesechos.png'
import logoMonoprix from '@/images/logos/monoprix.png'
import logoShu from '@/images/logos/shu.png'

export default function Prod() {
  const logos = [
    { alt: 'Aigle', src: logoAigle },
    { alt: 'Courrèges', src: logocourreges },
    { alt: 'Kitsuné', src: logoKitsune },
    { alt: 'Les Échos', src: logoLesEchos },
    { alt: 'Monoprix', src: logoMonoprix },
    { alt: 'Shu Uemura', src: logoShu },
  ]

  return (
    <div className="bg-white py-16">
      <div className="max-w-9xl mx-auto">
        <p className="mb-10 px-6 text-center font-display text-5xl font-medium tracking-tight text-slate-900 sm:px-10 sm:text-7xl">
          Nos clients
        </p>

        <div className="grid grid-cols-2 gap-0.5 overflow-hidden sm:rounded-2xl xl:grid-cols-6">
          {logos.map((logo, index) => (
            <div key={index} className="p-6 sm:p-10">
              <Image
                alt={logo.alt}
                src={logo.src}
                width={158}
                height={48}
                className="max-h-7 w-full object-contain"
                priority
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
