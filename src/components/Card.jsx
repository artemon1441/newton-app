import React from 'react'
import { useState } from 'react';



export default function Card({name, url}) {
    const [isOpen, setIsOpen] = useState(false);
    const [showImg, setShowImg] = useState(false);

function openCard(){
    setIsOpen(!isOpen)
    setShowImg(!showImg)
}



  return (
      <div>
          <div className='card-item'>
         {isOpen ?  <div className='backdrop' onClick={(e)=> openCard()}/> : null}
        <img className='card-img' src={url} alt="Card img" onClick={()=> openCard()} />
        
        <div className="card__name">{name}</div>
        <hr />
        </div>
        {showImg ? <div className="fullscreenImg">  <img className='card-img' src={url} alt="Card img"  onClick={()=> openCard()} /> </div> : null}
      </div>
  )
}
