export type Tool = {
  name: string
  tag: string
  glyph: string
  level: number
  hue: number
}

export type ProjectCategory = 'Studie' | 'Werk' | 'Persoonlijk' | 'Concept'

export type Project = {
  id: string
  title: string
  desc: string
  tags: readonly string[]
  category: ProjectCategory
  year: string
  label: string
  hue: number
  featured?: boolean
}

export const TAGLINE = 'Visual designer & frontend development student'

export const TOOLS: readonly Tool[] = [
  { name: 'Webflow', tag: 'no-code', glyph: 'W', level: 0.86, hue: 230 },
  { name: 'Figma', tag: 'ui design', glyph: 'F', level: 0.92, hue: 280 },
  { name: 'Adobe CC', tag: 'creative suite', glyph: 'A', level: 0.78, hue: 18 },
  { name: 'Spline', tag: '3d & motion', glyph: 'S', level: 0.62, hue: 200 },
  { name: 'Canva', tag: 'quick visuals', glyph: 'C', level: 0.8, hue: 195 },
  { name: 'Notion', tag: 'docs & systems', glyph: 'N', level: 0.88, hue: 60 },
]

export const PROJECTS: readonly Project[] = [
  {
    id: 'minor-k86',
    title: 'Minor Visual Design & Frontend Development',
    desc: 'Een studieonderdeel gericht op visual design, frontend development en het maken van moderne digitale interfaces.',
    tags: ['Visual Design', 'Frontend', 'UI Design'],
    category: 'Studie',
    year: '2025',
    label: 'case study',
    hue: 30,
    featured: true,
  },
  {
    id: 'personal-portfolio',
    title: 'Personal Portfolio',
    desc: 'Een persoonlijk portfolio waarin mijn projecten, vaardigheden en achtergrond samenkomen in één online presentatie.',
    tags: ['Webflow', 'Portfolio', 'Branding'],
    category: 'Persoonlijk',
    year: '2025',
    label: 'live site',
    hue: 60,
  },
  {
    id: 'intern-yes-delft',
    title: 'Intern @ YES!Delft',
    desc: 'Een stage-ervaring waarbij ik werkte aan professionele opdrachten, samenwerking en creatieve oplossingen.',
    tags: ['Internship', 'Design', 'Collaboration'],
    category: 'Werk',
    year: '2024',
    label: 'internship',
    hue: 200,
  },
  {
    id: 'hci-technologies',
    title: 'HCI Technologies',
    desc: 'Een project rondom Human-Computer Interaction en technologieën die de interactie verbeteren.',
    tags: ['HCI', 'Interaction', 'Research'],
    category: 'Studie',
    year: '2024',
    label: 'research',
    hue: 280,
  },
  {
    id: 'usability-measuring-and-testing',
    title: 'Usability Measuring and Testing',
    desc: 'Het meten, testen en verbeteren van de gebruiksvriendelijkheid binnen digitale producten en interfaces.',
    tags: ['Usability', 'User Testing', 'UX'],
    category: 'Studie',
    year: '2024',
    label: 'ux research',
    hue: 145,
  },
  {
    id: 'impactful-design',
    title: 'Impactful Design',
    desc: 'Een project waarin design wordt ingezet om impact te maken en een duidelijke boodschap over te brengen.',
    tags: ['Impact', 'Concept', 'Design'],
    category: 'Concept',
    year: '2023',
    label: 'concept',
    hue: 12,
  },
]

export const TRAITS: readonly string[] = [
  'Sociaal',
  'Actief',
  'Sportief',
  'Teamspeler',
  'Creatief',
  'Oplossingsgericht',
  'Leergierig',
]
