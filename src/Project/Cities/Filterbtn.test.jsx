import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import Filterbtn from './Filterbtn'

const data = [
  { id: 1, title: 'Cheap Hall', university: 'Cambridge', price: 5000 },
  { id: 2, title: 'Mid Hall', university: 'Canvas Student Barnard Point', price: 10000 },
  { id: 3, title: 'Pricey Hall', university: 'cambridge annex', price: 20000 },
  { id: 4, title: 'No University', price: 8000 },
]

const titlesOfLastCall = (onFilter) =>
  onFilter.mock.calls.at(-1)[0].map((item) => item.title)

const renderFilterbtn = () => {
  const onFilter = vi.fn()
  render(<Filterbtn data={data} onFilter={onFilter} />)
  return { onFilter, user: userEvent.setup() }
}

const openMenu = async (user, name) => {
  await user.click(screen.getByRole('button', { name }))
}

describe('Filterbtn', () => {
  it('passes the unfiltered data upwards on mount', () => {
    const { onFilter } = renderFilterbtn()

    expect(titlesOfLastCall(onFilter)).toEqual([
      'Cheap Hall',
      'Mid Hall',
      'Pricey Hall',
      'No University',
    ])
  })

  it('does not mutate the incoming data while sorting', async () => {
    const { onFilter, user } = renderFilterbtn()

    await openMenu(user, 'Sort')
    await user.click(screen.getByLabelText('Price (High to Low)'))

    expect(titlesOfLastCall(onFilter)).toEqual([
      'Pricey Hall',
      'Mid Hall',
      'No University',
      'Cheap Hall',
    ])
    expect(data.map((item) => item.title)).toEqual([
      'Cheap Hall',
      'Mid Hall',
      'Pricey Hall',
      'No University',
    ])
  })

  it('sorts by price ascending', async () => {
    const { onFilter, user } = renderFilterbtn()

    await openMenu(user, 'Sort')
    await user.click(screen.getByLabelText('Price (Low to High)'))

    expect(titlesOfLastCall(onFilter)).toEqual([
      'Cheap Hall',
      'No University',
      'Mid Hall',
      'Pricey Hall',
    ])
  })

  it('filters by university case-insensitively and skips entries without one', async () => {
    const { onFilter, user } = renderFilterbtn()

    await openMenu(user, 'University')
    await user.click(screen.getByText('Cambridge'))

    expect(titlesOfLastCall(onFilter)).toEqual(['Cheap Hall', 'Pricey Hall'])
  })

  it('filters below and above the 10k budget boundary', async () => {
    const { onFilter, user } = renderFilterbtn()

    await openMenu(user, 'Budget')
    await user.click(screen.getByText('Below ₹10,000'))
    expect(titlesOfLastCall(onFilter)).toEqual(['Cheap Hall', 'No University'])

    await openMenu(user, 'Budget')
    await user.click(screen.getByText('Above ₹10,000'))
    expect(titlesOfLastCall(onFilter)).toEqual(['Mid Hall', 'Pricey Hall'])
  })

  it('combines a university filter with a budget filter', async () => {
    const { onFilter, user } = renderFilterbtn()

    await openMenu(user, 'University')
    await user.click(screen.getByText('Cambridge'))
    await openMenu(user, 'Budget')
    await user.click(screen.getByText('Above ₹10,000'))

    expect(titlesOfLastCall(onFilter)).toEqual(['Pricey Hall'])
  })

  it('restores the full list when reset is clicked', async () => {
    const { onFilter, user } = renderFilterbtn()

    await openMenu(user, 'Budget')
    await user.click(screen.getByText('Below ₹10,000'))
    expect(titlesOfLastCall(onFilter)).toHaveLength(2)

    await user.click(screen.getByRole('button', { name: 'Reset' }))

    expect(titlesOfLastCall(onFilter)).toHaveLength(4)

    await openMenu(user, 'Sort')
    expect(screen.getByLabelText('Price (Low to High)')).not.toBeChecked()
  })
})
