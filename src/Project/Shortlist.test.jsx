import { act, fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import Shortlist from './Shortlist'

const navigate = vi.fn()

vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom')
  return { ...actual, useNavigate: () => navigate }
})

vi.mock('../Project/Cities/Navbar1', () => ({ default: () => <nav /> }))
vi.mock('../Project/Footer', () => ({ default: () => <footer /> }))
vi.mock('./LoginModal', () => ({
  default: ({ show }) => (show ? <div>Login to Amber</div> : null),
}))

const items = [
  {
    name: 'Axo Waterloo',
    location: 'London',
    price: 250,
    images: ['/images/axo1.avif', '/images/axo2.avif'],
  },
  { name: 'Wellington Lodge', location: 'London', price: 300, image: '/images/wl.avif' },
]

const renderShortlist = () => {
  render(
    <MemoryRouter>
      <Shortlist />
    </MemoryRouter>,
  )
  return { user: userEvent.setup() }
}

const storedShortlist = () => JSON.parse(localStorage.getItem('shortlist'))

describe('Shortlist', () => {
  beforeEach(() => {
    navigate.mockClear()
  })

  it('shows the empty state when nothing is shortlisted', async () => {
    const { user } = renderShortlist()

    expect(screen.getByText('No property shortlisted')).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Explore properties' }))

    expect(navigate).toHaveBeenCalledWith('/')
  })

  it('treats malformed stored data as an empty shortlist', () => {
    localStorage.setItem('shortlist', 'null')

    renderShortlist()

    expect(screen.getByText('No property shortlisted')).toBeInTheDocument()
  })

  it('lists stored properties newest first with their count', () => {
    localStorage.setItem('shortlist', JSON.stringify(items))

    renderShortlist()

    expect(screen.getByText('2 properties shortlisted')).toBeInTheDocument()
    const headings = screen.getAllByRole('heading', { level: 3 })
    expect(headings.map((heading) => heading.textContent)).toEqual([
      'Wellington Lodge',
      'Axo Waterloo',
    ])
    expect(screen.getByText('£250')).toBeInTheDocument()
  })

  it('falls back to the single image field when images is missing', () => {
    localStorage.setItem('shortlist', JSON.stringify([items[1]]))

    renderShortlist()

    expect(screen.getByAltText('Wellington Lodge')).toHaveAttribute(
      'src',
      '/images/wl.avif',
    )
  })

  it('removes a property, persists the change and shows a dismissible toast', async () => {
    localStorage.setItem('shortlist', JSON.stringify(items))
    const { user } = renderShortlist()

    await user.click(document.querySelectorAll('.wishlist-remove')[0])

    expect(screen.getByText('Removed from Shortlist!')).toBeInTheDocument()
    expect(storedShortlist()).toEqual([items[0]])
    expect(screen.getByText('1 properties shortlisted')).toBeInTheDocument()

    await user.click(document.querySelector('.toast-close'))

    expect(screen.queryByText('Removed from Shortlist!')).not.toBeInTheDocument()
  })

  it('hides the toast automatically after three seconds', async () => {
    vi.useFakeTimers()
    try {
      localStorage.setItem('shortlist', JSON.stringify(items))
      render(
        <MemoryRouter>
          <Shortlist />
        </MemoryRouter>,
      )

      fireEvent.click(document.querySelectorAll('.wishlist-remove')[0])
      expect(screen.getByText('Removed from Shortlist!')).toBeInTheDocument()

      act(() => vi.advanceTimersByTime(3000))

      expect(
        screen.queryByText('Removed from Shortlist!'),
      ).not.toBeInTheDocument()
    } finally {
      vi.useRealTimers()
    }
  })

  it('stores the selected property and opens the login modal from View', async () => {
    localStorage.setItem('shortlist', JSON.stringify([items[0]]))
    const { user } = renderShortlist()

    await user.click(screen.getByRole('button', { name: /View/ }))

    expect(JSON.parse(localStorage.getItem('selectedProperty'))).toEqual(items[0])
    expect(localStorage.getItem('redirectAfterLogin')).toBe('/viewcard')
    expect(screen.getByText('Login to Amber')).toBeInTheDocument()
  })
})
