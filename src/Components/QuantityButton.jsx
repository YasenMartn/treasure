import React from 'react';

const QuantityButton = ({quantity, setQuantity}) => {

    const increase = () => {
        setQuantity(quantity + 1);
      }
      const decrease = () => {
        if(quantity <= 1) return;
        setQuantity(quantity - 1);
      }
      
  return (
    <div className='quantityButton'>
        <button className="quantityBtn" onClick={decrease} >-</button>
        <span className='quantityAmount'>{quantity}</span>
        <button className="quantityBtn" onClick={increase}>+</button>
    </div>
  )
}

export default QuantityButton