export default function Prod() {
  const logos = [
    { src: 'logos/aigle.png', alt: 'Logo Aigle' },
    { src: 'logos/courreges.png', alt: 'Logo Courreges' },
    { src: 'logos/kitsune.png', alt: 'Logo Kitsune' },
    { src: 'logos/lesechos.png', alt: 'Logo Les Echos' },
    { src: 'logos/monoprix.png', alt: 'Logo Monoprix' },
    { src: 'logos/shu.png', alt: 'Logo Shu' },
  ]

  return (
    <div className="bg-white py-16">
      <div className="max-w-9xl mx-auto">
        <p className="mb-10 font-display text-5xl font-medium tracking-tight text-slate-900 sm:text-7xl md:mb-20 md:text-center">
          Nos clients
        </p>

        <div className="grid grid-cols-2 gap-12 overflow-hidden sm:rounded-2xl xl:grid-cols-6">
          {logos.map((logo, index) => (
            <div key={index}>
              <img
                alt={logo.alt}
                src={logo.src}
                className="max-h-7 w-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
