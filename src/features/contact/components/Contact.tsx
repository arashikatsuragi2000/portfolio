import { Container } from '../../../shared/components/Container'
import { profile } from '../../../shared/data/profile'

export function Contact() {
  return <section id="contact" className="border-t border-white/[0.07] py-28 sm:py-36"><Container><div className="rounded-3xl border border-white/10 bg-gradient-to-br from-zinc-900 to-zinc-950 px-7 py-14 sm:px-14 sm:py-20"><p className="text-xs font-semibold tracking-[0.24em] text-cyan-300">04 / CONTACT</p><h2 className="mt-5 max-w-3xl text-4xl font-medium tracking-[-0.05em] text-white sm:text-6xl">Let’s make something meaningful.</h2><p className="mt-6 max-w-xl leading-7 text-zinc-400">プロジェクトのご相談や、気軽なご挨拶も歓迎です。メールまたはSNSからお声がけください。</p><a className="mt-10 inline-block border-b border-cyan-300 pb-2 text-lg font-medium text-cyan-200 transition hover:text-white" href={`mailto:${profile.email}`}>{profile.email} ↗</a></div></Container></section>
}
