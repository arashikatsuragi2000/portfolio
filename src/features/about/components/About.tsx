import { Container } from '../../../shared/components/Container'
import { SectionHeading } from '../../../shared/components/SectionHeading'

const skills = ['React / Next.js', 'TypeScript', 'Tailwind CSS', 'UI Engineering', 'Design Systems', 'Accessibility']

export function About() {
  return (
    <section id="about" className="border-t border-white/[0.07] py-28 sm:py-36">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-24">
          <SectionHeading eyebrow="01 / ABOUT" title="Design with intention. Build with care." description="見た目だけでなく、触れたときの感覚まで設計することを大切にしています。複雑な要件を整理し、軽やかで長く使えるインターフェースへ落とし込みます。" />
          <div className="grid content-end grid-cols-2 gap-x-6 gap-y-5 border-t border-white/10 pt-6">
            {skills.map((skill, index) => <p key={skill} className="border-b border-white/[0.07] pb-4 text-sm text-zinc-300"><span className="mr-3 font-mono text-xs text-zinc-600">0{index + 1}</span>{skill}</p>)}
          </div>
        </div>
      </Container>
    </section>
  )
}
