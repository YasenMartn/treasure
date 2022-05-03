import { Clear } from '@mui/icons-material';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteProduct, increaseQuantity, decreaseQuantity } from '../redux/cartSlice';

const CartProduct = ({ product }) => {

    const { id, image, title, quantity, price } = product;

    const dispatch = useDispatch();

    const deleteItem = () => {
        dispatch(deleteProduct({ id, price, quantity }))
    }

    return (
        <div className='cartProduct'>

            <div className="cartProductLeft">
                <img className='cartProductImage' src={image} alt={title} />
            </div>

            <div className="cartProductRight">
                <h2 className="cartProductTitle">{title}</h2>
                <span className="cartProductPrice">Total Price: $ {price * quantity}</span>
                <div className='quantityButton'>
                    <button className="quantityBtn" onClick={() => dispatch(decreaseQuantity({productId: id, product}))} style={{ color: "white" }} >-</button>
                    <span className='quantityAmount' style={{ color: "white", border: "1px solid white" }}>{quantity}</span>
                    <button className="quantityBtn" onClick={() => dispatch(increaseQuantity({productId: id, product}))} style={{ color: "white" }}>+</button>
                </div>
            </div>

            <div className="iconContainer" onClick={deleteItem} >
                <Clear fontSize='large' style={{ color: "white" }} />
            </div>
        </div>
    )
}

export default CartProduct