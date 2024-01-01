import React from 'react'

const CartItem = ({laptop}) => {
  return (
    <div className='card cart'>
    <div>
    <p className='card-title'>{laptop.Name} </p>
     <p className='card-description'>{laptop.Description}</p>
     
    </div>
     <div className='card-right'>
     <p className='card-price'>${laptop.Price}</p>
     <input type='number' className='cart-input' min={1} max={5} value={1} />
     
     </div>
 </div>
  )
}

export default CartItem ;