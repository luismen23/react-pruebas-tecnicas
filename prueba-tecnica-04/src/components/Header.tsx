import { CartSheet, Filters } from './'

export function Header() {
  return (
    <header className='flex justify-between items-center w-full text-center mb-10 '>
      <h1 className='text-3xl sm:text-4xl font-bold text-center  text-white'>
        Shop
      </h1>
      <div className='flex items-center gap-7'>
        <Filters />
        <CartSheet />
      </div>
    </header>
  )
}
