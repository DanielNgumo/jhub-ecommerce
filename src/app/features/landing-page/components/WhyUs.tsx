import { CheckCircleIcon, TruckIcon, ShieldCheckIcon, SparklesIcon } from '@heroicons/react/24/solid'

const reasons = [
  {
    title: 'Premium Quality',
    description: 'All our products are carefully selected and tested to ensure the highest quality standards.',
    icon: SparklesIcon
  },
  {
    title: 'Fast Shipping',
    description: 'Free shipping on orders over $50 with quick delivery times to your doorstep.',
    icon: TruckIcon
  },
  {
    title: 'Secure Shopping',
    description: 'Your data is protected with industry-leading encryption and security measures.',
    icon: ShieldCheckIcon
  },
  {
    title: 'Guaranteed Satisfaction',
    description: '100% satisfaction guarantee with easy returns within 30 days, no questions asked.',
    icon: CheckCircleIcon
  }
]

export default function WhyUs() {
  return (
    <section id="why-us" className="py-20 sm:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Why Choose EcommercePro?
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            We're committed to providing you with the best shopping experience
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason, index) => {
            const Icon = reason.icon
            return (
              <div key={index} className="relative group">
                {/* Background hover effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Content */}
                <div className="relative p-8 text-center">
                  {/* Icon */}
                  <div className="flex justify-center mb-4">
                    <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-indigo-100 group-hover:bg-indigo-600 transition-colors duration-300">
                      <Icon className="h-8 w-8 text-indigo-600 group-hover:text-white transition-colors duration-300" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {reason.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed">
                    {reason.description}
                  </p>
                </div>

                {/* Border effect */}
                <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-indigo-200 transition-colors duration-300" />
              </div>
            )
          })}
        </div>

        {/* Trust Badges */}
        <div className="mt-16 pt-12 border-t border-gray-200">
          <p className="text-center text-gray-600 text-sm uppercase tracking-wider font-semibold mb-8">
            Trusted by thousands of customers
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
            <div className="text-center">
              <div className="text-4xl font-bold text-indigo-600">10K+</div>
              <p className="text-sm text-gray-600 mt-2">Active Users</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-indigo-600">4.9★</div>
              <p className="text-sm text-gray-600 mt-2">Average Rating</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-indigo-600">99%</div>
              <p className="text-sm text-gray-600 mt-2">Satisfaction</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-indigo-600">24/7</div>
              <p className="text-sm text-gray-600 mt-2">Customer Support</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
