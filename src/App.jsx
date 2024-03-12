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

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Switch>
      <Route exact path="/">
        <Home/>
      </Route>
      <Route exact path="/order">
        <OrderPizza pizza={pizza} data={data} sayfa={sayfa}/>
      </Route>
      <Route exact path="/success">
        <Success/>
      </Route>
    </Switch>
    </>
  )
}

export default App
