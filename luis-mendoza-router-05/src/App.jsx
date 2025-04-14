import { lazy } from 'react'
import { Router } from './Router'
import { Page404 } from './pages/Page404'
import SearchPage from './pages/Search'
import Route from './Route'
import { Suspense } from 'react'

const LazyAbout = lazy(() => import('./pages/About'))
const LazyHome = lazy(() => import('./pages/Home'))

const routes = [
  {
    path: '/search/:query',
    Component: SearchPage,
  },
]

function App() {
  return (
    <main>
      <Suspense fallback={<div>Loading ...</div>}>
        <Router routes={routes} defaultComponent={Page404}>
          <Route path='/' Component={LazyHome} />
          <Route path='/about' Component={LazyAbout} />
        </Router>
      </Suspense>
    </main>
  )
}

export default App
