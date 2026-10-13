import { Container } from '../../../shared/components/Container'
import { SectionHeading } from '../../../shared/components/SectionHeading'
import { projects } from '../data/projects'
import { ProjectCard } from './ProjectCard'

export function Works() {
  return (
    <section id="works" className="border-t border-white/[0.07] py-28 sm:py-36">
      <Container>
        <SectionHeading
          eyebrow="02 / SELECTED WORK"
          title="A few things I've made."
        />
        <div className="mt-16 grid gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </Container>
    </section>
  )
}
