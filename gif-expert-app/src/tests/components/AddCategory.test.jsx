/* eslint-disable no-undef */

import { fireEvent, render, screen } from '@testing-library/react'
import { AddCategory } from '../../components/AddCategory'

describe('Pruebas en <AddCategory />', () => {

  test('Debe de cambiar el valor de la caja de text', () => {

    render(<AddCategory onNewCategory={ () => {} } />)
    const input = screen.getByRole('textbox')
    
    fireEvent.input(input, {target: {value: 'Tanjiro'}})
    
    expect(input.value).toBe('Tanjiro')
    // screen.debug()
  })
})