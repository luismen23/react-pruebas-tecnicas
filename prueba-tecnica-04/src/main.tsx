import App from './App'
import './style.css'
import { createRoot } from 'react-dom/client'
import { FiltersProvider } from './context/filters'

const rootElement = document.getElementById('app')
if (!rootElement) throw new Error('Failed to find the root element')
const root = createRoot(rootElement)
root.render(
  <FiltersProvider>
    <App />
  </FiltersProvider>
)
