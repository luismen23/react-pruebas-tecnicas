import { Link } from '../Link'

export default function About() {
  return (
    <>
      <h1>About</h1>
      <div>
        <img
          src='https://pbs.twimg.com/profile_images/1618663013631856654/0qDVNadB_400x400.jpg'
          alt='Luis Mendoza picture'
        />
        <p>Hi! I'm Luis Mendoza, and I'm creating a clone of React Router.</p>
      </div>
      <Link to='/'>Home</Link>
    </>
  )
}
