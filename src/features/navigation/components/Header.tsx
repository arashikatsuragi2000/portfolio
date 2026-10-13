import { Container } from '../../../shared/components/Container'
import { profile } from '../../../shared/data/profile'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Works', href: '#works' },
  { label: 'Experience', href: '#experience' },
]

export function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-white/[0.07] bg-zinc-950/80 backdrop-blur-xl">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <a
            href="#top"
            className="text-sm font-semibold tracking-tight text-white"
          >
            {profile.name}
          </a>
          <nav
            aria-label="メインナビゲーション"
            className="flex items-center gap-5 text-xs text-zinc-400 sm:gap-7 sm:text-sm"
          >
            {links.map((link) => (
              <a
                className="transition hover:text-white"
                key={link.href}
                href={link.href}
              >
                {link.label}
              </a>
            ))}
            <a
              className="hidden rounded-full border border-white/15 px-4 py-2 text-white transition hover:border-cyan-300 hover:text-cyan-200 sm:block"
              href="#contact"
            >
              Contact
            </a>
          </nav>
        </div>
      </Container>
    </header>
  )
}
