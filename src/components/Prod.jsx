import Image from 'next/image'

export default function Prod() {
  const logos = [
    { src: '/logos/aigle.png', alt: 'Logo Aigle' },
    { src: '/logos/courreges.png', alt: 'Logo Courreges' },
    { src: '/logos/kitsune.png', alt: 'Logo Kitsune' },
    { src: '/logos/lesechos.png', alt: 'Logo Les Echos' },
    { src: '/logos/monoprix.png', alt: 'Logo Monoprix' },
    { src: '/logos/shu.png', alt: 'Logo Shu' },
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
