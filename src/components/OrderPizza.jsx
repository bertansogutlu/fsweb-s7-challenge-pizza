import React from 'react'
import Form from '../helpers/Form'
import Pizza from '../helpers/Pizza'
import Nav from '../helpers/Nav'

const pizza = {
    ad: "Pizza Funghi",
    fiyat: 85.50,
    puan: 4,
    yorumSayisi: 200,
    aciklama: "Doğanın lezzetini sofranıza getirin! Yoğun mantar aroması ve mozarella peyniri ile enfes bir buluşma. Lezzetin doruklarına çıkın, her ısırıkta ormanın ferahlığını hissedin!"
}

const data = {
    boyutlar: ["Kucuk", "Orta", "Buyuk"],
    hamurlar: ["Ince", "Orta", "Kalin"],
    malzemeler: ["Sosis","Salam","Sucuk"]
}

const sayfa = {
    yonlendirmeler: ["Ana Sayfa", "Secenekler", "Siparis Olustur"]
}

function OrderPizza() {

  return (
    <main className='orderPizza'>
        <section className='orderPizza-header'>
            <div className='orderPizza-header-container'>
                <img src="../Assets/mile1-assets/logo.svg" alt="logo" />
                <Nav sayfa={sayfa}/>
            </div>
        </section>
        <section className='orderPizza-main'>
            <div className='orderPizza-main-container'>
                <Pizza pizza={pizza}/>
                <Form data={data}/>
            </div>
        </section>
    </main>
  )
}

export default OrderPizza