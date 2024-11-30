import { Container } from '@/components/Container'

export function Hero() {
  return (
    <Container className="pb-16 pt-5 text-center lg:h-screen lg:pt-60">
      {/* Titre principal */}
      <h1 className="mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-slate-900 sm:text-7xl">
        Une régie qui{' '}
        <span className="relative whitespace-nowrap text-kaki-100">
          <span className="relative">simplifie</span>
        </span>{' '}
        vos évènements.
      </h1>

      {/* Description (optionnelle) */}
      {/* 
      <p className="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-slate-900">
        Du texte ou pas.
      </p> 
      */}
    </Container>
  )
}
