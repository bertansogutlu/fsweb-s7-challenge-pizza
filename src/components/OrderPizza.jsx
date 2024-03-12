import React from 'react'

const pizza = {
    ad: "Pizza Funghi",
    fiyat: 85.50,
    puan: 4,
    yorumSayisi: 200,
    aciklama: "Doğanın lezzetini sofranıza getirin! Yoğun mantar aroması ve mozarella peyniri ile enfes bir buluşma. Lezzetin doruklarına çıkın, her ısırıkta ormanın ferahlığını hissedin!"
}

const data = {
    yonlendirmeler: ["Ana Sayfa", "Secenekler", "Siparis Olustur"],
    boyutlar: ["Kucuk", "Orta", "Buyuk"],
    hamurlar: ["Ince", "Orta", "Kalin"],
    malzemeler: ["Sosis","Salam","Sucuk"]
}

function OrderPizza() {

    const yonlendirmeKarti = (yonlendirmeler) => { 
        return (
            <div className='yonlendirmeKarti'>
                <nav>
                    {yonlendirmeler.map((yonlendirme,index) => <a href={`/${yonlendirme}/`} key={index}>{yonlendirme}</a>)}
                </nav>
            </div>
    )}

    const boyutKarti = (boyutlar) => { 
        return (
            <div className='boyutKarti'>
                <h3>Boyut Sec</h3>
                <div>
                    {boyutlar.map((boyut,index) => <label key={index}><input type="radio" />{boyut}</label>)}
                </div>
            </div>
    )}

    const hamurKarti = (hamurlar) => { 
        return (
            <div className='hamurKarti'>
                <label>
                    Hamur Sec<br/>
                    <select name="hamur" id="hamur">
                    {hamurlar.map((hamur,index) => <option value={hamur} key={index}>{hamur}</option>)}
                    </select>
                </label>
            </div>
    )}

    const malzemeKarti = (malzemeler) => { 
        return (
            <div className='malzemeKarti'>
                <h3>EK Malzemeler</h3>
                <p>En fazla 10 malzeme secebilirsiniz</p>
                <div>
                    {malzemeler.map((malzeme,index)=>
                    <label key={index}>
                        <input type="checkbox" />
                        {malzeme}
                    </label>
                    )}
                </div>
            </div>
    )}

    const pizzaKarti = (pizza) => { 
        return (
            <div className='pizzaKarti'>
                <h3>{pizza.ad}</h3>
                <div>
                    <h4>{pizza.fiyat}₺</h4><h5>{pizza.puan}</h5><h5>({pizza.yorumSayisi})</h5>
                </div>
                <p>{pizza.aciklama}</p>
            </div>
    )}



  return (
    <div className='orderPizza'>
        <section className='orderPizza-head'>
            <div className='orderPizza-head-container'>
                <img src="../Assets/mile1-assets/logo.svg" alt="logo" />
                {yonlendirmeKarti(data.yonlendirmeler)}
            </div>
        </section>
        <section>
            {pizzaKarti(pizza)}
            <form action="">
                <div>
                    {boyutKarti(data.boyutlar)}
                    {hamurKarti(data.hamurlar)}
                </div>
                {malzemeKarti(data.malzemeler)}
            </form>
        </section>
    </div>
  )
}

export default OrderPizza