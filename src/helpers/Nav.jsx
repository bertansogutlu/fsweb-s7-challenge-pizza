import React from 'react'

function Nav({sayfa}) {
  return (
    <div className='yonlendirmeKarti'>
            <nav>
                {sayfa.yonlendirmeler.map((yonlendirme,index) => <a href={`/${yonlendirme}/`} key={index}>{yonlendirme}</a>)}
            </nav>
        </div>
  )
}

export default Nav