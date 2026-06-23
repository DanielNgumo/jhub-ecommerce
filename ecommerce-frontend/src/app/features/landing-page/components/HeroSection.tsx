import { ArrowRightIcon } from '@heroicons/react/24/solid'

export default function HeroSection() {
  return (
    <section id="hero" className="relative overflow-hidden bg-gradient-to-br from-indigo-50 to-blue-50 py-20 sm:py-32 lg:py-48">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-indigo-200 opacity-20 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-blue-200 opacity-20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          {/* Content */}
          <div className="text-center lg:text-left" data-aos="fade-up">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Welcome to <span className="text-indigo-600">EcommercePro</span>
            </h1>
            <p className="mt-6 text-lg text-gray-600">
              Discover premium products handpicked just for you. Experience quality, affordability, and exceptional customer service all in one place.
            </p>
            
            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="rounded-md bg-indigo-600 px-8 py-3 text-lg font-semibold text-white hover:bg-indigo-700 transition-colors shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
                Shop Now
                <ArrowRightIcon className="h-5 w-5" />
              </button>
              <button className="rounded-md border-2 border-indigo-600 px-8 py-3 text-lg font-semibold text-indigo-600 hover:bg-indigo-50 transition-colors">
                Learn More
              </button>
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 gap-8">
              <div data-aos="fade-up" data-aos-delay="100">
                <p className="text-3xl font-bold text-gray-900">10K+</p>
                <p className="text-gray-600 text-sm mt-2">Happy Customers</p>
              </div>
              <div data-aos="fade-up" data-aos-delay="200">
                <p className="text-3xl font-bold text-gray-900">500+</p>
                <p className="text-gray-600 text-sm mt-2">Products</p>
              </div>
              <div data-aos="fade-up" data-aos-delay="300">
                <p className="text-3xl font-bold text-gray-900">24/7</p>
                <p className="text-gray-600 text-sm mt-2">Support</p>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="flex justify-center lg:justify-end" data-aos="fade-left" data-aos-delay="400">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-2xl blur-xl opacity-30" />
              <div className="relative bg-gradient-to-br from-indigo-500 to-blue-600 rounded-2xl p-8 shadow-2xl">
                <div className="aspect-square bg-white/10 rounded-xl flex items-center justify-center">
                  <svg className="h-32 w-32 text-white opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4l1-12z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
