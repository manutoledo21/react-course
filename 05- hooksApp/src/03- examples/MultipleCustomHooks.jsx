import { useCounter, useFetch } from '../hooks';
import { LoadingQuote,Quote } from './';

export const MultipleCustomHooks = () => {

  const {counter, increment} = useCounter(1)
  const {data, isLoading, hasError} = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${counter}`)
  const {author, quote} = !!data && data[0];
  
  return (
    <>
      <h1>BreakingBad Quotes</h1>
      <hr />

      {
        isLoading 
          ? <LoadingQuote />
          : <Quote quote={quote} author={author}/>
      }

      <button className='btn btn-primary' onClick={() => increment()} disabled={isLoading}>
        Next Quote
      </button>

      
    </>
  )
}
