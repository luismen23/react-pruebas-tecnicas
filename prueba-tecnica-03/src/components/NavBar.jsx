import Form from './Form'

function NavBar() {
  return (
    <div className='navbar bg-base-300 shadow-sm'>
      <div className='flex-1'>
        <a className='btn btn-ghost text-[1rem] sm:text-xl'>Toku TV</a>
      </div>
      <Form />
    </div>
  )
}

export default NavBar
