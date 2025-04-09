import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { useCart } from '@/hooks/useCart'
import { PlusIcon, ShoppingCartIcon, TrashIcon } from 'lucide-react'

function CartItem({
  price,
  id,
  image_url,
  title,
  quantity,
  addToCart,
}: {
  price: number
  id: string
  image_url: string
  title: string
  quantity: number
  addToCart: () => void
}) {
  return (
    <li className='bg-gray-300 w-[200px] flex flex-col items-center p-5 border rounded-md border-cyan-300'>
      <img
        src={image_url}
        alt={title}
        className='rounded-md border h-[100px] w-[120px]'
      />
      <div>
        <strong className='text-xs'>{title}</strong> - ${price}
      </div>

      <footer className='flex items-center gap-2 bg-cyan-200 px-2 py-1 mt-2 border rounded-md'>
        <span className='text-sm font-semibold'>Qty: {quantity}</span>
        <button
          onClick={addToCart}
          className='bg-cyan-300 p-1 border rounded-md '
        >
          <PlusIcon className='cursor-pointer hover:scale-110' />
        </button>
      </footer>
    </li>
  )
}

export function CartSheet() {
  const { cart, clearCart, addToCart } = useCart()

  return (
    <div>
      <Sheet>
        <SheetTrigger>
          <ShoppingCartIcon
            size={30}
            className='text-white hover:scale-110 cursor-pointer'
          />
        </SheetTrigger>
        <SheetContent className='overflow-scroll'>
          <SheetHeader>
            <SheetTitle>Cart</SheetTitle>
            <SheetDescription>Add or remove your items.</SheetDescription>
          </SheetHeader>
          <aside className='flex flex-col items-center justify-between h-full gap-3'>
            <ul className='flex flex-col items-center gap-5'>
              {cart.map(product => (
                <CartItem
                  key={product.id}
                  addToCart={() => addToCart(product)}
                  {...product}
                />
              ))}
            </ul>
            <button>
              <TrashIcon
                onClick={clearCart}
                size={30}
                className='hover:scale-110 cursor-pointer text-red-500 mb-10'
              />
            </button>
          </aside>
        </SheetContent>
      </Sheet>
    </div>
  )
}
