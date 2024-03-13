import React from 'react'
import Form from '../helpers/Form'
import Pizza from '../helpers/Pizza'
import Navigate from '../helpers/Navigate'

function OrderPizza({pizza,data,sayfa,order,setOrder}) {

  return (
    <main className='orderPizza'>
        <section className='orderPizza-header'>
            <div className='orderPizza-header-container'>
                <img src="../Assets/mile1-assets/logo.svg" alt="logo" />
                <Navigate sayfa={sayfa}/>
            </div>
        </section>
        <section className='orderPizza-main'>
            <div className='orderPizza-main-container'>
                <Pizza pizza={pizza}/>
                <Form data={data} order={order} setOrder={setOrder}/>
            </div>
        </section>
    </main>
  )
}

export default OrderPizza