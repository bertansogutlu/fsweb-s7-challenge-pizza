import React from 'react'

function Pizza({pizza}) {
  return (
    <div className='pizzaKarti'>
            <h2>{pizza.ad}</h2>
            <div className='pizzaKarti-cetvel'>
                <h3>{pizza.fiyat}₺</h3><p></p><p>{pizza.puan}</p><p>({pizza.yorumSayisi})</p>
            </div>
            <p>{pizza.aciklama}</p>
        </div>
  )
}

export default Pizza