export interface Product {
  id: number
  name: string
  slug: string
  price: string
  originalPrice: string
  rating: number
  reviews: number
  images: string[]
  category: string
  description: string
  features: string[]
  details: Record<string, string>
}

export const products: Product[] = [
  {
    id: 1,
    name: 'Premium Wireless Headphones',
    slug: 'premium-wireless-headphones',
    price: '$199.99',
    originalPrice: '$299.99',
    rating: 5,
    reviews: 128,
    images: ['🎧', '🎵', '🎙️'],
    category: 'Electronics',
    description: 'Experience industry-leading sound quality with our Premium Wireless Headphones. Featuring advanced active noise cancellation, extraordinary 40-hour battery life, and ultra-plush memory foam earcups for all-day comfort.',
    features: [
      'Active Noise Cancellation (ANC)',
      'Up to 40 Hours Battery Life',
      'Bluetooth 5.2 Connectivity',
      'Hi-Res Audio Certified',
      'Built-in Microphone for Calls'
    ],
    details: {
      'Brand': 'SoundPro',
      'Model': 'WH-1000X',
      'Weight': '250g',
      'Charging Port': 'USB-C',
      'Warranty': '1 Year'
    }
  },
  {
    id: 2,
    name: 'Ultra Comfort Sneakers',
    slug: 'ultra-comfort-sneakers',
    price: '$89.99',
    originalPrice: '$129.99',
    rating: 4,
    reviews: 96,
    images: ['👟', '🏃', '🧦'],
    category: 'Footwear',
    description: 'Walk on clouds with the Ultra Comfort Sneakers. Designed with a highly breathable mesh upper, responsive cushioning midsole, and an ergonomic slip-resistant rubber outsole to support your active lifestyle.',
    features: [
      'Breathable Mesh Fabric Upper',
      'Responsive Cushioning Midsole',
      'Ergonomic Arc Support',
      'Slip-Resistant Rubber Outsole',
      'Lightweight and Flexible Build'
    ],
    details: {
      'Brand': 'FitStride',
      'Material': 'Polyester Mesh & Rubber',
      'Style': 'Athletic / Casual',
      'Arch Support': 'Medium-High',
      'Sizes': '7 - 13 (US Men)'
    }
  },
  {
    id: 3,
    name: 'Smart Fitness Watch',
    slug: 'smart-fitness-watch',
    price: '$149.99',
    originalPrice: '$199.99',
    rating: 4,
    reviews: 84,
    images: ['⌚', '⏱️', '❤️'],
    category: 'Electronics',
    description: 'Track your health and stay connected with the Smart Fitness Watch. Offers 24/7 heart rate monitoring, sleep analysis, GPS tracking for runs, and smartphone notifications delivered directly to an elegant AMOLED display.',
    features: [
      '1.4-inch AMOLED Touchscreen Display',
      '24/7 Heart Rate and SpO2 Tracking',
      'Built-in Multi-System GPS',
      '5 ATM Water Resistant Rating',
      'Up to 7 Days Battery Life'
    ],
    details: {
      'Brand': 'PulseTech',
      'Water Resistance': '50 meters',
      'Connectivity': 'Bluetooth / Wi-Fi',
      'Compatible OS': 'iOS & Android',
      'Strap Material': 'Silicone'
    }
  },
  {
    id: 4,
    name: 'Classic Leather Backpack',
    slug: 'classic-leather-backpack',
    price: '$119.99',
    originalPrice: '$179.99',
    rating: 5,
    reviews: 62,
    images: ['🎒', '💼', '👜'],
    category: 'Accessories',
    description: 'Handcrafted from full-grain leather, the Classic Leather Backpack merges vintage style with modern utility. Features a dedicated padded laptop sleeve, multiple organizers, and comfortable adjustable shoulder straps.',
    features: [
      'Handcrafted Full-Grain Genuine Leather',
      'Padded Laptop Sleeve (fits up to 15.6")',
      'Water-Resistant Inner Lining',
      'YKK Heavy-Duty Metal Zippers',
      'Ergonomic Padded Shoulder Straps'
    ],
    details: {
      'Brand': 'HeritageGoods',
      'Material': 'Full-Grain Leather',
      'Capacity': '22 Liters',
      'Dimensions': '18" x 12" x 6"',
      'Hardware': 'Antique Brass'
    }
  },
  {
    id: 5,
    name: 'Minimalist Leather Wallet',
    slug: 'minimalist-leather-wallet',
    price: '$39.99',
    originalPrice: '$59.99',
    rating: 5,
    reviews: 154,
    images: ['💳', '💵', '🪙'],
    category: 'Accessories',
    description: 'Slim down your carry with our Minimalist Leather Wallet. Designed with RFID blocking technology, it holds up to 8 cards and cash without bulk, keeping your essentials secure and easily accessible.',
    features: [
      'RFID Blocking Technology',
      'Slim Profile (only 0.3" thick)',
      'Top-Grain Leather Construction',
      'Quick-Access Front Card Slot',
      'Integrated Elastic Cash Strap'
    ],
    details: {
      'Brand': 'HeritageGoods',
      'Capacity': '8 Cards + Cash',
      'Weight': '45g',
      'Dimensions': '4.1" x 2.9" x 0.3"',
      'RFID Protection': '13.56 MHz'
    }
  },
  {
    id: 6,
    name: 'Professional Chef Knife',
    slug: 'professional-chef-knife',
    price: '$79.99',
    originalPrice: '$119.99',
    rating: 4,
    reviews: 43,
    images: ['🔪', '🥩', '🥗'],
    category: 'Kitchen',
    description: 'Master the art of cooking with the Professional Chef Knife. Precision forged from high-carbon German stainless steel, this 8-inch knife features a razor-sharp edge and a full-tang triple-riveted Pakkawood handle for ultimate control.',
    features: [
      'Forged High-Carbon German Steel',
      'Razor-Sharp 15-Degree Blade Edge',
      'Full Tang Triple-Riveted Design',
      'Ergonomic Pakkawood Handle',
      'Stain and Corrosion Resistant'
    ],
    details: {
      'Brand': 'CulinaryMaster',
      'Blade Length': '8 inches',
      'Blade Material': 'German 1.4116 Steel',
      'Hardness': '58+ HRC',
      'Handle': 'Pakkawood'
    }
  }
]