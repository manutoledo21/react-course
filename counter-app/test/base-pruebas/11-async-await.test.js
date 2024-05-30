import { string } from 'prop-types'
import { getImagen } from '../../src/base-pruebas/11-async-await'

describe('Pruebas en 11-async-await.js', () => { 
  
  test('getImagen debe de retornar un url de la imagen', async () => { 
    
    const url = await getImagen()
    expect(typeof url).toBe('string')


   })
 })