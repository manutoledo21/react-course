import React from 'react'
import ReactDOM from 'react-dom/client'
import './App.css'
import CounterApp from './CounterApp'
// import { FirstApp } from './FirstApp'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CounterApp value={20} />
    {/* <FirstApp title='Hola, soy Vegeta' /> */}
  </React.StrictMode>,
)
