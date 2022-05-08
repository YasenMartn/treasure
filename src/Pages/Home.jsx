import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import Circle from '../Components/Circle';
import Loading from '../Components/Loading';
import axios from 'axios';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";
import { AddShoppingCartOutlined, RemoveRedEyeOutlined } from '@mui/icons-material';
import { addProduct } from '../redux/cartSlice';
import {useDispatch} from "react-redux"

SwiperCore.use([Autoplay, Pagination, Navigation])

const Home = () => {

  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products")
        setProducts(response.data);
        setLoading(false);
      } catch (err) { }
    }
    getProducts();
  })

  const dispatch = useDispatch();

  return (
    <div className='home'>
      <h1 className="homeTitle">New season arrivals</h1>
      <h2 className="homeMiniTitle">check out all the trends</h2>
      <Link to="/products" className='primaryBtn'>Shop Now</Link>
      <Circle bgColor="lightblue" left="-250px" top="-250px" />
      <Circle bgColor="lightblue" right="-250px" bottom="-300px" />

      <div className="productsContainer">
        <Swiper
          spaceBetween={50}
          slidesPerView={4}
          loop={true}
          pagination={true}
          navigation={true}
          breakpoints={{
            "0": {
              "slidesPerView": 1,
              "spaceBetween": 60
            },
            "700": {
              "slidesPerView": 2,
              "spaceBetween": 60
            },
            "1000": {
              "slidesPerView": 3,
              "spaceBetween": 60
            },
            "1400": {
              "slidesPerView": 4,
              "spaceBetween": 60
            }
          }}
          autoplay={{
            "delay": 2000,
            "disableOnInteraction": false,
            "pauseOnMouseEnter": true
          }}
        >
          {loading
            ?
            [...Array(20)].map((x, i) => 
              <SwiperSlide key={i}>
                <Loading key={i} type="homeProducts" />  
              </SwiperSlide>
            ) 
            :
            products.map(product =>
              <SwiperSlide key={product.id}>
                <div className="imageContainer">
                  <img className='productImage' src={product.image} alt="image" />
                  <div className="contentContainer">

                    <div className="homeIconContainer" 
                      onClick={() => dispatch(addProduct({ 
                        id: product.id, title: product.title, price: product.price, quantity: 1, image: product.image 
                      }))}>
                      <AddShoppingCartOutlined />
                    </div>

                    <Link to={`/product/${product.id}`} className="homeIconContainer">
                      <RemoveRedEyeOutlined />
                    </Link>

                  </div>
                </div>
                <span className="title">{product.title}</span>
              </SwiperSlide>)
          }
        </Swiper>
      </div>
    </div>
  )
}

export default Home;