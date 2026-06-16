export interface GemData {
  id: string
  name: string
  subtitle: string
  origin: string
  description: string
  color: string
  accentColor: string
  image: string
  rarity: string
}

export const GEM_CATEGORIES: GemData[] = [
  {
    id: 'sapphire',
    name: 'Blue Sapphire',
    subtitle: 'Ceylon\'s Crown Jewel',
    origin: 'Ratnapura',
    description: 'The finest blue sapphires in the world emerge from the gem-rich soil of Ratnapura. Each stone carries centuries of legend within its depths.',
    color: '#1B3A6B',
    accentColor: '#4488DD',
    image: 'src/assets/images/images (1).jpg',
    rarity: 'Rare',
  },
  {
    id: 'ruby',
    name: 'Ceylon Ruby',
    subtitle: 'Pigeon Blood Excellence',
    origin: 'Elahera',
    description: 'Deep crimson rubies harvested from ancient river beds, prized for their exceptional clarity and the warmth of their inner fire.',
    color: '#6B1B1B',
    accentColor: '#CC3333',
    image: 'src/assets/images/Ceylon-Ruby-danu-group-15.jpeg',
    rarity: 'Very Rare',
  },
  {
    id: 'padparadscha',
    name: 'Padparadscha',
    subtitle: 'Lotus Blossom Sapphire',
    origin: 'Ratnapura',
    description: 'The rarest of sapphires, displaying a unique blend of salmon-pink and orange hues found nowhere else on Earth but Sri Lanka.',
    color: '#7A3A1A',
    accentColor: '#E08050',
    image: 'src/assets/images/Padparadscha.jpg',
    rarity: 'Extremely Rare',
  },
  {
    id: 'moonstone',
    name: 'Blue Moonstone',
    subtitle: 'Adularescence Magic',
    origin: 'Meetiyagoda',
    description: 'Exclusively sourced from Sri Lanka\'s Meetiyagoda mines, these ethereal stones shimmer with an otherworldly blue glow.',
    color: '#2A3A50',
    accentColor: '#88AACC',
    image: 'https://images.unsplash.com/photo-1615751072497-5f5169febe17?w=600&q=80',
    rarity: 'Rare',
  },
  {
    id: 'alexandrite',
    name: 'Alexandrite',
    subtitle: 'The Color-Change Wonder',
    origin: 'Ratnapura',
    description: 'One of nature\'s most extraordinary phenomena — shifts from emerald green in daylight to deep crimson under incandescent light.',
    color: '#2A4A2A',
    accentColor: '#44AA44',
    image: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=600&q=80',
    rarity: 'Extremely Rare',
  },
]
