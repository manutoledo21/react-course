import { memo } from 'react'

// eslint-disable-next-line react/display-name
export const Small = memo(({value}) => {

  console.log('Me volví a dibujar :(')
  
  return (
    <small>{value}</small>
  )
})
