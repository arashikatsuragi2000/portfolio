import type { Project } from '../../../shared/types/portfolio'

const accents = {
  violet: 'from-violet-500/45 via-fuchsia-500/15 to-transparent',
  cyan: 'from-cyan-400/45 via-blue-500/15 to-transparent',
  rose: 'from-rose-400/40 via-orange-400/15 to-transparent',
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group">
      <a href={project.href ?? '#contact'} className="block" aria-label={`${project.title}の詳細を見る`}>
        <div className="relative mb-6 aspect-[16/10] overflow-hidden rounded-2xl border border-white/10 bg-zinc-900">
          <div className={`absolute inset-0 bg-gradient-to-br ${accents[project.accent]} opacity-90 transition duration-500 group-hover:scale-110`} />
          <div className="absolute inset-[12%] rounded-xl border border-white/20 bg-zinc-950/35 backdrop-blur-[2px]" />
          <div className="absolute inset-x-[21%] bottom-[12%] h-[45%] rounded-t-lg border border-white/20 bg-zinc-950/55 shadow-2xl" />
          <span className="absolute right-5 top-5 grid h-9 w-9 place-items-center rounded-full bg-white text-lg text-zinc-950 transition group-hover:-translate-y-1 group-hover:translate-x-1">↗</span>
        </div>
        <div className="flex items-start justify-between gap-4">
          <div><h3 className="text-xl font-medium tracking-tight text-white">{project.title}</h3><p className="mt-2 max-w-sm text-sm leading-6 text-zinc-400">{project.description}</p></div>
          <span className="font-mono text-xs text-zinc-600">{project.year}</span>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">{project.tags.map((tag) => <span key={tag} className="rounded-full border border-white/10 px-3 py-1 text-xs text-zinc-400">{tag}</span>)}</div>
      </a>
    </article>
  )
}
