'use client'

import { useState } from 'react'
import { ShoppingCartIcon, CheckIcon } from '@heroicons/react/24/solid'
import { useCart } from '@/app/context/CartContext'
import { type Product } from '@/data/products'

interface ProductActionsProps {
  product: Product
}

export default function ProductActions({ product }: ProductActionsProps) {
  const { addToCart } = useCart()
  const [quantity, setQuantity] = useState(1)
  const [isAdded, setIsAdded] = useState(false)

  const handleAddToCart = () => {
    addToCart(product, quantity)
    setIsAdded(true)
    setTimeout(() => setIsAdded(false), 2500)
  }

  const adjustQuantity = (amount: number) => {
    setQuantity(prev => Math.max(1, prev + amount))
  }

  return (
    <div className="space-y-6">
      {/* Quantity Selector */}
      <div className="flex items-center gap-4">
        <span className="text-sm font-semibold text-gray-900">Quantity:</span>
        <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden bg-white shadow-sm">
          <button
            onClick={() => adjustQuantity(-1)}
            className="px-4 py-2 text-gray-600 hover:bg-gray-100 transition-colors font-bold text-lg"
            type="button"
          >
            −
          </button>
          <span className="px-6 py-2 text-gray-900 font-semibold min-w-[50px] text-center select-none">
            {quantity}
          </span>
          <button
            onClick={() => adjustQuantity(1)}
            className="px-4 py-2 text-gray-600 hover:bg-gray-100 transition-colors font-bold text-lg"
            type="button"
          >
            +
          </button>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4">
        <button
          onClick={handleAddToCart}
          disabled={isAdded}
          className={`flex-1 flex items-center justify-center gap-2 rounded-xl px-6 py-4 font-bold text-white transition-all shadow-lg hover:shadow-xl ${
            isAdded
              ? 'bg-green-600 hover:bg-green-700'
              : 'bg-indigo-600 hover:bg-indigo-700'
          }`}
          type="button"
        >
          {isAdded ? (
            <>
              <CheckIcon className="h-6 w-6 animate-bounce" />
              Added to Cart!
            </>
          ) : (
            <>
              <ShoppingCartIcon className="h-6 w-6" />
              Add to Cart
            </>
          )}
        </button>

        <button
          className="flex-1 rounded-xl border-2 border-indigo-600 px-6 py-4 font-bold text-indigo-600 hover:bg-indigo-50 transition-colors shadow-sm"
          type="button"
          onClick={() => {
            addToCart(product, quantity)
            // Simulating direct buy action by redirecting/alerting
            alert(`Proceeding to checkout with ${quantity}x ${product.name}`)
          }}
        >
          Buy It Now
        </button>
      </div>

      {/* Success Notification Alert */}
      {isAdded && (
        <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-800 text-sm font-medium animate-fade-in flex items-center gap-2">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          Successfully added {quantity} item(s) of "{product.name}" to your cart.
        </div>
      )}
    </div>
  )
}
