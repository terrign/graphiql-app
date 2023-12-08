import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import { expect } from 'vitest'
import { App } from '../App'

describe('App', () => {
  it('renders Router Component', () => {
    const app = render(<App />)

    expect(app).toBeTruthy()
  })
})
