import Form from './Form'

const API_KEY = '23da9034'
const API_URL = `https://www.omdbapi.com/?apikey=${API_KEY}&s=avenger`

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
