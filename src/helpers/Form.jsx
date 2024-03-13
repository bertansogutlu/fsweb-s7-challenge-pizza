import React from 'react'

function Form({data,order,setOrder}) {
    console.log(order);

    const handleSubmit = (event)=>{
        event.preventDefault();
    }

    const handleChange = (event)=>{
        setOrder({...order, [event.target.name]: event.target.value})
    }

    const handleCheckbox = (event,malzeme)=>{
        if(!order.malzemeler.includes(malzeme)) {
            setOrder({...order, [event.target.name]: [...order.malzemeler,malzeme]})
        } else {
            setOrder({...order, [event.target.name]: order.malzemeler.filter(item=>item!==malzeme)})
        }
    }

    const boyutKarti = (boyutlar) => { 
        return (
            <div className='boyutKarti'>
                <h2>Boyut Sec</h2>
                <div className='boyutContainer'>
                    {boyutlar.map((boyut,index) => <label onChange={handleChange} key={index}><input type="radio" name="boyut" value={boyut}/>{boyut}</label>)}
                </div>
            </div>
      )}

    const hamurKarti = (hamurlar) => { 
        return (
            <div className='hamurKarti'>
                <label>
                    <h2>Hamur Sec</h2>
                    <select onChange={handleChange} name="hamur" id="hamur">
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
                <div className='malzemelerContainer'>
                    {malzemeler.map((malzeme,index)=>
                    <label key={index} className='malzeme'>
                        <input onChange={(event)=>handleCheckbox(event,malzeme)} type="checkbox" name="malzemeler"/><span> {malzeme}</span>
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
                <textarea onChange={handleChange} value={order.siparisNotu} name="not" id="not"></textarea>
                </label>
            </div>
    )}

    const handleDegistirici = (event)=>{
        switch(event.target.className) {
            case "leftButton":
              if(order.adet>1) {
                setOrder({...order,adet:(order.adet-1)})
              } else {
                alert("En az bir adet siparis verebilirsiniz")
              }
              break;
            case "rightButton":
              if(order.adet<10) {
                setOrder({...order,adet:(order.adet+1)})
              } else {
                alert("En fazla on adet siparis verebilirsiniz")
              }
              break;
          }
    }

    const ozetKarti = () => { 

        return (
            <div className='ozetKarti'>
                <div className='adetContainer'>
                    <button className='leftButton' onClick={handleDegistirici}>-</button><span>{order.adet}</span><button className='rightButton' onClick={handleDegistirici}>+</button>
                </div>
                <div className='ozetContainer'>
                    <h2>Siparis Toplami</h2>
                    <div className=''>
                        <span>Secimler</span><span>25</span>
                    </div>
                    <div className=''>
                        <span>Toplam</span><span>100</span>
                    </div>
                    <button>Siparis Ver</button>
                </div>
            </div>
      )}

  return (
    <form onSubmit={handleSubmit} className='form'>
        <div className='formContainer'>
            {boyutKarti(data.boyutlar)}
            <div></div>
            {hamurKarti(data.hamurlar)}
            <div></div>
        </div>
        {malzemeKarti(data.malzemeler)}
        {notKarti()}
        {ozetKarti()}
    </form>
  )
}

export default Form