import React from 'react';
import { useDispatch } from 'react-redux';

const QuantityButton = ({ quantity, setQuantity, color }) => {


  const increase = () => {
    setQuantity(quantity + 1);
  }
  const decrease = () => {
    if (quantity <= 1) return;
    setQuantity(quantity - 1);
  }

  return (
    <div className='quantityButton'>
      <button className="quantityBtn" onClick={decrease} style={{ color: color }} >-</button>
      <span className='quantityAmount' style={{ color: color, border: `1px solid ${color}` }}>{quantity}</span>
      <button className="quantityBtn" onClick={increase} style={{ color: color }}>+</button>
    </div>
  )
}

export default QuantityButton