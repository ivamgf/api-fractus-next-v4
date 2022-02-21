import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Home from '../pages/index'

describe('App Fractus - Home', () => {
    it('should return title home', () => {
        render(<Home />)
        const h1 = screen.getByText('Bem-vindos a Api Fractus!')
        expect(h1).toBeInTheDocument()
    })
    it('should return alt text logo', () => {
        render(<Home />)
        const image = screen.getByAltText('Logo Fractus')
        expect(image).toBeInTheDocument()
    })
    
    it('should return alt text image footer', () => {
        render(<Home />)
        const Image = screen.getByAltText('Orkneytech Logo')
        expect(Image).toBeInTheDocument()
    })
})
