import React from 'react'
import { Link } from 'react-router-dom';
import Circle from '../Components/Circle';

const Home = () => {
  return (
    <div className='home'> 
      <h1 className="homeTitle">New season arrivals</h1>
      <h2 className="homeMiniTitle">check out all the trends</h2>
      <Link to="/products" className='primaryBtn'>Shop Now</Link>
      <Circle bgColor="lightblue" left="-250px" top="-250px"/>
      <Circle bgColor="lightblue" right="-250px" bottom="-300px"/>
    </div>
  )
}

export default Home;