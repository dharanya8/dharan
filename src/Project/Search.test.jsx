import { act, render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import Search from './Search'

const navigate = vi.fn()

vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom')
  return { ...actual, useNavigate: () => navigate }
})

const renderSearch = () => {
  render(
    <MemoryRouter>
      <Search />
    </MemoryRouter>,
  )
  return { user: userEvent.setup() }
}

const searchInput = () => screen.getByRole('textbox')

const countryTab = (code) =>
  screen
    .getAllByRole('button')
    .find((button) => button.textContent === code)

const recentList = () => within(document.querySelectorAll('.city')[0])
const cityList = () => within(document.querySelectorAll('.city')[1])
const universityList = () => within(document.querySelectorAll('.city')[2])

describe('Search', () => {
  beforeEach(() => {
    navigate.mockClear()
  })

  it('hides the rotating placeholder once text is typed and restores it on clear', async () => {
    const { user } = renderSearch()
    expect(screen.getByText('Search by')).toBeInTheDocument()

    await user.type(searchInput(), 'London')

    expect(searchInput()).toHaveValue('London')
    expect(screen.queryByText('Search by')).not.toBeInTheDocument()

    await user.click(document.querySelector('.circle'))

    expect(searchInput()).toHaveValue('')
    expect(screen.getByText('Search by')).toBeInTheDocument()
  })

  it('rotates the placeholder words and stops on the last one', () => {
    vi.useFakeTimers()
    try {
      render(
        <MemoryRouter>
          <Search />
        </MemoryRouter>,
      )
      const offset = () =>
        screen.getByText('City').parentElement.style.transform

      expect(offset()).toBe('translateY(-0px)')

      act(() => vi.advanceTimersByTime(2000))
      expect(offset()).toBe('translateY(-80px)')

      act(() => vi.advanceTimersByTime(2000))
      expect(offset()).toBe('translateY(-160px)')

      act(() => vi.advanceTimersByTime(2000))
      expect(offset()).toBe('translateY(-240px)')

      act(() => vi.advanceTimersByTime(10000))
      expect(offset()).toBe('translateY(-240px)')
    } finally {
      vi.useRealTimers()
    }
  })

  it('opens the suggestion panel on focus', async () => {
    const { user } = renderSearch()
    expect(screen.queryByText('TOP CITIES')).not.toBeInTheDocument()

    await user.click(searchInput())

    expect(screen.getByText(/TOP CITIES/)).toBeInTheDocument()
    expect(screen.getByText(/RECENTLY SEARCHED/)).toBeInTheDocument()
  })

  it('closes the suggestion panel when clicking outside of it', async () => {
    const { user } = renderSearch()
    await user.click(searchInput())

    await user.click(document.body)

    expect(screen.queryByText(/TOP CITIES/)).not.toBeInTheDocument()
  })

  it('shows the cities and universities of the selected country', async () => {
    const { user } = renderSearch()
    await user.click(searchInput())
    expect(cityList().getByText('Melbourne')).toBeInTheDocument()
    expect(recentList().getByText('Auckland')).toBeInTheDocument()

    await user.click(countryTab('IRE'))

    expect(cityList().getByText('Galway')).toBeInTheDocument()
    expect(
      universityList().getByText('Trinity College Dublin'),
    ).toBeInTheDocument()
    expect(cityList().queryByText('Melbourne')).not.toBeInTheDocument()
  })

  it('navigates to the encoded city route when a city is clicked', async () => {
    const { user } = renderSearch()
    await user.click(searchInput())

    await user.click(countryTab('USA'))
    await user.click(cityList().getByText('New York'))

    expect(navigate).toHaveBeenCalledWith('/city/New%20York')
  })

  it('navigates to the encoded university route when a university is clicked', async () => {
    const { user } = renderSearch()
    await user.click(searchInput())

    await user.click(countryTab('UK'))
    await user.click(universityList().getByText('University of Oxford'))

    expect(navigate).toHaveBeenCalledWith('/university/University%20of%20Oxford')
  })
})
