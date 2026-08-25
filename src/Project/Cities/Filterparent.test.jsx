import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import Filterparent from './Filterparent'

const cardTitles = () =>
  screen
    .queryAllByRole('heading', { level: 5 })
    .map((heading) => heading.textContent)

const renderFilterparent = () => {
  render(<Filterparent />)
  return userEvent.setup()
}

describe('Filterparent', () => {
  it('renders every property with its travel and offer details', () => {
    renderFilterparent()

    expect(cardTitles()).toEqual([
      'Canvas Student Barnard Point, London',
      'Axo Waterloo, London',
      'Wellington Lodge, London',
      'iQ Paris Gardens, London',
    ])
    expect(screen.getByText('8.8 mi from City Center')).toBeInTheDocument()
    expect(screen.getAllByText(/Room Options/)).toHaveLength(4)
  })

  it('narrows the list down to the property of the selected university', async () => {
    const user = renderFilterparent()

    await user.click(screen.getByRole('button', { name: 'University' }))
    await user.click(
      screen.getByText('Canvas Student Barnard Point, London', {
        selector: '.dropdown-item',
      }),
    )

    expect(cardTitles()).toEqual(['Canvas Student Barnard Point, London'])
  })

  it('brings every property back after a reset', async () => {
    const user = renderFilterparent()
    await user.click(screen.getByRole('button', { name: 'University' }))
    await user.click(screen.getByText('Cambridge'))
    expect(cardTitles()).toHaveLength(0)

    await user.click(screen.getByRole('button', { name: 'Reset' }))

    expect(cardTitles()).toHaveLength(4)
  })
})
