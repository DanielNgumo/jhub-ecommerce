import { EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/outline'

export default function Footer() {
  return (
    <footer id="footer" className="bg-gray-900 text-gray-300">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid gap-8 md:grid-cols-4">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-8 w-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">E</span>
              </div>
              <span className="font-bold text-lg text-white">EcommercePro</span>
            </div>
            <p className="text-sm text-gray-400">
              Your trusted destination for quality products and exceptional shopping experiences.
            </p>
            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-2 text-sm">
                <MapPinIcon className="h-5 w-5 text-indigo-400" />
                <span>123 Commerce Street, NY 10001</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <EnvelopeIcon className="h-5 w-5 text-indigo-400" />
                <span>support@ecommercepro.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#products" className="text-sm hover:text-white transition-colors">Products</a></li>
              <li><a href="#why-us" className="text-sm hover:text-white transition-colors">Why Us</a></li>
              <li><a href="#contact" className="text-sm hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="text-sm hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="text-sm hover:text-white transition-colors">Track Order</a></li>
              <li><a href="#" className="text-sm hover:text-white transition-colors">Returns</a></li>
              <li><a href="#" className="text-sm hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-sm hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-sm hover:text-white transition-colors">Shipping Info</a></li>
              <li><a href="#" className="text-sm hover:text-white transition-colors">Sitemap</a></li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800 py-8">
          <div className="grid gap-6 md:grid-cols-2 md:items-center">
            {/* Copyright */}
            <p className="text-sm text-gray-400">
              &copy; 2024 EcommercePro. All rights reserved.
            </p>

            {/* Social Links */}
            <div className="flex gap-6 md:justify-end">
              <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors" title="Facebook">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5c-.563-.074-1.396-.146-2.779-.146-2.762 0-4.671 1.657-4.671 4.707v1.667z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors" title="Twitter">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors" title="Instagram">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="2"/>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" fill="none" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors" title="LinkedIn">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
