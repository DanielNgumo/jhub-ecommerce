'use client'

import Link from 'next/link'
import { StarIcon, ShoppingCartIcon } from '@heroicons/react/24/solid'
import { ArrowRightIcon } from '@heroicons/react/24/outline'
import { useCart } from '@/app/context/CartContext'

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
  const { addToCart } = useCart()

  // Display only the first 3 products as featured items on home page
  const displayedProducts = products.slice(0, 3)

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
              <Link
                href={`/products/${product.slug}`}
                className="relative flex h-64 items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-100 to-blue-100 cursor-pointer block"
              >
                <span className="text-8xl transition-transform duration-300 group-hover:scale-110">
                  {product.images[0]}
                </span>

                <span className="absolute right-4 top-4 rounded-full bg-red-500 px-3 py-1 text-sm font-semibold text-white">
                  Sale
                </span>
              </Link>

              {/* Product Content */}
              <div className="p-6">
                <p className="text-sm font-semibold uppercase tracking-wider text-indigo-600">
                  {product.category}
                </p>

                <Link href={`/products/${product.slug}`} className="block mt-2 group/title">
                  <h3 className="text-lg font-bold text-gray-900 group-hover/title:text-indigo-600 transition-colors">
                    {product.name}
                  </h3>
                </Link>

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

                {/* Actions */}
                <div className="mt-6 flex gap-3">
                  <button
                    onClick={() => addToCart(product)}
                    className="flex-1 flex items-center justify-center gap-2 rounded-lg bg-indigo-600 px-4 py-2.5 font-semibold text-white transition-colors hover:bg-indigo-700 text-sm"
                  >
                    <ShoppingCartIcon className="h-4 w-4" />
                    Add to Cart
                  </button>
                  <Link
                    href={`/products/${product.slug}`}
                    className="flex items-center justify-center rounded-lg border border-indigo-600 px-4 py-2.5 font-semibold text-indigo-600 hover:bg-indigo-50 transition-colors text-sm"
                  >
                    Details
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Redirect CTA Button */}
        <div className="mt-12 flex justify-center">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-8 py-3 text-lg font-semibold text-white shadow-lg transition-colors hover:bg-indigo-700"
          >
            View More Products
            <ArrowRightIcon className="h-5 w-5" />
          </Link>
        </div>

      </div>
    </section>
  )
}