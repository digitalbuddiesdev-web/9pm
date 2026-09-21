import baoImg from '../assets/Gallary/bao.jpeg';
import chickenChilliImg from '../assets/Gallary/Bsail-chicken-chilli.jpeg';
import dimSumsImg from '../assets/Gallary/dim-sums.jpeg';
import dimSums2Img from '../assets/Gallary/dimsums-2.jpeg';
import greenAppleJuiceImg from '../assets/Gallary/Green-apple-juice.jpeg';
import jagerBombImg from '../assets/Gallary/jager-bomb.jpeg';
import pizzaImg from '../assets/Gallary/pizza.jpeg';
import tempuraSushiImg from '../assets/Gallary/tempura-sushi.jpeg';
import tequilaSunsetImg from '../assets/Gallary/tequila-sunset.jpeg';

// Authentic 9PM Bar & Venue Images
import barCounterImg from '../assets/bar images/unnamed.webp';
import cocktailLineupImg from '../assets/bar images/unnamed (1).webp';
import barStoolsImg from '../assets/bar images/unnamed (2).webp';
import wokChilliDishImg from '../assets/bar images/unnamed (3).webp';
import infusedSpiritsImg from '../assets/bar images/unnamed (4).webp';
import barGuestVibeImg from '../assets/bar images/unnamed (5).webp';
import mixologistWorkImg from '../assets/bar images/unnamed (6).webp';
import edisonBottleDisplayImg from '../assets/bar images/unnamed (7).webp';
import mezzanineArchImg from '../assets/bar images/unnamed (8).webp';
import artisanTacosImg from '../assets/bar images/unnamed (9).webp';
import sushiBaoComboImg from '../assets/bar images/unnamed (10).webp';
import vipLoungeImg from '../assets/bar images/unnamed (11).webp';
import highAngleBarImg from '../assets/bar images/unnamed (12).webp';
import neonShelvesImg from '../assets/bar images/unnamed (13).webp';
import bartendersCraftImg from '../assets/bar images/unnamed (14).webp';

export const ninePMData = {
  brandId: 'ninepm',
  brandName: '9PM',
  fullName: '9PM Bar & Cafe',
  badge: 'Palolem Nightlife & Bar',
  tagline: 'Party. Chill. Unwind.',
  heroSubtitle: 'Where international sounds, crafted cocktails, great food and unforgettable nights come together in Palolem.',
  location: 'Mohanbagh, Palolem, Canacona, Goa',
  shortLocation: 'Palolem, South Goa',
  phone: '8287696969',
  phoneDisplay: '+91 82876 96969',
  rating: '4.6',
  reviewCount: '1,070+',
  priceRange: '₹₹ - ₹₹₹',
  timings: '6:00 PM – 4:00 AM (Daily)',
  googleMapsUrl: 'https://maps.google.com/?q=9PM+Bar+Cafe+Palolem+Goa',
  sisterBrandUrl: '../lajhinga',
  instagram: {
    handle: '@9pmbarandcafe',
    url: 'https://www.instagram.com/9pmbarandcafe/',
    followers: '18.5K',
    tagline: 'Follow the Night'
  },
  whatsapp: 'https://wa.me/918287696969?text=Hi%209PM%20Bar%2C%20I%20would%20like%20to%20reserve%20a%20table',
  
  heroStats: [
    { label: 'Google Rating', value: '4.6 ★' },
    { label: 'Happy Guests', value: '1,070+' },
    { label: 'Music Genres', value: '5+ Curated' },
    { label: 'Vibe', value: 'Electric' }
  ],

  experience: {
    title: 'Not Just Another Night Out',
    subtitle: 'THE 9PM EXPERIENCE',
    description: 'We redefined nightlife in South Goa by combining high-energy international DJ sets with world-class mixology, gourmet dining, and warm, attentive hospitality. At 9PM, every night transitions seamlessly from an intimate lounge session into an electrifying dance floor.',
    features: [
      {
        id: 'djs',
        title: 'International DJ Lineups',
        desc: 'Curated underground selectors and globetrotting artists performing sets you won\'t hear at generic clubs.',
        icon: 'Music'
      },
      {
        id: 'cocktails',
        title: 'Craft Mixology',
        desc: 'Smoked infusions, tropical botanicals, and bespoke cocktails crafted by expert flair bartenders.',
        icon: 'Wine'
      },
      {
        id: 'food',
        title: 'Gourmet Kitchen',
        desc: 'Full-service late-night kitchen serving sushi rolls, sizzling kebabs, comfort bowls, and Asian specials.',
        icon: 'UtensilsCrossed'
      },
      {
        id: 'sound',
        title: 'Acoustic Sound Architecture',
        desc: 'Custom-tuned precision sound system designed for punchy basslines without acoustic fatigue.',
        icon: 'Volume2'
      }
    ]
  },

  music: {
    title: 'Live DJ Nights & Soundscapes',
    subtitle: 'SOUND CULTURE',
    description: 'Beyond standard commercial tracks — 9PM is celebrated for authentic musical curation spanning diverse global subgenres.',
    genres: [
      { name: 'Techno & Melodic', desc: 'Hypnotic deep rhythms, driving 128 BPM grooves, and late-night underground pulses.' },
      { name: 'Reggae & Dub', desc: 'Roots, dubwise vibrations, and warm basslines echoing the coastal spirit.' },
      { name: 'Reggae Fusion', desc: 'Modern electronic beats infused with Caribbean bounce and dancehall warmth.' },
      { name: 'Afro House', desc: 'Polyrhythmic percussions and infectious tribal bass.' },
      { name: 'Deep & Progressive House', desc: 'Atmospheric builds and euphoria-inducing drops under neon lights.' }
    ],
    upcomingNights: [
      { day: 'Wednesday', event: 'Dub & Reggae Coastal Session', dj: 'Resident & Guest Dubmasters' },
      { day: 'Friday', event: 'Techno Pulse & Underground Echoes', dj: 'International Guest DJs' },
      { day: 'Saturday', event: 'Electric Saturday: Peak Nightlife', dj: '9PM All-Star Collective' },
      { day: 'Sunday', event: 'Sundown to Midnight Melodic Chill', dj: 'Acoustic & Deep Grooves' }
    ]
  },

  foodAndDrinks: {
    title: 'Culinary Craft & Liquid Art',
    subtitle: 'FOOD & DRINKS',
    description: 'Food at 9PM is never an afterthought. Our kitchen crafts culinary highlights that keep visitors raving in reviews till late night.',
    categories: ['All', 'Cocktails', 'Gourmet Starters', 'Mains & Comfort', 'Sushi & Asian'],
    items: [
      {
        id: 1,
        name: 'Palolem Sunset Smoked Negroni',
        category: 'Cocktails',
        price: '₹550',
        desc: 'Campari, artisanal gin, sweet vermouth, smoked with cinnamon bark and dehydrated orange.',
        badge: 'Signature',
        image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 2,
        name: 'Dragon Tempura Prawns',
        category: 'Gourmet Starters',
        price: '₹520',
        desc: 'Crisp wild prawns tossed in togarashi spice with yuzu aioli and microgreens.',
        badge: 'Bestseller',
        image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 3,
        name: 'Artisan Sushi Platter',
        category: 'Sushi & Asian',
        price: '₹680',
        desc: 'Chef selection of spicy tuna, salmon avocado maki, and crispy asparagus rolls with wasabi & pickled ginger.',
        badge: 'Chef Special',
        image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 4,
        name: 'Tandoori Murgh & Paneer Tikka Kebabs',
        category: 'Gourmet Starters',
        price: '₹480',
        desc: 'Char-grilled skewers marinated in hung curd, Kashmiri deghi mirch, and royal spices with mint chutney.',
        badge: 'Popular',
        image: 'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 5,
        name: 'Wok-Tossed Paneer Chilli',
        category: 'Gourmet Starters',
        price: '₹420',
        desc: 'Crispy cottage cheese cubes tossed in scallions, dark soy, capsicum, and fresh bird\'s eye chillies.',
        badge: 'Favourite',
        image: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 6,
        name: 'Midnight Dal Khichdi & Ghee Tadka',
        category: 'Mains & Comfort',
        price: '₹360',
        desc: 'The legendary late-night comfort bowl with roasted cumin, garlic tempering, papad, and pickle.',
        badge: 'Late Night Legend',
        image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 7,
        name: 'Neon Velvet Passionfruit Mojito',
        category: 'Cocktails',
        price: '₹490',
        desc: 'White rum, fresh passion fruit pulp, crushed mint, lime, and butterfly pea flower botanical float.',
        badge: 'Refreshing',
        image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 8,
        name: 'Spicy Thai Basil Chicken',
        category: 'Sushi & Asian',
        price: '₹460',
        desc: 'Minced chicken with holy basil, fiery garlic, fish sauce essence, served with jasmine rice.',
        badge: 'Hot & Spicy',
        image: 'https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=800&q=80'
      }
    ]
  },

  hospitality: {
    title: 'More Than Music',
    subtitle: 'HOSPITALITY WITH SOUL',
    description: 'While the music gets you dancing, it\'s our team that makes 9PM feel like home. Countless reviews celebrate our friendly bartenders, attentive hosts, and the unmistakable warmth that makes every guest feel like a VIP.',
    quote: '"The staff makes you feel instantly welcome from the moment you step inside. Extraordinary vibe, prompt service, and genuinely warm people."',
    highlights: [
      { title: 'Personal Table Attention', desc: 'No waving your hands in the dark. Our team ensures your drinks and dishes arrive promptly.' },
      { title: 'Safe & Welcoming Vibe', desc: 'A secure, respectful, inclusive space designed for solo travelers, couples, and party crews alike.' },
      { title: 'Late-Night Care', desc: 'Full kitchen and warm hospitality running all the way until 4:00 AM.' }
    ]
  },

  reviews: [
    {
      id: 1,
      name: 'Rohan Malhotra',
      rating: 5,
      date: '2 weeks ago',
      text: 'One of the best club experiences in South Goa! The DJ played a crazy techno and dub set that had everyone on their feet. The cocktails were top-notch and the sushi was surprisingly authentic for a club. Highly recommend 9PM!',
      tag: 'Music & Drinks'
    },
    {
      id: 2,
      name: 'Sarah Jenkins',
      rating: 5,
      date: '1 month ago',
      text: 'Visited Palolem for 4 days and spent 3 nights here. International vibe, diverse music genres (loved the reggae fusion night!), and super friendly staff who treat you like family. Do not miss their tempura prawns!',
      tag: 'Atmosphere & Food'
    },
    {
      id: 3,
      name: 'Vikram Sengupta',
      rating: 5,
      date: '3 weeks ago',
      text: 'Rated 4.6 on Google for good reason. Not your typical commercial Goa club — this has real character, good acoustic balance where you can actually enjoy the music, and the Dal Khichdi at 2 AM was soul-satisfying.',
      tag: 'Late Night Food'
    },
    {
      id: 4,
      name: 'Elena Rostova',
      rating: 5,
      date: '2 months ago',
      text: 'Fantastic craft cocktails and great energy. The bartenders are very skilled and the ambience with ambient neon lighting is cinematic. Best party spot in Canacona without doubt.',
      tag: 'Cocktails'
    }
  ],

  gallery: [
    {
      id: 1,
      category: 'Bar & Ambience',
      title: 'Illuminated Bar Counter',
      image: barCounterImg,
      caption: 'The glowing brick bar counter featuring warm Edison pendant bulbs, lush greenery, and premium spirits.'
    },
    {
      id: 2,
      category: 'Cocktails',
      title: 'Signature Craft Cocktail Flight',
      image: cocktailLineupImg,
      caption: 'A vibrant flight of artisanal cocktails, tropical coolers, and signature mixology creations.'
    },
    {
      id: 3,
      category: 'Bar & Ambience',
      title: 'VIP Chesterfield Lounge',
      image: vipLoungeImg,
      caption: 'Plush velvet tufted sofa seating with acoustic sound treatment for intimate conversations.'
    },
    {
      id: 4,
      category: 'Food',
      title: 'Sushi Rolls & Steamed Bao',
      image: sushiBaoComboImg,
      caption: 'Freshly prepared maki sushi platter paired with warm steamed bao buns in a traditional bamboo steamer.'
    },
    {
      id: 5,
      category: 'Bar & Ambience',
      title: '9PM Signature Bar',
      image: barStoolsImg,
      caption: 'Sleek wood-and-steel bar seating with mood neon lighting and top-shelf bottle displays.'
    },
    {
      id: 6,
      category: 'Cocktails',
      title: 'Mixologist at Work',
      image: mixologistWorkImg,
      caption: 'Expert bartenders crafting bespoke cocktails under ambient emerald lighting.'
    },
    {
      id: 7,
      category: 'Food',
      title: 'Loaded Artisan Tacos',
      image: artisanTacosImg,
      caption: 'Crisp tacos loaded with fresh guacamole, roasted salsa, jalapenos, and dipping sauce.'
    },
    {
      id: 8,
      category: 'Bar & Ambience',
      title: 'Mezzanine & High-Ceiling Architecture',
      image: mezzanineArchImg,
      caption: 'Stunning overhead view of the high-ceiling venue and cascading filament bulb installation.'
    },
    {
      id: 9,
      category: 'Food',
      title: 'Wok-Tossed Chilli Special',
      image: wokChilliDishImg,
      caption: 'Fiery wok-tossed chicken and paneer with crisp bell peppers and scallions.'
    },
    {
      id: 10,
      category: 'Bar & Ambience',
      title: 'Infused Spirits & Botanical Backbar',
      image: infusedSpiritsImg,
      caption: 'House-infused cinnamon whiskey, berry gins, and top-shelf spirits on multi-tiered shelves.'
    },
    {
      id: 11,
      category: 'Cocktails',
      title: 'Tequila Sunset',
      image: tequilaSunsetImg,
      caption: 'A refreshing sunset-hued cocktail crafted with premium agave and citrus.'
    },
    {
      id: 12,
      category: 'Bar & Ambience',
      title: 'Bar Floor & Aerial View',
      image: highAngleBarImg,
      caption: 'Bird’s-eye perspective of the bustling main bar and warm ambient glow.'
    },
    {
      id: 13,
      category: 'Food',
      title: 'Steamed Bao Buns',
      image: baoImg,
      caption: 'Fluffy steamed bao buns with savory artisanal fillings.'
    },
    {
      id: 14,
      category: 'Bar & Ambience',
      title: 'Backlit Bar Display',
      image: neonShelvesImg,
      caption: 'Illuminated bottle wall and crystal glassware in atmospheric purple glow.'
    },
    {
      id: 15,
      category: 'Cocktails',
      title: 'Jager Bomb Drop',
      image: jagerBombImg,
      caption: 'The high-energy club favorite shot for the dance floor.'
    },
    {
      id: 16,
      category: 'Food',
      title: 'Wood-Fired Pizza',
      image: pizzaImg,
      caption: 'Crispy wood-fired pizza with fresh herbs, mozzarella, and savory toppings.'
    },
    {
      id: 17,
      category: 'Bar & Ambience',
      title: 'Late Night Bar Mood',
      image: barGuestVibeImg,
      caption: 'Casual late-night conversations and drinks by the illuminated counter.'
    },
    {
      id: 18,
      category: 'Food',
      title: 'Tempura Sushi Platter',
      image: tempuraSushiImg,
      caption: 'Crisp tempura-style sushi rolls with wasabi and pickled ginger.'
    },
    {
      id: 19,
      category: 'Cocktails',
      title: 'Fresh Pressed Green Apple',
      image: greenAppleJuiceImg,
      caption: 'Crisp, refreshing cold-pressed green apple cooler.'
    },
    {
      id: 20,
      category: 'Bar & Ambience',
      title: 'Edison Bulb Bottle Installation',
      image: edisonBottleDisplayImg,
      caption: 'Cascading warm incandescent filament bulbs against the botanical spirit display.'
    },
    {
      id: 21,
      category: 'Food',
      title: 'Basil Chicken Chilli',
      image: chickenChilliImg,
      caption: 'Spicy wok-tossed basil chicken chilli with bell peppers.'
    },
    {
      id: 22,
      category: 'Bar & Ambience',
      title: 'Bartenders & Service Craft',
      image: bartendersCraftImg,
      caption: 'Attentive service and fast pours from our friendly late-night bar team.'
    },
    {
      id: 23,
      category: 'Food',
      title: 'Handcrafted Dim Sums',
      image: dimSumsImg,
      caption: 'Freshly steamed dim sums with authentic dipping sauces.'
    },
    {
      id: 24,
      category: 'Food',
      title: 'Signature Dim Sums Duo',
      image: dimSums2Img,
      caption: 'Delicate steamed dumplings prepared fresh by our late-night culinary team.'
    }
  ]
};
