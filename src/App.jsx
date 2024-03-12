import { useState } from 'react'
import './reset.css'
import './App.css'
import {pizza,data,sayfa} from './data.json'
import Home from './components/Home'
import OrderPizza from './components/OrderPizza'
import Success from './components/Success'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Home/>
      <OrderPizza pizza={pizza} data={data} sayfa={sayfa}/>
      <Success/>
    </>
  )
}

export default App
