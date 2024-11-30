import { Container } from '@/components/Container'
import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-kaki-100">
      <Container>
        <div className="flex flex-col items-center border-t border-stone-200/10 py-10 sm:flex-row-reverse sm:justify-between">
          {/* Icône Instagram pleine */}
          <div className="flex gap-x-6">
            <Link
              href="https://www.instagram.com"
              className="group"
              aria-label="BC Régie sur Instagram"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 fill-white"
                viewBox="0 0 512 512"
                aria-hidden="true"
              >
                <path d="M349.33 69.33H162.67C100 69.33 53.33 116 53.33 178.67v186.67c0 62.67 46.67 109.33 109.34 109.33h186.66c62.67 0 109.34-46.67 109.34-109.33V178.67c0-62.67-46.67-109.34-109.34-109.34zM256 346.67c-50.13 0-90.67-40.54-90.67-90.67S205.87 165.33 256 165.33s90.67 40.54 90.67 90.67-40.54 90.67-90.67 90.67zm96-187.34a22.63 22.63 0 1 1 22.63-22.63 22.63 22.63 0 0 1-22.63 22.63zM256 202.67A53.33 53.33 0 1 0 309.33 256 53.34 53.34 0 0 0 256 202.67z" />
              </svg>
            </Link>
          </div>
          <p className="mt-6 text-sm text-white sm:mt-0">
            &copy; 2024 BC Régie. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  )
}
