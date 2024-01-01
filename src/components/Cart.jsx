import React from "react";
import CartItem from "./Cartitem";

const laptops = [
    {
      ID : 1,
      Price : 999 ,
      Name : "MacBook Air 13” (M1 Chip) ",
      Description : "The most affordable Mac laptop to get things done on the go.",
      Quantity : 2,
  
    },
    {
      ID : 2,
      Price : 1099 ,
      Name : "MacBook Air 13” (M2 chip)",
      Description : "Strikingly thin and fast so you can work, play, or create anywhere.",
      Quantity : 2,
    },
    {
      ID : 3,
      Price : 1099 ,
      Name : "MacBook Air 15” (M2 chip)",
      Description : "Strikingly thin and fast so you can work, play, or create anywhere.",
      Quantity : 2,
    },
   
  
  ];

const Cart = () => {
  return (
    <section className='cart-box'>
       <h2>Carts</h2>
       {
        laptops.map((laptop) => (
            <CartItem key={laptop.ID} laptop={laptop} />
        ))
       }
       <hr></hr>
       <div className="total">
        <h3>Total Price</h3>
        <p> $1897.00 </p>
       </div>
       <div className="btns" >
        <button className="close-btn">Cancel</button>
        <button className="order-btn"> Order</button>
       </div>

    </section>
  )
}

export default Cart