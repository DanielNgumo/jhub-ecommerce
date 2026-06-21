'use client'

import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigationItems = [
  { name: 'Products', href: '#products' },
  { name: 'Why Us', href: '#why-us' },
  { name: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        {/* Logo */}
        <div className="flex items-center">
          <a href="#" className="-m-1.5 p-1.5 flex items-center gap-2">
            <div className="h-8 w-8 bg-indigo-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">E</span>
            </div>
            <span className="font-bold text-xl text-gray-900">EcommercePro</span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex gap-x-12">
          {navigationItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-semibold text-gray-900 hover:text-indigo-600 transition-colors"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* CTA Button and Mobile Menu */}
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <button className="rounded-md bg-indigo-600 px-6 py-2 text-sm font-semibold text-white hover:bg-indigo-700 transition-colors">
            Get Started
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5 flex items-center gap-2">
              <div className="h-8 w-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">E</span>
              </div>
              <span className="font-bold text-lg">EcommercePro</span>
            </a>
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
                  <a
                    key={item.name}
                    href={item.href}
                    className="block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="py-6">
                <button className="w-full rounded-md bg-indigo-600 px-6 py-2 text-sm font-semibold text-white hover:bg-indigo-700 transition-colors">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}
