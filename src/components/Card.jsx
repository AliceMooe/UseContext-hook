import React from 'react'

const Card = ({laptop}) => {
  return (
    <div className='card'>
       <div>
       <p className='card-title'>{laptop.Name} </p>
        <p className='card-description'>{laptop.Description}</p>
        <p className='card-price'>${laptop.Price}</p>
       </div>
        <div className='card-right'>
        <input type='number' className='card-input' min={1} max={5} value={1} />
        <button className='card-button'>+ ADD</button>
        </div>
    </div>
  )
}

export default Card;