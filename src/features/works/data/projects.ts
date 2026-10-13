import type { Project } from '../../../shared/types/portfolio'

export const projects: Project[] = [
  {
    title: 'Lumière',
    description:
      '日々の思考を光のように記録する、ミニマルなジャーナリングアプリ。',
    year: '2025',
    tags: ['React', 'TypeScript', 'Firebase'],
    accent: 'violet',
  },
  {
    title: 'KOTO',
    description:
      '地域の小さな営みと旅人を結ぶ、文化体験のためのプラットフォーム。',
    year: '2024',
    tags: ['Next.js', 'Tailwind CSS', 'Supabase'],
    accent: 'cyan',
  },
  {
    title: 'NEST',
    description:
      'チームの仕事を静かに前へ進める、軽量なプロジェクト管理ツール。',
    year: '2024',
    tags: ['React', 'Node.js', 'PostgreSQL'],
    accent: 'rose',
  },
]
