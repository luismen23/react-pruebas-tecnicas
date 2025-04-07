import Filters from './Filters'

function Header() {
  return (
    <header className='flex justify-between items-center w-full text-center mb-10 '>
      <div className=' '>
        <Filters />
      </div>
      <h1 className='text-3xl sm:text-4xl font-bold text-center  text-teal-300'>
        Our Products
      </h1>
    </header>
  )
}

export default Header
