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

    const yonlendirmeKarti = (route,index) => { 
        return <a href={`/${route}/`} key={index}>{route}</a>
     }

    const boyutKarti = (boyut,index) => { 
        return (
        <label key={index}>
            <input type="radio" />
            {boyut}
        </label>)
     }

    const hamurKarti = (hamur,index) => { 
        return <option value={hamur} key={index}>{hamur}</option>
    }
    

    const malzemeKarti = (malzeme,index) => { 
        return (
        <label key={index}>
            <input type="checkbox" />
            {malzeme}
        </label>)
     }

  return (
    <div className='orderPizza'>
        <section className='orderPizza-head'>
            <div className='orderPizza-head-container'>
                <img src="../Assets/mile1-assets/logo.svg" alt="" />
                <nav>
                  {data.yonlendirmeler.map(yonlendirmeKarti)}
                </nav>
            </div>
        </section>
        <section>
            <h3>{pizza.ad}</h3>
            <div>
                <h4>{pizza.fiyat}₺</h4><h5>{pizza.puan}</h5><h5>({pizza.yorumSayisi})</h5>
            </div>
            <p>{pizza.aciklama}</p>
            <form action="">
                    <div>
                        <h3>Boyut Sec</h3>
                        <div>
                          {data.boyutlar.map(boyutKarti)}
                        </div>
                    </div>
                    <div>
                    <h3>Hamur Sec</h3>
                    <label>
                        <select name="hamur" id="hamur">
                           {data.hamurlar.map(hamurKarti)}
                        </select>
                    </label>
                    </div>
                    <h3>EK Malzemeler</h3>
                    <p>En fazla 10 malzeme secebilirsiniz</p>
                    <div>
                        {data.malzemeler.map(malzemeKarti)}
                    </div>
            </form>
        </section>
    </div>
  )
}

export default OrderPizza