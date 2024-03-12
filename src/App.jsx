import { useState } from 'react'
import './reset.css'
import './App.css'
import Header from './components/Header'
import OrderPizza from './components/OrderPizza'
import {pizza,data,sayfa} from './data.json'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <OrderPizza pizza={pizza} data={data} sayfa={sayfa}/>
    </>
  )
}

export default App
