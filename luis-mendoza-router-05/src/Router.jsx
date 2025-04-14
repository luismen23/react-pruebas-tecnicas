import { useState } from 'react'
import { EVENTS } from '../consts'
import { useEffect } from 'react'
import { match } from 'path-to-regexp'
import { Children } from 'react'
import { getCurrentPath } from './utils'

export function Router({
  children,
  routes = [],
  // eslint-disable-next-line no-unused-vars
  defaultComponent: DefaultComponent = () => <h1>404</h1>,
}) {
  const [currenPath, setCurrentPath] = useState(getCurrentPath())

  useEffect(() => {
    //subscribe to the event created
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname)
    }

    //onLocationChange callback will be extecuted every time we have the NAVIGATION_EVENT
    window.addEventListener(EVENTS.PUSHSTATE, onLocationChange)
    window.addEventListener(EVENTS.POPSTATE, onLocationChange)

    //clear event
    return () => {
      window.removeEventListener(EVENTS.PUSHSTATE, onLocationChange)
      window.removeEventListener(EVENTS.POPSTATE, onLocationChange)
    }
  }, [])

  let routeParams = {}

  // add routes from children <Route  /> components
  const routesFromChildren = Children.map(children, ({ props, type }) => {
    const { name } = type
    const isRoute = name === 'Route'

    //IF not is a route
    if (!isRoute) return null

    // if is a route
    return props
  })

  const routesToUse = routes.concat(routesFromChildren).filter(Boolean)

  const Page = routesToUse.find(({ path }) => {
    if (path === currenPath) return true

    // look if the url has match, it returns another function that we need to compare with the currentPath(matcherUrl)
    // decode decodify the path
    // we have used path-to-regexp to could detect dynamics routes like /search/:query/
    const matcherUrl = match(path, { decode: decodeURIComponent })
    const matched = matcherUrl(currenPath)
    if (!matched) return false

    // save the url's params that were dynamic and we extracted with regex
    routeParams = matched.params // {query: 'javascript'}
    return true
  })?.Component
  return Page ? (
    <Page routeParams={routeParams} />
  ) : (
    <DefaultComponent routeParams={routeParams} />
  )
}
