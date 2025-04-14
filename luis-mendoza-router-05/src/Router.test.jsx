import { Router } from './Router'
import { render, cleanup } from '@testing-library/react'
import { beforeEach } from 'vitest'
// import { getCurrentPath } from './utils'
import { describe, it, expect, vi } from 'vitest'

vi.mock('./utils.js', () => ({
  getCurrentPath: vi.fn(),
}))

describe('Router', () => {
  //   clean the screen before every test
  beforeEach(() => {
    cleanup()
    vi.clearAllMocks()
  })

  it('should render without problems', () => {
    render(<Router routes={[]} />)
    expect(true).toBeTruthy()
  })

  //   it('should render 404 if no routes match', () => {
  //     render(<Router routes={[]} defaultComponent={() => <h1>404</h1>} />)
  //     expect(screen.getByText('404')).toBeTruthy()
  //   })

  //   it('should render the component of the first route that matches', () => {
  //     getCurrentPath.mockReturnValueOnce('/about')
  //     const routes = [
  //       {
  //         path: '/',
  //         Component: () => <h1>Home</h1>,
  //       },
  //       {
  //         path: '/about',
  //         Component: () => <h1>About</h1>,
  //       },
  //     ]

  //     render(<Router routes={routes} />)
  //     expect(screen.getByText('About')).toBeTruthy()
  //   })
})
