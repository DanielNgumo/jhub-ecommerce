'use client'

import { useState } from 'react'
import { StarIcon, ShoppingCartIcon } from '@heroicons/react/24/solid'
import { ArrowRightIcon } from '@heroicons/react/24/outline'

import { products, type Product } from '@/data/products'

const renderStars = (rating: Product['rating']) => {
  return Array.from({ length: 5 }, (_, i) => (
    <StarIcon
      key={i}
      className={`h-4 w-4 ${
        i < rating ? 'text-yellow-400' : 'text-gray-300'
      }`}
    />
  ))
}

export default function Products() {
  const [showAll, setShowAll] = useState(false)

  const displayedProducts = showAll
    ? products
    : products.slice(0, 3)

  return (
    <section id="products" className="bg-gray-50 py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-16 text-center" data-aos="fade-up">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Featured Products
          </h2>

          <p className="mt-4 text-lg text-gray-600">
            Discover our curated collection of best-selling items
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {displayedProducts.map((product, index) => (
            <article
              key={product.id}
              className="group overflow-hidden rounded-xl bg-white shadow-md transition-shadow hover:shadow-xl"
              data-aos="fade-up"
              data-aos-delay={(index % 3) * 100}
            >
              {/* Product Image */}
              <div className="relative flex h-64 items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-100 to-blue-100">
                <span className="text-8xl transition-transform duration-300 group-hover:scale-110">
                  {product.image}
                </span>

                <span className="absolute right-4 top-4 rounded-full bg-red-500 px-3 py-1 text-sm font-semibold text-white">
                  Sale
                </span>
              </div>

              {/* Product Content */}
              <div className="p-6">
                <p className="text-sm font-semibold uppercase tracking-wider text-indigo-600">
                  {product.category}
                </p>

                <h3 className="mt-2 text-lg font-bold text-gray-900">
                  {product.name}
                </h3>

                {/* Ratings */}
                <div className="mt-3 flex items-center gap-2">
                  <div className="flex gap-1">
                    {renderStars(product.rating)}
                  </div>

                  <span className="text-sm text-gray-600">
                    ({product.reviews} reviews)
                  </span>
                </div>

                {/* Price */}
                <div className="mt-4 flex items-baseline gap-2">
                  <span className="text-2xl font-bold text-gray-900">
                    {product.price}
                  </span>

                  <span className="text-sm text-gray-500 line-through">
                    {product.originalPrice}
                  </span>
                </div>

                {/* Add To Cart */}
                <button
                  className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg bg-indigo-600 px-4 py-3 font-semibold text-white transition-colors hover:bg-indigo-700"
                >
                  <ShoppingCartIcon className="h-5 w-5" />
                  Add to Cart
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Toggle Buttons */}
        <div className="mt-12 flex justify-center">
          {!showAll ? (
            <button
              onClick={() => setShowAll(true)}
              className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-8 py-3 text-lg font-semibold text-white shadow-lg transition-colors hover:bg-indigo-700"
            >
              View More Products
              <ArrowRightIcon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setShowAll(false)}
              className="font-semibold text-indigo-600 transition-colors hover:text-indigo-700"
            >
              Show Less
            </button>
          )}
        </div>

      </div>
    </section>
  )
}