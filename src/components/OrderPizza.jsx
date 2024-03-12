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

    const pizzaKarti = (pizza) => { 
        return (
            <div className='pizzaKarti'>
                <h2>{pizza.ad}</h2>
                <div>
                    <h3>{pizza.fiyat}₺</h3><p>{pizza.puan}</p><p>({pizza.yorumSayisi})</p>
                </div>
                <p>{pizza.aciklama}</p>
            </div>
    )}

    const boyutKarti = (boyutlar) => { 
        return (
            <div className='boyutKarti'>
                <h2>Boyut Sec</h2>
                <div>
                    {boyutlar.map((boyut,index) => <label key={index}><input type="radio" />{boyut}</label>)}
                </div>
            </div>
    )}

    const hamurKarti = (hamurlar) => { 
        return (
            <div className='hamurKarti'>
                <label>
                    <h2>Hamur Sec</h2>
                    <select name="hamur" id="hamur">
                    {hamurlar.map((hamur,index) => <option value={hamur} key={index}>{hamur}</option>)}
                    </select>
                </label>
            </div>
    )}

    const malzemeKarti = (malzemeler) => { 
        return (
            <div className='malzemeKarti'>
                <h2>EK Malzemeler</h2>
                <p>En fazla 10 malzeme secebilirsiniz</p>
                <div>
                    {malzemeler.map((malzeme,index)=>
                    <label key={index}>
                        <input type="checkbox" />
                        <h3>{malzeme}</h3>
                    </label>
                    )}
                </div>
            </div>
    )}

    const notKarti = () => { 
        return (
            <div className='notKarti'>
                <label>
                <h2>Siparis Notu</h2>
                <textarea name="not" id="not"></textarea>
                </label>
            </div>
    )}



  return (
    <main className='orderPizza'>
        <section className='orderPizza-head'>
            <div className='orderPizza-head-container'>
                <img src="../Assets/mile1-assets/logo.svg" alt="logo" />
                {yonlendirmeKarti(data.yonlendirmeler)}
            </div>
        </section>
        <section>
            <div className='orderPizza-main'>
                {pizzaKarti(pizza)}
                <form action="">
                    <div>
                        {boyutKarti(data.boyutlar)}
                        {hamurKarti(data.hamurlar)}
                    </div>
                    {malzemeKarti(data.malzemeler)}
                    {notKarti()}
                </form>
            </div>
        </section>
    </main>
  )
}

export default OrderPizza