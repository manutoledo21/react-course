import CounterApp from '../src/CounterApp';
import { fireEvent, render, screen } from '@testing-library/react';

describe('test <CounterApp />', () => {

  const initialValue = 10;

  test('Debe de hacer match con el snapshot', () => { 
    
    const {container} =
      render( <CounterApp value={initialValue} /> )
    expect(container).toMatchSnapshot()
  })

  test('Debe de mostrar el valor inicial de 100', () => {

    render(<CounterApp value={100} />)
    expect(screen.getByText(100)).toBeTruthy()
    // expect(screen.getByRole('heading', {level: 2}).innerHTML).toContain('100');
  })

  test('Debe de incrementar con el botón +1', () => {

    render(<CounterApp value={initialValue} />)
    fireEvent.click(screen.getByText('+1'))
    expect(screen.getByText('11')).toBeTruthy()
  })

  test('Debe de decrementar con el botón -1', () => {

    render(<CounterApp value={initialValue} />)
    fireEvent.click(screen.getByText('-1'))
    expect(screen.getByText('9')).toBeTruthy()
  })

  test('Debe de resetear con el boton reset', () => {

    render(<CounterApp value={initialValue} />)
    fireEvent.click(screen.getByText('+1'))
    fireEvent.click(screen.getByText('+1'))
    fireEvent.click(screen.getByText('+1'))

    fireEvent.click(screen.getByRole('button', {name: 'btn-reset'}))
    // fireEvent.click(screen.getByText('Reset'))
    // expect(screen.getByText(initialValue)).toBeTruthy()
  })

})