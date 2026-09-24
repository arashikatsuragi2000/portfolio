export type Project = {
  title: string
  description: string
  year: string
  tags: string[]
  href?: string
  repository?: string
  accent: 'violet' | 'cyan' | 'rose'
}

export type Career = {
  period: string
  role: string
  company: string
  description: string
}
