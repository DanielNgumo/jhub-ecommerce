'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { products, type Product } from '@/data/products'
import { useCart } from '@/app/context/CartContext'
import { StarIcon, ShoppingCartIcon, MagnifyingGlassIcon, FunnelIcon } from '@heroicons/react/24/solid'

const categories = ['All', 'Electronics', 'Footwear', 'Accessories', 'Kitchen']

const renderStars = (rating: number) => {
  return Array.from({ length: 5 }, (_, i) => (
    <StarIcon
      key={i}
      className={`h-4 w-4 ${
        i < rating ? 'text-yellow-400' : 'text-gray-300'
      }`}
    />
  ))
}

const getCategoryGradient = (category: string) => {
  switch (category.toLowerCase()) {
    case 'electronics':
      return 'from-blue-100 to-indigo-100 group-hover:from-blue-200 group-hover:to-indigo-200'
    case 'footwear':
      return 'from-amber-100 to-orange-100 group-hover:from-amber-200 group-hover:to-orange-200'
    case 'accessories':
      return 'from-purple-100 to-pink-100 group-hover:from-purple-200 group-hover:to-pink-200'
    case 'kitchen':
      return 'from-emerald-100 to-teal-100 group-hover:from-emerald-200 group-hover:to-teal-200'
    default:
      return 'from-indigo-100 to-blue-100 group-hover:from-indigo-200 group-hover:to-blue-200'
  }
}

export default function ProductsCatalogPage() {
  const { addToCart } = useCart()
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [sortBy, setSortBy] = useState('featured')

  // Live filter and search logic
  const filteredProducts = useMemo(() => {
    return products
      .filter((product) => {
        const matchesCategory =
          selectedCategory === 'All' ||
          product.category.toLowerCase() === selectedCategory.toLowerCase()

        const matchesSearch =
          product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.features.some((f) => f.toLowerCase().includes(searchQuery.toLowerCase()))

        return matchesCategory && matchesSearch
      })
      .sort((a, b) => {
        const priceA = parseFloat(a.price.replace('$', ''))
        const priceB = parseFloat(b.price.replace('$', ''))

        switch (sortBy) {
          case 'price-low':
            return priceA - priceB
          case 'price-high':
            return priceB - priceA
          case 'rating':
            return b.rating - a.rating
          default:
            return a.id - b.id // featured/default order
        }
      })
  }, [searchQuery, selectedCategory, sortBy])

  return (
    <div className="bg-gray-50 min-h-screen py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="mb-12 text-center">
          <span className="text-xs font-extrabold tracking-widest text-indigo-600 uppercase bg-indigo-50 px-3 py-1.5 rounded-md">
            Catalog
          </span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            Explore All Products
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-xl mx-auto">
            Search, filter, and discover your next premium essential from our high-end selections.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 mb-10 space-y-6">
          <div className="grid gap-6 md:grid-cols-3">
            
            {/* Search Input */}
            <div className="relative md:col-span-2">
              <label htmlFor="search" className="sr-only">Search products</label>
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </div>
              <input
                id="search"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by name, specs, features, category..."
                className="block w-full rounded-xl border border-gray-300 bg-white py-3 pl-10 pr-4 text-gray-900 placeholder-gray-400 outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100 transition-all text-sm"
              />
            </div>

            {/* Sort Dropdown */}
            <div className="relative">
              <label htmlFor="sort" className="sr-only">Sort by</label>
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <FunnelIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </div>
              <select
                id="sort"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="block w-full rounded-xl border border-gray-300 bg-white py-3 pl-10 pr-4 text-gray-900 outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100 transition-all text-sm appearance-none cursor-pointer"
              >
                <option value="featured">Featured / Default</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Rating: High to Low</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>

          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap gap-2 border-t border-gray-100 pt-6">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 text-sm font-semibold rounded-xl transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-indigo-600 text-white shadow-md'
                    : 'bg-gray-50 text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProducts.map((product) => (
              <article
                key={product.id}
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl bg-white shadow-md transition-shadow hover:shadow-xl border border-gray-100"
              >
                {/* Image Section */}
                <Link
                  href={`/products/${product.slug}`}
                  className={`relative flex h-60 items-center justify-center bg-gradient-to-br ${getCategoryGradient(
                    product.category
                  )} cursor-pointer block overflow-hidden`}
                >
                  {/* Category Pill Tag */}
                  <span className="absolute top-4 left-4 bg-white/70 backdrop-blur-sm text-[10px] font-extrabold uppercase tracking-wider text-indigo-600 px-2.5 py-1 rounded-md">
                    {product.category}
                  </span>
                  
                  {/* Emoji display */}
                  <span className="text-8xl transition-transform duration-500 group-hover:scale-110 drop-shadow-lg">
                    {product.images[0]}
                  </span>

                  <span className="absolute right-4 top-4 rounded-full bg-red-500 px-3 py-1 text-xs font-bold text-white shadow-md">
                    Sale
                  </span>
                </Link>

                {/* Content Section */}
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-gray-400">
                      {product.category}
                    </span>

                    <Link href={`/products/${product.slug}`} className="block mt-1.5 group/title">
                      <h3 className="text-lg font-bold text-gray-900 group-hover/title:text-indigo-600 transition-colors line-clamp-1">
                        {product.name}
                      </h3>
                    </Link>

                    {/* Ratings */}
                    <div className="mt-2.5 flex items-center gap-2">
                      <div className="flex">
                        {renderStars(product.rating)}
                      </div>
                      <span className="text-xs font-semibold text-gray-500">
                        ({product.reviews})
                      </span>
                    </div>

                    {/* Description excerpt */}
                    <p className="mt-3 text-xs text-gray-500 line-clamp-2 leading-relaxed">
                      {product.description}
                    </p>
                  </div>

                  <div>
                    {/* Price and Details link */}
                    <div className="mt-5 flex items-baseline gap-2">
                      <span className="text-2xl font-extrabold text-gray-900">
                        {product.price}
                      </span>
                      <span className="text-xs text-gray-400 line-through">
                        {product.originalPrice}
                      </span>
                    </div>

                    {/* Interaction Buttons */}
                    <div className="mt-5 flex gap-3">
                      <button
                        onClick={() => addToCart(product)}
                        className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-3 py-2.5 font-bold text-white transition-colors hover:bg-indigo-700 text-xs shadow-sm hover:shadow-md"
                      >
                        <ShoppingCartIcon className="h-4 w-4" />
                        Add to Cart
                      </button>
                      <Link
                        href={`/products/${product.slug}`}
                        className="flex items-center justify-center rounded-xl border border-gray-300 px-3 py-2.5 font-bold text-gray-700 hover:bg-gray-50 transition-colors text-xs"
                      >
                        Details
                      </Link>
                    </div>
                  </div>

                </div>
              </article>
            ))}
          </div>
        ) : (
          /* Empty Search Filter State */
          <div className="bg-white rounded-2xl p-12 text-center shadow-md border border-gray-100 max-w-md mx-auto">
            <div className="text-5xl mb-4">🔍</div>
            <h3 className="text-lg font-bold text-gray-900 mb-1">No products found</h3>
            <p className="text-sm text-gray-500 leading-relaxed mb-6">
              We couldn't find any products matching "{searchQuery}" under category "{selectedCategory}". Try adjusting your keywords.
            </p>
            <button
              onClick={() => {
                setSearchQuery('')
                setSelectedCategory('All')
                setSortBy('featured')
              }}
              className="px-6 py-2.5 bg-indigo-600 text-white rounded-xl text-xs font-bold hover:bg-indigo-700 transition-colors"
            >
              Reset All Filters
            </button>
          </div>
        )}

      </div>
    </div>
  )
}
