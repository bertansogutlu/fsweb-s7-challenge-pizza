import React from 'react'

function Pizza({order}) {
  const pizza = order.pizza
  return (
    <div className='pizzaKarti'>
            <h2>{pizza.isim}</h2>
            <div className='pizzaKarti-cetvel'>
                <h3>{pizza.fiyat}₺</h3><p></p><p>{pizza.puan}</p><p>({pizza.yorumSayisi})</p>
            </div>
            <p>{pizza.aciklama}</p>
        </div>
  )
}

export default Pizza