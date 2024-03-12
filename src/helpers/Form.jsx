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
    </form>
  )
}

export default Form