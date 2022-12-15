// __tests__/index.test.jsx

import { render, screen } from '@testing-library/react'
import Home from '../pages/index'
import '@testing-library/jest-dom'

describe('Home', () => {
  it('renders a link', () => {
    render(<Home />)

    const link = screen.getByRole('link', {
      name: /SRJC/i,
    })

    expect(link).toBeInTheDocument()
  })
})
