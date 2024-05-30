import { useEffect, useState } from 'react'
import { Message } from './Message';

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    username: 'Manu Toledo',
    email: 'manuel.toledo@gmail.com'
  })

  const { username, email } = formState;

  const onInputChange = ({target}) => {
    const {name, value} = target;
    setFormState({
      ...formState,
      [ name ]: value,
    })
  }

  useEffect(() => {
    console.log('useEffect called!')
  }, []);

  useEffect(() => {
    console.log('FormState change!')
  }, [formState]);

  useEffect(() => {
    console.log('email change!')
  }, [email]);
  
  
  return (
    <>
    <h1>SimpleForm</h1>
    <hr />

    <input 
    type='text'
    className='form-control'
    placeholder='Username'
    name='username'
    value={username}
    onChange={onInputChange}
    />

<input 
    type='email'
    className='form-control mt-2'
    placeholder='manutoledo@gmail.com'
    name='email'
    value={email}
    onChange={onInputChange}
    />

    <Message />
    
    </>
  )
}
