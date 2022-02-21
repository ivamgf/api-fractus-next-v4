import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Contacts from '../pages/contacts'

describe('App Fractus - Contacts', () => {
    it('should return name button', () => {
        render(<Contacts />)
        const Button = screen.getByText('Voltar')
        expect(Button).toBeInTheDocument()
    })
})
