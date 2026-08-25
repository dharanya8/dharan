import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import LoginModal from './LoginModal'

const navigate = vi.fn()

vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom')
  return { ...actual, useNavigate: () => navigate }
})

const renderModal = (props = {}) => {
  const onClose = vi.fn()
  render(
    <MemoryRouter>
      <LoginModal show onClose={onClose} {...props} />
    </MemoryRouter>,
  )
  return { onClose, user: userEvent.setup() }
}

const mobileInput = () => document.querySelector('#mobile')

const goToOtpStep = async (user) => {
  await user.type(mobileInput(), '9876543210')
  await user.click(screen.getByRole('button', { name: 'Continue' }))
  return screen.getByText(/Temporary OTP:/).querySelector('strong').textContent
}

describe('LoginModal', () => {
  beforeEach(() => {
    navigate.mockClear()
  })

  it('renders nothing when show is false', () => {
    renderModal({ show: false })

    expect(screen.queryByText('Login to Amber')).not.toBeInTheDocument()
  })

  it('keeps Continue disabled until a mobile number is entered', async () => {
    const { user } = renderModal()
    const button = screen.getByRole('button', { name: 'Continue' })

    expect(button).toBeDisabled()

    await user.type(mobileInput(), '98765')

    expect(button).toBeEnabled()
  })

  it('disables Continue when the dialling code is cleared', async () => {
    const { user } = renderModal()
    await user.type(mobileInput(), '98765')

    await user.click(document.querySelector('.remove-icon'))

    expect(document.querySelector('#code')).toHaveValue('')
    expect(screen.getByRole('button', { name: 'Continue' })).toBeDisabled()
  })

  it('selects a dialling code from the dropdown', async () => {
    const { user } = renderModal()

    await user.click(document.querySelector('.code-input'))
    await user.click(screen.getByText('United Kingdom'))

    expect(document.querySelector('#code')).toHaveValue('+44')
    expect(screen.queryByText('United Kingdom')).not.toBeInTheDocument()
  })

  it('generates a six digit OTP when continuing', async () => {
    const { user } = renderModal()

    const otp = await goToOtpStep(user)

    expect(screen.getByText('Enter OTP')).toBeInTheDocument()
    expect(otp).toMatch(/^\d{6}$/)
  })

  it('reports an error for a wrong OTP and does not log the user in', async () => {
    const { user, onClose } = renderModal()
    const otp = await goToOtpStep(user)
    const wrongOtp = otp === '000000' ? '111111' : '000000'

    await user.type(screen.getByPlaceholderText('Enter 6 digit OTP'), wrongOtp)
    await user.click(screen.getByRole('button', { name: 'Verify OTP' }))

    expect(
      screen.getByText('Invalid OTP. Please enter correct temporary OTP'),
    ).toBeInTheDocument()
    expect(localStorage.getItem('isLoggedIn')).toBeNull()
    expect(onClose).not.toHaveBeenCalled()
    expect(navigate).not.toHaveBeenCalled()
  })

  it('logs the user in and navigates to the stored redirect on a correct OTP', async () => {
    localStorage.setItem('redirectAfterLogin', '/viewcard')
    const loginStatusChanged = vi.fn()
    window.addEventListener('loginStatusChanged', loginStatusChanged)
    const { user, onClose } = renderModal()
    const otp = await goToOtpStep(user)

    await user.type(screen.getByPlaceholderText('Enter 6 digit OTP'), otp)
    await user.click(screen.getByRole('button', { name: 'Verify OTP' }))

    expect(localStorage.getItem('isLoggedIn')).toBe('true')
    expect(loginStatusChanged).toHaveBeenCalled()
    expect(onClose).toHaveBeenCalled()
    expect(navigate).toHaveBeenCalledWith('/viewcard')

    window.removeEventListener('loginStatusChanged', loginStatusChanged)
  })

  it('navigates home when no redirect was stored', async () => {
    const { user } = renderModal()
    const otp = await goToOtpStep(user)

    await user.type(screen.getByPlaceholderText('Enter 6 digit OTP'), otp)
    await user.click(screen.getByRole('button', { name: 'Verify OTP' }))

    expect(navigate).toHaveBeenCalledWith('/')
  })

  it('returns to the login step from the OTP step', async () => {
    const { user } = renderModal()
    await goToOtpStep(user)

    await user.click(screen.getByText('Change mobile number'))

    expect(screen.getByText('Login to Amber')).toBeInTheDocument()
  })

  it('closes when the close icon is clicked', async () => {
    const { user, onClose } = renderModal()

    await user.click(document.querySelector('svg[stroke="currentColor"]'))

    expect(onClose).toHaveBeenCalled()
  })
})
