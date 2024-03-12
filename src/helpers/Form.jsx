import React from 'react'

const boyutKarti = (boyutlar) => { 
  return (
      <div className='boyutKarti'>
          <h2>Boyut Sec</h2>
          <div className='boyutContainer'>
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
          <div className='malzemelerContainer'>
              {malzemeler.map((malzeme,index)=>
              <label key={index} className='malzeme'>
                  <input type="checkbox" /><span> {malzeme}</span>
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

const ozetKarti = () => { 
    return (
        <div className='ozetKarti'>
            <div className='adetContainer'>
                <button className='leftButton'>-</button><span>5</span><button className='rightButton'>+</button>
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

function Form({data}) {
  return (
    <form action="" className='form'>
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