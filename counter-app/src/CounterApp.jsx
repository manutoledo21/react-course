import { useState } from 'react'
import PropTypes from 'prop-types'

export const CounterApp = ({ value }) => {

  const [counter, setCounter] = useState( value );
  
  const handleRemove = () => setCounter( counter - 1 );

  const handleAdd = () => setCounter( counter + 1 );

  const handleReset = () => setCounter( value );


  return (
    <>
      <h1>CounterApp</h1>    
      <h2> { counter } </h2>    

      <button onClick={ handleRemove }> -1 </button>
      <button onClick={ handleAdd }> +1 </button>
      <button aria-label='btn-reset' onClick={ handleReset }> Reset </button>
    </>
  )
}

CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
}


export default CounterApp;