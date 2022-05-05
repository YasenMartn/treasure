import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Loading from '../Components/Loading';
import Product from '../Components/Product';
import {v4 as uuid} from "uuid"

const Products = () => {

    const [products, setProducts] = useState([])
    const [filteredProducts, setFilteredProducts] = useState(products)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const getProducts = async() => {
            try {
            const response = await axios.get("https://fakestoreapi.com/products")
            setProducts(response.data);
            setFilteredProducts(response.data);
            setLoading(false);
            } catch (err) {}
        }
        getProducts();
    }, [])

    const filterPorducts = (category) => {
        const updatedList = products.filter((x) => x.category === category ) 
        setFilteredProducts(updatedList);
    }

  return (
    <div className='products'>
        <h1 className='productsTitle'>Latest Products</h1>
        <div className="productsCategoryContainer">
            <button className="primaryBtn" onClick={()=> setFilteredProducts(products)} >All</button>
            <button className="primaryBtn" onClick={()=> filterPorducts("men's clothing")}>Men's Clothing</button>
            <button className="primaryBtn" onClick={()=> filterPorducts("women's clothing")}>Women's Clothing</button>
            <button className="primaryBtn" onClick={()=> filterPorducts("jewelery")}>Jewelery</button>
            <button className="primaryBtn" onClick={()=> filterPorducts("electronics")}>Electronics</button>
        </div>
        <div className="productsContainer">
            {loading ? <Loading type="products" key={uuid} /> : filteredProducts.map(product => <Product key={product.id} product={product} />)}
        </div>
    </div>
  )
}

export default Products