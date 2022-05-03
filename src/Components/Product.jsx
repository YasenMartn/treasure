import React from 'react'
import { Link } from 'react-router-dom'

const Product = ({ product }) => {

  const { id, title, price, image } = product

  return (
    <div className='product'>
      <div className="productImageContainer">
        <img className='productImage' src={image} alt={title} />
      </div>
      <span className="productTitle">{title.substring(0, 20)}...</span>
      <span className="productPrice">$ {price}</span>
      <Link to={`/product/${id}`} className="primaryBtn">Buy Now</Link>
    </div>
  )
}

export default Product