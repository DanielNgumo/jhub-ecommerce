import { FaceSmileIcon, LightBulbIcon, HeartIcon, TrophyIcon } from '@heroicons/react/24/solid'

const values = [
  {
    title: 'Customer Obsession',
    description: 'We place our customers at the center of everything we do, ensuring absolute delight at every touchpoint.',
    icon: FaceSmileIcon,
    color: 'from-blue-500 to-indigo-500',
  },
  {
    title: 'Endless Innovation',
    description: 'We constantly challenge ourselves to design products that push the limits of convenience and technology.',
    icon: LightBulbIcon,
    color: 'from-amber-500 to-orange-500',
  },
  {
    title: 'Ethical Sourcing',
    description: 'Our materials are responsibly selected and manufactured with full transparency and eco-friendly practices.',
    icon: HeartIcon,
    color: 'from-red-500 to-pink-500',
  },
  {
    title: 'Award-Winning Quality',
    description: 'Each product undergoes rigorous multi-step testing to exceed industry benchmarks for durability.',
    icon: TrophyIcon,
    color: 'from-emerald-500 to-teal-500',
  },
]

export default function AboutUs() {
  return (
    <section id="about-us" className="py-20 sm:py-32 bg-white relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-100/30 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl -z-10" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-20" data-aos="fade-up">
          <span className="text-xs font-extrabold tracking-widest text-indigo-600 uppercase bg-indigo-50 px-3 py-1.5 rounded-md">
            Our Story
          </span>
          <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            About EcommercePro
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            We are innovators, designers, and curators passionate about crafting a seamless shopping experience and premium quality products.
          </p>
        </div>

        {/* Brand Narrative & Image Layout */}
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center mb-24">
          
          {/* Narrative Text */}
          <div className="space-y-6" data-aos="fade-right">
            <h3 className="text-2xl font-bold text-gray-900 sm:text-3xl leading-snug">
              Designing the future of digital commerce, one detail at a time.
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Founded in 2022, EcommercePro started with a simple belief: high-end, premium quality products shouldn't come with an inflated price tag. We cut out the middleman and worked directly with ethical factories to source premium electronics, footwear, and accessories.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Every item in our collection is curated by our design team, testing everything from structural integrity to ergonomic usability. Today, we are proud to serve over 10,000 customers globally, shipping premium experiences straight to their doorstep.
            </p>
            <div className="pt-4 flex gap-6">
              <div>
                <p className="text-3xl font-extrabold text-indigo-600">99.8%</p>
                <p className="text-sm text-gray-500 font-semibold mt-1">Satisfaction Rate</p>
              </div>
              <div className="border-l border-gray-200 pl-6">
                <p className="text-3xl font-extrabold text-indigo-600">2M+</p>
                <p className="text-sm text-gray-500 font-semibold mt-1">Products Delivered</p>
              </div>
            </div>
          </div>

          {/* Visual Showcase Card */}
          <div className="relative" data-aos="fade-left">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-3xl blur-2xl opacity-20" />
            <div className="relative bg-gradient-to-br from-indigo-600 to-blue-700 rounded-3xl p-8 text-white shadow-2xl overflow-hidden min-h-[350px] flex flex-col justify-between">
              
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full blur-xl" />
              <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-black/20 rounded-full blur-xl" />

              <div>
                <span className="text-sm font-bold uppercase tracking-wider text-indigo-200">Our Vision</span>
                <blockquote className="mt-4 text-xl sm:text-2xl font-semibold leading-relaxed text-indigo-50">
                  "To build a brand where quality is non-negotiable, customer delight is standard, and conscious sustainability leads the way forward."
                </blockquote>
              </div>

              <div className="flex items-center gap-4 border-t border-white/20 pt-6 mt-6">
                <div className="h-12 w-12 bg-white/20 rounded-full flex items-center justify-center font-bold text-lg text-white backdrop-blur-sm">
                  DN
                </div>
                <div>
                  <h4 className="font-bold text-white text-base">Daniel Ngumo</h4>
                  <p className="text-xs text-indigo-200">Founder & CEO, EcommercePro</p>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Core Values Grid */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12 sm:text-3xl" data-aos="fade-up">
            Our Core Values
          </h3>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((val, i) => {
              const Icon = val.icon
              return (
                <div
                  key={i}
                  className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-all duration-300 group"
                  data-aos="fade-up"
                  data-aos-delay={i * 100}
                >
                  <div className={`h-12 w-12 rounded-xl bg-gradient-to-br ${val.color} text-white flex items-center justify-center shadow-md mb-6 transform transition-transform group-hover:scale-110 duration-300`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{val.title}</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">{val.description}</p>
                </div>
              )
            })}
          </div>
        </div>

      </div>
    </section>
  )
}
