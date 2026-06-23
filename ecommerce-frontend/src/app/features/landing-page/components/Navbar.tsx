'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { Bars3Icon, XMarkIcon, ShoppingBagIcon, TrashIcon } from '@heroicons/react/24/outline'
import { useCart } from '@/app/context/CartContext'

const navigationItems = [
  { name: 'Home', href: '/#hero' },
  { name: 'About Us', href: '/#about-us' },
  { name: 'Products', href: '/#products' },
  { name: 'Why Us', href: '/#why-us' },
  { name: 'Contact Us', href: '/#contact' },
  { name: 'Counter', href: '/counter' },
  { name: 'Calculator', href: '/calculator' },
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { cart, isOpen, setIsOpen, updateQuantity, removeFromCart, cartTotal, cartCount } = useCart()

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        
        {/* Logo */}
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-2">
            <div className="h-8 w-8 bg-indigo-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">E</span>
            </div>
            <span className="font-bold text-xl text-gray-900">EcommercePro</span>
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex gap-x-12">
          {navigationItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="relative text-sm font-semibold text-gray-900 hover:text-indigo-600 transition-colors py-1 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-indigo-600 after:transition-all after:duration-350 hover:after:w-full"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* CTA Button and Cart Icon */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:items-center lg:gap-6">
          {/* Cart Icon */}
          <button
            onClick={() => setIsOpen(true)}
            className="relative p-2 text-gray-700 hover:text-indigo-600 transition-colors"
            type="button"
          >
            <span className="sr-only">View cart</span>
            <ShoppingBagIcon className="h-6 w-6" aria-hidden="true" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-indigo-600 text-[10px] font-bold text-white shadow-sm ring-2 ring-white">
                {cartCount}
              </span>
            )}
          </button>

          <Link href="/#products" className="rounded-md bg-indigo-600 px-6 py-2 text-sm font-semibold text-white hover:bg-indigo-700 transition-colors">
            Shop Now
          </Link>
        </div>

        {/* Mobile controls (Cart + Menu burger) */}
        <div className="flex items-center gap-4 lg:hidden">
          {/* Cart Icon Mobile */}
          <button
            onClick={() => setIsOpen(true)}
            className="relative p-2 text-gray-700 hover:text-indigo-600 transition-colors"
            type="button"
          >
            <span className="sr-only">View cart</span>
            <ShoppingBagIcon className="h-6 w-6" aria-hidden="true" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-indigo-600 text-[10px] font-bold text-white shadow-sm ring-2 ring-white">
                {cartCount}
              </span>
            )}
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>

      </nav>

      {/* Mobile Menu */}
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-2" onClick={() => setMobileMenuOpen(false)}>
              <div className="h-8 w-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">E</span>
              </div>
              <span className="font-bold text-lg">EcommercePro</span>
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigationItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="py-6">
                <Link
                  href="/#products"
                  className="block text-center rounded-md bg-indigo-600 px-6 py-2 text-sm font-semibold text-white hover:bg-indigo-700 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Shop Now
                </Link>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>

      {/* Shopping Cart Drawer Dialog */}
      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
        {/* Backdrop */}
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity" />

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <DialogPanel className="pointer-events-auto w-screen max-w-md transform bg-white shadow-2xl transition-all duration-300">
                <div className="flex h-full flex-col overflow-y-scroll bg-white">
                  
                  {/* Cart Header */}
                  <div className="flex items-center justify-between border-b border-gray-100 px-6 py-6 sm:px-8">
                    <DialogTitle className="text-lg font-bold text-gray-900">
                      Shopping Cart ({cartCount})
                    </DialogTitle>
                    <button
                      type="button"
                      onClick={() => setIsOpen(false)}
                      className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                    >
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>

                  {/* Cart Items List */}
                  <div className="flex-1 overflow-y-auto px-6 py-6 sm:px-8">
                    {cart.length > 0 ? (
                      <div className="space-y-6">
                        {cart.map((item) => (
                          <div key={item.id} className="flex gap-4 border-b border-gray-50 pb-6">
                            
                            {/* Emoji preview */}
                            <div className="h-16 w-16 flex-shrink-0 flex items-center justify-center rounded-lg bg-gray-50 border border-gray-100 text-3xl">
                              {item.images[0]}
                            </div>

                            {/* Item metadata */}
                            <div className="flex-1 flex flex-col justify-between">
                              <div>
                                <div className="flex justify-between text-sm font-bold text-gray-900">
                                  <Link href={`/products/${item.slug}`} onClick={() => setIsOpen(false)} className="hover:text-indigo-600 transition-colors">
                                    {item.name}
                                  </Link>
                                  <p className="ml-4">{item.price}</p>
                                </div>
                                <p className="mt-1 text-xs text-gray-500">{item.category}</p>
                              </div>

                              <div className="flex items-center justify-between mt-2">
                                {/* Quantity Selector */}
                                <div className="flex items-center border border-gray-200 rounded-md overflow-hidden bg-white text-xs">
                                  <button
                                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                    className="px-2 py-1 text-gray-500 hover:bg-gray-50 font-bold"
                                  >
                                    −
                                  </button>
                                  <span className="px-3 py-1 text-gray-800 font-semibold min-w-[30px] text-center">
                                    {item.quantity}
                                  </span>
                                  <button
                                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                    className="px-2 py-1 text-gray-500 hover:bg-gray-50 font-bold"
                                  >
                                    +
                                  </button>
                                </div>

                                {/* Remove Button */}
                                <button
                                  type="button"
                                  onClick={() => removeFromCart(item.id)}
                                  className="text-xs font-bold text-red-500 hover:text-red-700 flex items-center gap-1.5"
                                >
                                  <TrashIcon className="h-4 w-4" />
                                  Remove
                                </button>
                              </div>
                            </div>

                          </div>
                        ))}
                      </div>
                    ) : (
                      /* Empty Cart View */
                      <div className="h-full flex flex-col items-center justify-center text-center py-20">
                        <span className="text-5xl mb-4">🛒</span>
                        <h3 className="text-base font-bold text-gray-900">Your cart is empty</h3>
                        <p className="mt-1 text-xs text-gray-500 max-w-[250px] mx-auto leading-relaxed">
                          Add premium products to your cart to see them listed here.
                        </p>
                        <button
                          onClick={() => {
                            setIsOpen(false)
                          }}
                          className="mt-6 inline-flex items-center justify-center rounded-xl bg-indigo-600 px-6 py-2.5 text-xs font-bold text-white shadow-md hover:bg-indigo-700 transition-colors"
                        >
                          Shop All Products
                        </button>
                      </div>
                    )}
                  </div>

                  {/* Summary Checkout Block */}
                  {cart.length > 0 && (
                    <div className="border-t border-gray-100 bg-gray-50 px-6 py-6 sm:px-8 space-y-4">
                      <div className="flex justify-between text-base font-bold text-gray-900">
                        <p>Subtotal</p>
                        <p>${cartTotal.toFixed(2)}</p>
                      </div>
                      <p className="text-xs text-gray-500">Shipping and taxes calculated at checkout.</p>
                      <div>
                        <button
                          onClick={() => alert(`Simulating checkout redirect for $${cartTotal.toFixed(2)} USD`)}
                          className="w-full flex items-center justify-center rounded-xl bg-indigo-600 px-6 py-3.5 font-bold text-white shadow-lg hover:shadow-xl hover:bg-indigo-700 transition-colors text-sm"
                        >
                          Checkout Now
                        </button>
                      </div>
                      <div className="flex justify-center text-center text-xs text-gray-500">
                        <p>
                          or{' '}
                          <button
                            type="button"
                            className="font-bold text-indigo-600 hover:text-indigo-500"
                            onClick={() => setIsOpen(false)}
                          >
                            Continue Shopping
                            <span aria-hidden="true"> &rarr;</span>
                          </button>
                        </p>
                      </div>
                    </div>
                  )}

                </div>
              </DialogPanel>
            </div>
          </div>
        </div>
      </Dialog>
    </header>
  )
}
