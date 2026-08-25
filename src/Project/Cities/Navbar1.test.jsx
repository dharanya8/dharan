import { act, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import Navbar2 from './Navbar1'

const navigate = vi.fn()

vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom')
  return { ...actual, useNavigate: () => navigate }
})

vi.mock('../Search', () => ({ default: () => <div /> }))
vi.mock('../LoginModal', () => ({
  default: ({ show }) => (show ? <div>Login to Amber</div> : null),
}))

const renderNavbar = () => {
  render(
    <MemoryRouter>
      <Navbar2 />
    </MemoryRouter>,
  )
  return { user: userEvent.setup() }
}

const badge = () => document.querySelector('.badge')

describe('Navbar1', () => {
  beforeEach(() => {
    navigate.mockClear()
  })

  it('shows Login when no session is stored', () => {
    renderNavbar()

    expect(screen.getByRole('button', { name: /Login/ })).toBeInTheDocument()
    expect(screen.queryByRole('button', { name: 'Logout' })).not.toBeInTheDocument()
  })

  it('shows Logout when a session is stored', () => {
    localStorage.setItem('isLoggedIn', 'true')

    renderNavbar()

    expect(screen.getByRole('button', { name: 'Logout' })).toBeInTheDocument()
  })

  it('opens the login modal from the Login button', async () => {
    const { user } = renderNavbar()

    await user.click(screen.getByRole('button', { name: /Login/ }))

    expect(screen.getByText('Login to Amber')).toBeInTheDocument()
  })

  it('reacts to loginStatusChanged events raised elsewhere', () => {
    renderNavbar()

    act(() => {
      localStorage.setItem('isLoggedIn', 'true')
      window.dispatchEvent(new Event('loginStatusChanged'))
    })

    expect(screen.getByRole('button', { name: 'Logout' })).toBeInTheDocument()
  })

  it('clears the session and shortlist on logout', async () => {
    localStorage.setItem('isLoggedIn', 'true')
    localStorage.setItem('shortlist', JSON.stringify([{ name: 'Axo Waterloo' }]))
    const { user } = renderNavbar()

    await user.click(screen.getByRole('button', { name: 'Logout' }))

    expect(localStorage.getItem('isLoggedIn')).toBeNull()
    expect(localStorage.getItem('shortlist')).toBeNull()
    expect(navigate).toHaveBeenCalledWith('/')
    expect(screen.getByRole('button', { name: /Login/ })).toBeInTheDocument()
    expect(badge()).toBeNull()
  })

  it('renders the shortlist count only when items are stored', () => {
    localStorage.setItem(
      'shortlist',
      JSON.stringify([{ name: 'Axo Waterloo' }, { name: 'Wellington Lodge' }]),
    )

    renderNavbar()

    expect(badge()).toHaveTextContent('2')
  })

  it('refreshes the shortlist count on shortlistUpdated events', () => {
    renderNavbar()
    expect(badge()).toBeNull()

    act(() => {
      localStorage.setItem('shortlist', JSON.stringify([{ name: 'Axo Waterloo' }]))
      window.dispatchEvent(new Event('shortlistUpdated'))
    })

    expect(badge()).toHaveTextContent('1')
  })

  it('navigates to the shortlist page and home from the logo', async () => {
    const { user } = renderNavbar()

    await user.click(screen.getByRole('button', { name: /Shortlist/ }))
    expect(navigate).toHaveBeenCalledWith('/shortlist')

    await user.click(screen.getByAltText('Amber Logo'))
    expect(navigate).toHaveBeenCalledWith('/')
  })
})
