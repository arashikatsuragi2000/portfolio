import { Container } from '../../../shared/components/Container'
import { SectionHeading } from '../../../shared/components/SectionHeading'
import { career } from '../data/career'

export function Experience() {
  return <section id="experience" className="border-t border-white/[0.07] py-28 sm:py-36"><Container><div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24"><SectionHeading eyebrow="03 / EXPERIENCE" title="The path so far." /><div className="divide-y divide-white/10 border-t border-white/10">{career.map((item) => <article key={item.period} className="grid gap-3 py-7 sm:grid-cols-[8rem_1fr]"><p className="font-mono text-xs tracking-wide text-zinc-600">{item.period}</p><div><h3 className="text-lg font-medium text-white">{item.role}</h3><p className="mt-1 text-sm text-cyan-200">{item.company}</p><p className="mt-4 max-w-lg text-sm leading-6 text-zinc-400">{item.description}</p></div></article>)}</div></div></Container></section>
}
