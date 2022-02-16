import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Home from '../pages/index'

describe('App Fractus', () => {
    it('should return home', () => {
        render(<Home />)
        const h1 = screen.getByText('Bem-vindos a Api Fractus!')
        expect(h1).toBeInTheDocument()
    })
})
