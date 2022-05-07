import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import SingleProductDetails from '../Components/SingleProductDetails';
import Loading from "../Components/Loading";

const ProductDetails = () => {

    const {id} = useParams();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const getSingleProduct = async() => {
          try{
            const response = await axios.get(`https://fakestoreapi.com/products/${id}`)
            setProduct(response.data)
            setLoading(false)
          } catch (err) {}
      }
      getSingleProduct();
    }, [id])
    
  return (
    <div className='productDetails'>
      {loading ?  <Loading type="productDetails"/> : <SingleProductDetails product={product}/> }
    </div>
  )
}

export default ProductDetails;