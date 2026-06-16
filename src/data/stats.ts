export interface Stat {
  id: string
  value: number
  suffix: string
  label: string
  description: string
}

export const STATS: Stat[] = [
  {
    id: 'years',
    value: 75,
    suffix: '+',
    label: 'Years of Heritage',
    description: 'Generations of gemstone expertise',
  },
  {
    id: 'gems',
    value: 50000,
    suffix: '+',
    label: 'Gems Certified',
    description: 'GIA & IGI certified stones',
  },
  {
    id: 'countries',
    value: 84,
    suffix: '',
    label: 'Countries Served',
    description: 'Trusted across six continents',
  },
  {
    id: 'clients',
    value: 3500,
    suffix: '+',
    label: 'Satisfied Clients',
    description: 'Collectors, jewelers & connoisseurs',
  },
]
