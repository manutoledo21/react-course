/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react'
import { GifItem } from '../../components/GifItem'

describe('Pruebas en <GifItem />', () => {

  const title = 'Tanjiro'
  const url = 'https://demon-slayer.com/tanjiro.png'

  test('Debe de hacer match con el snapshot', () => {

    const {container} = render( <GifItem title={title} url={url} />)
    expect(container).toMatchSnapshot();
  })

  test('Debe de mostrar la imagen con el URL y el ALT indicado', () => { 

    render( <GifItem title={title} url={url} />)
    // expect(screen.getByRole('img').src).toBe(url)
    const {src, alt} = screen.getByRole('img') // Mejor forma de hacer lo de arriba
    expect(src).toBe(url)
    expect(alt).toBe(alt)
  })

  test('Debe de mostrar el titulo en el componente', () => {

    render( <GifItem title={title} url={url} />)
    expect(screen.getByText(title)).toBeTruthy()
  })
  
})