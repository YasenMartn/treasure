import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CartProduct from '../Components/CartProduct';
import { clearCart, getTotalPrice } from '../redux/cartSlice';

const Cart = () => {

  const products = useSelector(state => state.cart.products)
  const dispatch = useDispatch();
  const totalPrice = useSelector(getTotalPrice);

  return (
    <div className='cart'>
      <div className="cartLeft">
        <h1 className="myCart">My Cart</h1>
         {products.map(product =>(
          <CartProduct id={product.id} product={product} />
        ))}
      </div>
      <div className="cartRight">
        <div className="totalCartContainer">
          <span className="priceText">Sub-total: $ {(totalPrice).toFixed(2)} </span>
          <span className="priceText">Shipping: $15</span>
          <span className="priceText">Discount: $10</span>
          <span className="priceText">Total: $ { totalPrice === 0 ? 0 : (totalPrice + 15 - 10).toFixed(2) } </span>
          <div className="btnsContainer">
            <button className="primaryBtn">Checkout</button>
            <button className="secondaryBtn" onClick={() => dispatch(clearCart())} >Clear Cart</button>
          </div>
        </div>
      </div>
     
    </div>
  )
}

export default Cart
