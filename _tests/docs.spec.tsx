import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Docs from '../pages/docs/index'

describe('App Fractus - Docs', () => {
    it('should return name button', () => {
        render(<Docs />)
        const Button = screen.getByText('Voltar')
        expect(Button).toBeInTheDocument()
    })
})
