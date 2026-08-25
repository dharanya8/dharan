import { act, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import Searchbar from './Searchbar'

const searchInput = () => screen.getByRole('textbox')

describe('Searchbar', () => {
  it('shows the animated placeholder while the input is empty', () => {
    render(<Searchbar />)

    expect(screen.getByText('Search by')).toBeInTheDocument()
    expect(screen.getByText('City')).toBeInTheDocument()
  })

  it('replaces the placeholder with the typed value', async () => {
    const user = userEvent.setup()
    render(<Searchbar />)

    await user.type(searchInput(), 'Dublin')

    expect(searchInput()).toHaveValue('Dublin')
    expect(screen.queryByText('Search by')).not.toBeInTheDocument()
  })

  it('scrolls through the placeholder words and stops at the last one', () => {
    vi.useFakeTimers()
    try {
      render(<Searchbar />)
      const offset = () =>
        screen.getByText('City').parentElement.style.transform

      expect(offset()).toBe('translateY(-0px)')

      act(() => vi.advanceTimersByTime(2000))
      expect(offset()).toBe('translateY(-80px)')

      act(() => vi.advanceTimersByTime(2000))
      act(() => vi.advanceTimersByTime(2000))
      expect(offset()).toBe('translateY(-240px)')

      act(() => vi.advanceTimersByTime(10000))
      expect(offset()).toBe('translateY(-240px)')
    } finally {
      vi.useRealTimers()
    }
  })
})
