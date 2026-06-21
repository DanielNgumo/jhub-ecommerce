export interface Product {
  id: number
  name: string
  price: string
  originalPrice: string
  rating: number
  reviews: number
  image: string
  category: string
}

export const products = [
  {
    id: 1,
    name: 'Premium Wireless Headphones',
    price: '$199.99',
    originalPrice: '$299.99',
    rating: 5,
    reviews: 128,
    image: '🎧',
    category: 'Electronics'
  },
  {
    id: 2,
    name: 'Ultra Comfort Sneakers',
    price: '$89.99',
    originalPrice: '$129.99',
    rating: 4,
    reviews: 96,
    image: '👟',
    category: 'Footwear'
  }
]