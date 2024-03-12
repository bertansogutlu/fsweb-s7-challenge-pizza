import { useState } from 'react'
import './reset.css'
import './App.css'
import Home from './components/Home'
import OrderPizza from './components/OrderPizza'
import {pizza,data,sayfa} from './data.json'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Home/>
      <OrderPizza pizza={pizza} data={data} sayfa={sayfa}/>
    </>
  )
}

export default App
