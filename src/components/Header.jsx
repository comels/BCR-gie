'use client'

import {
  Popover,
  PopoverBackdrop,
  PopoverButton,
  PopoverPanel,
} from '@headlessui/react'
import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'

import { Container } from '@/components/Container'
import { NavLink } from '@/components/NavLink'

// Composant pour les liens dans le menu mobile
function MobileNavLink({ href, children }) {
  return (
    <PopoverButton
      as={Link}
      href={href}
      className="block w-full p-2 text-sm font-light"
    >
      {children}
    </PopoverButton>
  )
}

// Icône pour ouvrir/fermer le menu mobile
function MobileNavIcon({ open }) {
  return (
    <svg
      aria-hidden="true"
      className="h-3.5 w-3.5 overflow-visible stroke-slate-700"
      fill="none"
      strokeWidth={2}
      strokeLinecap="round"
    >
      <path
        d="M0 1H14M0 7H14M0 13H14"
        className={clsx(
          'origin-center transition',
          open && 'scale-90 opacity-0',
        )}
      />
      <path
        d="M2 2L12 12M12 2L2 12"
        className={clsx(
          'origin-center transition',
          !open && 'scale-90 opacity-0',
        )}
      />
    </svg>
  )
}

// Navigation mobile avec menu Popover
function MobileNavigation() {
  const links = [
    { href: '#about', label: 'À PROPOS' },
    { href: '#services', label: 'SERVICES' },
    { href: '#contact', label: 'CONTACT' },
  ]

  return (
    <Popover>
      {/* Bouton pour ouvrir/fermer le menu */}
      <PopoverButton
        className="relative z-10 flex h-8 w-8 items-center justify-center ui-not-focus-visible:outline-none"
        aria-label="Toggle Navigation"
      >
        {({ open }) => <MobileNavIcon open={open} />}
      </PopoverButton>
      {/* Fond de la navigation mobile */}
      <PopoverBackdrop
        transition
        className="fixed inset-0 bg-slate-300/50 duration-150 data-[closed]:opacity-0 data-[enter]:ease-out data-[leave]:ease-in"
      />
      {/* Menu mobile */}
      <PopoverPanel
        transition
        className="absolute inset-x-0 top-full mt-4 flex origin-top flex-col rounded-2xl bg-white p-4 text-lg tracking-tight text-slate-900 shadow-xl ring-1 ring-slate-900/5 data-[closed]:scale-95 data-[closed]:opacity-0 data-[enter]:duration-150 data-[leave]:duration-100 data-[enter]:ease-out data-[leave]:ease-in"
      >
        {links.map((link, index) => (
          <MobileNavLink key={index} href={link.href}>
            {link.label}
          </MobileNavLink>
        ))}
      </PopoverPanel>
    </Popover>
  )
}

// Composant principal Header
export function Header() {
  const links = [
    { href: '#about', label: 'À PROPOS' },
    { href: '#services', label: 'SERVICES' },
    { href: '#contact', label: 'CONTACT' },
  ]

  return (
    <header className="py-10">
      <Container>
        <nav className="relative z-50 flex justify-between">
          {/* Logo et navigation principale */}
          <div className="flex items-center md:gap-x-12">
            <div className="flex items-center gap-2">
              <Image
                src="/logo.png"
                alt="logo"
                width={20}
                height={20}
                className="h-4 w-auto"
              />
              <Link className="text-xl font-bold" href="#" aria-label="Home">
                BC Régie
              </Link>
            </div>
            <div className="hidden font-light md:flex md:gap-x-6">
              {links.map((link, index) => (
                <NavLink key={index} href={link.href}>
                  {link.label}
                </NavLink>
              ))}
            </div>
          </div>
          {/* Navigation mobile */}
          <div className="flex items-center gap-x-5 md:gap-x-8">
            <div className="-mr-1 md:hidden">
              <MobileNavigation />
            </div>
          </div>
        </nav>
      </Container>
    </header>
  )
}
