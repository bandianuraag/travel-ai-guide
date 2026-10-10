export type TravelStyle = 'All' | 'Adventure' | 'Luxury' | 'Family' | 'Romance' | 'Foodie' | 'Budget';

export type Destination = {
  id: number;
  name: string;
  country: string;
  continent: string;
  description: string;
  tagline: string;
  bestTime: string;
  budget: string;
  vibe: TravelStyle[];
  highlights: string[];
  activities: string[];
  food: string[];
  travelTips: string[];
  image: string;
};

export const travelStyles: TravelStyle[] = ['All', 'Adventure', 'Luxury', 'Family', 'Romance', 'Foodie', 'Budget'];

export const destinations: Destination[] = [
  {
    id: 1,
    name: 'Bali',
    country: 'Indonesia',
    continent: 'Asia',
    description: 'A tropical island blend of culture, beaches, and spiritual energy with lush rice terraces and vibrant nightlife.',
    tagline: 'Island escapes and wellness vibes',
    bestTime: 'April to October',
    budget: '$1,200–$2,500 for 5 days',
    vibe: ['Adventure', 'Romance', 'Foodie', 'Budget'],
    highlights: ['Ubud rice terraces', 'Uluwatu cliffs', 'Seminyak sunsets'],
    activities: ['Surf lessons', 'Temple visits', 'Waterfall hikes'],
    food: ['Nasi goreng', 'Babi guling', 'Canggu smoothie bowls'],
    travelTips: ['Carry cash for small villages', 'Rent a scooter if comfortable', 'Visit early for temple access'],
    image: 'https://images.unsplash.com/photo-1537996194471-e657df8c1f82?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 2,
    name: 'Paris',
    country: 'France',
    continent: 'Europe',
    description: 'The City of Light draws travelers with timeless architecture, world-class museums, and romantic streets.',
    tagline: 'Art, romance, and café culture',
    bestTime: 'April to June / September to October',
    budget: '$1,800–$3,200 for 5 days',
    vibe: ['Luxury', 'Romance', 'Foodie'],
    highlights: ['Eiffel Tower', 'Louvre Museum', 'Montmartre'],
    activities: ['Seine river cruise', 'Museum hopping', 'Night strolls'],
    food: ['Croissants', 'Baguettes', 'Escargot'],
    travelTips: ['Book major museums ahead', 'Check metro schedules', 'Walk the neighborhoods for hidden gems'],
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 3,
    name: 'Kyoto',
    country: 'Japan',
    continent: 'Asia',
    description: 'Ancient temples, quiet gardens, and classic lantern-lit streets create one of the world’s most atmospheric cities.',
    tagline: 'Zen culture and historic beauty',
    bestTime: 'March to May / October to November',
    budget: '$1,500–$2,800 for 5 days',
    vibe: ['Culture', 'Adventure', 'Foodie'],
    highlights: ['Fushimi Inari', 'Kinkaku-ji', 'Arashiyama Bamboo Grove'],
    activities: ['Tea ceremony', 'Temple walks', 'Bike rides through old alleys'],
    food: ['Kaiseki', 'Ramen', 'Matcha sweets'],
    travelTips: ['Bring cash for small eateries', 'Respect temple etiquette', 'Consider early mornings for crowds'],
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 4,
    name: 'New York City',
    country: 'United States',
    continent: 'North America',
    description: 'A nonstop city of skyline views, art, music, dining, and iconic neighborhoods that never sleep.',
    tagline: 'Big energy and endless discovery',
    bestTime: 'April to June / September to November',
    budget: '$2,000–$4,000 for 5 days',
    vibe: ['Luxury', 'Family', 'Adventure'],
    highlights: ['Central Park', 'Times Square', 'Empire State Building'],
    activities: ['Broadway shows', 'Hudson River ferry rides', 'Museum visits'],
    food: ['Pizza slices', 'Bagels', 'Food hall tastings'],
    travelTips: ['Use subway passes', 'Book tickets early', 'Plan neighborhoods strategically'],
    image: 'https://images.unsplash.com/photo-1499092346589-b9b6be3e94b2?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 5,
    name: 'Cape Town',
    country: 'South Africa',
    continent: 'Africa',
    description: 'A dramatic coastal city framed by mountains, vineyards, and breathtaking ocean views.',
    tagline: 'Nature meets adventure',
    bestTime: 'November to March',
    budget: '$1,400–$2,900 for 5 days',
    vibe: ['Adventure', 'Family', 'Luxury'],
    highlights: ['Table Mountain', 'Cape Peninsula', 'Robben Island'],
    activities: ['Winery tours', 'Hiking', 'Coastal drives'],
    food: ['Bobotie', 'Seafood', 'Cape Malay curry'],
    travelTips: ['Check weather before hikes', 'Use trusted rideshare services', 'Book safari add-ons in advance'],
    image: 'https://images.unsplash.com/photo-1521295121783-8a321d551ad2?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 6,
    name: 'Santorini',
    country: 'Greece',
    continent: 'Europe',
    description: 'Whitewashed cliffs, blue domes, and horizon sunset views make Santorini one of the world’s most iconic island escapes.',
    tagline: 'Sunsets and cliffside elegance',
    bestTime: 'May to September',
    budget: '$1,700–$3,400 for 5 days',
    vibe: ['Luxury', 'Romance', 'Foodie'],
    highlights: ['Oia sunset', 'Black sand beaches', 'Volcanic caldera'],
    activities: ['Boat tours', 'Wine tastings', 'Hidden cave hotels'],
    food: ['Greek salad', 'Seafood pasta', 'Local wines'],
    travelTips: ['Book sunset restaurants early', 'Prepare for steep walks', 'Bring a light jacket for evening breezes'],
    image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 7,
    name: 'Marrakech',
    country: 'Morocco',
    continent: 'Africa',
    description: 'A colorful desert gateway filled with souks, riads, intricate architecture, and lively market energy.',
    tagline: 'Markets, courtyards, and desert magic',
    bestTime: 'March to May / September to November',
    budget: '$900–$2,000 for 5 days',
    vibe: ['Adventure', 'Budget', 'Foodie'],
    highlights: ['Medina', 'Jemaa el-Fnaa', 'Majorelle Garden'],
    activities: ['Souk browsing', 'Rooftop dining', 'Desert excursions'],
    food: ['Tagine', 'Harira', 'Mint tea'],
    travelTips: ['Bargain politely in markets', 'Wear comfortable layers', 'Stay in a riad for a local feel'],
    image: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 8,
    name: 'Reykjavík',
    country: 'Iceland',
    continent: 'Europe',
    description: 'A Nordic capital serving as a launchpad to volcanoes, glaciers, hot springs, and dramatic natural scenery.',
    tagline: 'Nordic landscapes and adventure',
    bestTime: 'June to September / Winter for aurora seekers',
    budget: '$1,600–$3,100 for 5 days',
    vibe: ['Adventure', 'Luxury'],
    highlights: ['Blue Lagoon', 'Golden Circle', 'Northern lights'],
    activities: ['Geothermal bathing', 'Road trips', 'Glacier hikes'],
    food: ['Lamb dishes', 'Skyr', 'Seafood chowder'],
    travelTips: ['Rent a car for flexibility', 'Book hot springs early', 'Pack waterproof layers'],
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 9,
    name: 'Rome',
    country: 'Italy',
    continent: 'Europe',
    description: 'Ancient history, elegant piazzas, and unforgettable food create a city that feels like a living museum.',
    tagline: 'History, food, and timeless beauty',
    bestTime: 'April to June / September to October',
    budget: '$1,600–$3,000 for 5 days',
    vibe: ['Family', 'Foodie', 'History'],
    highlights: ['Colosseum', 'Trevi Fountain', 'Pantheon'],
    activities: ['Historic walking tours', 'Pasta tastings', 'Sunset aperitivo'],
    food: ['Carbonara', 'Pizza al taglio', 'Gelato'],
    travelTips: ['Wear comfortable walking shoes', 'Avoid midday heat', 'Reserve major attractions in advance'],
    image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 10,
    name: 'Banff',
    country: 'Canada',
    continent: 'North America',
    description: 'A mountain paradise with turquoise lakes, glacier views, and endless outdoor adventure.',
    tagline: 'Alpine wonder and outdoor living',
    bestTime: 'June to September',
    budget: '$1,800–$3,300 for 5 days',
    vibe: ['Adventure', 'Family', 'Luxury'],
    highlights: ['Lake Louise', 'Banff National Park', 'Sulphur Mountain'],
    activities: ['Hiking', 'Lake cruises', 'Wildlife spotting'],
    food: ['Canadian poutine', 'Smoked trout', 'Mountain lodge meals'],
    travelTips: ['Book lodging early', 'Check park passes', 'Bring layers for cool evenings'],
    image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80'
  }
];
