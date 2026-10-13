import { Container } from '../../../shared/components/Container'
import { profile } from '../../../shared/data/profile'

export function Footer() {
  return (
    <footer className="border-t border-white/[0.07] py-8">
      <Container>
        <div className="flex flex-col justify-between gap-4 text-xs text-zinc-600 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {profile.name}
          </p>
          <div className="flex gap-5">
            {profile.socials.map((social) => (
              <a
                className="transition hover:text-white"
                href={social.href}
                key={social.label}
                target="_blank"
                rel="noreferrer"
              >
                {social.label} ↗
              </a>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  )
}
