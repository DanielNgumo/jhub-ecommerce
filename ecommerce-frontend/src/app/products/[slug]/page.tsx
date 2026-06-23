import { notFound } from 'next/navigation'
import Link from 'next/link'
import { products, type Product } from '@/data/products'
import { StarIcon, ShieldCheckIcon, TruckIcon, ArrowPathIcon } from '@heroicons/react/24/solid'
import ProductActions from './components/ProductActions'
import ProductCarousel from './components/ProductCarousel'

interface PageProps {
  params: Promise<{ slug: string }>
}

const renderStars = (rating: number) => {
  return Array.from({ length: 5 }, (_, i) => (
    <StarIcon
      key={i}
      className={`h-5 w-5 ${
        i < rating ? 'text-yellow-400' : 'text-gray-300'
      }`}
    />
  ))
}

const getCategoryGradient = (category: string) => {
  switch (category.toLowerCase()) {
    case 'electronics':
      return 'from-blue-600 to-indigo-700 text-white'
    case 'footwear':
      return 'from-amber-500 to-orange-600 text-white'
    case 'accessories':
      return 'from-purple-600 to-pink-700 text-white'
    case 'kitchen':
      return 'from-emerald-500 to-teal-700 text-white'
    default:
      return 'from-indigo-600 to-blue-700 text-white'
  }
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { slug } = await params
  const product = products.find((p) => p.slug === slug)

  if (!product) {
    notFound()
  }

  // Get similar products in same category first, fallback to any other products
  let relatedProducts = products.filter(
    (p) => p.slug !== product.slug && p.category === product.category
  )
  if (relatedProducts.length === 0) {
    relatedProducts = products.filter((p) => p.slug !== product.slug).slice(0, 3)
  } else {
    relatedProducts = relatedProducts.slice(0, 3)
  }

  // Calculate discount percent
  const priceNum = parseFloat(product.price.replace('$', ''))
  const origPriceNum = parseFloat(product.originalPrice.replace('$', ''))
  const discountPercent = Math.round(((origPriceNum - priceNum) / origPriceNum) * 100)

  return (
    <div className="bg-gray-50 py-8 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumbs */}
        <nav className="mb-8 flex text-sm text-gray-500 font-medium">
          <Link href="/" className="hover:text-indigo-600 transition-colors">Home</Link>
          <span className="mx-2 text-gray-400">/</span>
          <Link href="/#products" className="hover:text-indigo-600 transition-colors">Products</Link>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-gray-900 font-semibold">{product.name}</span>
        </nav>

        {/* Product Showcase */}
        <div className="grid gap-12 lg:grid-cols-2 bg-white rounded-3xl p-6 sm:p-10 shadow-lg border border-gray-100">
          
          {/* Left Column: Product Image Display with Carousel */}
          <div className="flex flex-col justify-between">
            <div className="relative">
              <ProductCarousel images={product.images} category={product.category} />
              {/* Sale badge */}
              <div className="absolute top-4 right-4 bg-red-500 px-4 py-1.5 rounded-full text-sm font-extrabold uppercase tracking-wide shadow-md text-white animate-pulse z-10">
                Sale -{discountPercent}%
              </div>
            </div>

            {/* Micro Trust Badges */}
            <div className="mt-8 grid grid-cols-3 gap-4 border-t border-gray-100 pt-8">
              <div className="flex flex-col items-center text-center p-3 rounded-xl bg-gray-50">
                <TruckIcon className="h-6 w-6 text-indigo-600 mb-2" />
                <span className="text-xs font-bold text-gray-900">Free Delivery</span>
                <span className="text-[10px] text-gray-500 mt-1">Orders over $50</span>
              </div>
              <div className="flex flex-col items-center text-center p-3 rounded-xl bg-gray-50">
                <ShieldCheckIcon className="h-6 w-6 text-indigo-600 mb-2" />
                <span className="text-xs font-bold text-gray-900">Secure Checkout</span>
                <span className="text-[10px] text-gray-500 mt-1">SSL Encrypted</span>
              </div>
              <div className="flex flex-col items-center text-center p-3 rounded-xl bg-gray-50">
                <ArrowPathIcon className="h-6 w-6 text-indigo-600 mb-2" />
                <span className="text-xs font-bold text-gray-900">Easy Returns</span>
                <span className="text-[10px] text-gray-500 mt-1">30 days warranty</span>
              </div>
            </div>
          </div>

          {/* Right Column: Content & Actions */}
          <div className="flex flex-col justify-between space-y-8">
            <div>
              {/* Tag and Title */}
              <span className="text-xs font-extrabold tracking-widest text-indigo-600 uppercase bg-indigo-50 px-3 py-1.5 rounded-md">
                {product.category}
              </span>
              <h1 className="mt-4 text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight">
                {product.name}
              </h1>

              {/* Rating and Reviews */}
              <div className="mt-4 flex items-center gap-3">
                <div className="flex">
                  {renderStars(product.rating)}
                </div>
                <span className="text-sm font-semibold text-gray-600">
                  {product.rating}.0 ({product.reviews} reviews)
                </span>
              </div>

              {/* Price Row */}
              <div className="mt-6 flex items-baseline gap-4 border-b border-gray-100 pb-6">
                <span className="text-4xl font-black text-gray-900">
                  {product.price}
                </span>
                <span className="text-lg text-gray-400 line-through">
                  {product.originalPrice}
                </span>
                <span className="text-sm font-bold text-red-500 uppercase tracking-wider bg-red-50 px-2.5 py-1 rounded-md">
                  Save {((origPriceNum - priceNum)).toFixed(2)} USD
                </span>
              </div>

              {/* Description */}
              <div className="mt-6 text-gray-600 leading-relaxed text-base">
                {product.description}
              </div>
            </div>

            {/* Interactive Actions Component (Client Component) */}
            <ProductActions product={product} />

            {/* Key Features / Specs */}
            <div className="border-t border-gray-100 pt-6">
              <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4">Key Features</h3>
              <ul className="grid gap-3 sm:grid-cols-2">
                {product.features.map((feature, i) => (
                  <li key={i} className="flex items-start text-sm text-gray-600">
                    <span className="text-green-500 font-bold mr-2">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Product Specifications Table */}
            <div className="border-t border-gray-100 pt-6">
              <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4">Specifications</h3>
              <div className="bg-gray-50 rounded-xl overflow-hidden border border-gray-100">
                <table className="min-w-full divide-y divide-gray-200">
                  <tbody className="divide-y divide-gray-200">
                    {Object.entries(product.details).map(([key, val]) => (
                      <tr key={key}>
                        <td className="px-6 py-3 text-sm font-medium text-gray-500 bg-gray-100/50 w-1/3">{key}</td>
                        <td className="px-6 py-3 text-sm text-gray-900">{val}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        </div>

        {/* Similar / Related Products */}
        <div className="mt-20">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight mb-8">
            You May Also Like
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {relatedProducts.map((item) => (
              <article
                key={item.id}
                className="group relative overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-gray-100"
              >
                {/* Image */}
                <div className={`relative flex h-52 items-center justify-center bg-gradient-to-br ${getCategoryGradient(item.category)}`}>
                  <span className="text-7xl transition-transform duration-300 group-hover:scale-110">
                    {item.images[0]}
                  </span>
                </div>
                {/* Info */}
                <div className="p-5">
                  <span className="text-xs font-semibold uppercase tracking-wider text-indigo-600">
                    {item.category}
                  </span>
                  <h3 className="mt-1 text-base font-bold text-gray-900 line-clamp-1">
                    {item.name}
                  </h3>
                  <div className="mt-3 flex justify-between items-baseline">
                    <div className="flex items-baseline gap-2">
                      <span className="text-lg font-extrabold text-gray-900">{item.price}</span>
                      <span className="text-xs text-gray-400 line-through">{item.originalPrice}</span>
                    </div>
                    <Link
                      href={`/products/${item.slug}`}
                      className="text-xs font-bold text-indigo-600 hover:text-indigo-800 transition-colors uppercase tracking-wider"
                    >
                      View Details &rarr;
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}
