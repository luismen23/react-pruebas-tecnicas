import './App.css'
import { CreateNewUser } from './components/CreateNewUser'
import ListOfUsers from './components/ListOfUsers'
import { Toaster } from 'sonner'

function App() {
  return (
    <div className='bg-slate-950 text-slate-50 h-full overflow-hidden'>
      <ListOfUsers />
      <CreateNewUser />
      <Toaster richColors />
    </div>
  )
}

export default App
