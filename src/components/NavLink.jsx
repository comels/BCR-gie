import Link from 'next/link'

export function NavLink({ href, children }) {
  return (
    <Link
      href={href}
      className="hover:text-kaki-100 inline-block rounded-lg px-2 py-1 text-xs text-slate-700"
    >
      {children}
    </Link>
  )
}
