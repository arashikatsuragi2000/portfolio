import { Container } from '../../../shared/components/Container'
import { profile } from '../../../shared/data/profile'

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_75%_28%,rgba(34,211,238,0.14),transparent_31%),radial-gradient(ellipse_at_20%_60%,rgba(139,92,246,0.12),transparent_28%)]" />
      <Container>
        <div className="flex min-h-[calc(100svh-4rem)] max-w-4xl flex-col justify-center py-24">
          <p className="mb-8 flex items-center gap-3 text-sm text-zinc-400"><span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_16px_4px_rgba(103,232,249,0.4)]" />Available for selected projects</p>
          <h1 className="text-balance text-5xl font-medium leading-[0.98] tracking-[-0.065em] text-white sm:text-7xl md:text-8xl">Thoughtful digital<br /><span className="text-zinc-500">experiences, built.</span></h1>
          <p className="mt-9 max-w-xl text-lg leading-8 text-zinc-400">{profile.introduction}</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#works" className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-cyan-200">View selected work <span aria-hidden="true">↗</span></a>
            <a href="#contact" className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/40">Get in touch</a>
          </div>
          <div className="mt-20 flex items-center gap-3 text-xs tracking-widest text-zinc-600"><span className="h-px w-10 bg-zinc-700" />SCROLL TO EXPLORE</div>
        </div>
      </Container>
    </section>
  )
}
