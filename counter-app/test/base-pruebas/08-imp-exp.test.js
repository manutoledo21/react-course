import { getHeroeById, getHeroesByOwner } from '../../src/base-pruebas/08-imp-exp';
import heroes from '../../src/data/heroes';

describe('pruebas en 08-imp-exp', () => { 
  
  test('Debe de retornar un heroe por ID ', () => { 
    
    const id = 1;
    const hero = getHeroeById(id);

    expect(hero).toEqual({ id: 1, name: 'Batman', owner: 'DC' })
   })

   test('Debe de retornar undefined si no existe', () => { 
    
    const id = 100;
    const hero = getHeroeById(id);

    expect(hero).toBeFalsy()
   })


   // Tarea
   test('debe de retornar un arreglo con los heroes de DC', () => { 

    const owner = 'DC';
    const heroOwnerDC = getHeroesByOwner(owner);

    const ownerExpect = [
      {
        id: 1,
        name: 'Batman',
        owner: 'DC'
      },
      {
        id: 3,
        name: 'Superman',
        owner: 'DC'
      },
      {
        id: 4,
        name: 'Flash',
        owner: 'DC'
      },
    ]
    
    expect(heroOwnerDC.length).toEqual(3)
    expect(heroOwnerDC).toEqual(ownerExpect)
    // Forma correcta en la vida real
    expect(heroOwnerDC).toEqual(heroes.filter( (heroe) => heroe.owner === owner ))
    
    })

    test('debe de retornar un arreglo con los heroes de Marvel', () => { 

      const owner = 'Marvel';
      const heroOwnerMarvel = getHeroesByOwner(owner);

      expect(heroOwnerMarvel.length).toEqual(2)
      expect(heroOwnerMarvel).toEqual(heroes.filter( (heroe) => heroe.owner === owner ))

     })
 })