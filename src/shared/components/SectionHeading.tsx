type Props = { eyebrow: string; title: string; description?: string }

export function SectionHeading({ eyebrow, title, description }: Props) {
  return (
    <div className="max-w-2xl">
      <p className="mb-4 text-xs font-semibold tracking-[0.24em] text-cyan-300">
        {eyebrow}
      </p>
      <h2 className="text-4xl font-medium tracking-[-0.045em] text-white sm:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-5 leading-7 text-zinc-400">{description}</p>
      )}
    </div>
  )
}
