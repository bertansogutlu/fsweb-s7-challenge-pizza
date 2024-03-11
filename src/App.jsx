import { useState } from 'react'
import './reset.css'
import './App.css'
import Header from './components/Header'
import OrderPizza from './components/OrderPizza'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <OrderPizza/>
    </>
  )
}

export default App
