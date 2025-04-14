import { Link } from '../Link'

export default function Home() {
  return (
    <>
      <h1>Home</h1>
      <p>Simple page to show how React Router works</p>
      <Link to='/about'>About</Link>
    </>
  )
}
