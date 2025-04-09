import { useCart } from '@/hooks/useCart'
import { LucideShoppingCart, LucideTrash } from 'lucide-react'
import { ProductsTypes } from '@/interfaces/interfaces'

const RatingStars = ({ rating }: { rating: number }) => {
  const totalStars = 5
  const fullStars = Math.floor(rating)
  const halfStar = rating % 1 >= 0.5
  const emptyStars = totalStars - fullStars - (halfStar ? 1 : 0)

  return (
    <div className='flex items-center'>
      {[...Array(fullStars)].map((_, i) => (
        <svg
          key={`full-${i}`}
          className='w-4 h-4 text-yellow-400 fill-current'
          viewBox='0 0 20 20'
        >
          <path d='M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z' />
        </svg>
      ))}
      {halfStar && (
        <svg
          key='half'
          className='w-4 h-4 text-yellow-400 fill-current'
          viewBox='0 0 20 20'
        >
          {' '}
          {/* Idealmente usar un ícono de media estrella */}
          <path d='M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0v15z' />
        </svg>
      )}
      {[...Array(emptyStars)].map((_, i) => (
        <svg
          key={`empty-${i}`}
          className='w-4 h-4 text-gray-600 fill-current'
          viewBox='0 0 20 20'
        >
          <path d='M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z' />
        </svg>
      ))}
    </div>
  )
}

export function Products({ products }: { products: ProductsTypes[] }) {
  const { addToCart, removeFromCart, cart } = useCart()

  const checkProductInCart = (product: ProductsTypes) => {
    return cart.some(item => item.id === product.id)
  }

  return (
    // Contenedor principal con fondo oscuro
    <div>
      {/* Grid responsivo para los productos */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8'>
        {products.slice(0, 10).map(product => {
          const isProductInCart = checkProductInCart(product)
          return (
            // Card individual del producto
            <div
              key={product.id}
              className='bg-gray-800 rounded-lg shadow-lg overflow-hidden border border-gray-700 
                       flex flex-col items-center p-6 transition-transform transform hover:scale-[1.02] hover:shadow-cyan-500/30'
            >
              {/* Enlace en la imagen */}
              <a
                href={product.product_url}
                target='_blank'
                rel='noopener noreferrer'
                className='block'
              >
                <img
                  src={product.image_url}
                  alt={`Image of ${product.title}`}
                  className='w-[20rem] h-[20rem] border rounded-md opacity-85' // Altura fija para consistencia visual
                  loading='lazy' // Carga diferida para imágenes
                />
              </a>

              {/* Contenido de la card */}
              <div className='p-4 flex flex-col flex-grow'>
                {/* Título (enlazado) */}
                <h2
                  className='text-lg font-semibold text-gray-100 mb-1 min-h-[2.5em] line-clamp-2'
                  title={product.title}
                >
                  <a
                    href={product.product_url}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='hover:text-teal-300 transition-colors'
                  >
                    {product.title}
                  </a>
                </h2>
                {/* Marca */}
                <p className='text-sm text-purple-300 mb-3'>
                  {product.brand} -{' '}
                  <span className='opacity-50'>{product.category}</span>
                </p>{' '}
                {/* Color pastel para la marca */}
                {/* Espaciador para empujar precio y rating hacia abajo */}
                <div className='mt-auto pt-2'>
                  {/* Precio */}
                  <p className='text-xl font-bold text-cyan-400 mb-2'>
                    ${product.price}
                  </p>{' '}
                  {/* Color principal tipo 'tech' */}
                  {/* Rating y número de reviews */}
                  <div className='flex items-center justify-between text-xs'>
                    <div className='flex items-center gap-1'>
                      <RatingStars rating={product.rating} />
                      <span className='text-gray-400'>
                        ({product.rating.toFixed(1)})
                      </span>{' '}
                      {/* Muestra el número de rating */}
                    </div>
                    <div className='flex items-center'>
                      <span className='text-gray-500 pr-5'>
                        {product.reviews_count.toLocaleString()} reviews
                      </span>
                      <button
                        className={`text-2xl cursor-pointer hover:scale-110 ${
                          isProductInCart ? 'text-red-500' : 'text-cyan-400'
                        }`}
                        onClick={() =>
                          isProductInCart
                            ? removeFromCart(product)
                            : addToCart(product)
                        }
                      >
                        {isProductInCart ? (
                          <LucideTrash size={35} />
                        ) : (
                          <LucideShoppingCart size={35} />
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
