import './App.css'
import { CreateNewUser } from './components/CreateNewUser'
import ListOfUsers from './components/ListOfUsers'

function App() {
  return (
    <div className='bg-slate-950 text-slate-50 h-full overflow-hidden'>
      <ListOfUsers />
      <CreateNewUser />
    </div>
  )
}

export default App
