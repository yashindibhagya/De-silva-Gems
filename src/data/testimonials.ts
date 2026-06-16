export interface Testimonial {
  id: string
  name: string
  title: string
  country: string
  quote: string
  rating: number
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Lady Elizabeth Hartley',
    title: 'Private Collector',
    country: 'United Kingdom',
    quote: 'The most exceptional Blue Sapphire I have encountered in thirty years of collecting. Its depth and brilliance is simply unparalleled.',
    rating: 5,
  },
  {
    id: '2',
    name: 'Hiroshi Tanaka',
    title: 'Master Jeweler',
    country: 'Japan',
    quote: 'Ceylon Gems sets the standard for gemstone quality. Every stone I\'ve received has exceeded expectations in clarity, cut, and origin authenticity.',
    rating: 5,
  },
  {
    id: '3',
    name: 'Isabelle Laurent',
    title: 'Creative Director, Maison Laurent',
    country: 'France',
    quote: 'Our haute joaillerie collection was elevated beyond imagination with their Padparadscha sapphires. Truly a once-in-a-lifetime collaboration.',
    rating: 5,
  },
  {
    id: '4',
    name: 'Sheikh Faisal Al-Rashid',
    title: 'Connoisseur',
    country: 'UAE',
    quote: 'I have sourced gems from across the globe. Nothing compares to the legacy and quality of Sri Lankan stones from Ceylon Gems.',
    rating: 5,
  },
  {
    id: '5',
    name: 'Victoria Andersen',
    title: 'Head Buyer, Nordic Luxury Group',
    country: 'Denmark',
    quote: 'Their curation is impeccable. Each gem arrives with complete provenance documentation and is more magnificent in person.',
    rating: 5,
  },
  {
    id: '6',
    name: 'Marco Castelletti',
    title: 'Art Director, Gioielleria Castelletti',
    country: 'Italy',
    quote: 'Generations of Italian craftsmanship meet the ancient gem heritage of Sri Lanka. This partnership has produced our most celebrated pieces.',
    rating: 5,
  },
]
