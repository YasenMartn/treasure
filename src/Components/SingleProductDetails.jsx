import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import QuantityButton from './QuantityButton';
import { useDispatch } from 'react-redux';
import { addProduct } from '../redux/cartSlice';

const SingleProductDetails = ({ product }) => {

  const { id, title, price, description, category, image, rating } = product;

  const [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch();

  const addItem = () => {
    dispatch(addProduct({id, title, price, quantity, image}))
  }

  return (
    <div className='singleProductDetails'>
      <div className="singleProductDetailsLeft">
        <div className="singleProductImageContainer">
          <img className='singleProductImage' src={image} alt={title} />
        </div>
      </div>
      <div className="singleProductDetailsRight">
        <h1 className="singleProductTitle">{title}</h1>
        <span className="singleProductDesc">{description}</span>
        <span className="singleProductPrice">Price: $ {(price * quantity).toFixed(2)}</span>
        <QuantityButton quantity={quantity} setQuantity={setQuantity} />
        <div className="ButtonsContainer">
          <button className="primaryBtn" onClick={addItem} >Add to Cart</button>
          <Link to="/products" className="secondaryBtn">Continue Shopping</Link>
        </div>

      </div>

    </div>
  )
}

export default SingleProductDetails