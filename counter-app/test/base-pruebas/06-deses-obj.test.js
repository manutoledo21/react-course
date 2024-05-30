import { usContext } from '../../src/base-pruebas/06-deses-obj'

describe('usContext debe de retornar un objeto', () => { 
  
  test('06-deses-obj', () => { 

    const clave = 'ManuToledo'
    const edad = 22

    const usContextFunc = usContext({clave, edad});

    const testContext = { 
    nombreClave: clave,
      anios: edad,
      latlng: {
          lat: 14.1232,
          lng: -12.3232
      }
  }

    expect(usContextFunc).toEqual(testContext)
    
   })
})