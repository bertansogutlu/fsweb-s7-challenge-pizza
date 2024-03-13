import { useState } from 'react'
import './reset.css'
import './App.css'
import {pizza,data,sayfa} from './data.json'
import Home from './components/Home'
import OrderPizza from './components/OrderPizza'
import Success from './components/Success'
import {
  Switch,
  Route
} from "react-router-dom";

const initialValue = {pizza: pizza,boyut:"",hamur:"Ince",malzemeler:[],adet: 1}

function App() {
  const [order, setOrder] = useState(initialValue)
  const reset = ()=>{
    setOrder(initialValue)
  }

  return (
    <>
    <Switch>
      <Route exact path="/">
        <Home/>
      </Route>
      <Route exact path="/order">
        <OrderPizza data={data} sayfa={sayfa} order={order} setOrder={setOrder} reset={reset}/>
      </Route>
      <Route exact path="/success">
        <Success/>
      </Route>
    </Switch>
    </>
  )
}

export default App
