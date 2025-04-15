import { EVENTS, BUTTONS } from './consts'

// eslint-disable-next-line react-refresh/only-export-components
export function navigate(href) {
  //change the url without recharge all the content page
  window.history.pushState({}, '', href)

  // create personalized event
  const navigationEvent = new Event(EVENTS.PUSHSTATE)

  //send or dispatch the event
  window.dispatchEvent(navigationEvent)
}
// crating Link component as react router
export function Link({ target, to, ...props }) {
  const handleClick = event => {
    //checks if is the principal button (left click or primary click)
    const isMainEvent = event.button === BUTTONS.PRIMARY // primary click

    //checks if the event is modified
    const isModifiedEvent =
      event.metaKey || event.altKey || event.ctrlKey || event.shiftKey

    //checks if target is itself
    const isManageableEvent = target === undefined || target === '_self'

    if (isMainEvent && isManageableEvent && !isModifiedEvent) {
      event.preventDefault()
      navigate(to) // SPA nagivation
    }
  }
  return <a onClick={handleClick} href={to} target={target} {...props} />
}
